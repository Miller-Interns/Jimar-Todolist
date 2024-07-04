<template>
  <!-- List Builder-->
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <div class="content">
        <div class="contentMiddle">
          <span :class="{ done: todo.done }">
            <div id="clickableContents">
              <div class="displayFlex">
                <input type="checkbox" v-model="todo.done" />
              </div>
              <!--Edit functions-->
              <div
                class="clickable"
                :style="todo.done ? { 'text-decoration': 'line-through' } : {}"
              >
                {{ todo.text }}

              </div>
              
              <!-- Edit Mode -->
              <div id="buttons_superInnerList">
                <!-- edit -->
                <button
                  class="displayBox_buttons"
                  @click="editTodo(todo), (todo.editMode = toggleEditMode(todo.editMode))"
                  v-if="!todo.editMode"
                >
                  <span class="emoji_class">🖊</span>
                </button>

                <button
                  class="displayBox_buttons"
                  @click="todo.editMode = toggleEditMode(todo.editMode)"
                  v-else
                >
                  Change
                </button>
                <!-- edit -->

                <!-- remove -->
                <button class="remove" @click="removeTodo(todo)" v-if="!todo.editMode">
                  <span class="emoji_class">✖</span>
                </button>
                <!-- remove -->
              </div>
              <!-- Edit Mode -->
            </div>
            
            Category: <span> {{todo.category}} </span>
            <div id="editInputs">
              <span v-if="todo.editMode">
                <input type="text" v-model="todo.text" maxLength="23" />
                <select class="tool-bar-element" v-model="selected">
                  <option disabled value="">Please select one</option>
                  <option>Life</option>
                  <option>Education</option>
                  <option>Work</option>
                  <option>Nature</option>
                  <option>Others</option>
                </select>
              </span>
            </div>
              <div id="subTaskArea" v-if="false">
                <div id="subTaskArea_content">
                  {{todo.sub_text}}
                  <input type="text" v-model="todo.sub_text" maxLength="23"/>
                </div>
              </div>
            
            <div id="gotoSubTask_button" v-if="false">
              <button @click="subAddTodo(todo.subTask.sub_text)">
                Add Subtask
              </button>
            </div>

          </span>
        </div>
      </div>
    </li>
  </ul>
  <!-- List Builder -->
</template>

<script lang="ts">
//change into script setup lang="ts"
import { watch } from 'vue'
import { addTodo, filteredTodos, removeTodo, editTodo, todos, subAddTodo } from '../../../composables/add-todo'
import { receive }  from './sub-task-form.vue';
import subTaskForm from './sub-task-form.vue';
import {
  hideCompleted,
  Subtask,
  toggleEditMode,
  toggleHideCompleted
} from '../../../composables/condition-related-stuffs/conditionals'

export default {
  data(){
    return{

    }
  },
  setup() {
    const list_todos = window.localStorage.getItem('todos')
    const selected = "";

    if (list_todos) {
      todos.value = JSON.parse(list_todos)
    }

    watch(
      todos,
      (val) => {
        window.localStorage.setItem('todos', JSON.stringify(val))
      },
      { deep: true }
    )
    return {
      addTodo,
      filteredTodos,
      removeTodo,
      hideCompleted,
      editTodo,
      Subtask,
      toggleHideCompleted,
      toggleEditMode,
      receive,
      subTaskForm,
      subAddTodo
    }
},
  props: ['todos_id']
}
</script>

<style scoped>
/* @import '../../../assets/custom-css/task-list.css'; */
@import '../../../assets/custom-css/task-form.css';
</style>
