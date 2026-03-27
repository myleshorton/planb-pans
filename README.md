# Plan B for PANS & PANDAS

Alternative modalities and hope when standard protocols fail.

## Getting Started

### Local Development

1. **Install dependencies:**
   ```bash
   cd planb-pans
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
planb-pans/
├── app/
│   ├── layout.tsx       # Main layout with navigation
│   ├── page.tsx         # Homepage (podcast + case studies)
│   ├── globals.css      # Global styles
│   ├── about/
│   │   └── page.tsx     # About/Mission page
│   ├── contact/
│   │   └── page.tsx     # Contact form
│   └── case-studies/
│       └── page.tsx     # Case studies showcase
├── public/              # Static assets
├── package.json
├── tsconfig.json
└── next.config.js
```

## Features

✅ **Podcast Player Section** - Front and center homepage
✅ **Case Studies Showcase** - Real families, real protocols
✅ **Contact Form** - Inquiries, case study submissions, podcast guest requests
✅ **About/Mission Page** - Clear statement of purpose
✅ **Barbara Kruger-Inspired Design** - Bold, impactful aesthetic
✅ **Responsive Design** - Mobile-friendly

## Deployment to Vercel

1. **Push to GitHub** (if using version control)
2. **Go to Vercel.com**
3. **Import your GitHub repo**
4. **Connect your domain** (planbforpans.com)
5. **Deploy!**

### Domain Setup

After deploying to Vercel:
1. Login to Namecheap
2. Go to your domain settings
3. Change nameservers to Vercel's (Vercel will provide instructions)
4. Your site goes live on planbforpans.com

## Next Steps

- [ ] Add Riverside.fm podcast embed once first episode is recorded
- [ ] Upload case study content
- [ ] Set up email forwarding for rachel@planbforpans.com
- [ ] Add case study submission form
- [ ] Integrate Stripe for paid case study access
- [ ] Set up podcast RSS feed
- [ ] Add doctor collaboration tools
- [ ] Create roadmap/decision tree for parents

## Tech Stack

- **Next.js** - React framework
- **TypeScript** - Type safety
- **CSS-in-JS** - Inline styling for simplicity
- **Vercel** - Hosting & deployment

## Design System

**Fonts:**
- Headers: Cormorant (serif, elegant)
- Body: Inter (sans-serif, clean)

**Colors:**
- Primary: #111 (dark)
- Accent: #16a34a (green)
- Background: #fff (white)
- Secondary: #f5f5f5, #f9f9f9 (grays)

**Logo:** Barbara Kruger-inspired (black/white with minimal red)

---

**Mission:** Hope when Plan A fails. Plans B through H and beyond.
