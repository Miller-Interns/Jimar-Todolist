<!-- INSIDE OF DISPLAY BOX -->

<!--
Purpose:
Lists task-forms
-->

<script lang="ts">//change into script setup lang="ts"
import { watch } from 'vue'
// import newForm from '../../tasks/new-task-form.vue'
import {
  addTodo,
  filteredTodos,
  removeTodo,
  editTodo,
  todos
} from '../../../composables/add-todo'
import { hideCompleted, Subtask, toggleHideCompleted } from '../../../composables/conditions'

export default {
  setup() {
    const list_todos = window.localStorage.getItem('todos')

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
      toggleHideCompleted
    }
  },
  // components: {
  //   newForm
  // },
  props: ['todos_id']
}
</script>

<template>
  <div id="taskList" style="float: left">
    <span style="font-size: 1.4vw"> Tasks </span>

    <div id="innerList">
      <!-- List Builder-->
      <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
          <div id="superInnerList" style="margin-top: 1vw">
            <!-- Checkbox || Inner Todolist-->
            <div id="showText_superInnerList">
              <span :class="{ done: todo.done }">
                <div id="innerClickable">
                  <div class="displayFlex">
                    <input type="checkbox" v-model="todo.done" />
                  </div>

                  <div
                    @click="Subtask = !Subtask"
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
                      @click="editTodo(todo), (todo.editMode = !todo.editMode)"
                      v-if="!todo.editMode"
                    >
                      <span class="emoji_class">🖊</span>
                    </button>

                    <button
                      class="displayBox_buttons"
                      @click="todo.editMode = !todo.editMode"
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
                    <!-- <button class="remove" @click="todo.editMode = !todo.editMode" v-else>
                      Cancel
                    </button> -->
                  </div>
                  <!-- Edit Mode -->
                </div>
                <span v-if="todo.editMode">
                  <input type="text" v-model="todo.text" maxLength="30" />
                </span>
              </span>
              <!--  -->
              <!-- <newForm v-bind:id="'todos_id' + todo.id" /> -->
              <!--  -->
            </div>
          </div>
        </li>
      </ul>
      <!-- List Builder -->
    </div>

    <!-- Hide/Show Completed -->
    <button @click="toggleHideCompleted()">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
  </div>
</template>

<style scoped>
@import '../../../assets/custom-css/task-list.css';
</style>
