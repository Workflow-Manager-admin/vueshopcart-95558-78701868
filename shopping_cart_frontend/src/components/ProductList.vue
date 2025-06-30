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
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.2rem;
  margin-top: 0.3rem;
}
</style>
