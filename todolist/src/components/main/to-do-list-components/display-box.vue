<!--
PURPOSE:
DISPLAY BUTTONS FROM TOOL-BAR
-->

<template>
  <div class="heightAt100Percent"><!--STYLE PUT INTO CSS-->
    <taskList v-if="displayTaskList" /><!--CHANGE CONDITION INTO displayTaskList-->

    <div v-else id="showNone">
      <!-- Nothing Here -->
      <div class="nothing">Nothing here</div>
    </div>
  </div>
</template>

<script setup>
import taskList from './task-list.vue'
import { displayTaskList } from '../../../composables/conditions';
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
