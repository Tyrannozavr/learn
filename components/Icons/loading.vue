<script setup>
</script>
<template>
  <div class="spinner"></div>
</template>

<style>
.spinner {
  height: 50px;
  width: 50px;
  border-left: 3px solid greenyellow;
  border-bottom: 3px solid greenyellow;
  border-right: 3px solid greenyellow;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spinner 1s linear infinite;
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>