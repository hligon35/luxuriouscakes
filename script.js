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
        const overlay = item.querySelector('.gallery-overlay');
        const title = overlay.querySelector('h3').textContent;
        const description = overlay.querySelector('p').textContent;
        
        modalImage.src = img.src;
        modalImage.alt = img.alt;
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
    },
    {
        title: 'Modeling Paste',
        description: 'Creating figures and decorative elements',
        videoSrc: 'vids/optimized/vid18.mp4',
        isLocal: true
    },
    {
        title: 'Royal Icing',
        description: 'Traditional royal icing techniques',
        videoSrc: 'vids/optimized/vid19.mp4',
        isLocal: true
    },
    {
        title: 'Isomalt Work',
        description: 'Clear sugar decorations and effects',
        videoSrc: 'vids/optimized/vid20.mp4',
        isLocal: true
    },
    {
        title: 'Airbrush Techniques',
        description: 'Professional airbrush finishing',
        videoSrc: 'vids/optimized/vid21.mp4',
        isLocal: true
    },
    {
        title: 'Packaging & Transport',
        description: 'Safe delivery of finished cakes',
        videoSrc: 'vids/optimized/vid22.mp4',
        isLocal: true
    },
    {
        title: 'Time Management',
        description: 'Efficient workflow for large orders',
        videoSrc: 'vids/optimized/vid23.mp4',
        isLocal: true
    },
    {
        title: 'Troubleshooting',
        description: 'Fixing common baking problems',
        videoSrc: 'vids/optimized/vid24.mp4',
        isLocal: true
    },
    {
        title: 'Client Consultation',
        description: 'Working with clients to design dreams',
        videoSrc: 'vids/optimized/vid25.mp4',
        isLocal: true
    },
    {
        title: 'Advanced Techniques',
        description: 'Master-level decorating methods',
        videoSrc: 'vids/optimized/vid26.mp4',
        isLocal: true
    },
    {
        title: 'Behind the Business',
        description: 'The story behind Luxurious Cakes',
        videoSrc: 'vids/optimized/vid27.mp4',
        isLocal: true
    }
];

videoItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const video = videoData[index];
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;
        
        videoModalTitle.textContent = title;
        videoModalDescription.textContent = description;
        
        // For local videos, replace the iframe with a video element
        const videoContainer = modalVideo.parentElement;
        videoContainer.innerHTML = `
            <video controls autoplay style="width: 100%; height: 100%; max-width: 800px;">
                <source src="${video.videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        
        videoModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

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
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

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
    
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Remove loading class when everything is ready
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
    });
    
    // Initialize scroll animations
    const animateElements = document.querySelectorAll('.about-content, .skill-item, .gallery-item, .video-item, .contact-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
    
    // Initialize gallery carousel (show 6 images per page)
    const galleryCarousel = new Carousel('.gallery-container', 6);
    
    // Initialize video carousel (show 6 videos per page)  
    const videoCarousel = new Carousel('.video-container', 6);
    
    // Make carousels globally accessible for future expansion
    window.galleryCarousel = galleryCarousel;
    window.videoCarousel = videoCarousel;
    
    console.log('Luxurious Cakes website loaded successfully!');
});

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
class Carousel {
    constructor(containerSelector, itemsPerPage = 6) {
        this.container = document.querySelector(containerSelector);
        
        if (!this.container) {
            console.error('Container not found for:', containerSelector);
            return;
        }
        
        this.grid = this.container.querySelector('.gallery-grid, .video-grid');
        this.items = this.grid.querySelectorAll('.gallery-item, .video-item:not(.placeholder-item)');
        this.prevBtn = this.container.querySelector('.prev-btn');
        this.nextBtn = this.container.querySelector('.next-btn');
        this.indicators = this.container.querySelector('.gallery-indicators, .video-indicators');
        
        this.itemsPerPage = this.getItemsPerPage();
        this.currentPage = 0;
        this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
        
        this.init();
        this.bindResize();
    }
    
    getItemsPerPage() {
        // Determine items per page based on screen size
        const width = window.innerWidth;
        if (width <= 375) return 1;      // Extra small screens
        if (width <= 480) return 2;      // Small screens  
        if (width <= 768) return 3;      // Tablets
        return 6;                        // Desktop - always 6
    }
    
    bindResize() {
        window.addEventListener('resize', () => {
            const newItemsPerPage = this.getItemsPerPage();
            if (newItemsPerPage !== this.itemsPerPage) {
                this.itemsPerPage = newItemsPerPage;
                this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
                this.currentPage = 0; // Reset to first page
                this.createIndicators();
                this.showPage(0);
            }
        });
    }
    
    init() {
        this.createIndicators();
        this.bindEvents();
        this.updateNavigation();
        
        // Force initial state - hide all items first
        this.items.forEach(item => item.classList.add('hidden'));
        
        // Then show page 0
        this.showPage(0);
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
    
    showPage(page) {
        if (page < 0 || page >= this.totalPages) return;
        
        this.currentPage = page;
        
        // Hide all items first
        this.items.forEach((item, index) => {
            item.classList.add('hidden');
        });
        
        // Show items for current page
        const startIndex = page * this.itemsPerPage;
        const endIndex = Math.min(startIndex + this.itemsPerPage, this.items.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            if (this.items[i]) {
                this.items[i].classList.remove('hidden');
                this.items[i].style.animation = 'fadeInUp 0.6s ease forwards';
            }
        }
        
        this.updateIndicators();
        this.updateNavigation();
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
            this.prevBtn.style.opacity = this.currentPage === 0 ? '0.5' : '1';
            this.prevBtn.disabled = this.currentPage === 0;
        }
        
        if (this.nextBtn) {
            this.nextBtn.style.opacity = this.currentPage === this.totalPages - 1 ? '0.5' : '1';
            this.nextBtn.disabled = this.currentPage === this.totalPages - 1;
        }
    }
    
    nextPage() {
        if (this.currentPage < this.totalPages - 1) {
            this.showPage(this.currentPage + 1);
        }
    }
    
    previousPage() {
        if (this.currentPage > 0) {
            this.showPage(this.currentPage - 1);
        }
    }
    
    addItems(newItems) {
        // Method to add new items dynamically
        newItems.forEach(item => this.grid.appendChild(item));
        this.items = this.grid.querySelectorAll('.gallery-item, .video-item:not(.placeholder-item)');
        this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
        this.createIndicators();
        this.updateNavigation();
    }
}
