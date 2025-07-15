# Luxurious Cakes - Artisan Baker Website

A beautiful, interactive website showcasing exceptional luxury baking skills through stunning photo and video galleries. This modern, responsive website is designed to attract clients and showcase the artistry behind every creation.

## ✨ Features

### 🎨 Modern Design

- **Elegant Color Palette**: Luxurious gold, sophisticated black, and vibrant pink colors
- **Beautiful Typography**: Dancing Script for elegant headings, Poppins for clean body text
- **Smooth Animations**: CSS animations and transitions throughout the site
- **Responsive Design**: Perfectly optimized for all devices (desktop, tablet, mobile)

### 📸 Interactive Galleries
- **Photo Gallery**: Filterable grid showcasing different types of baked goods
  - Wedding cakes
  - Birthday cakes
  - Pastries
  - Cupcakes
- **Video Gallery**: Embedded YouTube videos with custom modal player
- **Lightbox Modals**: Full-screen image and video viewing experience

### 🎯 Key Sections
1. **Hero Section**: Eye-catching introduction with parallax background
2. **About Section**: Alondra's story and expertise showcase
3. **Photo Gallery**: Filterable collection of beautiful cake creations
4. **Video Gallery**: Behind-the-scenes baking process videos
5. **Contact Section**: Professional contact form with validation
6. **Footer**: Complete contact information and social links

### 🚀 Technical Features
- **Mobile-First Responsive Design**
- **Smooth Scroll Navigation**
- **Interactive Hamburger Menu**
- **Form Validation & Notifications**
- **Lazy Loading for Performance**
- **Accessibility Features** (keyboard navigation, ARIA labels)
- **Cross-Browser Compatibility**

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with custom properties, flexbox, and grid
- **Vanilla JavaScript**: Interactive functionality without frameworks
- **Font Awesome**: Beautiful icons throughout the site
- **Google Fonts**: Dancing Script and Poppins typography

## 🚀 Getting Started

### Prerequisites
- Node.js (for development server)
- Modern web browser

### Installation

1. **Clone or download the project**
   ```bash
   cd "Alondra'sCakes"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The website will automatically open at `http://localhost:3000`

### Alternative: Direct File Opening
You can also simply open `index.html` directly in your web browser for immediate viewing.

## 📁 Project Structure

```
Alondra'sCakes/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # Interactive JavaScript functionality
├── package.json        # Project configuration
├── README.md          # This file
└── .github/
    └── copilot-instructions.md  # Development guidelines
```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization:
```css
:root {
    --primary-color: #ffd700;    /* Gold */
    --secondary-color: #000000;  /* Black */
    --accent-color: #ff69b4;     /* Hot Pink */
    --dark-color: #1a1a1a;       /* Deep Black */
    --light-color: #fff0f5;      /* Light Pink */
}
```

### Images
Replace the Unsplash placeholder images with actual photos:
1. Add your images to an `images/` folder
2. Update the `src` attributes in `index.html`
3. Ensure images are optimized for web (WebP format recommended)

### Content
- Update contact information in the contact section
- Replace placeholder text with actual bakery information
- Add real social media links
- Update video IDs in `script.js` for actual YouTube videos

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run start    # Start production server
npm run preview  # Preview the website
```

## 🌟 Performance Features

- **Optimized Images**: Lazy loading implementation
- **Smooth Scrolling**: Enhanced user experience
- **Debounced Events**: Optimized scroll performance
- **Minimal Dependencies**: Fast loading times
- **CSS Animations**: Hardware-accelerated transitions

## 📧 Contact Form

The contact form includes:
- Real-time validation
- Success/error notifications
- Professional styling
- Accessibility features

*Note: The form currently simulates submission. Connect to a backend service (like Formspree, Netlify Forms, or custom server) for actual email functionality.*

## 🎯 SEO & Accessibility

- Semantic HTML structure
- Alt text for all images
- Proper heading hierarchy
- Keyboard navigation support
- Focus indicators
- ARIA labels where needed

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your repository to Netlify
2. Set build command: `echo "Static site - no build needed"`
3. Set publish directory: `/`

### Other Hosting
Upload the files to any web hosting service that supports static websites.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Future Enhancements

- [ ] Online ordering system integration
- [ ] Customer testimonials section
- [ ] Blog/recipe sharing functionality
- [ ] Advanced gallery filtering (by date, occasion, etc.)
- [ ] Multi-language support
- [ ] Integration with social media APIs
- [ ] Customer review system
- [ ] Newsletter signup
- [ ] Online booking calendar

## 🙏 Acknowledgments

- **Unsplash**: High-quality placeholder images
- **Font Awesome**: Beautiful icon library
- **Google Fonts**: Typography selection
- **CSS Grid & Flexbox**: Modern layout techniques

---

**Created with ❤️ for Luxurious Cakes - Where every creation tells a sweet story**
