<template>
    <header>
      Default layout
      <HeaderMenu :pages="Pages"/>
    </header>
    <slot />
</template>
<script setup>
import Pages from "~/composables/HeaderPages";
// const pages = [
//   {name: 'Home', link: '/'},
//   {name: 'Events', link: '/events/'},
//   {name: 'Test', link: '/test'},
//   {name: 'Admin', link: '/admin'},
//   {name: 'Fetch', link: '/fetch'},
// ]
</script>
