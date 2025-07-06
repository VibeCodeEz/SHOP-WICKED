import React from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  const handleShopNow = () => {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Stand Out. Stay Wicked.</h1>
          <p>From the streets to the spotlight—be part of The Wicked Daze.</p>
          <button className="cta-button" onClick={handleShopNow}>Shop Now</button>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <img src="/WALL IMG.jpg" alt="The Wicked Daze Clothing Wall" className="hero-wall-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 