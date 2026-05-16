# EC Phở Vietnamese Noodle House

Production-ready static website for EC Phở, Greenville, NC.

## Tech Stack
- React + Vite
- TypeScript
- Tailwind CSS
- React Router (client-side routing)
- React Helmet Async (SEO)
- Framer Motion (animations)

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

## Build

```bash
# Create production build
npm run build
```

## Deployment
The project is ready for static hosting on **Netlify**, **Vercel**, or **GitHub Pages**.

### Updating Information
- **Business Info**: `/src/data/business.ts` (Address, Hours, DoorDash link)
- **Menu Items**: `/src/data/menu.ts`
- **Gallery**: `/src/data/gallery.ts`
- **Blog Posts**: `/src/data/blog.ts`
- **SEO Metadata**: `/src/data/seo.ts`
- **Images**: Place in `/public/images/`

## Pre-launch Checklist
- [ ] Verify final address in `business.ts`
- [ ] Check DoorDash link
- [ ] Add real Google Maps iframe in `Contact.tsx`
- [ ] Replace Unsplash images with real food photography
- [ ] Audit SEO titles and meta descriptions
- [ ] Verify accessibility color contrast
- [ ] Update `APP_URL` in `.env` for absolute SEO links
