import React, { useState } from 'react';
import './ProductDetailsModal.css';
import ContactOrderModal from './ContactOrderModal';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  status: 'available' | 'coming-soon';
  color?: string;
}

interface ProductDetailsModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  onSizeGuideClick?: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ isOpen, product, onClose, onSizeGuideClick }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  if (!isOpen || !product) return null;

  return (
    <>
      <div className="product-modal-overlay" onClick={onClose}>
        <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="product-modal-grid">
            <div className="product-modal-image">
              <img src={product.image} alt={product.name} />
            </div>
            
            <div className="product-modal-info">
              <h2>{product.name}</h2>
              <p className="product-modal-price">₱{product.price}</p>
              <p className="product-modal-description">{product.description}</p>
              
              {product.status === 'coming-soon' ? (
                <div className="coming-soon-notice">
                  <h3>🚀 Coming Soon!</h3>
                  <p>This product is currently in development. Stay tuned for the official drop announcement!</p>
                </div>
              ) : (
                <div className="product-modal-details">
                  <h3>Product Details</h3>
                  <ul>
                    <li><strong>Category:</strong> {product.category}</li>
                    <li><strong>Color:</strong> {product.color}</li>
                    <li><strong>Material:</strong> 100% Cotton</li>
                    <li><strong>Fit:</strong> Regular Fit</li>
                    <li><strong>Care:</strong> Machine wash cold</li>
                  </ul>
                </div>
              )}
              
              <div className="product-modal-actions">
                <button className="contact-btn" onClick={() => setIsContactModalOpen(true)}>Contact for Order</button>
                {product.status === 'available' && (
                  <button className="size-guide-btn" onClick={onSizeGuideClick}>Size Guide</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactOrderModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default ProductDetailsModal; 