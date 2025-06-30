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
/* MOBILE-FIRST STYLES */
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 0.7rem 0.67rem 0.65rem;
  box-shadow: 0 2px 12px rgba(76,175,80,0.11);
  border-radius: 0 0 1.1rem 1.1rem;
  margin-bottom: 0.9rem;
  flex-direction: column;
  gap: 0.5rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.brand {
  font-size: 1.05rem;
  font-weight: bold;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-icon {
  font-size: 1.5rem;
  vertical-align: middle;
  margin-right: 0.28rem;
}

.nav {
  display: flex;
  gap: 0.68rem;
  flex-wrap: wrap;
}

.nav a {
  color: white;
  font-size: 0.96rem;
  text-decoration: none;
  padding: 0.18rem 0.5rem;
  border-radius: 0.4rem;
  transition: background 0.18s;
}

.nav a.router-link-exact-active,
.nav a:hover {
  background: var(--secondary-color);
  color: #212101;
}

/* >650px, turn to row, larger branding, wider nav: for tablets+ */
@media (min-width: 650px) {
  .main-header {
    flex-direction: row;
    align-items: center;
    padding: 0.8rem 1.1rem 0.8rem 1.1rem;
    gap: 1.4rem;
  }
  .header-left {
    gap: 1.6rem;
  }
  .brand {
    font-size: 1.21rem;
  }
  .brand-icon {
    font-size: 1.7rem;
    margin-right: 0.35rem;
  }
  .nav {
    gap: 1.1rem;
  }
  .nav a {
    font-size: 1rem;
    padding: 0.22rem 0.8rem;
  }
}

/* 1024px - laptop: larger nav, more spacing */
@media (min-width: 1024px) {
  .main-header {
    padding: 0.9rem 2.3rem 0.95rem 2rem;
    gap: 2.2rem;
  }
  .header-left {
    gap: 2.2rem;
  }
  .brand {
    font-size: 1.39rem;
  }
  .brand-icon {
    font-size: 2rem;
    margin-right: 0.48rem;
  }
  .nav {
    gap: 1.4rem;
  }
  .nav a {
    font-size: 1.08rem;
    padding: 0.3rem 1rem;
  }
}

/* 1280px - large laptop */
@media (min-width: 1280px) {
  .main-header {
    padding: 1.12rem 3.1rem 1.12rem 2.6rem;
    gap: 3.1rem;
  }
  .brand {
    font-size: 1.57rem;
  }
  .brand-icon {
    font-size: 2.25rem;
    margin-right: 0.6rem;
  }
  .nav {
    gap: 1.9rem;
  }
  .nav a {
    font-size: 1.16rem;
    padding: 0.39rem 1.25rem;
  }
}

/* 1440px - extra large screen */
@media (min-width: 1440px) {
  .main-header {
    padding: 1.3rem 4rem 1.2rem 3.2rem;
    gap: 4rem;
  }
  .header-left {
    gap: 3.1rem;
  }
  .brand {
    font-size: 1.7rem;
  }
  .brand-icon {
    font-size: 2.5rem;
  }
  .nav {
    gap: 2.55rem;
  }
  .nav a {
    font-size: 1.24rem;
    padding: 0.53rem 1.48rem;
  }
}

</style>
