<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<template>
<ul>
  <li v-for="product in products" :id="product.id">
    <p>{{product.name}}</p>
  </li>
</ul>
</template>

<style scoped>

</style>