# Gadget Shop BD - E-commerce Website

A modern, responsive e-commerce website for Gadget Shop BD, featuring chargers, TWS earbuds, and wired earphones.

## Features

- 🎨 Modern, tech-forward design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🛒 Shopping cart functionality with local storage
- 🔍 Product filtering by category
- 📧 Contact form
- ⚡ Fast and lightweight
- 🎯 SEO-friendly structure

## Product Categories

- **Chargers**: Fast chargers, wireless chargers, power banks
- **TWS Earbuds**: True wireless stereo earbuds with various features
- **Wired Earphones**: High-quality wired audio solutions

## Technologies Used

- HTML5
- CSS3 (with custom properties and animations)
- Vanilla JavaScript
- Google Fonts (Montserrat, DM Sans)

## Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

## Hosting on GitHub Pages

Follow these steps to host your website on GitHub Pages for FREE:

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up" and create your free account

### Step 2: Create a New Repository
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name your repository: `gadget-shop-bd` (or any name you prefer)
4. Make sure it's set to "Public"
5. Click "Create repository"

### Step 3: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**
1. On your repository page, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Scroll down and click "Commit changes"

**Option B: Using Git (Command Line)**
```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/gadget-shop-bd.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" (left sidebar)
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 5: Access Your Website
Your website will be live at:
```
https://YOUR-USERNAME.github.io/gadget-shop-bd/
```

For example, if your GitHub username is "john123" and repository is "gadget-shop-bd":
```
https://john123.github.io/gadget-shop-bd/
```

## Customization Guide

### Update Shop Information

**Edit Contact Details** (in `index.html`):
- Line ~160: Update location
- Line ~167: Update email
- Line ~174: Update phone number

**Change Shop Name** (in `index.html`):
- Lines with "Gadget Shop BD" text

**Modify Products** (in `script.js`):
- Edit the `products` array (starting around line 2)
- Add or remove products
- Update prices, names, descriptions

### Change Colors

Edit CSS variables in `styles.css` (lines 1-10):
```css
:root {
    --primary: #0066FF;        /* Main brand color */
    --secondary: #FF6B35;      /* Accent color */
    --dark: #0A0E27;          /* Background */
    /* ... more colors */
}
```

### Add Your Logo

Replace the emoji logo (⚡) in `index.html`:
1. Find `<span class="logo-icon">⚡</span>` (line ~16)
2. Replace with: `<img src="logo.png" alt="Logo" style="height: 30px;">`
3. Upload your `logo.png` to the repository

## Custom Domain (Optional)

To use your own domain name (e.g., gadgetshopbd.com):

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository settings → Pages
3. Enter your custom domain
4. In your domain registrar, add these DNS records:
   - Type: CNAME
   - Name: www
   - Value: YOUR-USERNAME.github.io
5. Wait 24-48 hours for DNS propagation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lightweight: ~50KB total size
- No external dependencies except fonts
- Fast loading times
- Optimized animations

## Future Enhancements

Consider adding:
- Payment gateway integration (bKash, Nagad, etc.)
- Product detail pages
- User reviews and ratings
- Search functionality
- Admin panel for product management
- Backend with database (Firebase, etc.)

## Support

For issues or questions:
- Email: info@gadgetshopbd.com
- Create an issue in this repository

## License

Free to use and modify for your business.

---

**Made for Gadget Shop BD** | Powered by GitHub Pages
