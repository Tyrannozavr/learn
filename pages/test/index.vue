<script setup lang="ts">
import Greeting from "~/composables/Greeting";

const nuxtApp = useNuxtApp()
nuxtApp.provide('hello', (name) => `Hello ${name}!`)
console.log(nuxtApp.$hello('dmiv'))


const greeting = Greeting()
console.log('greeting')
console.log(greeting())
console.log(greeting('Lord Dmitriy'))
</script>

<template>
test page
</template>

<style scoped>

</style>