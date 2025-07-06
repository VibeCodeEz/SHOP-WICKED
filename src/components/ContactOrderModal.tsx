import React from 'react';
import './ContactOrderModal.css';

interface ContactOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const facebookLinks = [
  { label: 'Wicked Daze Clothing', url: 'https://www.facebook.com/wickeddazeclothing' },
  { label: 'Jethro Laureano', url: 'https://www.facebook.com/jethro.laureano.37' },
  { label: 'Manzack', url: 'https://www.facebook.com/manzack023/' },
];

const contactNumbers = [
  '+63 912 345 6789',
  '+63 926 733 6292',
];

const ContactOrderModal: React.FC<ContactOrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contact-order-modal-overlay" onClick={onClose}>
      <div className="contact-order-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="contact-order-header">
          <h2>Contact for Order</h2>
          <p>Message us on Facebook or call/text the numbers below to order!</p>
        </div>
        <div className="contact-order-links">
          <h3>Facebook</h3>
          <ul>
            {facebookLinks.map(link => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8, verticalAlign: 'middle' }}>
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-order-numbers">
          <h3>Contact Numbers</h3>
          <ul>
            {contactNumbers.map(num => (
              <li key={num}>
                <span className="contact-number">{num}</span>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText(num)} title="Copy number">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactOrderModal; 