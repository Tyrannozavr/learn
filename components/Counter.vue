<script setup>
const counter = useState('counter', () => 0)
</script>

<template>
  <div>count is {{counter}}</div>
  <button class="button" @click.prevent="counter--">-</button>
  <button class="button" @click.prevent="counter++">+</button>
</template>

<style scoped>
.button {
  background-color: darkcyan;
  padding: 10px 10px 10px 10px;
  margin: 3px 30px 3px 3px;
  border-radius: 8px;
  width: 2%
}
</style>