<script setup>
defineProps({
  mensaje: {
    type: String,
    required: true
  },
  color: {
        type: String,
      required: true
  }
})
</script>

<template>
    <div class="container">
      <div class="row"> 
          <div class="col-12" :class="color">
            <h1>{{ mensaje }} {{ color }}</h1>
          </div>
      </div>
    </div>
</template>

<style scoped>
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    padding: 25px;
  }
</style>