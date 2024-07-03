<template>
  <div id="outerForm" v-if="Subtask">
    <!-- Subtask Area -->
    <div style="display:flex; place-items: center; place-content: center;">
      
      <!-- Add Subtask Toggle-->
      <button @click="addSubtask_State=!addSubtask_State" 
        :style="addSubtask_State ? {'background-color':'red'} : {}">
        
          {{ addSubtask_State ? 'Cancel' : 'Add Subtask' }}

      </button>

      <button v-if="addSubtask_State">
        OK
      </button>

    </div>

      <input type="text" placeholder="Task Name" v-if="addSubtask_State">
 
</div>

</template>

<script lang="ts">
import { addTodo, filteredTodos, removeTodo, editTodo, hideCompleted, todos } from '../../composables/add-todo'
import {Subtask} from './task-list.vue'

export default{
  data() {
    return{
      addSubtask_State:false
    }
  },
  setup(){
    return{
      addTodo,
      filteredTodos, 
      removeTodo, 
      editTodo, 
      hideCompleted,
      todos,
      Subtask
    }
  }
}
</script>

<style scoped>
#outerForm {
  height: fit-content;
  width: 100%;
  z-index: 1;
  /* background-color: orange; */
  /* border: 1px solid black; */
  padding:1vw;
}

button{
  width:50%;
}
</style>
