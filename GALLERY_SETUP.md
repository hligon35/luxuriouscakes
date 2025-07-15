# Gallery Content Setup Instructions

This file explains how to add your actual photos and videos to replace the placeholder content in the Luxurious Cakes website.

## 📁 Directory Structure

### Photo Gallery (`pics/` folder)
Create subfolders for different categories and add your images:

```
pics/
├── wedding/
│   ├── elegant-wedding-cake.jpg
│   ├── rustic-wedding-cake.jpg
│   ├── floral-wedding-cake.jpg
│   └── multi-tier-wedding.jpg
├── birthday/
│   ├── rainbow-birthday-cake.jpg
│   ├── chocolate-celebration.jpg
│   ├── kids-birthday-cake.jpg
│   └── adult-birthday-cake.jpg
├── pastries/
│   ├── french-pastries.jpg
│   ├── croissants.jpg
│   ├── eclairs.jpg
│   └── cream-puffs.jpg
└── cupcakes/
    ├── gourmet-cupcakes.jpg
    ├── designer-cupcakes.jpg
    ├── holiday-cupcakes.jpg
    └── wedding-cupcakes.jpg
```

### Video Gallery (`vids/` folder)
Add your video files (MP4 format recommended):

```
vids/
├── cake-decorating-masterclass.mp4
├── french-pastry-techniques.mp4
├── wedding-cake-assembly.mp4
├── cupcake-decoration.mp4
└── behind-the-scenes.mp4
```

## 🖼️ Image Requirements

### Recommended Image Specifications:
- **Format**: JPG or PNG
- **Resolution**: Minimum 1200x800 pixels
- **Aspect Ratio**: 3:2 or 4:3 works best
- **File Size**: Under 2MB for web optimization
- **Quality**: High quality, well-lit photos

### Image Naming Convention:
- Use lowercase letters
- Use hyphens instead of spaces
- Be descriptive: `elegant-wedding-cake.jpg` not `img1.jpg`

## 🎥 Video Requirements

### Recommended Video Specifications:
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
- **Duration**: 1-5 minutes for best engagement
- **File Size**: Under 50MB per video
- **Quality**: Good lighting and stable footage

## 🔄 How to Update the Website

### Step 1: Add Your Images
1. Create the folder structure as shown above
2. Add your images to the appropriate category folders
3. Name them descriptively

### Step 2: Update HTML Image Sources
Replace the Unsplash URLs in `index.html` with your local image paths:

**Before:**
```html
<img src="https://images.unsplash.com/photo-..." alt="Elegant Wedding Cake">
```

**After:**
```html
<img src="pics/wedding/elegant-wedding-cake.jpg" alt="Elegant Wedding Cake">
```

### Step 3: Add More Gallery Items
To add more photos, copy this template and modify:

```html
<div class="gallery-item" data-category="CATEGORY">
    <img src="pics/CATEGORY/your-image.jpg" alt="Descriptive Alt Text">
    <div class="gallery-overlay">
        <h3>Display Title</h3>
        <p>Brief description of the cake/pastry</p>
    </div>
</div>
```

### Step 4: Update Video Section
For videos, you have two options:

**Option A: Local Videos**
```html
<div class="video-item">
    <div class="video-thumbnail">
        <video poster="pics/video-thumbnails/thumbnail.jpg">
            <source src="vids/your-video.mp4" type="video/mp4">
        </video>
        <div class="play-button">
            <i class="fas fa-play"></i>
        </div>
    </div>
    <h3>Video Title</h3>
    <p>Video description</p>
</div>
```

**Option B: YouTube Videos**
Upload your videos to YouTube and use the embed code:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...></iframe>
```

## ✅ Quality Tips

### Photography Tips:
- Use natural lighting when possible
- Clean backgrounds (or blur them)
- Show the cake from multiple angles
- Include detail shots of decorations
- Take photos before cutting/serving

### Video Tips:
- Use a tripod for stable footage
- Good lighting is crucial
- Keep movements slow and smooth
- Include close-up details
- Add soft background music

## 🚀 After Adding Content

Once you've added your images and videos:

1. **Test locally**: Open the website in your browser and check that all images load
2. **Optimize images**: Compress large images using tools like TinyPNG
3. **Update descriptions**: Make sure each image has accurate titles and descriptions
4. **Commit changes**: Use Git to save your updates
5. **Push to GitHub**: Update your online repository

## 📱 Mobile Optimization

Make sure your images look good on mobile devices:
- Test on different screen sizes
- Ensure text overlays are readable
- Check that images load quickly
- Verify touch interactions work smoothly

## 🔧 Troubleshooting

### Images not loading?
- Check file paths are correct
- Ensure image files are in the right folders
- Verify file names match exactly (case-sensitive)
- Check image file formats are supported

### Videos not playing?
- Ensure MP4 format with H.264 codec
- Check file size isn't too large
- Verify video file permissions
- Test in different browsers

Need help? The structure is already set up - just add your content and update the image sources!
