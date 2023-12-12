<script setup>
import Loading from "~/components/Icons/loading.vue";

definePageMeta({
  layout: "fetch"
})

const {data: products, pending } = useLazyFetch('/api/productsClientSide')

const {data: ssrProducts } = await useFetch(('/api/products'))

</script>

<template>
<!--use lazy-->
  <div class="ssrFalseProducts">
    {{products}} {{pending}}
  </div>
  <icons-loading />
  <div>
<!--    useFetch-->
    <div class="ssrProducts">
      {{ssrProducts}}
    </div>
  </div>
</template>

<style scoped>

</style>