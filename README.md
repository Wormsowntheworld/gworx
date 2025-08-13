# Gworx SG - Premier Music Engineering House Website

A modern, responsive React website for Gworx SG, Singapore's premier music engineering house specializing in guitar repair, amplifier services, sound engineering, and custom equipment solutions.

## 🚀 Live Website
- **Production**: [Your Custom Domain]
- **GitHub Pages**: Will be available after deployment

## 🎯 Features

### 🎸 Services Showcase
- **Guitar Services**: Complete repair, setup, re-fretting, wiring, and restoration
- **Amplifier Services**: Tube amp repair, custom tolex, modifications
- **Equipment Solutions**: Pedal board setups, rare procurement, custom solutions
- **Sound Engineering**: Studio services, acoustic design, event audio

### 📱 Modern Design
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Elements**: Smooth scrolling navigation, hover effects, animations
- **Professional Layout**: Clean, modern design with amber/gold branding
- **Fast Loading**: Optimized images and efficient code structure

### 🎥 Custom Products Showcase
- **YouTube Integration**: Embedded video previews with thumbnails
- **4 Featured Videos**: Custom builds and modifications
- **Click-to-Play**: Videos open in new tabs on YouTube
- **Professional Presentation**: Video cards with YouTube branding

### 📞 Contact Integration
- **Multiple Contact Methods**: Phone, email, Google Reviews
- **Clickable Links**: Direct calling and email composition
- **Google Reviews**: Direct link to customer reviews (4.5 stars)
- **Location Info**: New address at 56 Kallang Pudding Road

### 🔍 SEO Optimized
- **Local SEO**: Optimized for Singapore market
- **Structured Data**: Schema markup for better search visibility
- **Meta Tags**: Comprehensive SEO meta information
- **Social Media**: Open Graph and Twitter card integration

## 🛠 Technology Stack

- **Frontend**: React 18 with modern JavaScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion for smooth interactions
- **Build Tool**: Vite for fast development and optimized builds
- **Package Manager**: pnpm for efficient dependency management

## 📦 Installation & Development

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Setup
```bash
# Clone the repository
git clone [your-repo-url]
cd gworx-sg-website

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Development Commands
```bash
pnpm run dev      # Start development server
pnpm run build    # Build for production
pnpm run preview  # Preview production build
pnpm run lint     # Run ESLint
```

## 🚀 Deployment

### GitHub Pages (Automatic)
This repository is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - Triggers automatic deployment
2. **GitHub Actions** - Builds and deploys the site
3. **Custom Domain** - Configure in repository settings

### Manual Deployment
```bash
# Build the project
pnpm run build

# Deploy the dist/ folder to your hosting provider
```

## 🎨 Customization

### Colors & Branding
- Primary colors defined in `tailwind.config.js`
- Amber/gold theme throughout the design
- Company logo in `src/assets/logo.jpg`

### Content Updates
- **Services**: Update in `src/App.jsx` services array
- **Contact Info**: Update contact details in contact section
- **Photos**: Replace images in `src/assets/` folder
- **Videos**: Update YouTube video IDs in customProducts array

### Adding New Sections
1. Add new section component in `src/App.jsx`
2. Update navigation array with new section
3. Add smooth scrolling functionality
4. Update mobile navigation

## 📁 Project Structure

```
gworx-sg-website/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── logo.jpg
│   │   ├── Photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo4.jpg
│   │   └── search_images/
│   ├── components/
│   │   └── ui/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Business Information

### Gworx SG Details
- **Specialist**: "Goose" with 20+ years experience
- **Location**: 56 Kallang Pudding Road, Singapore
- **Phone**: +65 8160 2111
- **Email**: hello@gworx.sg | gsonique@gmail.com
- **Google Reviews**: 4.5 stars with 25+ reviews

### Services Offered
- Guitar repairs and restoration
- Amplifier services and modifications
- Custom equipment solutions
- Sound engineering and acoustic design
- Vintage equipment specialization
- Rare equipment procurement

## 📊 SEO & Marketing

### Keywords Targeted
- guitar repair singapore
- music equipment repair singapore
- amplifier repair singapore
- sound engineering singapore
- vintage guitar restoration
- custom guitar modifications

### Google AdWords Ready
- Comprehensive keyword strategy included
- Local SEO optimization for Singapore
- Structured data for better search visibility
- Social media integration ready

## 🔧 Maintenance

### Regular Updates
- **Content**: Update services, contact info, photos
- **Dependencies**: Keep packages updated for security
- **SEO**: Monitor and adjust keywords as needed
- **Performance**: Optimize images and code regularly

### Adding New Videos
1. Upload video to YouTube
2. Get video ID from URL
3. Add to `customProducts` array in `src/App.jsx`
4. Rebuild and deploy

## 📞 Support

For technical support or customization requests:
- **Website Issues**: Check GitHub Issues
- **Business Inquiries**: Contact Gworx SG directly
- **Development**: Refer to React and Vite documentation

## 📄 License

This project is proprietary to Gworx SG. All rights reserved.

---

**Built with ❤️ for Gworx SG - Singapore's Premier Music Engineering House**

