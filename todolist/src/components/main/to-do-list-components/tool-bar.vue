<!-- INSIDE OF TO-DO-LIST -->

<template>

  <div id="outerBox_toolBar"><!-- CHANGE NAMING TYPE INTO CAMEL_CASE, change into outerBox_toolBar-->
    <!-- Inbox -->
    <div id="inbox" class="tool-bar-element" @click="toggleCondition()"><!--USE FUNCTION, NEVER USE LOGIC IN TEMPLATE; PUT IN SCRIPT-->
      <button v-bind:style="displayTaskList ? { 'background-color': '#f44336' } : {}">Inbox</button>
    </div>

    <!-- Add Task -->
    <div
      id="newTask"
      class="tool-bar-element"
      @click="toggleAddButton_State(), updateDisplayTaskList(true)"
    >
      <button :style="addButton_State ? { 'background-color': '#f44336' } : {}">
        Add Task
      </button>
    </div>

    <!-- Add Task Pressed -->
    <div id="addTaskIsPressed" class="tool-bar-element" v-if="addButton_State">
      <input type="text" required placeholder="Enter Task Name" v-model="taskName" />

      <center>
        <button @click="updateAddButton_State(false), addTodo(taskName)" class="isButton">
          Create
        </button>

        <button @click="updateAddButton_State(false)" id="cancelButton" class="isButton">Cancel</button>
      </center>
    </div>

    <!-- <div style="width:100%; height:fit-content; background-color: aqua;" class="tool-bar-element">
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import inbox from './inbox.vue'
import { addTodo } from '../../../composables/add-todo'
// import {editMode} from "./tasks/task-list.vue"
import { addButton_State, toggleAddButton_State, updateAddButton_State } from '../../../composables/conditions'
import { displayTaskList, toggleCondition, updateDisplayTaskList } from '../../../composables/conditions';
let taskName = ''
</script>

<style scoped>
@import '../../../assets/custom-css/tool-bar.css';
</style>
