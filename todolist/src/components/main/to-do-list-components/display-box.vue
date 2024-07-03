<!--
PURPOSE:
DISPLAY BUTTONS FROM TOOL-BAR
-->

<template>
  <div class="heightAt100Percent"><!--STYLE PUT INTO CSS-->
    <taskList v-if="displayTaskList" /><!--CHANGE CONDITION INTO displayTaskList-->

    <div v-else class="showNone">
      <!-- Nothing Here -->
      <NothingHere/>
    </div>
  </div>
</template>

<script setup>
import taskList from './task-list.vue'
import { displayTaskList } from '../../../composables/conditions';
import NothingHere from '../../messages/nothing-here.vue';
</script>

<style>
.showNone {
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
  place-items: center;
  /* border:1px solid green; */
}
</style>
