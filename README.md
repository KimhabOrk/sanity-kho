# Kimhab Ork - Fashion Designer Portfolio

A premium, fully-featured portfolio website for fashion designer Kimhab Ork, built with Next.js 16, Sanity CMS, and Tailwind CSS.

## Features

✨ **Modern Design**
- Black sleek aesthetic with smooth animations
- Scroll-triggered collapsible navigation with blurred backdrop
- Fully responsive design (mobile, tablet, desktop)
- Smooth transitions and hover effects

📱 **Content Management**
- Sanity CMS integration for easy content management
- Projects showcase with dynamic routing
- Commercial lookbooks catalog
- Season-based organization

🎨 **Collections**
- Artistic projects gallery
- Commercial lookbooks
- Auto-generated detail pages with image galleries
- Dynamic slug-based routing

📧 **Communication**
- Contact form with Formbold integration
- Email notifications for inquiries
- Form validation and error handling

🖼️ **Image Optimization**
- ImageKit integration for image transformation
- Responsive image sizing
- Automatic image optimization

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **CMS**: Sanity.io
- **Form Handling**: Formbold
- **Image Optimization**: ImageKit
- **UI Components**: shadcn/ui
- **Database**: Sanity (serverless)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Sanity account (free at [sanity.io](https://www.sanity.io))
- ImageKit account (optional, for custom image management)
- Formbold account (optional, for form handling)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kimhab-ork-portfolio.git
   cd kimhab-ork-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Then fill in your values:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   FORMBOLD_ENDPOINT=your_formbold_endpoint
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Access the application**
   - Website: [http://localhost:3000](http://localhost:3000)
   - Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## Project Structure

```
kimhab-ork-portfolio/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Home page with hero video
│   ├── projects/
│   │   ├── page.tsx             # Projects grid
│   │   └── [slug]/page.tsx      # Project detail
│   ├── lookbook/
│   │   ├── page.tsx             # Lookbooks grid
│   │   └── [slug]/page.tsx      # Lookbook detail
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact form
│   ├── privacy/page.tsx         # Privacy policy
│   ├── terms/page.tsx           # Terms & conditions
│   ├── api/contact/route.ts     # Contact form API
│   ├── studio/                  # Sanity Studio
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
│
├── components/
│   ├── navigation/Navbar.tsx    # Main navigation (scroll-triggered)
│   ├── Footer.tsx               # Footer
│   ├── Card.tsx                 # Project/Lookbook card
│   └── Gallery.tsx              # Image gallery
│
├── lib/
│   ├── sanity.client.ts         # Sanity client setup
│   ├── queries.ts               # GROQ queries
│   └── imagekit.ts              # ImageKit helpers
│
├── sanity/
│   ├── schemaTypes/
│   │   ├── season.ts            # Season schema
│   │   ├── project.ts           # Project schema
│   │   ├── lookbook.ts          # Lookbook schema
│   │   └── imageReference.ts    # Image reference schema
│   └── studio/                  # Studio configuration
│
├── public/                      # Static assets
├── scripts/
│   └── seed-sanity.ts          # Data seeding script
├── sanity.config.ts             # Sanity configuration
├── tailwind.config.ts           # Tailwind configuration
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

## Key Features & Usage

### Navigation Component

The navbar features a **scroll-triggered collapse** with a **blurred transparent backdrop**:

- Automatically hides when scrolling down
- Reappears when scrolling up
- Smooth slide animation with 300ms duration
- Backdrop blur effect with 40% opacity
- Mobile-responsive hamburger menu

```tsx
// The Navbar component in components/navigation/Navbar.tsx
// Uses useEffect to track scroll position and toggle visibility
```

### Sanity Studio

Access the content management studio at `/studio`:

- Manage projects, lookbooks, and seasons
- Custom content structure with validation
- Real-time preview
- User-friendly interface

See [SANITY_SETUP.md](./SANITY_SETUP.md) for detailed setup and usage instructions.

### Content Routes

**Automatic Static Generation**
- Project detail pages: `/projects/[slug]`
- Lookbook detail pages: `/lookbook/[slug]`
- Generated at build time with `generateStaticParams()`
- Instant page loads with no runtime delay

**Dynamic Content**
- Projects page: `/projects`
- Lookbooks page: `/lookbook`
- Fetched from Sanity at request time

### Forms & API

**Contact Form**
- Submits to Formbold endpoint
- Email validation
- Error handling and user feedback
- API route: `/api/contact`

### Image Optimization

**ImageKit Integration**
- Responsive image sizing
- Automatic format selection
- Lazy loading support
- Quality optimization

Example ImageKit URL:
```
https://ik.imagekit.io/YOUR_KEY/image-name?tr=w-800,h-600,c-at,q-80
```

## Development

### Running Scripts

**Seed Sanity with sample data:**
```bash
SANITY_API_TOKEN=your_token pnpm exec ts-node scripts/seed-sanity.ts
```

### Building

```bash
pnpm build
pnpm start
```

### Linting

```bash
pnpm lint
```

## Deployment

### Deploy to Vercel

1. Push your repository to GitHub
2. Connect your GitHub repository to Vercel
3. Add environment variables in Vercel project settings
4. Deploy automatically on push

```bash
vercel deploy
```

### Environment Variables on Vercel

Add these in your Vercel project settings:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN` (mark as sensitive)
- `FORMBOLD_ENDPOINT`

## Content Management

### Creating Content

1. **Access Studio**: Go to `/studio`
2. **Create Seasons**: Define seasonal collections
3. **Create Projects**: Add artistic projects with galleries
4. **Create Lookbooks**: Add commercial product catalogs

See [SANITY_SETUP.md](./SANITY_SETUP.md) for detailed instructions.

### Content Structure

**Seasons**
- Group projects and lookbooks by season
- Used for filtering and organization

**Projects**
- Artistic collections and creative works
- Display with cover image and gallery
- Detail pages with full descriptions

**Lookbooks**
- Commercial product catalogs
- Multiple images per lookbook
- Product-focused layout

## Performance Optimizations

- ✅ Static site generation for content pages
- ✅ Image optimization with ImageKit
- ✅ CSS-in-JS with Tailwind for minimal bundle
- ✅ Responsive design with mobile-first approach
- ✅ Lazy loading for images
- ✅ Smooth animations with CSS transitions

## SEO

- Meta tags configured in layout
- Dynamic metadata for detail pages
- Structured data ready
- Mobile-friendly design
- Fast page loads

## Troubleshooting

### Studio not loading
- Check `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
- Verify Sanity project is active
- Clear browser cache

### Images not showing
- Verify ImageKit URLs are valid
- Check alt text is provided
- Test URLs in browser directly

### Changes not appearing
- Ensure content is published in Studio
- Clear browser cache
- Wait a moment for CDN to update

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is created for Kimhab Ork's portfolio. All rights reserved.

## Support

For help with:
- **Sanity**: [Documentation](https://www.sanity.io/docs)
- **Next.js**: [Documentation](https://nextjs.org/docs)
- **Tailwind**: [Documentation](https://tailwindcss.com/docs)
- **ImageKit**: [Documentation](https://docs.imagekit.io/)

## Additional Resources

- [Sanity Setup Guide](./SANITY_SETUP.md)
- [Environment Variables](./env.example)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

**Built with ❤️ for Kimhab Ork**
