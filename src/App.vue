<script setup>
import { useProductsStore } from '@/stores/product'

const store = useProductsStore()

store.fetchProducts()
</script>

<template>
  <header class="sticky top-0 bg-lime-500">
    <nav class="container relative mx-auto py-5">
      <router-link to="/">
        <img src="./assets/shopeefresh-logo.svg" alt="Shopee Fresh" width="200" height="auto" />
      </router-link>
      <ul class="absolute inset-y-0 right-0 flex items-center gap-4 text-lg font-medium text-white">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/product">Add Product</router-link>
        </li>
        <li>
          <router-link to="" @click="logout()">Logout</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view :products="store.products" />
  </main>
</template>

<style>
body {
  background-color: #f5f5f5;
}
</style>
