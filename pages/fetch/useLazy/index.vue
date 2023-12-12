<script setup>
import Loading from "~/components/Icons/loading.vue";

definePageMeta({
  layout: "fetch"
})

const {data: products, pending } = useLazyFetch('/api/products')

const {data: ssrProducts } = await useFetch(('/api/products'))

</script>

<template>
use lazy
  {{products}} {{pending}}
  <icons-loading />
  <div>
    useFetch
    <div>
      {{ssrProducts}}
    </div>
  </div>
</template>

<style scoped>

</style>