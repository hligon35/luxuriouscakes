// Automatically populate the gallery grid with images from pics

const galleryGrid = document.getElementById('galleryGrid');

// List of image filenames (add/remove as needed)
const imageFiles = [
  'pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg',
  'pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.jpg', 'pic10.jpg',
  'pic11.jpg', 'pic12.jpg', 'pic13.jpg', 'pic14.jpg'
];

imageFiles.forEach((filename, idx) => {
  const article = document.createElement('article');
  article.className = 'gallery-item';

  const img = document.createElement('img');
  img.src = `pics/${filename}`;
  img.alt = `Gallery Cake ${idx + 1}`;
  img.loading = 'lazy';

  article.appendChild(img);
  galleryGrid.appendChild(article);
});

// If you want to support .webp, you can add a <picture> element instead
// and use sources for webp/jpg fallback.
