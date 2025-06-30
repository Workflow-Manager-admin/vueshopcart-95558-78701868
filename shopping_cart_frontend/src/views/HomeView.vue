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
/* Mobile-first defaults */
.home-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: stretch;
  justify-content: flex-start;
}

.cart-section {
  width: 100%;
  max-width: 100vw;
  margin: 0 auto 0.5rem auto;
  order: -1;
}
.products-section {
  width: 100%;
}

/* Tablets and larger = more vertical space */
@media (min-width: 700px) {
  .home-layout {
    gap: 2rem;
  }
}

/* 1024px and up: Use the same layout and sidebar/gap as 1024px for all wider screens */
@media (min-width: 1024px) {
  .home-layout {
    flex-direction: row;
    align-items: flex-start;
    gap: 2.4rem;
    min-height: 65vh;
  }
  .cart-section {
    width: 310px;
    max-width: 360px;
    min-width: 220px;
    margin: 0 0 0 1.7rem;
    order: 2;
    flex-shrink: 0;
    position: sticky;
    top: 2.1rem;
    align-self: flex-start;
    z-index: 1;
  }
  .products-section {
    flex: 1 1 0%;
    min-width: 0;
    margin: 0;
  }
}
/* Removed overrides for 1280px and 1440px – all use the 1024px rules above */
</style>
