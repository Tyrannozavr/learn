<script setup>
import Pages from '~/composables/HeaderPages'
// const pages = default.pages
// const pages = pages
</script>

<template>
  <header>
    <p>custom layout <IconsEmoji /></p>
    <HeaderMenu :pages="Pages"/>
  </header>
  <slot />
</template>

<style scoped>

</style>