import React, { useState, useMemo } from 'react'
import type { Product } from '../types'
import ProductFilter from './ProductFilter'
import ProductDetailsModal from './ProductDetailsModal'
import SizeGuide from './SizeGuide'
import './ProductGrid.css'

interface ProductGridProps {
  onImageClick?: (src: string, alt: string) => void;
}

// T-shirt product data (existing products)
const tshirtImages = Array.from({ length: 17 }, (_, i) => `/products/T-SHIRT ${i + 1}.jpg`)

const tshirtNames = [
  'Urban Classic Tee',
  'Neon Nights Tee',
  'Graffiti Dream Tee',
  'Midnight Rebel Tee',
  'Wicked Fade Tee',
  'Street Legend Tee',
  'Hype Pulse Tee',
  'Shadow Script Tee',
  'Retro Vibe Tee',
  'Electric Daze Tee',
  'Concrete Jungle Tee',
  'Noir Statement Tee',
  'Vandal Muse Tee',
  'Iconic Drop Tee',
  'After Hours Tee',
  'City Lights Tee',
  'Wicked Daze Tee'
]

const tshirtColors = [
  'Black', 'White', 'Gray', 'Red', 'Blue', 'Green', 'Yellow',
  'Black', 'White', 'Gray', 'Red', 'Blue', 'Green', 'Yellow',
  'Black', 'White', 'Gray'
]

// Available T-shirts (existing products)
const availableProducts: Product[] = tshirtImages.map((img, idx) => ({
  id: (idx + 1).toString(),
  name: tshirtNames[idx],
  price: 650,
  image: img,
  category: 'T-Shirts',
  description: 'Premium streetwear designed for those who dare to be different. Each piece is crafted with attention to detail and quality materials. Limited edition drops that define your style.',
  color: tshirtColors[idx],
  status: 'available'
}))

// Coming Soon products for other categories
const comingSoonProducts: Product[] = [
  {
    id: '18',
    name: 'Street Hoodie',
    price: 1200,
    image: '/products/placeholder.jpg',
    category: 'Hoodies',
    description: 'Coming Soon! This premium hoodie is currently in development. Stay tuned for the official drop.',
    color: 'Black',
    status: 'coming-soon'
  },
  {
    id: '19',
    name: 'Urban Jacket',
    price: 1800,
    image: '/products/placeholder.jpg',
    category: 'Jackets',
    description: 'Coming Soon! This stylish jacket is currently in development. Stay tuned for the official drop.',
    color: 'Gray',
    status: 'coming-soon'
  },
  {
    id: '20',
    name: 'Street Pants',
    price: 1500,
    image: '/products/placeholder.jpg',
    category: 'Pants',
    description: 'Coming Soon! These premium pants are currently in development. Stay tuned for the official drop.',
    color: 'Black',
    status: 'coming-soon'
  },
  {
    id: '21',
    name: 'Wicked Cap',
    price: 800,
    image: '/products/placeholder.jpg',
    category: 'Accessories',
    description: 'Coming Soon! This stylish cap is currently in development. Stay tuned for the official drop.',
    color: 'Black',
    status: 'coming-soon'
  },
  {
    id: '22',
    name: 'Street Bag',
    price: 900,
    image: '/products/placeholder.jpg',
    category: 'Accessories',
    description: 'Coming Soon! This premium bag is currently in development. Stay tuned for the official drop.',
    color: 'Gray',
    status: 'coming-soon'
  }
]

const allProducts: Product[] = [...availableProducts, ...comingSoonProducts]

const ProductGrid: React.FC<ProductGridProps> = ({ onImageClick }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState('All')
  const [selectedColor, setSelectedColor] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('All')
    setSelectedPriceRange('All')
    setSelectedColor('All')
  }

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      
      // Category filter
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      
      // Price range filter
      let matchesPrice = true
      if (selectedPriceRange !== 'All') {
        switch (selectedPriceRange) {
          case 'Under ₱500':
            matchesPrice = product.price < 500
            break
          case '₱500 - ₱1000':
            matchesPrice = product.price >= 500 && product.price <= 1000
            break
          case '₱1000 - ₱2000':
            matchesPrice = product.price >= 1000 && product.price <= 2000
            break
          case 'Over ₱2000':
            matchesPrice = product.price > 2000
            break
        }
      }
      
      // Color filter
      const matchesColor = selectedColor === 'All' || product.color === selectedColor
      
      return matchesSearch && matchesCategory && matchesPrice && matchesColor
    })
  }, [searchTerm, selectedCategory, selectedPriceRange, selectedColor])

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }

  return (
    <section className="product-grid-section" id="shop">
      <div className="container">
        <h2>Our Collection</h2>
        <p className="collection-subtitle">Premium streetwear that defines your style</p>
        
        <ProductFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          clearFilters={clearFilters}
        />
        
        <div className="product-grid">
          {filteredProducts.length === 0 ? (
            <div className="no-products-placeholder">
              <p>No products found matching your criteria.</p>
              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          ) : (
            filteredProducts.map(product => (
              <div key={product.id} className={`product-card ${product.status}`}>
                <div className="product-image-container" onClick={() => onImageClick?.(product.image, product.name)}>
                  <img 
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    srcSet={`${product.image.replace('.jpg', '-480.jpg')} 480w, ${product.image.replace('.jpg', '-800.jpg')} 800w, ${product.image} 1200w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="product-overlay">
                    <span>Click to view</span>
                  </div>
                  {product.status === 'coming-soon' && (
                    <div className="coming-soon-badge">
                      <span>Coming Soon</span>
                    </div>
                  )}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-color">Color: N/A</p>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">₱{product.price}</p>
                  <button 
                    className={`view-details-btn ${product.status === 'coming-soon' ? 'disabled' : ''}`}
                    onClick={() => handleViewDetails(product)}
                    disabled={product.status === 'coming-soon'}
                  >
                    {product.status === 'coming-soon' ? 'Coming Soon' : 'View Details'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        
        {filteredProducts.length > 0 && (
          <div className="results-info">
            <p>Showing {filteredProducts.length} of {allProducts.length} products</p>
          </div>
        )}
      </div>
      
      <ProductDetailsModal
        isOpen={isProductModalOpen}
        product={selectedProduct}
        onClose={() => setIsProductModalOpen(false)}
        onSizeGuideClick={() => setIsSizeGuideOpen(true)}
      />
      
      <SizeGuide
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </section>
  )
}

export default ProductGrid 