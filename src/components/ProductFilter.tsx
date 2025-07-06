import React from 'react';
import './ProductFilter.css';

interface ProductFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (range: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  clearFilters: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedColor,
  setSelectedColor,
  clearFilters
}) => {
  const categories = ['All', 'T-Shirts', 'Hoodies', 'Jackets', 'Pants', 'Accessories'];
  const priceRanges = ['All', 'Under ₱500', '₱500 - ₱1000', '₱1000 - ₱2000', 'Over ₱2000'];
  const colors = ['All', 'Black', 'White', 'Gray', 'Red', 'Blue', 'Green', 'Yellow'];

  return (
    <div className="product-filter">
      <div className="filter-header">
        <h3>Filter Products</h3>
        <button className="clear-filters-btn" onClick={clearFilters}>
          Clear All
        </button>
      </div>
      
      <div className="search-section">
        <div className="search-input-wrapper">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      
      <div className="filter-sections">
        <div className="filter-section">
          <h4>Category</h4>
          <div className="filter-options">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-option ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="filter-section">
          <h4>Price Range</h4>
          <div className="filter-options">
            {priceRanges.map((range) => (
              <button
                key={range}
                className={`filter-option ${selectedPriceRange === range ? 'active' : ''}`}
                onClick={() => setSelectedPriceRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        
        <div className="filter-section">
          <h4>Color</h4>
          <div className="filter-options">
            {colors.map((color) => (
              <button
                key={color}
                className={`filter-option ${selectedColor === color ? 'active' : ''}`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter; 