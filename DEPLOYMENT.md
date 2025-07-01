# 🚀 Deployment Guide - TBD Portfolio

This guide will help you deploy your TBD portfolio website to various free hosting platforms.

## 📋 Prerequisites

1. **GitHub Account** (free)
2. **Code pushed to GitHub repository**
3. **Node.js** installed locally

## 🎯 Option 1: Vercel (Recommended)

### Why Vercel?
- ✅ **Perfect for Next.js** (created by Next.js team)
- ✅ **Zero configuration** needed
- ✅ **Automatic deployments** from GitHub
- ✅ **Free custom domains**
- ✅ **100GB bandwidth/month** free
- ✅ **100GB storage** free

### Steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tbd-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Your site will be live in 2-3 minutes!**
   - URL: `https://your-project-name.vercel.app`
   - Custom domain: Add in Vercel dashboard

---

## 🌐 Option 2: Netlify

### Why Netlify?
- ✅ **Great for static sites**
- ✅ **Easy Git integration**
- ✅ **Free custom domains**
- ✅ **100GB bandwidth/month** free
- ✅ **300 build minutes/month** free

### Steps:

1. **Push code to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `out`
   - Click "Deploy site"

3. **Your site will be live!**
   - URL: `https://random-name.netlify.app`
   - Custom domain: Add in Netlify dashboard

---

## 📄 Option 3: GitHub Pages

### Why GitHub Pages?
- ✅ **Completely free**
- ✅ **No bandwidth limits**
- ✅ **Custom domains** supported
- ✅ **Direct from your repository**

### Steps:

1. **Build your site locally**
   ```bash
   npm run build
   ```

2. **Push the built files**
   ```bash
   git add out/
   git commit -m "Add built files"
   git push
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `main` → `/out`
   - Click "Save"

4. **Your site will be live!**
   - URL: `https://YOUR_USERNAME.github.io/tbd-portfolio`

---

## 🔧 Option 4: Manual Static Hosting

### For any static hosting service:

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Upload the `out/` folder** to your hosting service

3. **Popular free options:**
   - **Firebase Hosting** (Google)
   - **Cloudflare Pages**
   - **Surge.sh**
   - **Render.com**

---

## 🌍 Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Settings → Domains
3. Add your domain
4. Update DNS records as instructed

### For Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

### For GitHub Pages:
1. Repository settings → Pages
2. Add custom domain
3. Create `CNAME` file in repository

---

## 🔄 Continuous Deployment

### Automatic deployments are enabled by default on:
- ✅ **Vercel** - Deploys on every push
- ✅ **Netlify** - Deploys on every push
- ✅ **GitHub Pages** - Deploys on every push

### To update your site:
1. Make changes locally
2. Push to GitHub
3. Site updates automatically in 2-3 minutes

---

## 📊 Performance Tips

### After deployment:
1. **Test your site** on different devices
2. **Check Core Web Vitals** in Google PageSpeed Insights
3. **Optimize images** if needed
4. **Add analytics** (Google Analytics, Vercel Analytics)

### Recommended analytics:
- **Vercel Analytics** (free with Vercel)
- **Google Analytics** (free)
- **Plausible Analytics** (paid, privacy-focused)

---

## 🛠️ Troubleshooting

### Common issues:

**Build fails:**
- Check Node.js version (use 18+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors

**Site not loading:**
- Check deployment logs
- Verify build output
- Check custom domain DNS

**Styling issues:**
- Clear browser cache
- Check CSS build process
- Verify Tailwind compilation

---

## 🎉 Success!

Your TBD portfolio is now live and professional! 

**Next steps:**
1. Share your URL with potential clients
2. Add to your LinkedIn profile
3. Include in your resume
4. Set up Google Analytics
5. Add a custom domain (optional)

**Remember:** Your site will automatically update whenever you push changes to GitHub! 🚀 