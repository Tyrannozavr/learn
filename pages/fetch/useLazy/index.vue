<script setup>
import Loading from "~/components/Icons/loading.vue";

definePageMeta({
  layout: "fetch"
})

const {data: products, pending } = useLazyFetch('/api/productsClientSide')

const {data: ssrProducts } = await useFetch('/api/products')

</script>

<template>
  <h4>Here is ssr loaded products</h4>
  <div class="ssrProducts">
<!--    {{ssrProducts}}-->
    <products-list :products="ssrProducts" />
  </div>
  <h4>And here will be Client side loaded products</h4>
  <icons-loading v-if="pending" />
  <div class="ssrFalseProducts" v-else>
<!--    {{products}}-->
    <products-list :products="products" />
  </div>
  <div>
  </div>
</template>

<style scoped>

</style>