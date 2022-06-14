<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container_created">
    <div class="container_img_created">
      <img alt="logo" src="../assets/created.svg">
    </div>
  </div>
</template>

<style scoped>
.container_created{
    display: flex;
    width: 200px;
    height: 50px;

    position:fixed;
    bottom:-10px;
    right:10px;

    background-color: #fafafa;
    border: 1px solid #dadadaa2;
    border-radius: 5px;
    box-shadow: -3px -3px 5px #dadada7a;

    justify-content: center;
    align-items: center;
}

</style>
