# Mai's Technical Portfolio

A modern, developer-focused portfolio built with SvelteKit, showcasing expertise in computer vision, data engineering, and machine learning.

![Portfolio Logo](static/logos/logo_mai.svg)

## 🚀 Quick Start

This portfolio uses **pnpm** as the package manager for faster installations and efficient dependency management.

```bash
# Clone the repository
git clone https://github.com/BryanEstrada003/Portfolio-Mai.git portfolio-mai
cd portfolio-mai

# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Build for production
pnpm build

# Preview the production build
pnpm preview

# Run localhost
pnpm run dev
```

## 🛠️ Tech Stack

This portfolio showcases a robust technical stack:

### Core Technologies
- **Svelte 5** & **SvelteKit** - Reactive components and full-stack framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **pnpm** - Fast, disk-space efficient package manager

### Libraries & Tools
- `shadcn-svelte` - Reusable UI components
- `unocss` - Icon system and font utilities
  - Using `carbon` icons (e.g., `i-carbon-*`) - browse at [icones.js.org](https://icones.js.org/collection/carbon)
- `mode-watcher` - Color mode switching
- `prismjs` - Syntax highlighting with `marked`, `marked-mangle`, `marked-gfm-heading-id` and `dompurify`

## 📁 Project Structure

```
portfolio-mai/
├── src/
│   ├── lib/
│   │   ├── data/          # Portfolio content and configurations
│   │   │   ├── skills.ts  # Technical skills definitions
│   │   │   ├── experience.ts  # Work experience data
│   │   │   └── projects.ts    # Project showcases
│   │   ├── components/    # Reusable components
│   │   └── utils/         # Utility functions
│   ├── routes/           # Application routes (file-based)
│   └── app.html          # HTML template
├── static/
│   ├── logos/            # Technology logos and branding
│   │   └── logo_mai.svg  # Portfolio logo
│   └── favicon.png       # Browser tab icon
├── svelte.config.js      # SvelteKit configuration
└── package.json          # Dependencies and scripts
```

## 🚨 Requirements

- **Node.js**: Version 18 or higher (Svelte 5 doesn't support Node 14)
- **pnpm**: Version 8 or higher recommended
- **Git**: For version control and deployment

## 📝 License

This portfolio is built on the Slick Portfolio template. Feel free to customize using the original template it to match your personal brand and technical background.

---

*Portfolio showcasing expertise at the intersection of computer vision, data engineering, and machine learning research.*