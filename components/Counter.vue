<script setup>
const counter = useState('counter', () => 0)
</script>

<template>
count is {{counter}}
  <button @click.prevent="counter++">+</button>
  <button @click.prevent="counter--">-</button>
</template>

<style scoped>

</style>