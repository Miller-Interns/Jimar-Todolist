<template>
    <div id="addTaskIsPressed" class="tool-bar-element" v-show="addButtonState">
        Task Name:
      <input type="text" required placeholder="Enter Task Name" v-model="taskName" />
      
      Category:
      <select class="tool-bar-element" v-model="selectedCategory">
        <OptionsSelect/>
      </select>

      <center>
        <button @click="updateAddButton_State(taskName===''), addTodo(taskName,selectedCategory), updateDisplayTaskList(true)" class="isButton">
          Create
        </button>

        <button @click="updateAddButton_State(false)" id="cancelButton" class="isButton">
          Cancel
        </button>
      </center>
    </div>
</template>

<script setup lang="ts">

let taskName = ''; //used for v-model

import { addTodo } from '../../../composables/add-todo'
import { updateAddButton_State, updateDisplayTaskList } from '../../../composables/condition-related/conditionals'
import { addButtonState, selectedCategory } from '../../../composables/main-data-flow';
import OptionsSelect from './templates/options-select.vue';

</script>

<style scoped>
@import '../../../assets/custom-css/addTask-form.css';
</style>