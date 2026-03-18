# Selection Showcase

A modern React + TypeScript web application built with Vite, featuring responsive UI components from Shadcn/ui, Tailwind CSS styling, React Router navigation, and comprehensive testing.

## Features

- ⚡ **Vite** - Next generation frontend tooling
- ⚛️ **React 18** - UI library with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **Shadcn/ui** - High-quality React components
- 🛣️ **React Router** - Client-side routing
- 📝 **TypeScript** - Static type safety
- 🧪 **Vitest** - Unit testing framework
- 🎭 **Playwright** - E2E testing
- 📋 **ESLint** - Code linting

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing

```bash
# Run unit tests
npm run test

# Watch mode
npm run test:watch

# Run E2E tests
npx playwright test
```

## Code Quality

```bash
# Run ESLint
npm run lint
```

## Deployment

### Vercel

This project is configured for automatic deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration and deploy

**Deployment Configuration**: See `vercel.json`

### Environment Variables

Copy `.env.example` to `.env.local` and update with your values:

```bash
cp .env.example .env.local
```

### GitHub Actions

CI/CD pipeline is configured via `.github/workflows/ci.yml` to:
- Run ESLint on every push and PR
- Build the project
- Run tests

## Project Structure

```
src/
  ├── components/      # Reusable React components
  ├── pages/           # Page components for routing
  ├── hooks/           # Custom React hooks
  ├── lib/             # Utility functions
  ├── styles/          # Global styles
  └── test/            # Test files
```

## License

MIT
