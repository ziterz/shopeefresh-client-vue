<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: 'Buah Beet Root 1 kg',
    image: 'https://down-id.img.susercontent.com/file/sg-11134201-7rbku-ln4i7t9u6rnv4a_tn',
    price: 17500,
    stock: 100
  },
  {
    id: 2,
    name: 'Cabai Rawit Merah 500 gr',
    image: 'https://down-id.img.susercontent.com/file/ba00d1c1d34684b8f4e60556182a294b_tn',
    price: 17000,
    stock: 100
  },
  {
    id: 3,
    name: 'Bawang Merah Brebes 1 kg',
    image: 'https://down-id.img.susercontent.com/file/id-11134207-7qul5-ljnmo5zkc7yb15_tn',
    price: 22500,
    stock: 100
  },
  {
    id: 4,
    name: 'Buncis 500 gr',
    image: 'https://down-id.img.susercontent.com/file/ebf2395fb4611b91236d785f059ef4fc_tn',
    price: 0,
    stock: 100
  },
  {
    id: 5,
    name: 'Daun Kemangi 100 gr',
    image: 'https://down-id.img.susercontent.com/file/53f6da224fae753c0a714d7d08e5c611_tn',
    price: 5000,
    stock: 100
  },
  {
    id: 6,
    name: 'Cabai Hijau Keriting 500 gr',
    image: 'https://down-id.img.susercontent.com/file/ff59a4c9f27d50c77ff29975bc5c8946_tn',
    price: 17000,
    stock: 100
  },
  {
    id: 7,
    name: 'Wortel Berastagi 500 gr',
    image: 'https://down-id.img.susercontent.com/file/31800cfb6d6247437868612653c8b9f7_tn',
    price: 11000,
    stock: 100
  },
  {
    id: 8,
    name: 'Timun Segar 500 gr',
    image: 'https://down-id.img.susercontent.com/file/bb6661466dc8da797acefca7e6cedd04_tn',
    price: 5000,
    stock: 100
  },
  {
    id: 9,
    name: 'Sawi Hijau Caisim 500 gr',
    image: 'https://down-id.img.susercontent.com/file/cae2bf2e6f3a46376ff1e4a7bc4bfbb7_tn',
    price: 8000,
    stock: 100
  },
  {
    id: 10,
    name: 'Daun Jeruk per Pack',
    image: 'https://down-id.img.susercontent.com/file/a731c3fb5f3e84ed3cd921e515ab1649_tn',
    price: 5000,
    stock: 100
  },
  {
    id: 11,
    name: 'Bawang Bombai Import 500 gr',
    image: 'https://down-id.img.susercontent.com/file/id-11134207-7qul2-lkc2l6f5c4gp1b_tn',
    price: 12500,
    stock: 100
  },
  {
    id: 12,
    name: 'Kentang Dieng Fresh 1 kg',
    image: 'https://down-id.img.susercontent.com/file/id-11134207-7qukz-lkht6o9vyr0g52_tn',
    price: 14500,
    stock: 100
  },
  {
    id: 13,
    name: 'Terong Ungu 500 gr',
    image: 'https://down-id.img.susercontent.com/file/de43158b067b2c457b89b647dbe475c2_tn',
    price: 7000,
    stock: 100
  },
  {
    id: 14,
    name: 'Baby Pakcoy 250 gr',
    image: 'https://down-id.img.susercontent.com/file/ac56533929cef994d46eee6225217bc8_tn',
    price: 4800,
    stock: 100
  },
  {
    id: 15,
    name: 'Tomat Hijau 500 gr',
    image: 'https://down-id.img.susercontent.com/file/a4312d6992404cfbb7e16f30d7e528ff_tn',
    price: 9000,
    stock: 100
  }
])

function logout() {
  localStorage.removeItem('access_token')
}
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
    <router-view :products="products" />
  </main>
</template>

<style>
body {
  background-color: #f5f5f5;
}
</style>
