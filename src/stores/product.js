import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])
  const product = ref({
    Name: '',
    Price: 0,
    Stock: 0,
    Image: 'https://down-id.img.susercontent.com/file/53f6da224fae753c0a714d7d08e5c611_tn'
  })

  async function fetchProducts() {
    try {
      const response = await fetch('http://localhost:3000/products')
      const data = await response.json()
      products.value = data.products
    } catch (error) {
      console.error(error)
    }
  }

  async function addProduct(product) {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      const data = await response.json()
      products.value = [...products.value, data.product]
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  async function updateProduct(product, id) {
    try {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      fetchProducts()
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteProduct(id) {
    try {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
      })
      fetchProducts()
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchProductById(id) {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`)
      const data = await response.json()
      product.value = data.product[0]
    } catch (error) {
      console.error(error)
    }
  }

  return {
    products,
    product,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    fetchProductById
  }
})
