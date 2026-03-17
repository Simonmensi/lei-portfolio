# Lei Nuozhen - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Dark Mode Support**: Toggle between light and dark themes with system preference detection
- **Responsive Design**: Mobile-first design that works on all devices
- **Technical Aesthetic**: Clean, modern design with professional typography
- **Multiple Sections**:
  - Home: Hero introduction and quick stats
  - About: Education, experience, skills, and achievements
  - Projects: Showcase of completed projects with descriptions and tech stacks
  - Contact: Contact information with social media links

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages with GitHub Actions
- **Hosting**: https://leInuozhen.github.io/lei-portfolio/

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Lei-Nuozhen/lei-portfolio.git
cd lei-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000/lei-portfolio/](http://localhost:3000/lei-portfolio/) in your browser

## Building for Production

```bash
npm run build
```

This creates an optimized production build and generates static pages.

## Deployment

The site is automatically deployed to GitHub Pages when you push to the `main` branch.

The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles:
1. Building the Next.js project
2. Generating static files
3. Deploying to GitHub Pages

## Project Structure

```
lei-portfolio/
├── app/
│   ├── layout.tsx           # Root layout with Header and Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and Tailwind directives
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   └── contact/
│       └── page.tsx        # Contact page
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Footer with social links
│   │   ├── ThemeToggle.tsx # Dark mode toggle
│   │   ├── ProjectCard.tsx # Project card component
│   │   └── SocialLinks.tsx # Contact links
│   └── lib/
│       └── theme.ts        # Theme management utilities
├── public/                 # Static assets
├── .github/workflows/
│   └── deploy.yml         # GitHub Actions deployment
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Skills Used

This project utilizes several skills from the opencode-config-template:

- **nextjs-standard-setup**: Project initialization and Next.js best practices
- **git-semantic-commits**: Clean commit history with semantic versioning
- **docstring-generator**: TypeScript documentation and component docstrings

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    600: '#0066CC',    // Change primary blue
    800: '#1E40AF',
  },
  accent: {
    400: '#00B4D8',    // Change accent cyan
  },
}
```

### Content

Update content in:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About/CV information
- `app/projects/page.tsx` - Project listings
- `app/contact/page.tsx` - Contact information

## Performance Optimizations

- Static site generation for fast page loads
- Image optimization with Next.js Image component
- CSS purging to minimize bundle size
- Efficient theme switching without page reload

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Contact

- Email: simon68562776@outlook.com
- Phone: +65 80385655
- LinkedIn: [Lei Nuozhen](https://www.linkedin.com/in/诺臻-雷-4aa88039b)
- GitHub: [Lei-Nuozhen](https://github.com/Lei-Nuozhen)

---

Built with ❤️ using Next.js and Tailwind CSS
