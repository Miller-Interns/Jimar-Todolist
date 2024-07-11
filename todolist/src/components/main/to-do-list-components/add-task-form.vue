<template>
  <div id="addTaskIsPressed" class="tool-bar-element" v-show="addButtonState">
    Task Name:
    <input type="text" required placeholder="Enter Task Name" v-model="taskName" />

    Category:
    <select id="addTaskSelectCategory" class="tool-bar-element" v-model="selectedCategory">
      <OptionsSelect style="border-radius: 0vw;"/>
    </select>

    <div class="marginTopBy1vw">
      <center>
        <button @click="createToDo" class="isButton">Create</button>

        <button @click="updateAddButton_State(false)" id="cancelButton" class="isButton">
          Cancel
        </button>
      </center>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { addTodo } from '../../../composables/add-todo'
import {
  updateAddButton_State,
  updateDisplayTaskList
} from '../../../composables/condition-related/conditionals'
import { addButtonState, selectedCategory } from '../../../composables/main-data-flow'
import OptionsSelect from './templates/tool-bar-category-options.vue'

const taskName = ref('') //used for v-model

function createToDo() {
  updateAddButton_State(taskName.value === '')
  addTodo(taskName.value, selectedCategory.value)
  updateDisplayTaskList(true)
}
</script>

<style scoped>
@import '../../../assets/custom-css/addTask-form.css';
</style>
