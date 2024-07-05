<!-- INSIDE OF DISPLAY BOX -->

<!--
Purpose:
Lists task-forms
-->

<script setup lang="ts">
import { showIsCompletedState } from '../../../composables/condition-related/conditionals'
import TaskForm from './task-form.vue'
import { todos } from '../../../composables/add-todo'
import NothingHere from '../../messages/nothing-here.vue'
import { toggleHideCompleted } from '../../../composables/condition-related/toggle-functions'
import { TodoList } from '../../../types/types'

function isNotEmpty(todos: TodoList[]) {
  return todos.length !== 0
}
</script>

<template>
  <div id="taskListContainer" style="float: left">
    <span> Tasks </span>

    <div class="taskListHeader">
      <TaskForm />
    </div>

    <!-- Hide/Show Completed -->
    <button id="hideCompleted" @click="toggleHideCompleted()" v-if="isNotEmpty(todos)">
      {{ showIsCompletedState() }}
    </button>

    <NothingHere v-else />
  </div>
</template>

<style scoped>
@import '../../../assets/custom-css/task-list.css';
</style>
