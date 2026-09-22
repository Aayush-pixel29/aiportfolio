const fs = require('fs');
const path = require('path');

const files = [
  'src/components/Experience.tsx',
  'src/components/FeaturedWork.tsx',
  'src/components/Toolkit.tsx',
  'src/components/Achievements.tsx',
  'src/components/OtherProjects.tsx'
];

files.forEach(f => {
  const filePath = path.join(__dirname, f);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace layout classes
    content = content.replace(/neo-card-green/g, 'journey-card');
    content = content.replace(/neo-card-yellow/g, 'journey-card');
    content = content.replace(/neo-card-pink/g, 'journey-card');
    content = content.replace(/neo-card/g, 'journey-card');
    
    // Replace buttons
    content = content.replace(/neo-btn-white/g, 'journey-btn-outline');
    content = content.replace(/neo-btn/g, 'journey-btn-primary');
    
    // Replace borders and shadows
    content = content.replace(/border-\[.*?\] border-neo-black/g, 'border border-journey-gray');
    content = content.replace(/shadow-\[.*?\]/g, 'shadow-sm');
    
    // Replace colors
    content = content.replace(/bg-neo-black/g, 'bg-journey-text');
    content = content.replace(/text-neo-black/g, 'text-journey-text');
    content = content.replace(/bg-neo-beige/g, 'bg-journey-beige');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${f}`);
  }
});
