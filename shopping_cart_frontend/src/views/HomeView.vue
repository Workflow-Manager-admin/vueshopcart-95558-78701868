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

/* 1024px: Switch to row layout, sidebar, more breathing room */
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

/* 1280px: Sidebar slightly wider, more horizontal gap */
@media (min-width: 1280px) {
  .home-layout {
    gap: 3rem;
  }
  .cart-section {
    width: 350px;
    max-width: 410px;
    margin-left: 2.2rem;
    top: 2.4rem;
  }
}

/* 1440px: Large layouts, extra roomy grid */
@media (min-width: 1440px) {
  .home-layout {
    gap: 3.7rem;
  }
  .cart-section {
    width: 390px;
    max-width: 480px;
    margin-left: 3.2rem;
    top: 2.9rem;
  }
}

</style>
