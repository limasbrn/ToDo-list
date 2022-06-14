<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="navbar">
    <div class="nav_content_wrap">
      <div class="logo_nav">Aqui vai a logo</div>
      <div class="wrapper_nav_link">
        <RouterLink style="text-decoration: none; color: inherit;" to="/"><span class="nav_link">Tarefas</span></RouterLink>
        <RouterLink style="text-decoration: none; color: inherit;" to="/formularios"><span class="nav_link">Formulário</span></RouterLink>
      </div>
    </div>

  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  height: 50px;

  background-color: #fafafa;
  border: 1px solid #dadada6b;
  box-shadow: 3px 3px 3px #dadada73;
   
  justify-content: center;
  align-items: center;
}
.nav_content_wrap{
  display: flex;
  width:80%;
  justify-content: space-between;
}
.logo_nav{
  border: red 1px solid;
}
.nav_link{
  margin-left:30px;
  font-weight: bolder;
  color: #7a7a7a;
}
.nav_link:hover {
  color:black;
}

</style>
