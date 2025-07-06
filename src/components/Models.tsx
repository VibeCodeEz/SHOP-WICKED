import React from 'react';
import './Models.css';

interface ModelsProps {
  onImageClick?: (src: string, alt: string) => void;
}

const modelImages = Array.from({ length: 16 }, (_, i) => `/models/model ${i + 1}.jpg`);

const modelCaptions = [
  'Wicked Daze Model',
  'Street Icon',
  'Urban Muse',
  'Bold in Black',
  'Fearless Attitude',
  'City Lights Vibe',
  'Next Gen Style',
  'Unapologetic Energy',
  'Concrete Runway',
  'Limitless Spirit',
  'Night Shift',
  'Dream Chaser',
  'Hype Vision',
  'Urban Rebel',
  'Statement Maker',
  'Defy the Ordinary',
];

const Models: React.FC<ModelsProps> = ({ onImageClick }) => (
  <section className="models-section" id="models">
    <div className="models-container">
      <h2>Meet Our Models</h2>
      <div className="models-grid">
        {modelImages.map((img, idx) => (
          <div className="model-card" key={img}>
            <div className="model-image-container" onClick={() => onImageClick?.(img, modelCaptions[idx % modelCaptions.length])}>
              <img
                src={img}
                alt={modelCaptions[idx % modelCaptions.length]}
                loading="lazy"
                srcSet={`${img.replace('.jpg', '-480.jpg')} 480w, ${img.replace('.jpg', '-800.jpg')} 800w, ${img} 1200w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                onClick={() => onImageClick?.(img, modelCaptions[idx % modelCaptions.length])}
              />
              <div className="model-overlay">
                <span>Click to view</span>
              </div>
            </div>
            <div className="model-caption">
              <h4>{modelCaptions[idx % modelCaptions.length]}</h4>
              <p>Streetwear. Confidence. Wicked Daze.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Models; 