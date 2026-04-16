# 🚀 Push DKFS Website to GitHub - Step by Step

## Your GitHub Details:
- **Username:** kotharidhruv049
- **Repository:** kotharidhruv049.github.io
- **Live URL (after deployment):** https://kotharidhruv049.github.io

---

## 📋 Steps to Push to GitHub

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: **kotharidhruv049.github.io** (must match exactly)
3. Description: "DKFS - Financial Services Website"
4. Make it **Public**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

---

### Step 2: Push Your Code

Open terminal/command prompt in the `/app/frontend` folder and run these commands:

```bash
# Add GitHub remote
git remote add origin https://github.com/kotharidhruv049/kotharidhruv049.github.io.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**If asked for credentials:**
- Username: kotharidhruv049
- Password: Use a **Personal Access Token** (not your GitHub password)

---

### Step 3: Create GitHub Personal Access Token (if needed)

1. Go to https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Note: "DKFS Website Deployment"
4. Select scopes: **✅ repo** (all repo permissions)
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as password when pushing

---

### Step 4: Install gh-pages and Deploy

```bash
# Install gh-pages package
yarn add -D gh-pages

# Deploy to GitHub Pages
yarn deploy
```

This will:
- Build your website
- Create a `gh-pages` branch
- Push the built files to GitHub

---

### Step 5: Enable GitHub Pages (if not auto-enabled)

1. Go to https://github.com/kotharidhruv049/kotharidhruv049.github.io/settings/pages
2. Under **"Source"**, select: **gh-pages** branch
3. Folder: **/ (root)**
4. Click **Save**

---

## ✅ Your Website Will Be Live!

**URL:** https://kotharidhruv049.github.io

It may take 5-10 minutes for the first deployment.

---

## 🔄 How to Update Your Website Later

Whenever you make changes:

```bash
# Make your changes to the code
# Then deploy:
yarn deploy
```

Your changes will be live in 1-2 minutes!

---

## 🌐 Using Custom Domain (dkfs.in)

To use your custom domain:

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: **dkfs.in**
3. Click **Save**
4. In your domain registrar (where you bought dkfs.in), add these DNS records:

**A Records** (point to GitHub):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record**:
```
www  →  kotharidhruv049.github.io
```

Wait 24-48 hours for DNS to propagate.

---

## 🎉 That's It!

Your professional financial services website will be live at:
- https://kotharidhruv049.github.io (immediately)
- https://dkfs.in (after DNS setup)

**100% FREE hosting forever!** 🚀

---

## 📞 Need Help?

If you get stuck at any step:
1. Check if repository name is exactly: kotharidhruv049.github.io
2. Make sure repository is Public
3. Verify you're using Personal Access Token (not password)
4. Wait 5-10 minutes after deployment

---

**Your website is ready to go live! Follow these steps and you'll be online in minutes! 🎊**
