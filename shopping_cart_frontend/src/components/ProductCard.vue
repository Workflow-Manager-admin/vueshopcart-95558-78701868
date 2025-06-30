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
/* MOBILE-FIRST DEFAULTS */
.product-card {
  background: white;
  border-radius: 1rem;
  padding: 0.95rem 0.6rem 1rem 0.6rem;
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
  width: 85px;
  height: 85px;
  border-radius: 0.7rem;
  object-fit: cover;
  margin-bottom: 0.6rem;
  background: #f2f2f2;
}

.product-title {
  font-size: 1.02rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.2rem;
  text-align: center;
}

.product-desc {
  color: #444;
  font-size: 0.89rem;
  margin-bottom: 0.58rem;
  text-align: center;
  min-height: 2em;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.10rem;
}

.product-price {
  color: var(--accent-color);
  font-weight: 600;
  font-size: 1.03rem;
  margin-right: 0.51rem;
}

.product-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap; /* Allow buttons to flow to new line if needed */
  justify-content: flex-end; /* Align to the right (for cleaner breakpoint handling) */
  width: 100%;
  margin-top: 0.18rem;
}

.btn {
  padding: 0.23rem 0.7rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.88rem;
  font-weight: 500;
  transition: background 0.16s;
  cursor: pointer;
  min-width: 60px;
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
  font-size: 0.89rem;
  color: var(--secondary-color);
  margin-top: 0.29rem;
}

/* Small phones */
@media (max-width: 410px) {
  .product-card {
    padding: 0.44rem 0.15rem 0.45rem 0.15rem;
  }
  .product-img {
    width: 66px;
    height: 66px;
  }
}

@media (min-width: 700px) {
  .product-card {
    padding: 1.12rem 0.98rem 1.15rem 0.98rem;
  }
  .product-img {
    width: 108px;
    height: 108px;
    margin-bottom: 0.7rem;
  }
  .product-title {
    font-size: 1.13rem;
  }
  .product-desc {
    font-size: 0.97rem;
  }
  .product-price {
    font-size: 1.11rem;
  }
  .btn {
    font-size: 0.96rem;
    padding: 0.27rem 1.19rem;
    min-width: 82px;
    margin-top: 0.12rem;
    margin-bottom: 0.12rem;
  }
  .product-actions {
    gap: 0.8rem;
  }
  .cart-qty {
    font-size: 0.95rem;
  }
}

/* 1024px: Extra space, upsize a bit */
@media (min-width: 1024px) {
  .product-card {
    padding: 1.25rem 1.14rem 1.32rem 1.14rem;
  }
  .product-img {
    width: 125px;
    height: 125px;
  }
  .product-title {
    font-size: 1.18rem;
  }
  .product-desc {
    font-size: 1.05rem;
  }
  .product-price {
    font-size: 1.20rem;
  }
  .btn {
    font-size: 1.03rem;
    padding: 0.31rem 1.32rem;
    min-width: 100px;
  }
  .cart-qty {
    font-size: 1.09rem;
  }
}

/* 1280px: Even roomier, font upsize */
@media (min-width: 1280px) {
  .product-card {
    padding: 1.5rem 1.26rem 1.65rem 1.26rem;
  }
  .product-img {
    width: 148px;
    height: 148px;
  }
  .product-title {
    font-size: 1.26rem;
  }
  .product-desc {
    font-size: 1.18rem;
  }
  .btn {
    font-size: 1.11rem;
    padding: 0.36rem 1.57rem;
    min-width: 120px;
  }
  .cart-qty {
    font-size: 1.15rem;
  }
}

/* 1440px: Large screens - max comfort, extra upsize all */
@media (min-width: 1440px) {
  .product-card {
    padding: 1.8rem 1.44rem 1.95rem 1.44rem;
    margin: 0.81rem 0;
  }
  .product-img {
    width: 170px;
    height: 170px;
    margin-bottom: 1.1rem;
  }
  .product-title {
    font-size: 1.36rem;
  }
  .product-desc {
    font-size: 1.23rem;
    min-height: 2.7em;
  }
  .btn {
    font-size: 1.17rem;
    padding: 0.43rem 1.95rem;
    min-width: 140px;
  }
  .product-actions {
    gap: 1.2rem;
  }
  .cart-qty {
    font-size: 1.21rem;
  }
}
</style>
