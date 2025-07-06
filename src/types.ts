export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: 'T-Shirts' | 'Hoodies' | 'Jackets' | 'Pants' | 'Accessories'
  description: string
  color: string
  status: 'available' | 'coming-soon'
}

export interface CartItem extends Product {
  quantity: number
} 