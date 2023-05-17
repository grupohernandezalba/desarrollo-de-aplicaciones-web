<script setup>
import HolaMundo from './components/HolaMundo.vue'
</script>

<template>
      <div>
            <!-- Pascal Case-->
            <HolaMundo mensaje="Componente en VueJS con NodeJS" />

            <HolaMundo mensaje="Otro componente"></HolaMundo>

            <!-- Kebab Case -->
            <hola-mundo mensaje=" wow-tambien-funciona-en-kebab-case "></hola-mundo>

            <!-- Camel Case -->
            <holaMundo mensaje="¿ Y en Camel Case?" color="bg-primary"></holaMundo>
      </div>
</template>
