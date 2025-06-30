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

/* 1024px: Typical laptop - slightly wider, more roomy gaps */
@media (min-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr); /* 4 is crowded until 1280 */
    gap: 1.4rem 1.9rem;
  }
}

/* 1280px: 4 columns, bigger gap */
@media (min-width: 1280px) {
  .product-list {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.7rem 2.4rem;
  }
}

/* 1440px: 4 columns, very broad gap for luxury of space */
@media (min-width: 1440px) {
  .product-list {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.2rem 3rem;
  }
}
</style>
