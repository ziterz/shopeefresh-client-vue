<script setup>
import { useProductsStore } from '@/stores/product'
import NavBar from '@/components/NavBar.vue'

const store = useProductsStore()

store.fetchProducts()
</script>

<template>
  <NavBar />
  <main>
    <router-view />
  </main>
</template>

<style>
body {
  background-color: #f5f5f5;
}
</style>
