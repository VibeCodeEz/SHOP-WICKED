import React from 'react'
import './Navbar.css'

interface NavbarProps {
  themeToggle?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ themeToggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/LOGO The Wicked Daze Clothing.jpg" alt="The Wicked Daze Clothing Logo" className="brand-logo-img" />
          <h1>The Wicked Daze Clothing</h1>
        </div>
        
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#size-guide">Size Guide</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {themeToggle && (
          <div className="navbar-theme-toggle">
            {themeToggle}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 