<script lang="ts">
import {ref} from 'vue'
// import newForm from './new-task-form.vue'
export const condition = ref(false)
export const addButtonState = ref(false)
import { addTodo, filteredTodos, removeTodo, editTodo, hideCompleted } from '../composables/add-todo'
export let editMode = ref(false)

export default{
  components:{
    // newForm
  },
  setup() {
    return{
      addTodo,
      filteredTodos,
      removeTodo,
      hideCompleted,
      editTodo,
      editMode
    }
  },
}
</script>

<template> 
  <div id="taskList" style="  float:left;">
    <div id="innerList" >
      <!-- List Builder-->
      <ul>
        <li v-for="todo in filteredTodos" :key="todo.id" >

          <div id="superInnerList">
            <div id="showText_superInnerList" v-if="!editMode">
              <input type="checkbox" v-model="todo.done">
              <span :class="{ done: todo.done }" >{{ todo.text }}</span>
            </div>

            <div id="showText_superInnerList" v-if="editMode">
              <input type="text" v-model="todo.text">
            </div>

            <div id="buttons_superInnerList">
              <button @click="editTodo(todo), editMode=!editMode" v-if="!editMode">✏</button>
              <button @click="editMode=!editMode" v-else>Change</button>
              <button @click="removeTodo(todo)" id="remove" v-if="!editMode">X</button>
              <button @click="editMode=!editMode" id="remove" v-else>Cancel</button>
            </div>
          </div>
          
        </li>
      </ul>
    </div>
    <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </button>
  </div> 
</template>

<style scoped>
#taskList {
  width: 100%;
  height: 100%;
  /* border: 1px solid yellow; */
  padding:1vw;
  display:inline;
}

#innerList {
  width: 100%;
  height: fit-content;
  border: 1px solid pink;
  /* display:flex;
  place-content:center;
  place-items:center; */
}

#innerList button{
  width:20%;
  font-size:1vw;
}

#text_task {
  font-size: 3vw;
  font-family: Arial, Helvetica, sans-serif;
}

li{
  display:inline;
}

#superInnerList{
  width:100%;
  height:20%;
  background-color:yellow;
}

</style>