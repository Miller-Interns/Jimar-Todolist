<template>
  <div id="homeBox">
    <toDoList />
  </div>
</template>

<script setup lang="ts">
import toDoList from '../components/main/to-do-list.vue'
</script>

<style scoped>
#homeBox {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
