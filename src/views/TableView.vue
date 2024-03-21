<script setup>
import { useProductsStore } from '@/stores/product'

const store = useProductsStore()

function deleteProduct(id) {
  store.deleteProduct(id)
}
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="my-5">
        <div class="h-full bg-white p-5">
          <table class="w-full table-auto bg-white">
            <thead class="bg-neutral-100">
              <tr>
                <th class="p-4">Product Name</th>
                <th>Product ID</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="product in store.products" :key="product.id" class="border">
                <td width="400px">
                  <div class="flex items-center">
                    <img
                      :src="product.Image ?? '-'"
                      :alt="product.Name ?? '-'"
                      class="h-32 w-32 object-cover p-4"
                    />
                    <span class="font-bold">{{ product.Name ?? '-' }}</span>
                  </div>
                </td>
                <td>#{{ product.ID ?? 0 }}</td>
                <td>Rp{{ product.Price ?? 0 }}</td>
                <td>{{ product.Stock ?? 0 }}</td>
                <td>
                  <div class="mx-auto w-12">
                    <div class="text-left font-medium text-lime-500">
                      <router-link
                        :to="{ name: 'edit', params: { id: product.ID } }"
                        class="hover:underline"
                        >Edit</router-link
                      >
                      <br />
                      <a href="" @click.prevent="deleteProduct(product.ID)" class="hover:underline"
                        >Delete</a
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
