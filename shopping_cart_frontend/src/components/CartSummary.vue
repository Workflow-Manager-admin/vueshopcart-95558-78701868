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
  padding: 1rem 0.9rem 0.7rem 0.9rem;
  width: 100%;
  max-width: 380px;
  min-width: 0;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
}

.cart-summary h3 {
  color: var(--primary-color);
  font-size: 1.18rem;
  margin-bottom: 0.7rem;
  text-align: left;
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
  gap: 0.7rem;
  margin-bottom: 10px;
  padding-bottom: 7px;
  border-bottom: 1px solid #ececec;
}

.cart-item img {
  width: 38px;
  height: 38px;
  border-radius: 7px;
  background: #f2f2f2;
  object-fit: cover;
}

.cart-item-title {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.04rem;
}

.cart-item-desc {
  display: block;
  color: #444;
  font-size: 0.91rem;
}

.btn.secondary {
  background: var(--secondary-color);
  color: #27270a;
  border: none;
  border-radius: 0.4rem;
  padding: 0.25rem 0.8rem;
  cursor: pointer;
  font-size: 0.92rem;
  transition: background 0.14s;
  min-width: 72px;
}

.btn.secondary:hover,
.btn.secondary:focus {
  background: #ffee9a;
}

.cart-total {
  margin-top: 1.1rem;
  font-weight: bold;
  font-size: 1.14rem;
  color: var(--accent-color);
  text-align: right;
  letter-spacing: 0.05em;
}

/* Responsive tweaks: shrink padding and sizing for mobile */
@media (max-width: 700px) {
  .cart-summary {
    max-width: 99vw;
    min-width: 0;
    margin-bottom: 1.15rem;
    padding: 0.7rem 0.45rem 0.3rem 0.5rem;
  }

  .cart-summary h3 {
    font-size: 1.07rem;
  }
  .cart-item-title {
    font-size: 0.97rem;
  }
  .cart-item-desc {
    font-size: 0.87rem;
  }
  .btn.secondary {
    font-size: 0.88rem;
    padding: 0.21rem 0.55rem;
    min-width: 56px;
  }
}

@media (max-width: 430px) {
  .cart-summary {
    font-size: 0.98rem;
    padding: 0.48rem 0.22rem 0.13rem 0.34rem;
  }
  .cart-summary h3 {
    font-size: 0.97rem;
  }
}
</style>
