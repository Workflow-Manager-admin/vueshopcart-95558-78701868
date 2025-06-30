<script setup lang="ts">
import { useProductStore } from '../stores/products'
import { useCartStore } from '../stores/cart'

const productStore = useProductStore()
const cartStore = useCartStore()

const getCartDetails = () => cartStore.getCartDetails(productStore.products)
const totalPrice = () => cartStore.totalPrice(productStore.products)

function removeAll(productId: number) {
  const prod = productStore.products.find(p => p.id === productId)
  if (prod) cartStore.removeAll(prod)
}
</script>

<template>
  <aside class="cart-summary">
    <h3>🛒 Cart</h3>
    <div v-if="getCartDetails().length === 0" class="empty-cart">
      Cart is empty.
    </div>
    <ul v-else class="cart-items">
      <li v-for="item in getCartDetails()" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" />
        <div>
          <span class="cart-item-title">{{ item.name }}</span>
          <span class="cart-item-desc">\${{ item.price.toFixed(2) }} × {{ item.quantity }}</span>
        </div>
        <button class="btn secondary" @click="removeAll(item.id)">Remove</button>
      </li>
    </ul>
    <div class="cart-total">
      <strong>Total: </strong>
      <span>\${{ totalPrice().toFixed(2) }}</span>
    </div>
  </aside>
</template>

<style scoped>
.cart-summary {
  background: #fffefb;
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(255, 193, 7, 0.08), 0 2px 6px rgba(76,175,80,0.07);
  padding: 1.2rem 1.1rem 1rem 1.1rem;
  min-width: 220px;
  max-width: 340px;
  margin-bottom: 2rem;
  position: sticky;
  top: 1rem;
}

.cart-summary h3 {
  color: var(--primary-color);
  font-size: 1.18rem;
  margin-bottom: 0.7rem;
}

.empty-cart {
  color: #888;
  font-size: 1rem;
  padding: 0.7rem 0.3rem;
  text-align: center;
}

.cart-items {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 12px;
  padding-bottom: 7px;
  border-bottom: 1px solid #ececec;
}

.cart-item img {
  width: 40px;
  height: 40px;
  border-radius: 7px;
  background: #f2f2f2;
  object-fit: cover;
}

.cart-item-title {
  color: var(--primary-color);
  font-weight: 600;
}

.cart-item-desc {
  display: block;
  color: #444;
  font-size: 0.92rem;
}

.btn.secondary {
  background: var(--secondary-color);
  color: #27270a;
  border: none;
  border-radius: 0.4rem;
  padding: 0.32rem 1rem;
  cursor: pointer;
  font-size: 0.93rem;
  transition: background 0.14s;
}

.btn.secondary:hover {
  background: #ffee9a;
}

.cart-total {
  margin-top: 1.2rem;
  font-weight: bold;
  font-size: 1.13rem;
  color: var(--accent-color);
  text-align: right;
  letter-spacing: 0.05em;
}
</style>
