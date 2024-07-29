<!-- INSIDE OF DISPLAY BOX -->

<!--
Purpose:
Lists task-forms
-->

<script setup lang="ts">
import { hideCompleted, toggleHideCompleted } from '../../../composables/conditions'
import TaskForm from './task-form.vue'
import { todos } from '../../../composables/add-todo'
import NothingHere from '../../messages/nothing-here.vue'
</script>

<template>
  <div id="taskList" style="float: left">
    <span style="font-size: 1.4vw"> Tasks </span>

    <div id="innerList">
      <TaskForm />
    </div>

    <!-- Hide/Show Completed -->
    <button @click="toggleHideCompleted()" v-if="todos.length !== 0">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>

    <NothingHere v-else />
  </div>
</template>

<style scoped>
@import '../../../assets/custom-css/task-list.css';
</style>
