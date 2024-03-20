<script setup>
defineProps({
  products: Array
})
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
              <tr v-for="product in products" :key="product.id" class="border">
                <td width="400px">
                  <div class="flex items-center">
                    <img
                      :src="product.image"
                      :alt="product.name"
                      class="h-32 w-32 object-cover p-4"
                    />
                    <span class="font-bold">{{ product.name }}</span>
                  </div>
                </td>
                <td>#{{ product.id }}</td>
                <td>Rp{{ product.price }}</td>
                <td>{{ product.stock }}</td>
                <td>
                  <div class="mx-auto w-12">
                    <div class="text-left font-medium text-lime-500">
                      <a href="" class="hover:underline">Edit</a>
                      <br />
                      <a href="" class="hover:underline">Delete</a>
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
