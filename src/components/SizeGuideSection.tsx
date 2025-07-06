import React, { useState } from 'react';
import './SizeGuideSection.css';

const SizeGuideSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sizeChartImages = [
    '/size chart/size 1.jpg',
    '/size chart/size 2.jpg',
    '/size chart/size 3.jpg',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sizeChartImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sizeChartImages.length) % sizeChartImages.length);
  };

  return (
    <section className="size-guide-section" id="size-guide">
      <div className="container">
        <div className="size-guide-header">
          <h2>Size Guide</h2>
          <p>Find your perfect fit with our comprehensive size charts</p>
        </div>
        
        <div className="size-guide-content">
          <div className="size-chart-container">
            <button className="nav-btn prev-btn" onClick={prevImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            
            <div className="size-chart-image-wrapper">
              <img 
                src={sizeChartImages[currentImageIndex]} 
                alt={`Size Chart ${currentImageIndex + 1}`}
                className="size-chart-image"
                loading="lazy"
                srcSet={`${sizeChartImages[currentImageIndex].replace('.jpg', '-480.jpg')} 480w, ${sizeChartImages[currentImageIndex].replace('.jpg', '-800.jpg')} 800w, ${sizeChartImages[currentImageIndex]} 1200w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            
            <button className="nav-btn next-btn" onClick={nextImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="size-guide-indicators">
            {sizeChartImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
          
          <div className="size-guide-info">
            <div className="info-card">
              <h3>How to Measure</h3>
              <ul>
                <li><strong>Chest:</strong> Measure around the fullest part of your chest</li>
                <li><strong>Length:</strong> Measure from shoulder to desired length</li>
                <li><strong>Shoulder:</strong> Measure across the back from shoulder to shoulder</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>Size Tips</h3>
              <ul>
                <li>For a relaxed fit, go one size up</li>
                <li>For a fitted look, choose your exact size</li>
                <li>All measurements are in inches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuideSection; 