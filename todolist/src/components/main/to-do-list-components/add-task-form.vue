<template>
    <div id="addTaskIsPressed" class="tool-bar-element" v-if="addButton_State">
        Task Name:
      <input type="text" required placeholder="Enter Task Name" v-model="taskName" />
      
      Category:
      {{ selected }}
      <select class="tool-bar-element" v-model="selected">
        <option disabled value="">Please select one</option>
        <option>Life</option>
        <option>Education</option>
        <option>Work</option>
        <option>Nature</option>
        <option>Others</option>
      </select>

      <center>
        <button @click="updateAddButton_State(taskName===''), addTodo(taskName,selected), updateDisplayTaskList(true)" class="isButton">
          Create
        </button>

        <button @click="updateAddButton_State(false)" id="cancelButton" class="isButton">
          Cancel
        </button>
      </center>
    </div>
</template>

<script lang="ts">

let taskName = ''; //used for v-model

import { addTodo } from '../../../composables/add-todo'
import { addButton_State, updateAddButton_State, updateDisplayTaskList } from '../../../composables/condition-related-stuffs/conditionals'

export default{
    setup() {
        return{
            taskName,
            addTodo,
            addButton_State,
            updateAddButton_State,
            updateDisplayTaskList
        }
    },
    data() {
        return{
            selected:""
        }
    }
}
</script>

<style scoped>
@import '../../../assets/custom-css/addTask-form.css';
</style>