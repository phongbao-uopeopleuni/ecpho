# 🍜 EC Phở Vietnamese Noodle House - Website Migration Guide

This project is a high-performance, SEO-optimized static reconstruction of the **EC Phở Vietnamese Noodle House** website, migrated from Google Sites to a React + Vite + Tailwind architecture.

## 🚀 Migration Overview

- **Old Platform:** Google Sites
- **New Platform:** GitHub Pages (Recommended) / Static Hosting
- **Primary Domain:** `www.ecphonoodlehousenc.com`
- **Migration Principal:** "URL Preservation & SEO Safety"

---

## 🗺️ URL Migration Map

The following mapping ensures that existing search engine indexed URLs do not break and preserve their link equity.

| Old URL Path | New URL Path | Action | Note |
|--------------|--------------|--------|------|
| `/` | `/` | Preserved | Homepage (Canonical) |
| `/home-page` | `/home-page/` | Preserved | Google Sites compat path |
| `/menu` | `/menu/` | Preserved | Main menu index |
| `/gallery` | `/gallery/` | Preserved | Photo gallery |
| `/blogs` | `/blogs/` | Preserved | Blog archive (Legacy compat) |
| `/blog` | `/blog/` | Active | New primary blog path |
| `/pho` | `/menu/#noodle-soups-pho` | Redirect | Category Anchor |
| `/bun` | `/menu/#vermicelli-bun` | Redirect | Category Anchor |
| `/appetizers` | `/menu/#appetizers` | Redirect | Category Anchor |
| `/salads` | `/menu/#salads` | Redirect | Category Anchor |
| `/rice-plates` | `/menu/#rice-plates` | Redirect | Category Anchor |
| `/fried-rice` | `/menu/#fried-rice` | Redirect | Category Anchor |
| `/drinks` | `/menu/#drinks` | Redirect | Category Anchor |
| `/specials` | `/menu/#house-specials` | Redirect | Category Anchor |
| `/contact` | `/contact/` | Redirect | Location/Contact |

---

## 🛠️ Deployment & DNS Migration (Squarespace)

### Phase 1: Preparation (Before Changing DNS)
1. Verify the site build works on a temporary staging URL (e.g., `<username>.github.io/<repo-name>`).
2. **DO NOT** delete any Google Verification records (TXT or CNAME) in your Squarespace DNS profile. These are essential for Google Search Console and Workspace.
3. Ensure the `CNAME` file in the `public/` folder contains exactly your domain: `www.ecphonoodlehousenc.com`.

### Phase 2: DNS Update (Squarespace Domains)
To route your domain to the new hosting, replace only the following records:

1. **The WWW CNAME:**
   - Change `www` CNAME from `ghs.googlehosted.com` to `<your-github-username>.github.io`.

2. **The Apex Domain (A Records):**
   - Point your root domain (`@`) to the following GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

### Phase 3: Verification
1. In your GitHub Repository Settings > Pages:
   - Set Custom Domain to `www.ecphonoodlehousenc.com`.
   - Check "Enforce HTTPS".
2. Wait for DNS propagation (can take 1-24 hours).

---

## 📈 Search Console & SEO Preservation

### Pre-Launch Checklist
- [ ] `sitemap.xml` generated and valid in `public/`.
- [ ] `robots.txt` points to the correct sitemap location.
- [ ] Canonical URLs implemented on all pages using `business.canonicalBaseUrl`.
- [ ] JSON-LD `Restaurant` and `LocalBusiness` schema active on Home.
- [ ] Security headers defined in `public/_headers`.

### Post-Launch Checklist
- [ ] Open **Google Search Console**.
- [ ] Use the **URL Inspection Tool** on your homepage.
- [ ] Click "Request Indexing" for `/`, `/menu/`, and `/contact/`.
- [ ] Submit the new sitemap at `https://www.ecphonoodlehousenc.com/sitemap.xml`.
- [ ] Monitor the "Crawl Stats" and "Core Web Vitals" reports for 2 weeks.

---

## 🆘 Rollback Plan
If the new site fails to load or critical errors occur after DNS change:
1. Revert the `www` CNAME back to `ghs.googlehosted.com`.
2. This will instantly reconnect your original Google Sites website once DNS propagates.
3. Keep Google Verification records untouched throughout this process.

---

## 📝 Maintenance

### Updating the Menu
Edit `src/data/menu.ts`. The UI will automatically generate the corresponding anchors and categories based on your edits.

### Updating Business Info
Edit `src/data/business.ts` to update phone numbers, hours, or social media links. **Changing `canonicalBaseUrl` will affect all SEO tags across the site.**
