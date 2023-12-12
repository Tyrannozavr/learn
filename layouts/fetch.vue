<script setup lang="ts">
const Pages = [
  {name: 'Fetch', 'link': '/fetch/'},
  {name: '/useLazy', 'link': '/fetch/useLazy'},
]
</script>

<template>
  <HeaderMenu :pages="Pages" />
  <slot />
</template>

<style scoped>

</style>