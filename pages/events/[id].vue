<script setup>
const route = useRoute()
console.log(route.params.id)
const app = useNuxtApp()
</script>

<template>
<div>
  id is {{$route.params.id}}
</div>
</template>

<style scoped>

</style>