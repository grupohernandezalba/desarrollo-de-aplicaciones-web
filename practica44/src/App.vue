<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/Somos">Somos</RouterLink>
        <RouterLink to="/Productos">Productos</RouterLink>
    </nav>
  <RouterView />
  </div>
</template>


