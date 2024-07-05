<!--
PURPOSE:
DISPLAY BUTTONS FROM TOOL-BAR
-->

<template>
  <div class="heightAt100Percent">
    <taskList v-if="displayTaskList" />

    <div v-else class="showNone">
      <NothingHere/>
    </div>

  </div>
</template>

<script setup lang="ts">
import taskList from './task-list.vue'
import { displayTaskList } from '../../../composables/main-data-flow';
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
