<script setup>
import { useRouter } from 'vue-router'
import Logo from '@/assets/shopeefresh-logo.svg'

const router = useRouter()

function logout() {
  localStorage.removeItem('token')
  router.push('/')
}
</script>

<template>
  <header class="sticky top-0 bg-lime-500">
    <nav class="container relative mx-auto py-5">
      <router-link to="/">
        <img :src="Logo" alt="Shopee Fresh" width="200" height="auto" />
      </router-link>
      <ul class="absolute inset-y-0 right-0 flex items-center gap-4 text-lg font-medium text-white">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/add">Add Product</router-link>
        </li>
        <li>
          <router-link to="" @click="logout()">Logout</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
