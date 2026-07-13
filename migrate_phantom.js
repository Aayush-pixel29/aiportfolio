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
    
    // Replace journey classes with phantom classes
    content = content.replace(/journey-card/g, 'phantom-card');
    content = content.replace(/journey-btn-primary/g, 'phantom-btn-primary');
    content = content.replace(/journey-btn-outline/g, 'phantom-btn-outline');
    
    // Replace colors
    content = content.replace(/text-journey-text/g, 'text-white');
    content = content.replace(/text-journey-text\/60/g, 'text-white/60');
    content = content.replace(/text-journey-text\/70/g, 'text-white/70');
    content = content.replace(/bg-journey-beige/g, 'bg-[#0A0A0E]');
    content = content.replace(/border-journey-gray/g, 'border-white/10');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${f} for Phantom theme`);
  }
});
