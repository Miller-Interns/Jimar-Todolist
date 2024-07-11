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
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
