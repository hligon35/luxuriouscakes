
// Enhanced dual gallery with images and videos
let galleryImages = [
  'IMG_1080.webp',
  'IMG_4634.webp',
  'IMG_3626.webp',
  'IMG_2105.webp',
  'IMG_2257.webp',
  'IMG_2443.webp',
  'IMG_2508.webp',
  'IMG_2872.webp',
  'IMG_2953.webp',
  'IMG_2998.webp',
  'IMG_3631.webp',
  'IMG_3669.webp',
  'IMG_3698.webp',
  'IMG_3770.webp',
  'IMG_3785.webp',
  'IMG_3887.webp',
  'IMG_3893.webp',
  'IMG_4043.webp',
  'IMG_4055.webp',
  'IMG_4386.webp',
  'IMG_4388.webp',
  'IMG_4398.webp',
  'IMG_4412.webp',
  'IMG_4425.webp',
  'IMG_4460.webp',
  'IMG_4649.webp',
  'IMG_4677.webp',
  'IMG_4716.webp',
  'IMG_5119.webp',
  'IMG_5738.webp',
  'IMG_6222.webp'
];

let galleryVideos = [
  'vid1.mp4', 'vid2.mp4', 'vid3.mp4', 'vid4.mp4', 'vid5.mp4',
  'vid6.mp4', 'vid7.mp4', 'vid8.mp4', 'vid9.mp4', 'vid10.mp4',
  'vid11.mp4', 'vid12.mp4', 'vid13.mp4', 'vid14.mp4', 'vid15.mp4',
  'vid16.mp4', 'vid17.mp4', 'vid18.mp4', 'vid19.mp4', 'vid20.mp4',
  'vid21.mp4', 'vid22.mp4', 'vid23.mp4', 'vid24.mp4', 'vid25.mp4',
  'vid26.mp4'
];

let currentImageIndex = 0;
let currentVideoIndex = 0;
let isTransitioning = { images: false, videos: false };

// Gallery state management
const galleryState = {
  images: {
    currentIndex: 0,
    items: galleryImages,
    container: '#image-gallery',
    isTransitioning: false
  },
  videos: {
    currentIndex: 0,
    items: galleryVideos,
    container: '#video-gallery',
    isTransitioning: false
  }
};

function renderGallery(type) {
  const state = galleryState[type];
  const gallery = document.querySelector(state.container);
  const galleryScroll = gallery?.closest('.gallery-scroll');
  
  if (!gallery || !galleryScroll || state.isTransitioning) return;
  
  state.isTransitioning = true;
  const visibleWidth = galleryScroll.offsetWidth;
  
  gallery.style.transform = `translateX(-${state.currentIndex * visibleWidth}px)`;
  
  // Reset transition flag after animation completes
  setTimeout(() => {
    state.isTransitioning = false;
  }, 400);
}

function updateImageGallery() {
  const gallery = document.querySelector('#image-gallery');
  if (!gallery) return;
  
  gallery.innerHTML = galleryImages.map(img => `
    <div class="gallery-item">
      <img src="pics/${img}" alt="Luxurious Cakes Gallery - ${img.replace('.webp', '').replace('IMG_', 'Cake ')}" loading="lazy">
    </div>
  `).join('');
  
  renderGallery('images');
}

function updateVideoGallery() {
  const gallery = document.querySelector('#video-gallery');
  if (!gallery) return;
  
  gallery.innerHTML = galleryVideos.map((vid, index) => `
    <div class="gallery-item">
      <video 
        src="vids/optimized/${vid}" 
        muted 
        loop 
        preload="metadata"
        data-video-id="${index}"
        alt="Luxurious Cakes Video ${index + 1}">
        Your browser does not support the video tag.
      </video>
      <button class="play-button" onclick="toggleVideo(${index})">
        ▶
      </button>
    </div>
  `).join('');
  
  renderGallery('videos');
}

function goToPrevious(type) {
  const state = galleryState[type];
  if (state.items.length === 0 || state.isTransitioning) return;
  
  state.currentIndex = (state.currentIndex - 1 + state.items.length) % state.items.length;
  renderGallery(type);
  
  // Pause all videos when navigating
  if (type === 'videos') {
    pauseAllVideos();
  }
}

function goToNext(type) {
  const state = galleryState[type];
  if (state.items.length === 0 || state.isTransitioning) return;
  
  state.currentIndex = (state.currentIndex + 1) % state.items.length;
  renderGallery(type);
  
  // Pause all videos when navigating
  if (type === 'videos') {
    pauseAllVideos();
  }
}

function toggleVideo(videoIndex) {
  const videos = document.querySelectorAll('#video-gallery video');
  const playButtons = document.querySelectorAll('#video-gallery .play-button');
  const targetVideo = videos[videoIndex];
  const targetButton = playButtons[videoIndex];
  
  if (!targetVideo || !targetButton) return;
  
  // Pause all other videos first
  videos.forEach((video, index) => {
    if (index !== videoIndex && !video.paused) {
      video.pause();
      playButtons[index].classList.remove('playing');
      playButtons[index].textContent = '▶';
    }
  });
  
  // Toggle the clicked video
  if (targetVideo.paused) {
    targetVideo.play();
    targetButton.classList.add('playing');
    targetButton.textContent = '⏸';
  } else {
    targetVideo.pause();
    targetButton.classList.remove('playing');
    targetButton.textContent = '▶';
  }
}

function pauseAllVideos() {
  const videos = document.querySelectorAll('#video-gallery video');
  const playButtons = document.querySelectorAll('#video-gallery .play-button');
  
  videos.forEach((video, index) => {
    if (!video.paused) {
      video.pause();
      playButtons[index].classList.remove('playing');
      playButtons[index].textContent = '▶';
    }
  });
}

// Auto-play functionality for images only
let autoPlayInterval;
const AUTO_PLAY_DELAY = 6000; // 6 seconds for images

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    goToNext('images');
  }, AUTO_PLAY_DELAY);
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
}

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;
let activeGallery = null;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
  activeGallery = e.target.closest('.gallery-scroll').querySelector('.gallery').id;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}

function handleSwipe() {
  const swipeThreshold = 50;
  const swipeDistance = touchStartX - touchEndX;
  
  if (Math.abs(swipeDistance) > swipeThreshold && activeGallery) {
    const galleryType = activeGallery === 'image-gallery' ? 'images' : 'videos';
    
    if (swipeDistance > 0) {
      goToNext(galleryType); // Swipe left - next item
    } else {
      goToPrevious(galleryType); // Swipe right - previous item
    }
  }
}

// Keyboard navigation
function handleKeyPress(e) {
  switch(e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      goToPrevious('images');
      break;
    case 'ArrowRight':
      e.preventDefault();
      goToNext('images');
      break;
    case ' ': // Spacebar
      e.preventDefault();
      if (autoPlayInterval) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
      break;
  }
}

// Initialize galleries when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  updateImageGallery();
  updateVideoGallery();
  
  // Button event listeners for images
  const imageLeftBtn = document.querySelector('[data-gallery="images"].gallery-btn--left');
  const imageRightBtn = document.querySelector('[data-gallery="images"].gallery-btn--right');
  
  if (imageLeftBtn && imageRightBtn) {
    imageLeftBtn.addEventListener('click', () => goToPrevious('images'));
    imageRightBtn.addEventListener('click', () => goToNext('images'));
  }
  
  // Button event listeners for videos
  const videoLeftBtn = document.querySelector('[data-gallery="videos"].gallery-btn--left');
  const videoRightBtn = document.querySelector('[data-gallery="videos"].gallery-btn--right');
  
  if (videoLeftBtn && videoRightBtn) {
    videoLeftBtn.addEventListener('click', () => goToPrevious('videos'));
    videoRightBtn.addEventListener('click', () => goToNext('videos'));
  }
  
  // Touch events for mobile swipe
  const galleryScrolls = document.querySelectorAll('.gallery-scroll');
  galleryScrolls.forEach(scroll => {
    scroll.addEventListener('touchstart', handleTouchStart);
    scroll.addEventListener('touchend', handleTouchEnd);
    
    // Pause auto-play on hover/touch for image gallery only
    if (scroll.querySelector('#image-gallery')) {
      scroll.addEventListener('mouseenter', stopAutoPlay);
      scroll.addEventListener('mouseleave', startAutoPlay);
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', handleKeyPress);
  
  // Handle window resize
  window.addEventListener('resize', () => {
    // Debounce resize events
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
      renderGallery('images');
      renderGallery('videos');
    }, 250);
  });
  
  // Start auto-play for images
  startAutoPlay();
  
  // Video event listeners
  document.addEventListener('click', (e) => {
    if (e.target.matches('.play-button')) {
      const videoIndex = parseInt(e.target.getAttribute('onclick').match(/\d+/)[0]);
      // The onclick handler will take care of the toggle
    }
  });
  
  // Pause videos when they end
  document.addEventListener('ended', (e) => {
    if (e.target.tagName === 'VIDEO') {
      const videoIndex = parseInt(e.target.dataset.videoId);
      const playButton = document.querySelector(`#video-gallery .play-button:nth-child(${videoIndex + 1})`);
      if (playButton) {
        playButton.classList.remove('playing');
        playButton.textContent = '▶';
      }
    }
  }, true);
});
