<!-- INSIDE OF TO-DO-LIST -->


<template>
  <div id="tool-bar">

    <!-- Inbox -->
    <div id="inbox" class="tool-bar-element" @click="condition=!condition">
      <button v-bind:style="condition ? 
        {'background-color':'#f44336'}
        :{}">
        Inbox
      </button>
    </div>

    <!-- Add Task -->
    <div id="newTask" class="tool-bar-element" @click="addButtonState=!addButtonState, condition=true">
      <button v-bind:style="addButtonState ? 
        {'background-color':'#f44336'}
        :{}">
        Add Task
      </button>
    </div>

    <!-- Add Task Pressed -->
    <div id="addTaskIsPressed" class="tool-bar-element" v-if="addButtonState">
      <input  type="text" required placeholder="Enter Task Name" v-model="taskName" >
      
      <center>
        <button @click="addButtonState = false, addTodo(taskName)" class="isButton">
          Create
        </button>

        <button @click="addButtonState = false" id="cancelButton" class="isButton">
          Cancel
        </button>
      </center>
    </div>

    <!-- <div style="width:100%; height:fit-content; background-color: aqua;" class="tool-bar-element">
    </div> -->

  </div>

</template>

<script setup lang="ts">
// import inbox from './inbox.vue'
import { addTodo, editTodo } from '../../composables/add-todo'
// import {editMode} from "./tasks/task-list.vue"
import {condition, addButtonState} from '../tasks/task-list.vue'
let taskName = '';
let empty:boolean;

if(taskName == ""){
  empty = true;
}
</script>

<style scoped>

#category {
  border: 1px solid lightblue;
}
.tool-bar-element {
  height: 10%;
  margin-top:1vw;
}

#addTaskIsPressed{
  width:100%;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-radius: 0vw;
  padding:1vw;
}

#tool-bar{
  padding:1vw;
}

input[type=checkbox]{
  border-radius: 1vw;
}

#cancelButton{
  background-color: tomato;
}

#cancelButton:hover{
  background-color: #f44336;
}

.isButton{
  width:45%;
}

#newTask{
}
</style>
