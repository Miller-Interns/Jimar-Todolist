<template>
  <!-- List Builder-->
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <div class="content">
        <div class="contentMiddle">
          <span :class="{ done: todo.done }">
            <div id="clickableContents">
              <div class="displayFlex">
                <!-- CHECKBOX -->
                <input type="checkbox" v-model="todo.done" />
              </div>
              <!--Edit functions-->
              <div class="clickable" :style="todo.done ? lineThrough : {}">
                {{ todo.text }}
              </div>

              <!-- Edit Mode -->
              <div id="buttons_superInnerList">
                <!-- edit -->
                <button
                  class="displayBox_buttons"
                  @click="editTodo(todo), (todo.editMode = toggle(todo.editMode))"
                  v-if="!todo.editMode && !todo.done"
                >
                  <span class="emoji_class">🖊</span>
                </button>

                <button
                  class="displayBox_buttons"
                  @click="
                    (todo.editMode = toggle(todo.editMode)), (todo.category = selectedCategory)
                  "
                  v-if="todo.editMode && !todo.done"
                >
                  Change
                </button>

                <button
                  id="cancelButton"
                  class="displayBox_buttons"
                  @click="todo.editMode = toggle(todo.editMode)"
                  v-if="todo.editMode && !todo.done"
                >
                  Cancel
                </button>
                <!-- edit -->

                <!-- remove -->
                <button class="remove" @click="removeTodo(todo)" v-if="!todo.editMode || todo.done">
                  <span class="emoji_class">✖</span>
                </button>
                <!-- remove -->
              </div>
              <!-- Edit Mode -->
            </div>

            Category: <span> {{ todo.category }} </span>

            <div id="editInputs" v-if="!todo.done">
              <span v-if="todo.editMode">
                <input type="text" v-model="todo.text" required maxLength="23" /><!--TYPE TEXT-->
                <select class="tool-bar-element" v-model="selectedCategory">
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
//change into script setup lang="ts"
import { onMounted } from 'vue'
import { filteredTodos, removeTodo, editTodo } from '../../../composables/add-todo'
import { toggle } from '../../../composables/condition-related/toggle-functions'
import { local_Storage } from '../../../stores/local-storage'
import { lineThrough } from '../../../composables/condition-related/conditional-styles'
import OptionsSelect from './templates/options-select.vue'
import { selectedCategory } from '../../../composables/main-data-flow'

onMounted(() => {
  local_Storage()
})
</script>

<style scoped>
@import '../../../assets/custom-css/task-form.css';
@import '../../../assets/custom-css/addTask-form.css';
</style>
