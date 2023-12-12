<script setup>
const props = defineProps({
  pages: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul>
    <li>
      <NuxtLink
          class="page_link"
          :class="{page_link_active: $route.path === page.link}"
          v-for="page in props.pages"
          :to="page.link">
        {{page.name}}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.page_link {
  margin: 0 10px 0 0;
  border-radius: 3px;
  border-color: darkcyan;
  border-width: 1px;
  background-color: darkcyan;
  color: white;
}
.page_link_active {
  background-color: aqua;
  color: darkgray;
}

</style>