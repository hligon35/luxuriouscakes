// Node.js script to generate a JS array of all images in pics/optimized except AlondraFam.png
// Run this script before building/deploying your site

const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'pics', 'optimized');
const exclude = ['AlondraFam.png', 'AlondraFam.webp'];
const allowedExt = ['.webp', '.jpg', '.jpeg', '.png'];

const files = fs.readdirSync(galleryDir)
  .filter(f => allowedExt.includes(path.extname(f).toLowerCase()) && !exclude.includes(f));

const jsArray = `// Auto-generated gallery image list\nconst galleryImages = [\n${files.map(f => `  'pics/optimized/${f}'`).join(',\n')}\n];\n`;

fs.writeFileSync(path.join(__dirname, 'gallery-images.js'), jsArray);
console.log(`Generated gallery-images.js with ${files.length} images.`);
