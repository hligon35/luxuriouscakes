
// Hardcoded image list for static gallery
let galleryImages = [
  'IMG_1080.webp',
  'IMG_4634.webp',
  'IMG_3626.webp',
  // Add more image filenames from your pics folder as needed
];
let currentIndex = 0;

function renderGallery() {
  const gallery = document.querySelector('.gallery');
  const galleryScroll = document.querySelector('.gallery-scroll');
  if (!gallery || !galleryScroll) return;
  const visibleWidth = galleryScroll.offsetWidth;
  gallery.style.transform = `translateX(-${currentIndex * visibleWidth}px)`;
}

function updateGallery() {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  gallery.innerHTML = galleryImages.map(img => `
    <div class="gallery-item">
      <img src="pics/${img}" alt="Cake Gallery Image">
    </div>
  `).join('');
  renderGallery();
}

window.addEventListener('DOMContentLoaded', () => {
  updateGallery();
  const leftBtn = document.querySelector('.gallery-btn.left');
  const rightBtn = document.querySelector('.gallery-btn.right');
  if (!leftBtn || !rightBtn) return;

  leftBtn.addEventListener('click', () => {
    if (galleryImages.length === 0) return;
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    renderGallery();
  });
  rightBtn.addEventListener('click', () => {
    if (galleryImages.length === 0) return;
    currentIndex = (currentIndex + 1) % galleryImages.length;
    renderGallery();
  });
  window.addEventListener('resize', renderGallery);
});
