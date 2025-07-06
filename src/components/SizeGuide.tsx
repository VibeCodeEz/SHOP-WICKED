import React, { useState } from 'react';
import './SizeGuide.css';

interface SizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const sizeChartImages = [
  '/size chart/size 1.jpg',
  '/size chart/size 2.jpg',
  '/size chart/size 3.jpg',
];

const SizeGuide: React.FC<SizeGuideProps> = ({ isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sizeChartImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sizeChartImages.length) % sizeChartImages.length);
  };

  return (
    <div className="size-guide-overlay" onClick={onClose}>
      <div className="size-guide-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="size-guide-header">
          <h2>Size Guide</h2>
          <p>Find your perfect fit</p>
        </div>
        
        <div className="size-guide-image-container">
          <button className="nav-btn prev-btn" onClick={prevImage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <img 
            src={sizeChartImages[currentImageIndex]} 
            alt={`Size Chart ${currentImageIndex + 1}`}
            className="size-chart-image"
          />
          
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
          <h3>How to Measure</h3>
          <ul>
            <li><strong>Chest:</strong> Measure around the fullest part of your chest</li>
            <li><strong>Length:</strong> Measure from shoulder to desired length</li>
            <li><strong>Shoulder:</strong> Measure across the back from shoulder to shoulder</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide; 