import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from './products'

/**
 * A cart item links productId and quantity.
 */
export interface CartItem {
  productId: number
  quantity: number
}

// PUBLIC_INTERFACE
export const useCartStore = defineStore('cart', () => {
  // Cart holds productId and quantity
  const items = ref<CartItem[]>([])

  // Add or increment product in cart
  function addToCart(product: Product) {
    const item = items.value.find((i) => i.productId === product.id)
    if (item) {
      if (item.quantity < product.stock) {
        item.quantity += 1
      }
    } else {
      items.value.push({ productId: product.id, quantity: 1 })
    }
  }

  // Remove or decrement product in cart
  function removeFromCart(product: Product) {
    const idx = items.value.findIndex((i) => i.productId === product.id)
    if (idx !== -1) {
      if (items.value[idx].quantity > 1) {
        items.value[idx].quantity -= 1
      } else {
        items.value.splice(idx, 1)
      }
    }
  }

  // Remove all of a product from cart
  function removeAll(product: Product) {
    const idx = items.value.findIndex((i) => i.productId === product.id)
    if (idx !== -1) {
      items.value.splice(idx, 1)
    }
  }

  // PUBLIC_INTERFACE
  // Get products in cart, merged with product info.
  const getCartDetails = (products: Product[]) => {
    return items.value.map((item) => {
      const prod = products.find((p) => p.id === item.productId)!
      return { ...prod, quantity: item.quantity }
    })
  }

  // PUBLIC_INTERFACE
  const totalPrice = (products: Product[]) =>
    items.value.reduce((sum, item) => {
      const prod = products.find((p) => p.id === item.productId)
      return sum + (prod ? prod.price * item.quantity : 0)
    }, 0)

  return { items, addToCart, removeFromCart, removeAll, getCartDetails, totalPrice }
})
