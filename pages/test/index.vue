<script setup lang="ts">
// import Greeting from "~/composables/Greeting";
import {onClickOutside} from "@vueuse/core";
import Counter from "~/components/Counter.vue";

// const nuxtApp = useNuxtApp()
// nuxtApp.provide('hello', (name) => `Hello ${name}!`)
// console.log(nuxtApp.$hello('dmiv'))
const data = ref('')
const button = ref(null)
const greeting = Greeting()
// console.log(greeting())
// console.log(greeting('Lord Dmitriy'))
onClickOutside(button, () => data.value = 'outside')
// console.log(useNuxtApp())


// const { $sayHello } = useNuxtApp()
// $sayHello('Tyrannozavr')
</script>

<template>
test page
  <div>
    <button
        class='button'
        ref="button"
        @click.prevent="data = 'click'"
    >button</button> {{data}}
    <counter />
  </div>
</template>

<style scoped>
.button {
  background-color: green;
}
</style>