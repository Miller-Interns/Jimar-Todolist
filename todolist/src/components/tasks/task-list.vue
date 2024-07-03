<!-- INSIDE OF DISPLAY BOX -->


<script lang="ts">
import {ref} from 'vue'
import newForm from '../tasks/new-task-form.vue'
export const condition = ref(false)
export const addButtonState = ref(false)
export let editMode = ref(false)
import { addTodo, filteredTodos, removeTodo, editTodo, hideCompleted } from '../../composables/add-todo'
export let Subtask = ref(false);
let changeBG = ref(false)

let _todos = ref({})

export default{
  setup() {
    return{
      addTodo,
      filteredTodos,
      removeTodo,
      hideCompleted,
      editTodo,
      editMode,
      Subtask,
      changeBG
    }
  },
  components:{
    newForm
  }
}
</script>

<template> 

  <div id="taskList" style="  float:left;">
    <span style="font-size:1.4vw;">
      Tasks
    </span>

    <div id="innerList" >

      <!-- List Builder-->
      <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">

          <div id="superInnerList" style="margin-top:1vw;">

            <!-- Checkbox || Inner Todolist-->
            <div id="showText_superInnerList">
              <input type="checkbox" v-model="todo.done">
                <span :class="{ done: todo.done }" >
                  <span @click="Subtask=!Subtask" class="clickable" :style="todo.done ? {'text-decoration':'line-through'}:{}">
                    {{ todo.text }}
                    <!-- {{ todo }} -->
                  </span>

                  <span v-if="editMode">
                    <input type="text" v-model="todo.text">
                  </span>
                </span>
                <newForm/>
            </div>

            <!-- Edit Mode -->
            <div id="buttons_superInnerList">
              <!-- edit -->
              <button class="displayBox_buttons" @click="editTodo(todo), editMode=!editMode" v-if="!editMode">
                <span class="emoji_class">🖊</span>
              </button>
              
              <button class="displayBox_buttons" @click="editMode=!editMode" v-else>Change</button>
              <!-- edit -->

              <!-- remove -->
              <button class="displayBox_buttons" @click="editMode=!editMode" v-else>Change</button>

              <button class="remove"  @click="removeTodo(todo)" v-if="!editMode">
                <span class="emoji_class">✖</span>
              </button>
              <!-- remove -->

              <button @click="editMode=!editMode" v-else>Change</button>
              <button class="remove"  @click="editMode=!editMode" v-else>Cancel</button>
            </div>

          </div>
          
        </li>
      </ul>
      <!-- List Builder -->

    </div>

    <!-- Hide/Show Completed -->
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
  padding:2vw;
  display:inline;
}

#innerList {
  width: 100%;
  height: fit-content;
  padding:2vw;
  border-top: 1px solid grey;
  border-radius: 0vw;
}

#innerList button{
  width:20%;
  font-size:1vw;
}

#superInnerList{
  width:100%;
  height:20%;
  /* background-color:yellow; */
  border-bottom: 1px solid grey;
  border-radius: 0vw;
  padding:1vw;
}

#buttons_superInnerList{
  /* border:1px solid red; */
}

.emoji_class{
  font-size: 1vw;
}

.clickable{
  cursor: pointer;
  transition-duration: 0.6s;
  margin-left:0.5vw;
}

.clickable:hover{
  color: red;
  transition-duration: 0.6s;
}

</style>