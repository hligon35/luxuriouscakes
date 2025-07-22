const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const picsDir = path.join(__dirname, '../../pics');

// Serve static files
app.use(express.static(path.join(__dirname, '../')));
app.use('/pics', express.static(picsDir));

// API endpoint to get all image filenames in /pics
app.get('/api/gallery', (req, res) => {
  fs.readdir(picsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read pics directory' });
    }
    // Only return image files (webp, png, jpg, jpeg)
    const images = files.filter(f => /\.(webp|png|jpg|jpeg)$/i.test(f));
    res.json(images);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
