let galleryImages = [];
let currentIndex = 0;

function renderGallery() {
  const gallery = document.querySelector('.gallery');
  const galleryScroll = document.querySelector('.gallery-scroll');
  if (!gallery || !galleryScroll) return;
  // Get the width of the visible area (gallery-scroll)
  const visibleWidth = galleryScroll.offsetWidth;
  gallery.style.transform = `translateX(-${currentIndex * visibleWidth}px)`;
}

function updateGallery() {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  gallery.innerHTML = galleryImages.map(img => `
    <div class="gallery-item">
      <img src="/pics/${img}" alt="Cake Gallery Image">
    </div>
  `).join('');
  renderGallery();
}

fetch('/api/gallery')
  .then(res => res.json())
  .then(images => {
    galleryImages = images;
    currentIndex = 0;
    updateGallery();
  });

window.addEventListener('DOMContentLoaded', () => {
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
  // Re-render on window resize to keep images centered
  window.addEventListener('resize', renderGallery);
});
