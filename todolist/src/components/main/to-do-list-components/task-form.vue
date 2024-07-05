<template>
  <!-- List Builder-->
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <div class="content">
        <div class="contentMiddle">
          <span :class="{ done: todo.done }">
            <div id="clickableContents">
              <div class="displayFlex">
                <!-- TYPE CHECKBOX -->
                <input type="checkbox" v-model="todo.done" />
              </div>
              <!--Edit functions-->
              <div class="clickable" :style="checkBoxStateToggleStyle(todo.done)">
                {{ todo.text }}
              </div>

              <!-- Edit Mode -->
              <div id="buttons_superInnerList">
                <!-- edit -->
                <div v-if="!todo.done" style="display: flex">
                  <div v-if="!todo.editMode" style="display: flex">
                    <button
                      class="displayBox_buttons"
                      @click="todo.editMode = toggle(todo.editMode)"
                    >
                      <span class="emoji_class">🖊</span>
                    </button>
                  </div>
                  <div v-else style="display: flex">
                    <button class="displayBox_buttons" @click="displayBox(todo)">Change</button>

                    <button
                      id="cancelButton"
                      class="displayBox_buttons"
                      @click="todo.editMode = toggle(todo.editMode)"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <!-- edit -->

                <!-- remove -->
                <button class="remove" @click="removeTodo(todo)" v-if="canBeRemoved(todo)">
                  <span class="emoji_class">✖</span>
                </button>
                <!-- remove -->
              </div>
              <!-- Edit Mode -->
            </div>

            Category: <span> {{ todo.category }} </span>

            <div id="editInputs" v-if="!todo.done">
              <span v-if="todo.editMode">
                <input
                  type="text"
                  v-model.lazy="todo.text"
                  required
                  maxLength="23"
                /><!--TYPE TEXT-->
                <select class="tool-bar-element" v-model="todo.category">
                  <OptionsSelect />
                </select>
              </span>
            </div>
          </span>
        </div>
      </div>
    </li>
  </ul>
  <!-- List Builder -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { filteredTodos, removeTodo } from '../../../composables/add-todo'
import { toggle } from '../../../composables/condition-related/toggle-functions'
import { local_Storage } from '../../../stores/local-storage'
import { checkBoxStateToggleStyle } from '../../../composables/condition-related/conditional-styles'
import OptionsSelect from './templates/options-select.vue'
import { TodoList } from '../../../types/types'

onMounted(() => {
  local_Storage()
})

function displayBox(todo: TodoList) {
  todo.editMode = toggle(todo.editMode)
}

function canBeRemoved(todo: TodoList) {
  return !todo.editMode || todo.done
}
</script>

<style scoped>
@import '../../../assets/custom-css/task-form.css';
@import '../../../assets/custom-css/addTask-form.css';
</style>
