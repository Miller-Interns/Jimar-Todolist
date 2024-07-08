<template>
  <!-- List Builder-->
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <taskFormContent :todo="todo"/>
    </li>
  </ul>
  <!-- List Builder -->
</template>

<script setup lang="ts">
import { filteredTodos } from '../../../composables/add-todo'
import taskFormContent from './task-form-content.vue'
</script>

<style scoped>
@import '../../../assets/custom-css/task-form.css';
@import '../../../assets/custom-css/addTask-form.css';
</style>
