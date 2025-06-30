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
/* MOBILE-FIRST DEFAULTS */
.cart-summary {
  background: #fffefb;
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(255, 193, 7, 0.08), 0 2px 6px rgba(76,175,80,0.07);
  padding: 0.7rem 0.5rem 0.5rem 0.65rem;
  width: 100%;
  max-width: 99vw;
  min-width: 0;
  margin-bottom: 1.15rem;
  font-size: 1rem;
  box-sizing: border-box;
}

.cart-summary h3 {
  color: var(--primary-color);
  font-size: 1.09rem;
  margin-bottom: 0.48rem;
  text-align: left;
}

.empty-cart {
  color: #888;
  font-size: 0.91rem;
  padding: 0.45rem 0.27rem;
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
  gap: 0.56rem;
  margin-bottom: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid #ececec;
}

.cart-item img {
  width: 30px;
  height: 30px;
  border-radius: 7px;
  background: #f2f2f2;
  object-fit: cover;
}

.cart-item-title {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.98rem;
}

.cart-item-desc {
  display: block;
  color: #444;
  font-size: 0.83rem;
}

.btn.secondary {
  background: var(--secondary-color);
  color: #27270a;
  border: none;
  border-radius: 0.4rem;
  padding: 0.16rem 0.65rem;
  cursor: pointer;
  font-size: 0.88rem;
  transition: background 0.14s;
  min-width: 56px;
}

.btn.secondary:hover,
.btn.secondary:focus {
  background: #ffee9a;
}

.cart-total {
  margin-top: 0.81rem;
  font-weight: bold;
  font-size: 1.06rem;
  color: var(--accent-color);
  text-align: right;
  letter-spacing: 0.05em;
}

@media (min-width: 700px) {
  .cart-summary {
    max-width: 370px;
    font-size: 1.07rem;
    padding: 1.1rem 0.9rem 0.7rem 0.9rem;
    margin-bottom: 1.5rem;
  }
  .cart-summary h3 {
    font-size: 1.15rem;
  }
  .cart-item {
    gap: 0.66rem;
    margin-bottom: 10px;
    padding-bottom: 7px;
  }
  .cart-item img {
    width: 38px;
    height: 38px;
  }
  .cart-item-title {
    font-size: 1.06rem;
  }
  .cart-item-desc {
    font-size: 0.91rem;
  }
  .btn.secondary {
    font-size: 0.95rem;
    padding: 0.23rem 0.85rem;
    min-width: 74px;
  }
  .cart-total {
    font-size: 1.13rem;
    margin-top: 1.07rem;
  }
}

/* LAPTOP 1024PX - and up: apply same styling for all wide screens */
@media (min-width: 1024px) {
  .cart-summary {
    max-width: 400px;
    font-size: 1.13rem;
    padding: 1.35rem 1.18rem 0.91rem 1.18rem;
  }
  .cart-summary h3 {
    font-size: 1.21rem;
  }
  .btn.secondary {
    font-size: 1.02rem;
    padding: 0.3rem 1.09rem;
    min-width: 92px;
  }
  .cart-total {
    font-size: 1.24rem;
  }
}
/* Removed 1280px and 1440px: 1024px styles now apply up for all wider screens */
</style>
