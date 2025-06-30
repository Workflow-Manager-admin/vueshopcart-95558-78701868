<script setup lang="ts">
import ProductList from '../components/ProductList.vue'
import CartSummary from '../components/CartSummary.vue'
</script>

<template>
  <div class="home-layout">
    <section class="products-section">
      <ProductList />
    </section>
    <aside class="cart-section">
      <CartSummary />
    </aside>
  </div>
</template>

<style scoped>
.home-layout {
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
}

.products-section {
  flex: 1;
}

.cart-section {
  flex-basis: 320px;
}

@media (min-width: 900px) {
  .home-layout {
    flex-direction: row;
  }
  .products-section {
    flex: 2;
    min-width: 0;
  }
  .cart-section {
    flex: 1;
    min-width: 240px;
    margin-left: 1.2rem;
  }
}
</style>
