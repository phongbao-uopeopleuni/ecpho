# EC Pho Noodle House - Security Architecture & Vulnerability Mitigation Plan
**Role:** Senior Full Stack Architect
**Status:** Active Mitigations Deployed

This document details the security audit performed on the EC Pho Noodle House React/Vite codebase, list identified security risks, and provides concrete client-side and structural mitigation plans.

---

## 1. Identified Security Risks & Vulnerabilities

### A. Client-Side Input Manipulation (DOM-XSS)
- **Problem:** Dynamic user submission systems (like writing reviews, creating custom dining notes, other checkout/reservation comments) do not save to a backend database yet, but render instantly into the React tree. Although React escapes variables inside JSX expressions, bypassing this via unsafe URL redirection, dynamic styling, or string manipulation could trigger DOM XSS.
- **Vulnerability:** Unfiltered strings could containing HTML attributes or scripts (e.g., `<script src="evil.js">`) that would cause rendering bugs or crash browsers if serialized.
- **Plan deployed:** Constructed `securityService.ts` containing `sanitizeInput` which recursively strips HTML tag matches and encodes standard characters.

### B. Navigation Protocol Hijacking (Link Safety)
- **Problem:** Linking or dynamically triggering `window.open` (like launching Google Maps direction coordinates, or social icons) with unfiltered links is a major injection vector if link variables are modified or spoofed.
- **Vulnerability:** If an attacker inserts `javascript:alert(document.cookie)` onto maps, coordinate selectors, or booking handlers, opening it can compromise browsing sessions.
- **Plan deployed:** All links and GPS routes pass through a custom regex `sanitizeUrl()` helper verifying they exclusively utilize safe protocols (`https://`, `http://`, `tel:`, `mailto:`, relative paths, or standard anchors).

### C. Client-Side Denial of Service (Memory Saturation / Heap Crash)
- **Problem:** Forms for customer names, dining logs, phone numbers, or allergy fields lacked limits. A malicious user pasting a multi-megabyte string into the reviews name/comment area could cause local memory exhaustion, lagging browser thread loops and crashing the website for that user.
- **Vulnerability:** Unconstrained string storage on React state blocks.
- **Plan deployed:** Explicit `maxLength` clipping implemented in `sanitizeInput()` alongside field-level character counter validations.

### D. Private Key Security (Gemini API Secret Handling)
- **Problem:** API keys used directly in client-side code are vulnerable to inspection by opening the DevTools Network/Source tabs.
- **Vulnerability:** Exposing `process.env.GEMINI_API_KEY` on public networks can lead to key hijacking and quota exhaustion.
- **Mitigation plan:**
  1. We lazily initialize the Gemini API and secure the build layer within Vite.
  2. For a production-ready setup, we recommend moving the conversational AI layer to a microservice proxy. We have documented the transition pattern in this file, decoupling the browser client completely from the LLM execution key.

---

## 2. Dynamic Input Validators & Sanitization Architecture

We created `/src/services/securityService.ts` defining zero-dependency guards:
1. `sanitizeInput(val, maxLength)`: Truncates length, strips HTML tags, and escapes markup symbols (`<`, `>`, `&`, `"`, `'`, `/`).
2. `sanitizeUrl(url, default)`: Checks protocol bounds to accept only safe prefixes.
3. `validateAndCleanPhone(phone)`: Strip all non-numeric, hyphen, parentheses, and spaces to maintain structural integrity.
4. `validateAndCleanEmail(email)`: Standard regex validator to refuse invalid form requests before processing.

These gates have been integrated into:
- Reviews Form Handler
- Restaurant Booking Center
- Shopping Bag Checkout Flow
- Navigation & Landmark trigger map links

---

## 3. Recommended Future Server-Authoritative Path (Zero-Trust API Proxies)

When transitioning EC Pho to a fully-coupled server backend, use the following Express API proxy to fully isolate key secrets:

```typescript
// server.ts (Safe Node Backend Proxy Pattern)
import express from 'express';
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(express.json());

// API Key strictly hidden on the server host environment
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

app.post('/api/recommend-pho', async (req, res) => {
  try {
    const { mood, hungerLevel, spiceTolerance, dislikes, prefersVeg } = req.body;
    
    // Server-side validation
    if (typeof mood !== 'string' || mood.length > 200) {
      return res.status(400).json({ error: "Invalid parameters" });
    }
    
    const prompt = `Generate Pho recommendation for mood: ${mood}...`;
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    
    res.json({ recommendation: response.text });
  } catch (error) {
    res.status(500).json({ error: "Intermittent connection delay" });
  }
});

app.listen(3000, () => console.log("Secure server listening on port 3000"));
```
