<script setup lang="ts">
import ProductList from '../components/ProductList.vue'
import CartSummary from '../components/CartSummary.vue'
</script>

<template>
  <div class="home-layout">
    <aside class="cart-section">
      <CartSummary />
    </aside>
    <section class="products-section">
      <ProductList />
    </section>
  </div>
</template>

<style scoped>
.home-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: stretch;
  justify-content: flex-start;
}

/* Cart summary at the top on mobile/tablet */
.cart-section {
  width: 100%;
  max-width: 100vw;
  margin: 0 auto 0.5rem auto;
  order: -1;
}

.products-section {
  width: 100%;
}

@media (min-width: 900px) {
  /* Switch to horizontal layout for desktop */
  .home-layout {
    flex-direction: row;
    align-items: flex-start;
    gap: 2.4rem;
  }

  .cart-section {
    width: 330px;
    max-width: 370px;
    min-width: 220px;
    margin: 0 0 0 1.5rem;
    order: 2;
    flex-shrink: 0;
    position: sticky;
    top: 2rem;
    align-self: flex-start;
    z-index: 1;
  }

  .products-section {
    flex: 1 1 0%;
    min-width: 0;
    margin: 0;
  }
}
</style>
