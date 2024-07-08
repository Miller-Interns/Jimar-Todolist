<!-- INSIDE OF DISPLAY BOX -->

<!--
Purpose:
Lists task-forms
-->

<template>
  <div id="taskListContainer" style="float: left">
    <span> Tasks </span>

    <div class="taskListHeader">
      <TaskForm v-if="isNotEmpty(todos)"/>
      <NothingHere v-else class="centerize"/>
    </div>

    <!-- Hide/Show Completed -->
    <button id="hideCompleted" @click="toggleHideCompleted()" v-if="isNotEmpty(todos)">
      {{ showIsCompletedState() }}
    </button>
    
  </div>
</template>

<script setup lang="ts">
import { showIsCompletedState } from '../../../composables/condition-related/conditionals'
import TaskForm from './task-form.vue'
import { todos } from '../../../composables/add-todo'
import NothingHere from '../../messages/nothing-here.vue'
import { toggleHideCompleted } from '../../../composables/condition-related/toggle-functions'
import { TodoList } from '../../../types/types'
import { onMounted } from 'vue'
import { local_Storage } from '../../../stores/local-storage'

function isNotEmpty(todos: TodoList[]) {
  return todos.length !== 0
}

onMounted(() => {
  local_Storage()
})
</script>

<style scoped>
@import '../../../assets/custom-css/task-list.css';
.centerize{
  margin-top:35vh;
  margin-left:2vw;
}
</style>
