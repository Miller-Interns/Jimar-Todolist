<!-- INSIDE OF APP -->

<script setup>
import todolist from '../components/main/to-do-list.vue'
</script>

<template>
  <div id="homeBox">
    <todolist />
  </div>
</template>

<style scoped>
#homeBox {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
