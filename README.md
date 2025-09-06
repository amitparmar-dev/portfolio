# 🎨 Elegant Folio Factory

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful hero section with portrait image, smooth scrolling navigation, and a complete mobile-responsive design.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC) ![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF)

## ✨ Features

- **🎯 Modern Hero Section**: Two-column layout with animated text and portrait image with custom shadow effects
- **📱 Fully Responsive**: Mobile-first design with hamburger menu and theme toggle
- **🌙 Dark/Light Mode**: Seamless theme switching with persistent preferences
- **🎨 Beautiful UI**: Built with shadcn/ui components and Tailwind CSS
- **⚡ Fast Performance**: Optimized with Vite and modern React patterns
- **🎭 Smooth Animations**: CSS transitions and hover effects throughout
- **📧 Contact Form**: Functional contact section with form validation
- **🎯 Smooth Scrolling**: Navigation with active section highlighting

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun

### Installation

1. **Clone the repository:**
```bash
git clone <YOUR_GIT_URL>
cd elegant-folio-factory
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
bun install
```

3. **Start the development server:**
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. **Open your browser:**
Navigate to `http://localhost:5173` to see your portfolio!

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
elegant-folio-factory/
├── public/                 # Static assets
│   ├── favicon.ico        # Site favicon
│   └── robots.txt         # SEO robots file
├── src/
│   ├── assets/            # Images and media
│   │   ├── hero.png       # Hero section portrait
│   │   └── icon.png       # Navigation logo
│   ├── components/        # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PortfolioNavigation.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── components.json        # shadcn/ui configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/HeroSection.tsx`):
   - Change "Hey There, I'm" greeting
   - Update "Amit Parmar" to your name
   - Modify the description text
   - Replace `hero.png` with your portrait

2. **Navigation Logo** (`src/components/PortfolioNavigation.tsx`):
   - Replace `icon.png` with your logo

3. **About Section** (`src/components/AboutSection.tsx`):
   - Update your bio and personal information

4. **Projects Section** (`src/components/ProjectsSection.tsx`):
   - Add your projects with descriptions and links

5. **Skills Section** (`src/components/SkillsSection.tsx`):
   - Update your skills and technologies

6. **Contact Section** (`src/components/ContactSection.tsx`):
   - Update contact information and social links

### Styling

- **Colors**: Modify `tailwind.config.ts` for custom color schemes
- **Fonts**: Update font families in `src/index.css`
- **Animations**: Customize animations in component files

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run build && npm run deploy`

### Manual Deployment

```bash
npm run build
```

The built files will be in the `dist` directory. Upload these files to your web server.

## 🛠️ Technologies Used

### Core Technologies
- **React 18.3.1** - UI library with hooks
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - Beautiful, accessible components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icons
- **next-themes** - Theme management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📱 Mobile Features

- **Responsive Navigation**: Hamburger menu with smooth animations
- **Touch-Friendly**: Optimized for mobile interactions
- **Theme Toggle**: Accessible theme switching on all devices
- **Smooth Scrolling**: Native-like scrolling experience
- **Optimized Images**: Responsive images with proper sizing

## 🎯 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: Optimized asset loading
- **CSS Purging**: Unused CSS removal in production
- **Modern JavaScript**: ES6+ features with polyfills

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vite](https://vitejs.dev/) for fast development experience

## 📞 Support

If you have any questions or need help with customization, please:

1. Check the [Issues](https://github.com/amitparmar-dev/portfolio/issues) page
2. Create a new issue with detailed information
3. Contact me directly through the portfolio contact form

---

**Made with ❤️ by [Pratham Parmar](https://github.com/parmar-pratham)**


*Star ⭐ this repository if you found it helpful!*
