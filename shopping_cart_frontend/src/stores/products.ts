import { defineStore } from 'pinia'

export interface Product {
  id: number
  name: string
  description: string
  image: string
  price: number
  stock: number
}

// PUBLIC_INTERFACE
export const useProductStore = defineStore('product', {
  state: () => ({
    // Static mock product data. In a real app, fetch from backend.
    products: [
      {
        id: 1,
        name: 'Wireless Headphones',
        description: 'Bluetooth headphones with noise-cancellation.',
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef01?w=400&q=80',
        price: 99.95,
        stock: 10,
      },
      {
        id: 2,
        name: 'Fitness Tracker',
        description: 'Tracks steps, sleep, and has heart rate monitor.',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
        price: 59.99,
        stock: 15,
      },
      {
        id: 3,
        name: 'Portable Bluetooth Speaker',
        description: 'Rich sound, waterproof, long battery life.',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80',
        price: 29.95,
        stock: 8,
      },
      {
        id: 4,
        name: 'Smart Watch',
        description: 'Receive notifications and track activity.',
        image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=400&q=80',
        price: 199.0,
        stock: 5,
      },
    ] as Product[],
  })
})
