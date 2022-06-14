<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import StickerCreated from './components/StickerCreated.vue';
</script>

<template>

  <header>
    <Navbar></Navbar>
  </header>

  <RouterView />

  <StickerCreated></StickerCreated>
  
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
