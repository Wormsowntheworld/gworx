# GitHub Pages Deployment Guide for Gworx SG Website

## 🚀 Quick Start Deployment

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click **"New repository"** or **"+"** → **"New repository"**
3. Repository settings:
   - **Name**: `gworx-sg-website` (or your preferred name)
   - **Visibility**: Public (required for free GitHub Pages)
   - **Initialize**: ✅ Add a README file
4. Click **"Create repository"**

### Step 2: Upload Website Files
**Option A: Web Interface (Recommended)**
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop the entire contents of this zip file
3. **Important**: Make sure all files and folders are uploaded, including:
   - `.github/` folder (contains deployment workflow)
   - `src/` folder (source code)
   - `public/` folder (static assets)
   - `package.json`, `vite.config.js`, etc.
4. Commit message: "Initial Gworx SG website deployment"
5. Click **"Commit changes"**

**Option B: Git Commands**
```bash
# Extract the zip file to your local machine
# Navigate to the extracted folder
cd gworx-sg-website

# Initialize git and add remote
git init
git remote add origin https://github.com/[your-username]/[your-repo-name].git

# Add all files and commit
git add .
git commit -m "Initial Gworx SG website deployment"

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. In your repository, go to **"Settings"** tab
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"GitHub Actions"**
4. The deployment will start automatically

### Step 4: Wait for Deployment
1. Go to **"Actions"** tab in your repository
2. You'll see a workflow running called **"Deploy to GitHub Pages"**
3. Wait for it to complete (usually 2-5 minutes)
4. Once complete, your site will be available at:
   `https://[your-username].github.io/[repository-name]/`

## 🌐 Custom Domain Setup

### Step 1: Configure DNS (In Your Domain Provider)
For your custom domain (e.g., `gworx.sg`), add these DNS records:

**For Root Domain (gworx.sg):**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A  
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: [your-username].github.io
TTL: 3600
```

### Step 2: Configure GitHub Pages Domain
1. In your repository **"Settings"** → **"Pages"**
2. Under **"Custom domain"**, enter your domain: `gworx.sg`
3. Click **"Save"**
4. ✅ Check **"Enforce HTTPS"** (after DNS propagates)

### Step 3: Add CNAME File
Create a file named `CNAME` in your repository root with your domain:
```
gworx.sg
```

## 🔧 Automatic Deployment Workflow

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
1. **Triggers** on every push to main branch
2. **Installs** Node.js and pnpm
3. **Builds** the React application
4. **Deploys** to GitHub Pages
5. **Updates** your live website

## 📝 Making Updates

### Content Updates
1. **Edit files** directly on GitHub or locally
2. **Commit changes** to main branch
3. **Automatic deployment** happens within minutes
4. **Live site updates** automatically

### Common Update Locations
- **Contact Info**: `src/App.jsx` (contact section)
- **Services**: `src/App.jsx` (services array)
- **Photos**: Replace files in `src/assets/`
- **Videos**: Update `customProducts` array in `src/App.jsx`

## 🛠 Local Development (Optional)

### Prerequisites
- Node.js 18+
- pnpm (install with: `npm install -g pnpm`)

### Setup
```bash
# Clone your repository
git clone https://github.com/[your-username]/[your-repo-name].git
cd [your-repo-name]

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## 🔍 Troubleshooting

### Deployment Fails
1. **Check Actions tab** for error messages
2. **Verify all files** were uploaded correctly
3. **Ensure package.json** is in root directory
4. **Check Node.js version** in workflow file

### Custom Domain Not Working
1. **Wait 24-48 hours** for DNS propagation
2. **Check DNS settings** with your domain provider
3. **Verify CNAME file** exists in repository
4. **Clear browser cache** and try incognito mode

### Site Not Updating
1. **Check Actions tab** - deployment may have failed
2. **Hard refresh** browser (Ctrl+F5 or Cmd+Shift+R)
3. **Wait a few minutes** for CDN to update
4. **Check commit history** to ensure changes were saved

## 📊 Performance & SEO

### Automatic Optimizations
- **Image Compression**: Vite automatically optimizes images
- **Code Splitting**: JavaScript bundles are optimized
- **CSS Minification**: Styles are compressed
- **Caching**: GitHub Pages provides CDN caching

### SEO Features Included
- **Meta Tags**: Complete SEO meta information
- **Structured Data**: Schema markup for local business
- **Sitemap**: Automatically generated
- **Social Media**: Open Graph and Twitter cards

## 🎯 Next Steps After Deployment

### 1. Verify Everything Works
- [ ] Website loads at your domain
- [ ] All navigation links work
- [ ] Contact information is clickable
- [ ] YouTube videos play correctly
- [ ] Mobile responsiveness works

### 2. Set Up Analytics (Optional)
- **Google Analytics**: Add tracking code
- **Google Search Console**: Submit sitemap
- **Monitor Performance**: Track visitor engagement

### 3. Marketing Integration
- **Update Business Cards**: Include new website URL
- **Social Media**: Update profiles with website link
- **Google My Business**: Add website URL
- **Email Signatures**: Include website link

## 📞 Support

### GitHub Pages Issues
- **Documentation**: [GitHub Pages Docs](https://docs.github.com/en/pages)
- **Community**: [GitHub Community](https://github.community/)
- **Status**: [GitHub Status](https://www.githubstatus.com/)

### Domain Issues
- **DNS Help**: Contact your domain provider
- **DNS Checker**: Use [whatsmydns.net](https://whatsmydns.net)
- **Propagation**: Can take 24-48 hours

## ✅ Deployment Checklist

- [ ] GitHub repository created
- [ ] All files uploaded from zip
- [ ] GitHub Actions workflow enabled
- [ ] First deployment completed successfully
- [ ] Website accessible at GitHub Pages URL
- [ ] Custom domain DNS configured (if using)
- [ ] CNAME file added for custom domain
- [ ] HTTPS enabled
- [ ] All functionality tested
- [ ] Mobile responsiveness verified

---

**🎉 Congratulations! Your Gworx SG website is now live on GitHub Pages!**

**Estimated Setup Time**: 15-30 minutes (plus DNS propagation time for custom domains)

