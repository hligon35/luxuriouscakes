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
    
    // Log video items for debugging
    const videoItems = document.querySelectorAll('.video-item');
    console.log('Found video items:', videoItems.length);
    
    // Make sure videos are loaded and displayed in a 3x4 grid
    videoItems.forEach((item, index) => {
        const video = item.querySelector('video');
        if (video) {
            // Set poster for better visibility before video loads
            const posterIndex = (index % 5) + 1;
            video.poster = `pics/optimized/pic${posterIndex}.webp`;
            console.log(`Video ${index} source: ${video.querySelector('source')?.src || 'No source'}`);
            
            // Limit to only 12 videos for a 3x4 grid (0-11 indexes)
            if (index > 11) {
                item.style.display = 'none';
                return;
            }
            
            // Make sure video is visible
            item.style.display = 'block';
            item.style.visibility = 'visible';
            item.style.opacity = '1';
            item.style.zIndex = '1';
            item.style.margin = '0';
            item.style.width = '100%';
            
            video.style.display = 'block';
            video.style.visibility = 'visible';
            video.style.opacity = '1';
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            
            // Add click event listener for better interaction
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const videoSrc = video.querySelector('source')?.src;
                if (videoSrc) {
                    openVideoModal(item.dataset.index);
                }
            });
            
            // Force load the video
            video.load();
            
            // Show poster immediately
            video.addEventListener('loadedmetadata', () => {
                console.log(`Video ${index} metadata loaded`);
            });
        } else {
            console.log(`No video element found for item ${index}`);
        }
    });
    
    // Initialize scroll animations
    const animateElements = document.querySelectorAll('.about-content, .skill-item, .gallery-item, .video-item, .contact-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
    
    // DISABLED CAROUSEL - Show all items in grid instead
    // const galleryCarousel = new Carousel('.gallery-container', 6);
    // const videoCarousel = new Carousel('.video-container', 10);
    // window.galleryCarousel = galleryCarousel;
    // window.videoCarousel = videoCarousel;
    
    // Force all items to be visible
    document.querySelectorAll('.gallery-item, .video-item').forEach(item => {
        item.classList.remove('hidden');
        item.style.display = 'block';
        item.style.visibility = 'visible';
        item.style.opacity = '1';
    });
    
    console.log('Luxurious Cakes website loaded successfully!');
    
    // Call our video grid setup function
    setupVideoGrid();
});

// Function to initialize video grid with exactly 12 items
function setupVideoGrid() {
    const videoGrid = document.getElementById('videoGrid');
    if (!videoGrid) return;
    
    const videoItems = videoGrid.querySelectorAll('.video-item');
    console.log(`Found ${videoItems.length} video items in grid`);
    
    // Hide items beyond 12
    videoItems.forEach((item, index) => {
        if (index >= 12) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
    
    // Force grid layout refresh
    videoGrid.style.display = 'grid';
    videoGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    videoGrid.style.gridTemplateRows = 'repeat(4, auto)';
    videoGrid.style.gap = '25px';
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
        // Determine items per page based on screen size and section
        const width = window.innerWidth;
        const isVideoSection = this.container.classList.contains('video-container') || 
                               this.container.querySelector('.video-grid');
        
        if (width <= 375) return 1;      // Extra small screens
        if (width <= 480) return 2;      // Small screens  
        if (width <= 768) {              // Tablets
            return isVideoSection ? 6 : 3;  // Video: 3×2, Gallery: 3×1
        }
        
        // Desktop - Video: 5×2=10, Gallery: 3×2=6
        return isVideoSection ? 10 : 6;
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
