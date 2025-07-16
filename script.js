/*
EMAIL SETUP INSTRUCTIONS:
To enable direct email sending without user's email client:

Option 1 - Formspree (Easiest, Free tier available):
1. Go to https://formspree.io
2. Sign up for a free account
3. Create a new form
4. Replace 'YOUR_FORM_ID' in the sendEmail function with your actual form ID
5. The form will send emails directly to alondra.strada1981@gmail.com

Option 2 - EmailJS (More customizable):
1. Go to https://www.emailjs.com
2. Sign up and create a service
3. Create an email template
4. Replace the EmailJS configuration values in the sendEmail function
5. Uncomment the EmailJS code and comment out the Formspree code

Current fallback: If services fail, it opens the user's email client with a pre-filled email.
*/

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const galleryItems = document.querySelectorAll('.gallery-item');
const videoItems = document.querySelectorAll('.video-item');
const contactForm = document.querySelector('.contact-form');
const imageModal = document.getElementById('imageModal');
const videoModal = document.getElementById('videoModal');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const videoModalTitle = document.getElementById('videoModalTitle');
const videoModalDescription = document.getElementById('videoModalDescription');
const closeBtns = document.querySelectorAll('.close');

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Reset hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Gallery image modal
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (!img) return; // Skip if no image found
        
        // Set default values in case overlay is missing
        let title = "Luxury Cake";
        let description = "Handcrafted with premium ingredients";
        
        // Try to get overlay information if it exists
        const overlay = item.querySelector('.gallery-overlay');
        if (overlay) {
            const titleEl = overlay.querySelector('h3');
            const descEl = overlay.querySelector('p');
            if (titleEl) title = titleEl.textContent;
            if (descEl) description = descEl.textContent;
        }
        
        modalImage.src = img.src;
        modalImage.alt = img.alt || title;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        
        imageModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Video modal functionality
const videoData = [
    {
        title: 'Baking Basics',
        description: 'Essential techniques for perfect baking',
        videoSrc: 'vids/optimized/vid1.mp4',
        isLocal: true
    },
    {
        title: 'Mixing Techniques',
        description: 'Professional mixing for perfect texture',
        videoSrc: 'vids/optimized/vid2.mp4',
        isLocal: true
    },
    {
        title: 'Decorating Basics',
        description: 'Learn fundamental decorating skills',
        videoSrc: 'vids/optimized/vid3.mp4',
        isLocal: true
    },
    {
        title: 'Buttercream Mastery',
        description: 'Perfect buttercream every time',
        videoSrc: 'vids/optimized/vid4.mp4',
        isLocal: true
    },
    {
        title: 'Fondant Work',
        description: 'Smooth fondant application techniques',
        videoSrc: 'vids/optimized/vid5.mp4',
        isLocal: true
    },
    {
        title: 'Piping Techniques',
        description: 'Beautiful piping patterns and borders',
        videoSrc: 'vids/optimized/vid6.mp4',
        isLocal: true
    },
    {
        title: 'Sugar Flowers',
        description: 'Creating delicate sugar flower decorations',
        videoSrc: 'vids/optimized/vid7.mp4',
        isLocal: true
    },
    {
        title: 'Chocolate Work',
        description: 'Tempering and molding chocolate elements',
        videoSrc: 'vids/optimized/vid8.mp4',
        isLocal: true
    },
    {
        title: 'Tier Assembly',
        description: 'Professional multi-tier cake construction',
        videoSrc: 'vids/optimized/vid9.mp4',
        isLocal: true
    },
    {
        title: 'Color Mixing',
        description: 'Achieving perfect color matches in icing',
        videoSrc: 'vids/optimized/vid10.mp4',
        isLocal: true
    },
    {
        title: 'Texture Techniques',
        description: 'Creating realistic textures on cakes',
        videoSrc: 'vids/optimized/vid11.mp4',
        isLocal: true
    },
    {
        title: 'Wedding Cake Prep',
        description: 'Planning and preparing for wedding orders',
        videoSrc: 'vids/optimized/vid12.mp4',
        isLocal: true
    },
    {
        title: 'Birthday Themes',
        description: 'Creative birthday cake design ideas',
        videoSrc: 'vids/optimized/vid13.mp4',
        isLocal: true
    },
    {
        title: 'Pastry Basics',
        description: 'French pastry fundamentals',
        videoSrc: 'vids/optimized/vid14.mp4',
        isLocal: true
    },
    {
        title: 'Cream Fillings',
        description: 'Perfect creams and fillings for layers',
        videoSrc: 'vids/optimized/vid15.mp4',
        isLocal: true
    },
    {
        title: 'Ganache Glazing',
        description: 'Smooth and glossy ganache techniques',
        videoSrc: 'vids/optimized/vid16.mp4',
        isLocal: true
    },
    {
        title: 'Edible Glitter',
        description: 'Adding sparkle and glamour to cakes',
        videoSrc: 'vids/optimized/vid17.mp4',
        isLocal: true
    }
];

videoItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Get index from data-attribute or default to 0
        const index = parseInt(item.getAttribute('data-index') || '0');
        
        // If index is out of bounds, use a default value
        const video = index < videoData.length ? videoData[index] : videoData[0];
        
        // Set default values
        let title = video ? video.title : "Cake Making Video";
        let description = video ? video.description : "Professional baking techniques";
        
        // Try to get text content if elements exist
        const titleEl = item.querySelector('h3');
        const descEl = item.querySelector('p');
        if (titleEl) title = titleEl.textContent;
        if (descEl) description = descEl.textContent;
        
        videoModalTitle.textContent = title;
        videoModalDescription.textContent = description;
        
        // For local videos, replace the iframe with a video element
        const videoContainer = modalVideo.parentElement;
        const videoSrc = video ? video.videoSrc : "vids/optimized/vid1.mp4";
        
        videoContainer.innerHTML = `
            <video controls autoplay style="width: 100%; height: 100%; max-width: 800px;">
                <source src="${videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        
        videoModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Video modal function
function openVideoModal(index) {
    console.log(`Opening video modal for index ${index}`);
    
    if (!videoModal) {
        console.error('Video modal element not found');
        return;
    }
    
    try {
        // Find the video by index
        const videoItem = document.querySelector(`.video-item[data-index="${index}"]`);
        if (!videoItem) {
            console.error(`Video item with index ${index} not found`);
            return;
        }
        
        const video = videoItem.querySelector('video');
        if (!video) {
            console.error(`Video element not found in item with index ${index}`);
            return;
        }
        
        const source = video.querySelector('source');
        if (!source || !source.src) {
            console.error(`Source not found for video with index ${index}`);
            return;
        }
        
        // Get the video source
        const videoSrc = source.src;
        console.log(`Video source: ${videoSrc}`);
        
        // Set the modal video source - using direct video element
        if (modalVideo) {
            modalVideo.src = videoSrc;
            // Also set poster in case video doesn't load immediately
            modalVideo.poster = video.poster;
        }
        
        // Set modal title and description
        if (videoModalTitle) {
            videoModalTitle.textContent = `Cake Creation Video ${parseInt(index) + 1}`;
        }
        
        if (videoModalDescription) {
            videoModalDescription.textContent = 'Enjoy this beautiful cake creation video!';
        }
        
        // Show the modal
        videoModal.style.display = 'flex';
        
        // Play the video
        if (modalVideo) {
            modalVideo.load(); // Make sure video is loaded
            // Use a slight delay to ensure the modal is fully visible before playing
            setTimeout(() => {
                try {
                    modalVideo.play();
                } catch(e) {
                    console.log('Could not autoplay video:', e);
                }
            }, 300);
        }
    } catch (error) {
        console.error('Error opening video modal:', error);
    }
}

// Close modals
closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Stop video if closing video modal
        if (modal === videoModal) {
            modalVideo.src = '';
        }
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === videoModal) {
        videoModal.style.display = 'none';
        modalVideo.src = '';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        imageModal.style.display = 'none';
        videoModal.style.display = 'none';
        modalVideo.src = '';
        document.body.style.overflow = 'auto';
    }
});

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.service || !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Prepare form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Send email using EmailJS
    sendEmail(data)
        .then(() => {
            showNotification('Thank you for your message! Your order inquiry has been sent successfully.', 'success');
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});

// Email sending function using EmailJS
async function sendEmail(data) {
    // EmailJS configuration
    const serviceID = 'service_luxcakes'; // You'll need to set this up
    const templateID = 'template_luxcakes'; // You'll need to set this up
    const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // You'll need to get this from EmailJS
    
    const serviceType = data.service.charAt(0).toUpperCase() + data.service.slice(1);
    
    const templateParams = {
        to_email: 'alondra.strada1981@gmail.com',
        subject: 'Luxurious Cakes Order!!!',
        customer_name: data.name,
        customer_email: data.email,
        customer_phone: data.phone || 'Not provided',
        service_type: serviceType,
        message: data.message,
        formatted_message: `
New Order Inquiry:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Service Type: ${serviceType}

Message:
${data.message}

---
This inquiry was sent from the Luxurious Cakes website contact form.
        `.trim()
    };
    
    // For now, we'll use a simple fetch to a form submission service
    // You can replace this with EmailJS when configured
    try {
        // Using Formspree as an alternative (free tier available)
        const response = await fetch('https://formspree.io/f/xnqedpod', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'alondra.strada1981@gmail.com',
                subject: 'Luxurious Cakes Order!!!',
                name: data.name,
                customer_email: data.email,
                phone: data.phone || 'Not provided',
                service: serviceType,
                message: data.message,
                _subject: 'Luxurious Cakes Order!!!',
                _replyto: data.email
            })
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    } catch (error) {
        // Fallback to mailto if service fails
        const emailSubject = 'Luxurious Cakes Order!!!';
        const emailBody = `
New Order Inquiry:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Service Type: ${serviceType}

Message:
${data.message}

---
This inquiry was sent from the Luxurious Cakes website contact form.
        `.trim();
        
        const mailto = `mailto:alondra.strada1981@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.open(mailto);
        
        throw new Error('Using fallback mailto method');
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add notification styles to document
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(notificationStyles);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.setAttribute('data-loaded', 'true');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Smooth reveal animations for counters (if you want to add stats)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 200;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize lazy loading
    lazyLoadImages();
    
    // Remove loading class when everything is ready
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
        
        // Initialize carousels after page is fully loaded
        setTimeout(() => {
            initializeCarousels();
        }, 200);
    });
    
    // Initialize scroll animations
    const animateElements = document.querySelectorAll('.about-content, .skill-item, .contact-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
    
    console.log('Luxurious Cakes website loading...');
});

// Initialize React-style Grid Carousels
function initializeCarousels() {
    try {
        console.log('Initializing carousels...');
        
        // Initialize gallery carousel
        const galleryCarousel = new ReactGridCarousel('.gallery-container', 'gallery');
        
        // Initialize video carousel  
        const videoCarousel = new ReactGridCarousel('.video-container', 'video');
        
        console.log('3x3 Grid carousels initialized successfully!');
    } catch (error) {
        console.error('Error initializing carousels:', error);
    }
}

// Function to initialize video grid (legacy support)
function setupVideoGrid() {
    const videoGrid = document.getElementById('videoGrid');
    if (!videoGrid) return;
    
    const videoItems = videoGrid.querySelectorAll('.video-item');
    console.log(`Found ${videoItems.length} video items in grid`);
    
    // Ensure all items are properly styled
    videoItems.forEach((item) => {
        item.style.visibility = 'visible';
        item.style.opacity = '1';
    });
    
    console.log(`Video grid setup complete.`);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Handle scroll events here if needed
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Add custom cursor effect for interactive elements
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Add hover effects for interactive elements
const interactiveElements = document.querySelectorAll('button, .btn, .gallery-item, .video-item, .nav-link');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.05)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const focusStyles = document.createElement('style');
focusStyles.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary-color) !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(focusStyles);

// Gallery and Video Carousel Functionality
class ReactGridCarousel {
    constructor(containerSelector, type = 'gallery') {
        this.container = document.querySelector(containerSelector);
        this.type = type;
        
        if (!this.container) {
            console.error('Container not found for:', containerSelector);
            return;
        }
        
        this.grid = this.container.querySelector(`.${type}-grid-3x3`);
        this.prevBtn = this.container.querySelector('.prev-btn');
        this.nextBtn = this.container.querySelector('.next-btn');
        this.indicators = this.container.querySelector(`.${type}-indicators`);
        
        // Grid configuration
        this.itemsPerPage = 9; // 3x3 grid
        this.currentPage = 0;
        this.items = [];
        this.totalPages = 0;
        
        // Animation state
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        console.log(`Initializing ${this.type} carousel...`);
        
        this.loadItems();
        this.createGrid();
        
        // Set correct itemsPerPage based on current screen size before creating indicators
        this.handleResize();
        
        this.createIndicators();
        this.bindEvents();
        this.bindResize();
        
        // Show first page immediately
        this.showPage(0);
        
        console.log(`${this.type} carousel initialized with ${this.items.length} items, ${this.totalPages} pages`);
    }
    
    loadItems() {
        // Load items based on type
        if (this.type === 'gallery') {
            // For gallery, we'll use existing HTML items in createGrid()
            // Just set a placeholder here
            this.items = [];
        } else {
            this.items = this.createVideoItems();
        }
        
        // Total pages will be calculated in createGrid() after we have actual items
        this.totalPages = 0;
    }
    
    createGalleryItems() {
        const galleryData = [
            { src: 'pics/optimized/pic1.jpg', webp: 'pics/optimized/pic1.webp', title: 'Artisan Creation', desc: 'Handcrafted with precision and love' },
            { src: 'pics/optimized/pic2.jpg', webp: 'pics/optimized/pic2.webp', title: 'Custom Design', desc: 'Tailored to your special occasion' },
            { src: 'pics/optimized/pic3.jpg', webp: 'pics/optimized/pic3.webp', title: 'Elegant Artistry', desc: 'Where beauty meets delicious flavor' },
            { src: 'pics/optimized/pic4.jpg', webp: 'pics/optimized/pic4.webp', title: 'Premium Quality', desc: 'Only the finest ingredients used' },
            { src: 'pics/optimized/pic5.jpg', webp: 'pics/optimized/pic5.webp', title: 'Signature Style', desc: 'Our unique touch in every creation' },
            { src: 'pics/optimized/pic6.jpg', title: 'Wedding Masterpiece', desc: 'Making wedding dreams come true' },
            { src: 'pics/optimized/pic7.jpg', title: 'Birthday Celebration', desc: 'Creating memorable birthday moments' },
            { src: 'pics/optimized/pic8.jpg', title: 'Luxury Tiers', desc: 'Sophisticated multi-tier designs' },
            { src: 'pics/optimized/pic9.jpg', title: 'Artistic Design', desc: 'Where cake becomes art' },
            { src: 'pics/optimized/pic10.jpg', title: 'Gourmet Creation', desc: 'Exquisite flavors and textures' },
            { src: 'pics/optimized/pic11.jpg', title: 'Themed Celebration', desc: 'Custom designs for every theme' },
            { src: 'pics/optimized/pic12.jpg', title: 'Elegant Wedding', desc: 'Classic designs with modern touches' },
            { src: 'pics/optimized/pic13.jpg', title: 'Anniversary Special', desc: 'Celebrating years of love' },
            { src: 'pics/optimized/pic14.jpg', title: 'Custom Artistry', desc: 'Bringing your vision to life' }
        ];
        
        return galleryData.map((item, index) => {
            const article = document.createElement('article');
            article.className = 'gallery-item hidden';
            article.setAttribute('data-index', index);
            
            const pictureHtml = item.webp ? `
                <picture>
                    <source srcset="${item.webp}" type="image/webp">
                    <img src="${item.src}" alt="${item.title}" loading="lazy">
                </picture>
            ` : `
                <img src="${item.src}" alt="${item.title}" loading="lazy">
            `;
            
            article.innerHTML = `
                ${pictureHtml}
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            `;
            
            // Add click event for modal
            article.addEventListener('click', () => this.openImageModal(item, index));
            
            return article;
        });
    }
    
    createVideoItems() {
        const videoData = [
            { src: 'vids/optimized/vid1.mp4', poster: 'pics/optimized/pic1.webp', title: 'Cake Decorating Basics', desc: 'Learn fundamental decorating techniques' },
            { src: 'vids/optimized/vid2.mp4', poster: 'pics/optimized/pic2.webp', title: 'Fondant Artistry', desc: 'Creating smooth fondant finishes' },
            { src: 'vids/optimized/vid3.mp4', poster: 'pics/optimized/pic3.webp', title: 'Buttercream Flowers', desc: 'Piping beautiful buttercream roses' },
            { src: 'vids/optimized/vid4.mp4', poster: 'pics/optimized/pic4.webp', title: 'Sugar Work Magic', desc: 'Advanced sugar art techniques' },
            { src: 'vids/optimized/vid5.mp4', poster: 'pics/optimized/pic5.webp', title: 'Wedding Cake Assembly', desc: 'Professional wedding cake construction' },
            { src: 'vids/optimized/vid6.mp4', poster: 'pics/optimized/pic1.webp', title: 'Chocolate Drip Cakes', desc: 'Perfect chocolate drip technique' },
            { src: 'vids/optimized/vid7.mp4', poster: 'pics/optimized/pic2.webp', title: 'Naked Cake Styling', desc: 'Rustic and elegant naked cakes' },
            { src: 'vids/optimized/vid8.mp4', poster: 'pics/optimized/pic3.webp', title: 'Chocolate Work', desc: 'Tempering and molding chocolate elements' },
            { src: 'vids/optimized/vid9.mp4', poster: 'pics/optimized/pic4.webp', title: 'Tier Assembly', desc: 'Professional multi-tier cake construction' },
            { src: 'vids/optimized/vid10.mp4', poster: 'pics/optimized/pic5.webp', title: 'Color Mixing', desc: 'Achieving perfect color matches in icing' },
            { src: 'vids/optimized/vid11.mp4', poster: 'pics/optimized/pic1.webp', title: 'Texture Techniques', desc: 'Creating realistic textures on cakes' },
            { src: 'vids/optimized/vid12.mp4', poster: 'pics/optimized/pic2.webp', title: 'Wedding Cake Prep', desc: 'Planning and preparing for wedding orders' },
            { src: 'vids/optimized/vid13.mp4', poster: 'pics/optimized/pic3.webp', title: 'Birthday Themes', desc: 'Creative birthday cake design ideas' },
            { src: 'vids/optimized/vid14.mp4', poster: 'pics/optimized/pic4.webp', title: 'Pastry Basics', desc: 'French pastry fundamentals' },
            { src: 'vids/optimized/vid15.mp4', poster: 'pics/optimized/pic5.webp', title: 'Cream Fillings', desc: 'Perfect creams and fillings for layers' },
            { src: 'vids/optimized/vid16.mp4', poster: 'pics/optimized/pic1.webp', title: 'Ganache Glazing', desc: 'Smooth and glossy ganache techniques' },
            { src: 'vids/optimized/vid17.mp4', poster: 'pics/optimized/pic2.webp', title: 'Decoration Ideas', desc: 'Creative decoration inspiration' },
            { src: 'vids/optimized/vid1.mp4', poster: 'pics/optimized/pic3.webp', title: 'Advanced Techniques', desc: 'Professional level cake artistry' }
        ];
        
        return videoData.slice(0, 18).map((item, index) => {
            const article = document.createElement('article');
            article.className = 'video-item hidden';
            article.setAttribute('data-index', index);
            
            article.innerHTML = `
                <video muted preload="metadata" poster="${item.poster}">
                    <source src="${item.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            
            // Add click event for modal
            article.addEventListener('click', () => this.openVideoModal(item, index));
            
            return article;
        });
    }
    
    createGrid() {
        // Work with existing HTML items instead of creating new ones
        if (this.type === 'gallery') {
            const existingItems = this.grid.querySelectorAll('.gallery-item:not(.placeholder-item)');
            this.items = Array.from(existingItems);
            console.log(`Gallery: Found ${existingItems.length} gallery items`);
            
            // Gallery items already have click handlers from the existing code
        } else {
            // For videos, also use existing HTML items
            const existingItems = this.grid.querySelectorAll('.video-item');
            this.items = Array.from(existingItems);
            console.log(`Video: Found ${existingItems.length} video items`);
            
            // Add click events to existing video items using the existing openVideoModal function
            this.items.forEach((item, index) => {
                item.addEventListener('click', () => {
                    openVideoModal(index); // Use the existing global function
                });
            });
        }
        
        // Update total pages based on actual items
        this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
        console.log(`${this.type}: Found ${this.items.length} items, ${this.totalPages} pages`);
    }
    
    createIndicators() {
        if (!this.indicators) return;
        
        this.indicators.innerHTML = '';
        for (let i = 0; i < this.totalPages; i++) {
            const indicator = document.createElement('span');
            indicator.className = 'indicator';
            indicator.dataset.slide = i;
            if (i === 0) indicator.classList.add('active');
            this.indicators.appendChild(indicator);
        }
    }
    
    bindEvents() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.previousPage());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextPage());
        }
        
        if (this.indicators) {
            this.indicators.addEventListener('click', (e) => {
                if (e.target.classList.contains('indicator')) {
                    const page = parseInt(e.target.dataset.slide);
                    this.showPage(page);
                }
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.container.matches(':hover')) {
                if (e.key === 'ArrowLeft') this.previousPage();
                if (e.key === 'ArrowRight') this.nextPage();
            }
        });
        
        // Touch/swipe support
        this.bindTouchEvents();
    }
    
    bindTouchEvents() {
        let startX = 0;
        let endX = 0;
        
        this.grid.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.grid.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    this.nextPage();
                } else {
                    this.previousPage();
                }
            }
        });
    }
    
    bindResize() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 100);
        });
    }
    
    handleResize() {
        // Responsive grid adjustments to match CSS breakpoints
        const width = window.innerWidth;
        let newItemsPerPage;
        
        if (width <= 320) {
            newItemsPerPage = 4; // 2x2 grid for very small screens
        } else if (width <= 480) {
            newItemsPerPage = 4; // 2x2 grid for mobile
        } else if (width <= 768) {
            newItemsPerPage = 4; // 2x2 grid for tablets
        } else if (width <= 900) {
            newItemsPerPage = 4; // 2x2 grid for medium tablets
        } else {
            newItemsPerPage = 9; // 3x3 grid for desktop
        }
        
        if (newItemsPerPage !== this.itemsPerPage) {
            this.itemsPerPage = newItemsPerPage;
            this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
            this.currentPage = Math.min(this.currentPage, this.totalPages - 1);
            this.createIndicators();
            this.showPage(this.currentPage);
        }
    }
    
    showPage(page) {
        if (page < 0 || page >= this.totalPages || this.isAnimating) {
            console.log(`${this.type}: Cannot show page ${page} (total: ${this.totalPages})`);
            return;
        }
        
        console.log(`${this.type}: Showing page ${page} of ${this.totalPages}, itemsPerPage: ${this.itemsPerPage}`);
        
        this.isAnimating = true;
        this.currentPage = page;
        
        // Hide all items
        this.items.forEach((item, index) => {
            item.classList.add('hidden');
            console.log(`${this.type}: Hiding item ${index}`);
        });
        
        // Show items for current page
        const startIndex = page * this.itemsPerPage;
        const endIndex = Math.min(startIndex + this.itemsPerPage, this.items.length);
        
        console.log(`${this.type}: Showing items ${startIndex} to ${endIndex - 1}`);
        for (let i = startIndex; i < endIndex; i++) {
            if (this.items[i]) {
                this.items[i].classList.remove('hidden');
                console.log(`${this.type}: Showing item ${i}`);
            }
        }
        
        this.updateIndicators();
        this.updateNavigation();
        
        // Reset animation state
        setTimeout(() => {
            this.isAnimating = false;
        }, 300);
    }
    
    updateIndicators() {
        if (!this.indicators) return;
        
        const indicators = this.indicators.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentPage);
        });
    }
    
    updateNavigation() {
        if (this.prevBtn) {
            this.prevBtn.style.opacity = this.currentPage === 0 ? '0.3' : '1';
            this.prevBtn.disabled = this.currentPage === 0;
        }
        
        if (this.nextBtn) {
            this.nextBtn.style.opacity = this.currentPage === this.totalPages - 1 ? '0.3' : '1';
            this.nextBtn.disabled = this.currentPage === this.totalPages - 1;
        }
    }
    
    nextPage() {
        console.log(`${this.type}: Next page requested. Current: ${this.currentPage}, Total: ${this.totalPages}`);
        if (this.currentPage < this.totalPages - 1 && !this.isAnimating) {
            console.log(`${this.type}: Going to page ${this.currentPage + 1}`);
            this.showPage(this.currentPage + 1);
        } else {
            console.log(`${this.type}: Cannot go to next page - at end or animating`);
        }
    }
    
    previousPage() {
        console.log(`${this.type}: Previous page requested. Current: ${this.currentPage}`);
        if (this.currentPage > 0 && !this.isAnimating) {
            console.log(`${this.type}: Going to page ${this.currentPage - 1}`);
            this.showPage(this.currentPage - 1);
        } else {
            console.log(`${this.type}: Cannot go to previous page - at start or animating`);
        }
    }
    
    openImageModal(item, index) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        
        if (modal && modalImage) {
            modalImage.src = item.src;
            modalImage.alt = item.title;
            modalTitle.textContent = item.title;
            modalDescription.textContent = item.desc;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
    
    openVideoModal(item, index) {
        const modal = document.getElementById('videoModal');
        const modalVideo = document.getElementById('modalVideo');
        const modalTitle = document.getElementById('videoModalTitle');
        const modalDescription = document.getElementById('videoModalDescription');
        
        if (modal && modalVideo) {
            modalVideo.src = item.src;
            modalTitle.textContent = item.title;
            modalDescription.textContent = item.desc;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Auto-play video with delay
            setTimeout(() => {
                try {
                    modalVideo.play();
                } catch(e) {
                    console.log('Could not autoplay video:', e);
                }
            }, 300);
        }
    }
}
