<!-- INSIDE OF TO-DO-LIST -->

<template>
  <div id="addTaskContainer" class="outerBox_toolBar">
    <!-- Inbox -->
    <div id="inbox" class="tool-bar-element" @click="toggleDisplayTaskList()">
      <button v-bind:style="toggleDisplayTaskListStyle">Tasks</button>
    </div>

    <!-- Add Task -->
    <div id="newTask" class="tool-bar-element" @click="toggleAddButtonState()">
      <button :style="toggleAddButtonStyle">Add Task</button>
    </div>

    <!-- Add Task Form -->
    <addTaskForm class="noMargin"/>
  </div>

  <div id="categoriesContainer" class="outerBox_toolBar">
    <div class="tool-bar-element" >
      <div @click="toggleShowCategoryOptions" class="bgColorSoftDarkGrey" id="categoriesContent">
        <div >
          Categories:
        </div>
         <div :style="toggleShowCategoryOptionStyle">
          ⬆️
         </div>
         
      </div>
      <OptionsSelect v-if="showCategoryOptions" class="bgColorSoftDarkGrey"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toggleAddButtonState, toggleShowCategoryOptions } from '../../../composables/condition-related/toggle-functions'
import { toggleDisplayTaskList } from '../../../composables/condition-related/toggle-functions'
import {
  toggleAddButtonStyle,
  toggleDisplayTaskListStyle,
  toggleShowCategoryOptionStyle
} from '../../../composables/condition-related/conditional-styles'
import addTaskForm from './add-task-form.vue'
import OptionsSelect from './templates/tool-bar-category-options.vue';
import { showCategoryOptions } from '../../../composables/main-data-flow';
</script>

<style scoped>
@import '../../../assets/custom-css/tool-bar.css';
</style>
