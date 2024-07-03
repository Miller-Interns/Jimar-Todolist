<template>
  <div style="height: 100%">
    <taskList v-if="condition" />

    <div v-if="!condition" id="showNone">
      <!-- Nothing Here -->
      <div class="nothing">Nothing here</div>
    </div>
  </div>
</template>

<script setup>
import taskList, { condition } from '../tasks/task-list.vue'
</script>

<style scoped>
#showNone {
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
  place-items: center;
  /* border:1px solid green; */
}

.nothing {
  font-size: 2vw;
  display: flex;
  place-content: center;
  place-items: center;
  opacity: 0.5;
}
</style>
