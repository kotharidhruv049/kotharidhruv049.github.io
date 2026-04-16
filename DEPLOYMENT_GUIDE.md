# DKFS Website - GitHub Pages Deployment Guide

## ✅ Your Website is Now 100% Static!

**No backend, no database, no servers needed!**  
**Host it on GitHub Pages for FREE forever!**

---

## 🚀 How to Deploy to GitHub Pages (Step-by-Step)

### Prerequisites:
- GitHub account (free)
- Git installed on your computer

---

### Step 1: Download Your Website Code

Download the entire `/app/frontend` folder to your computer.

### Step 2: Create GitHub Repository

1. Go to https://github.com
2. Click **"New Repository"**
3. Repository name: `dkfs-website` (or any name you prefer)
4. Make it **Public**
5. Click **"Create repository"**

### Step 3: Prepare for Deployment

Open terminal/command prompt in your `frontend` folder and run:

```bash
# Install dependencies (if not already)
yarn install

# Build the static site
yarn build
```

### Step 4: Initialize Git and Push to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial DKFS website"

# Add your GitHub repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/dkfs-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Deploy to GitHub Pages

```bash
# Install gh-pages
yarn add -D gh-pages

# Add this to your package.json under "scripts":
# "predeploy": "yarn build",
# "deploy": "gh-pages -d build"

# Deploy!
yarn deploy
```

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **`gh-pages`** branch
4. Click **Save**

---

## 🎉 Your Website is Live!

Your website will be available at:
```
https://YOUR_USERNAME.github.io/dkfs-website
```

**Example:** If your GitHub username is "dhruvkothari", your site will be:
```
https://dhruvkothari.github.io/dkfs-website
```

---

## 🌐 Using Custom Domain (dkfs.in)

To use your custom domain with GitHub Pages:

1. Go to your repository **Settings** → **Pages**
2. Under "Custom domain", enter: `dkfs.in`
3. Click **Save**
4. Go to your domain registrar (where you bought dkfs.in)
5. Add these DNS records:

**A Records** (point to GitHub):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record** (for www):
```
www  →  YOUR_USERNAME.github.io
```

Wait 24-48 hours for DNS propagation.

---

## 💰 Cost Breakdown

| Service | Cost |
|---------|------|
| GitHub Pages Hosting | **FREE** |
| Domain (dkfs.in) | ₹500-800/year |
| **Total Monthly Cost** | **₹0** |

---

## 📝 How to Update Your Website

Whenever you want to make changes:

```bash
# Make your edits in the code
# Then deploy again:
yarn deploy
```

Changes will be live in 1-2 minutes!

---

## ✨ What Your Website Has

✅ Professional landing page  
✅ About section with certifications  
✅ Services showcase  
✅ Interactive SIP Calculator  
✅ Contact information (clickable email & phone)  
✅ Mobile responsive  
✅ Fast loading  
✅ No maintenance required  
✅ **100% FREE hosting**  

---

## 📞 Need Help?

If you get stuck at any step, you can:
1. Ask me for help
2. Check GitHub Pages documentation: https://pages.github.com
3. Or hire a developer to help with the initial setup (should take 15-30 minutes)

---

**Your website is ready to go live for FREE! 🎉**
