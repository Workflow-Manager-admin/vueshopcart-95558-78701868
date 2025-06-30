<script setup lang="ts">
import type { Product } from '../stores/products'

defineProps<{
  product: Product,
  inCart: boolean,
  cartQty: number
}>()

defineEmits(['add', 'remove'])
</script>

<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-img" />
    <h2 class="product-title">{{ product.name }}</h2>
    <p class="product-desc">{{ product.description }}</p>
    <div class="product-footer">
      <span class="product-price">\${{ product.price.toFixed(2) }}</span>
      <div class="product-actions">
        <button
          class="btn primary"
          @click="$emit('add', product)"
          :disabled="cartQty >= product.stock"
        >
          {{ cartQty ? 'Add another' : 'Add to cart' }}
        </button>
        <button
          class="btn accent"
          v-if="inCart && cartQty"
          @click="$emit('remove', product)"
        >Remove</button>
      </div>
    </div>
    <div v-if="cartQty" class="cart-qty">In cart: {{ cartQty }}</div>
  </div>
</template>

<style scoped>
.product-card {
  background: white;
  border-radius: 1rem;
  padding: 1.16rem 1rem 1.18rem 1rem;
  box-shadow: 0 4px 18px rgba(44, 62, 80, 0.07), 0 1.5px 4px rgba(76, 175, 80, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.18s;
  margin: 0.5rem 0;
  min-width: 0;
}

.product-card:hover {
  box-shadow: 0 6px 24px rgba(44, 62, 80, 0.17), 0 4px 12px rgba(76,175,80,0.1);
}

.product-img {
  width: 105px;
  height: 105px;
  border-radius: 0.7rem;
  object-fit: cover;
  margin-bottom: 0.64rem;
  background: #f2f2f2;
}

.product-title {
  font-size: 1.12rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.3rem;
  text-align: center;
}

.product-desc {
  color: #444;
  font-size: 0.91rem;
  margin-bottom: 0.67rem;
  text-align: center;
  min-height: 2.2em;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.18rem;
}

.product-price {
  color: var(--accent-color);
  font-weight: 600;
  font-size: 1.12rem;
  margin-right: 0.61rem;
}

.product-actions {
  display: flex;
  gap: 0.25rem;
}

.btn {
  padding: 0.37rem 1.09rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background 0.16s;
  cursor: pointer;
}

.btn.primary {
  background: var(--primary-color);
  color: white;
}
.btn.primary:disabled {
  opacity: 0.5;
  cursor: default;
}

.btn.accent {
  background: var(--accent-color);
  color: white;
}

.cart-qty {
  font-size: 0.93rem;
  color: var(--secondary-color);
  margin-top: 0.37rem;
}

@media (max-width: 700px) {
  .product-card {
    padding: 0.8rem 0.6rem 0.9rem 0.6rem;
  }
  .product-img {
    width: 86px;
    height: 86px;
    margin-bottom: 0.55rem;
  }
  .product-title {
    font-size: 1.01rem;
  }
  .product-desc {
    font-size: 0.86rem;
  }
  .product-footer {
    margin-top: 0.08rem;
  }
  .btn {
    font-size: 0.88rem;
    padding: 0.23rem 0.7rem;
    min-width: 60px;
  }
  .cart-qty {
    font-size: 0.88rem;
  }
}

@media (max-width: 410px) {
  .product-card {
    padding: 0.5rem 0.16rem 0.5rem 0.16rem;
  }
  .product-img {
    width: 67px;
    height: 67px;
  }
}
</style>
