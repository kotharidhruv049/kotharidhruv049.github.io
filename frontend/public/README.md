# DKFS Website - Static Site

This is a static website for Dhruv Kothari Financial Services.

## 🚀 Quick Start

### Local Development
```bash
cd frontend
yarn install
yarn start
```

### Build for Production
```bash
yarn build
```

This creates optimized static files in the `build/` directory.

## 📦 Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to GitHub and create a new repository named `dkfs-website`
2. Make it public

### Step 2: Update package.json
Add this line to your `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/dkfs-website"
```

### Step 3: Install GitHub Pages package
```bash
yarn add -D gh-pages
```

### Step 4: Add Deploy Scripts
Add these to your `package.json` scripts:
```json
"predeploy": "yarn build",
"deploy": "gh-pages -d build"
```

### Step 5: Deploy
```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/dkfs-website.git
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
yarn deploy
```

### Step 6: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings → Pages
3. Source should be set to `gh-pages` branch
4. Your site will be live at: `https://YOUR_USERNAME.github.io/dkfs-website`

## 🎨 Features

- ✅ Fully static (no backend required)
- ✅ Interactive SIP Calculator
- ✅ Mobile responsive
- ✅ Professional design
- ✅ Contact information with clickable email/phone
- ✅ Fast loading
- ✅ FREE hosting on GitHub Pages

## 📝 Customization

To update content, edit:
- `/src/mock.js` - Company info, services, certifications
- Components in `/src/components/` for design changes

## 🆓 Cost

**$0** - Completely free when hosted on GitHub Pages!

## 📞 Contact

Email: dkfs.invest@gmail.com  
Phone: +91 79972 93303  
Location: Hyderabad, Ameerpet
