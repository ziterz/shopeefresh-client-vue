<script setup>
import { useProductsStore } from '@/stores/product'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const store = useProductsStore()
const route = useRoute()

onMounted(() => {
  store.fetchProductById(route.params.id)
})

const product = computed({
  get() {
    return store.product
  },
  set(val) {
    store.product = {
      Name: val.Name,
      Price: val.Price,
      Stock: val.Stock,
      Image: val.Image
    }
  }
})

function submitForm() {
  store.updateProduct(product.value, route.params.id)
}
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="my-5 w-1/2">
        <h1 class="text-3xl font-medium">Edit Product</h1>
        <form @submit.prevent="submitForm()">
          <div class="mt-5 flex flex-col gap-4">
            <div class="flex flex-col">
              <label for="product-name">Product Name</label>
              <input
                type="text"
                id="product-name"
                name="product-name"
                class="border border-neutral-300 p-2"
                v-model="product.Name"
              />
            </div>
            <div class="flex flex-col">
              <label for="product-price">Product Price</label>
              <input
                type="number"
                id="product-price"
                name="product-price"
                class="border border-neutral-300 p-2"
                v-model="product.Price"
              />
            </div>
            <div class="flex flex-col">
              <label for="product-stock">Product Stock</label>
              <input
                type="number"
                id="product-stock"
                name="product-stock"
                class="border border-neutral-300 p-2"
                v-model="product.Stock"
              />
            </div>
            <div class="flex flex-col">
              <label for="product-image">Product Image</label>
              <input
                type="text"
                id="product-image"
                name="product-image"
                class="border border-neutral-300 p-2"
                v-model="product.Image"
              />
            </div>
            <div class="flex flex-col">
              <button type="submit" class="bg-lime-500 py-2 font-medium text-white">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
