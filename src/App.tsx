
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Models from './components/Models'
import ProductGrid from './components/ProductGrid'
import SizeGuideSection from './components/SizeGuideSection'
import About from './components/About'
import Contact from './components/Contact'
import ImageModal from './components/ImageModal'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [isDark, setIsDark] = useState(true)
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Theme toggle
  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', !isDark ? 'dark' : 'light')
  }

  // Image modal
  const openImageModal = (src: string, alt: string) => {
    setModalImage({ src, alt })
    setIsModalOpen(true)
  }

  const closeImageModal = () => {
    setIsModalOpen(false)
    setModalImage(null)
  }

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Set initial theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  if (isLoading) {
  return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading Wicked Daze...</p>
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar themeToggle={<ThemeToggle isDark={isDark} onToggle={toggleTheme} />} />
      <Hero />
      <Models onImageClick={openImageModal} />
      <ProductGrid onImageClick={openImageModal} />
      <SizeGuideSection />
      <About />
      <Contact />
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={modalImage?.src || ''}
        imageAlt={modalImage?.alt || ''}
        onClose={closeImageModal}
      />
      </div>
  )
}

export default App
