<!--
PURPOSE:
DISPLAY BUTTONS FROM TOOL-BAR
-->

<template>
  <div class="heightAt100Percent">
    <taskList v-if="displayTaskList" />
    <LifeCategory v-else-if="displayLifeCategory"/>
    <EducationCategory v-else-if="displayEducationCategory"/>
    <WorkCategory v-else-if="displayWorkCategory"/>
    <NatureCategory v-else-if="displayNatureCategory"/>
    <OthersCategory v-else-if="displayOthersCategory"/>

    <div v-else class="showNone">
      <NothingHere />
    </div>
  </div>
</template>

<script setup lang="ts">
import taskList from './task-list.vue'
import { displayEducationCategory, displayLifeCategory, displayNatureCategory, displayOthersCategory, displayTaskList, displayWorkCategory } from '../../../composables/main-data-flow'
import NothingHere from '../../messages/nothing-here.vue'
import LifeCategory from './category-pages/life-category.vue';
import EducationCategory from './category-pages/education-category.vue';
import WorkCategory from './category-pages/work-category.vue';
import NatureCategory from './category-pages/nature-category.vue';
import OthersCategory from './category-pages/others-category.vue';
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
