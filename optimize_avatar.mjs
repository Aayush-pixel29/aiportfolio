import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');
const filePath = path.join(imagesDir, 'avatar-3d.png');
const newPath = path.join(imagesDir, 'avatar-3d.webp');

async function optimizeImages() {
  try {
    await sharp(filePath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(newPath);
    console.log('Optimized avatar-3d.png to avatar-3d.webp');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImages();
