# Deployment Guide

## Prerequisites

- GitHub account
- Vercel account (connect with GitHub)
- Node.js 20.x or higher

## Step-by-Step Setup

### 1. Initialize Git & Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/selection-showcase.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Configure Vercel Deployment

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Option B: Using Vercel Web Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Select your repository
5. Framework Preset: **Vite**
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click "Deploy"

### 3. Environment Variables (if needed)

1. In Vercel dashboard, go to Settings → Environment Variables
2. Add any environment variables your app needs
3. Add the same variables to your local `.env.local` for testing

### 4. Automatic Deployments

Your repository is now set up for automatic deployments:

- **Push to `main` branch** → Automatically deploys to production
- **Create pull request** → Preview deployment created automatically
- **Push to other branches** → Preview deployments available

## Monitoring & Troubleshooting

### Check Build Logs

1. Go to your Vercel project dashboard
2. Click on a deployment
3. View the "Build Logs" tab

### Common Issues

#### Build fails with "command not found"
- Ensure all dependencies are in `package.json`
- Check Node.js version matches `.nvmrc` (20.x)

#### Environment variables not found
- Make sure variables are added to Vercel dashboard
- Restart deployment after adding variables

#### Static files not loading
- Verify files are in the `public/` directory
- Check `vite.config.ts` configuration

### Re-deploying

```bash
# Redeploy latest commit
git push origin main

# Or use Vercel CLI
vercel --prod
```

## Environment Setup

### Local Development

```bash
# Create .env.local from template
cp .env.example .env.local

# Add your values
nano .env.local
```

### Production (Vercel)

Variables added in Vercel dashboard automatically inject at build time.

## Performance Tips

1. **Code Splitting**: Vite automatically handles this
2. **Image Optimization**: Consider using `<Image />` components
3. **Lazy Loading**: Use React.lazy() and Suspense for routes
4. **Bundle Analysis**: Use `npm run analyze` if added to scripts

## CI/CD Pipeline

GitHub Actions automatically runs on push:
- ✅ ESLint checks
- ✅ Build verification
- ✅ Unit tests

View workflow status in the "Actions" tab on GitHub.

## Rollback

To rollback to a previous deployment:

1. Go to Vercel dashboard
2. Open Deployments tab
3. Click the deployment you want to restore
4. Click "...  Promote to Production"

## Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update domain nameservers or CNAME records

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [GitHub Actions](https://docs.github.com/en/actions)
