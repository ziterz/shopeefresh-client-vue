import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])

  async function fetchProducts() {
    try {
      const response = await fetch('http://localhost:3000/products')
      const data = await response.json()
      products.value = data.products
    } catch (error) {
      console.error(error)
    }
  }

  return {
    products,
    fetchProducts
  }
})
