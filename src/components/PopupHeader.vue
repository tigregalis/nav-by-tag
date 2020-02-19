<template>
  <header class="border-gray-400 border-b p-2">
      <slot>nav-by-tag</slot>
  </header>
</template>

<script>
export default {
  name: 'PopupHeader',
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
