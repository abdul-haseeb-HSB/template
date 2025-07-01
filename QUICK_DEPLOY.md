# ⚡ Quick Deploy Guide

## 🚀 Deploy in 5 Minutes (Vercel - Recommended)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tbd-portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

**Done!** Your site will be live in 2-3 minutes at `https://your-project-name.vercel.app`

---

## 🌐 Alternative: Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Build command: `npm run build`
6. Publish directory: `out`
7. Click "Deploy site"

**Done!** Your site will be live at `https://random-name.netlify.app`

---

## 📄 Alternative: GitHub Pages

### Step 1: Build locally
```bash
npm run build
```

### Step 2: Push built files
```bash
git add out/
git commit -m "Add built files"
git push
```

### Step 3: Enable GitHub Pages
1. Go to repository settings
2. Pages section
3. Source: "Deploy from a branch"
4. Branch: `main` → `/out`
5. Save

**Done!** Your site will be live at `https://YOUR_USERNAME.github.io/tbd-portfolio`

---

## 🎯 Which Platform Should You Choose?

| Platform | Best For | Setup Time | Features |
|----------|----------|------------|----------|
| **Vercel** | Next.js apps | 2 minutes | Auto-deploy, analytics, edge functions |
| **Netlify** | Static sites | 3 minutes | Forms, functions, CDN |
| **GitHub Pages** | Simple sites | 5 minutes | Free, no limits |

**Recommendation: Use Vercel** - it's perfect for Next.js and has the best developer experience!

---

## 🔄 Updating Your Site

After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push
```

Your site will automatically update in 2-3 minutes! 🎉 