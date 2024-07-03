<!-- INSIDE OF DISPLAY BOX -->

<script lang="ts">
import { ref, watch } from 'vue'
import newForm from '../tasks/new-task-form.vue'
export const condition = ref(false)
export const addButtonState = ref(false)
// export let editMode = ref(false)
import {
  addTodo,
  filteredTodos,
  removeTodo,
  editTodo,
  hideCompleted,
  todos
} from '../../composables/add-todo'
export let Subtask = ref(false)

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
      Subtask
    }
  },
  components: {
    newForm
  },
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
                    <button class="remove" @click="todo.editMode = !todo.editMode" v-else>
                      Cancel
                    </button>
                  </div>
                  <!-- Edit Mode -->
                </div>
                <span v-if="todo.editMode">
                  <input type="text" v-model="todo.text" maxLength="30" />
                </span>
              </span>
              <!--  -->
              <newForm v-bind:id="'todos_id' + todo.id" />
              <!--  -->
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
  padding: 2vw;
  display: inline;
}

#innerList {
  width: 100%;
  height: fit-content;
  padding: 2vw;
  border-top: 1px solid grey;
  /* border: 1px solid blue; */
  border-radius: 0vw;
}

#innerList button {
  width: 20%;
  font-size: 1vw;
}

#superInnerList {
  display: flex;
  width: 100%;
  height: 20%;
  /* background-color: yellow; */
  border-bottom: 1px solid grey;
  border-radius: 0vw;
  /* border: 1px solid green; */
  padding: 1vw;
}

#buttons_superInnerList {
  /* border: 1px solid red; */
  display: flex;
  width: fit-content;
}

#buttons_superInnerList button {
  /* border: 1px solid red; */
  display: flex;
  width: fit-content;
}

#showText_superInnerList {
  width: 100%;
  /* border: 1px solid brown; */
}

.emoji_class {
  font-size: 1vw;
}

.clickable {
  /* cursor: pointer; */
  transition-duration: 0.6s;
  margin-left: 0.5vw;
  /* background-color: aqua; */
  border-bottom: 1px solid grey;
  border-radius: 0vw;
  font-size: 2vw;
  width: 80%;
  display: flex;
  place-items: center;
}

/* .clickable:hover {
  color: red;
  transition-duration: 0.6s;
} */

#innerClickable {
  display: flex;
  /* border: 1px solid purple; */
}
</style>
