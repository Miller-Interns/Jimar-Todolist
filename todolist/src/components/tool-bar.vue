<template>
  <div>
    <div id="inbox" class="tool-bar-element" @click="condition=!condition">
      <button v-bind:style="condition ? 
        {'background-color':'#f44336'}
        :{}">
        Inbox
      </button>
    </div>

    <div id="newTask" class="tool-bar-element" @click="addButtonState=!addButtonState, condition=true">
      <button v-bind:style="addButtonState ? 
        {'background-color':'#f44336'}
        :{}">
        Add Task
      </button>
    </div>

    <div class="text" v-if="addButtonState">
      <input  type="text" required placeholder="Enter Category Name" v-model="taskName" >
      <button @click="addButtonState = false, addTodo(taskName)">➕</button>
      <button @click="addButtonState = false">❌</button>
    </div>
    
    <div class="text" v-if="editMode">
      <input  type="text" required placeholder="Edit Category Name" v-model="taskName" >
      <button @click="editMode = false, editTodo()">➕</button>
      <button @click="editMode = false">❌</button>
    </div>

  </div>

</template>

<script setup lang="ts">
import inbox from './inbox.vue'
import { addTodo, editTodo } from '../composables/add-todo'
import {editMode} from "./task-list.vue"
import {condition, addButtonState} from './task-list.vue'
const taskName = '';
</script>

<style scoped>
#inbox {
  /* border: 1px solid orange; */
}

#newTask {
  /* border: 1px solid lime; */
}

#category {
  border: 1px solid lightblue;
}
.tool-bar-element {
  height: 10%;
}

.text{
  width:100%;
  border:1px solid blue;
}

.text button{
  height:5%;
  width:10%;
}

</style>
