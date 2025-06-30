<script setup lang="ts">
import { useProductStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import ProductCard from './ProductCard.vue'

const productStore = useProductStore()
const cartStore = useCartStore()

const getQtyInCart = (pid: number) => {
  const item = cartStore.items.find(i => i.productId === pid)
  return item ? item.quantity : 0
}
</script>

<template>
  <div class="product-list">
    <ProductCard
      v-for="product in productStore.products"
      :key="product.id"
      :product="product"
      :inCart="!!cartStore.items.find(i => i.productId === product.id)"
      :cartQty="getQtyInCart(product.id)"
      @add="cartStore.addToCart"
      @remove="cartStore.removeFromCart"
    />
  </div>
</template>

<style scoped>
.product-list {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
  margin-top: 0.3rem;
}

/* Two columns for larger mobiles/tablets */
@media (min-width: 480px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.15rem 1.15rem;
  }
}

/* Three columns for large tablets/small laptops */
@media (min-width: 700px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.22rem 1.7rem;
  }
}

/* 1024px and up: Use same 3-column grid and gaps for all large laptop screens */
@media (min-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.4rem 1.9rem;
  }
}
/* Remove 1280px and 1440px overrides; all use the 1024px grid */
</style>
