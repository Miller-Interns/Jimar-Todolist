<!-- INSIDE OF TO-DO-LIST -->

<template>
  <div id="outerBox_toolBar">
    <!-- Inbox -->
    <div id="inbox" class="tool-bar-element" @click="toggleCondition()">
      <button v-bind:style="toggleDisplayTaskListStyle">Inbox</button>
    </div>

    <!-- Add Task -->
    <div id="newTask" class="tool-bar-element" @click="toggleAddButtonState()">
      <button :style="toggleAddButtonStyle">Add Task</button>
    </div>

    <!-- Add Task Form -->
    <addTaskForm />

    <!-- List of Categories -->
    <CategoriesList />
  </div>
</template>

<script setup lang="ts">
import { toggleAddButtonState } from '../../../composables/condition-related/toggle-functions'
import { toggleCondition } from '../../../composables/condition-related/toggle-functions'
import {
  toggleAddButtonStyle,
  toggleDisplayTaskListStyle
} from '../../../composables/condition-related/conditional-styles'
import addTaskForm from './add-task-form.vue'
import CategoriesList from './categories-components/categories-list.vue'
</script>

<style scoped>
@import '../../../assets/custom-css/tool-bar.css';
</style>
