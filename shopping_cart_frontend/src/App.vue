<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="main-header">
    <div class="header-left">
      <span class="brand">
        <span class="brand-icon">🛒</span>
        Vue ShopCart
      </span>
      <nav class="nav">
        <RouterLink to="/">Products</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem 0.8rem 1.5rem;
  box-shadow: 0 2px 12px rgba(76,175,80,0.11);
  border-radius: 0 0 1.1rem 1.1rem;
  margin-bottom: 1rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1.9rem;
}

.brand {
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-icon {
  font-size: 2rem;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.nav {
  display: flex;
  gap: 1.3rem;
  flex-wrap: wrap;
}

.nav a {
  color: white;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.3rem 0.9rem;
  border-radius: 0.4rem;
  transition: background 0.18s;
}

.nav a.router-link-exact-active,
.nav a:hover {
  background: var(--secondary-color);
  color: #212101;
}

@media (max-width: 650px) {
  .main-header {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75rem 0.7rem 0.67rem 0.65rem;
    gap: 0.5rem;
  }
  .header-left {
    gap: 1.1rem;
  }
  .brand {
    font-size: 1.05rem;
  }
  .brand-icon {
    font-size: 1.5rem;
    margin-right: 0.28rem;
  }
  .nav {
    gap: 0.68rem;
  }
  .nav a {
    font-size: 0.96rem;
    padding: 0.18rem 0.5rem;
  }
}
</style>
