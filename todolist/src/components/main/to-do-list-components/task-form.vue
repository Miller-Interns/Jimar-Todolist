<template>
  <!-- List Builder-->
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <div class="taskListContent">
        <div class="taskListContentMiddle">
          <span :class="{ done: todo.done }">
            <div id="taskListClickableContents">
              <div class="displayFlex">
                <!-- TYPE CHECKBOX -->
                <input type="checkbox" v-model="todo.done" />
              </div>

              <div class="clickable" :style="checkBoxStateToggleStyle(todo.done)">
                <!-- SHOW TASK NAME -->
                {{ todo.text }}
              </div>

              <!-- EDIT MODE -->
              <div id="editModeButtons">
                <div v-if="!todo.done" style="display: flex">
                  <div v-if="!todo.editMode" style="display: flex">
                    <button
                      class="displayBox_buttons"
                      @click="todo.editMode = toggle(todo.editMode)"
                    >
                      <span class="emoji_class">🖊</span>
                    </button>
                  </div>
                  <div v-else class="onEditMode">
                    <button class="displayBox_buttons" @click="toggleEditModeState(todo)">Change</button>

                    <button
                      id="cancelButton"
                      class="displayBox_buttons"
                      @click="todo.editMode = toggle(todo.editMode)"
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                <!-- remove -->
                <button class="remove" @click="removeTodo(todo)" v-if="removable(todo)">
                  <span class="emoji_class">✖</span>
                </button>
                <!-- remove -->
              </div>
              <!-- EDIT MODE -->
            </div>

            <!-- SHOW TASK CATEGORY -->
            Category: <span> {{ todo.category }} </span>

            <!--EDIT MODE INPUTS-->
            <div id="editModeInputs" v-if="!todo.done">
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
            <!--EDIT MODE INPUTS-->
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
import { removable, toggleEditModeState } from '../../../composables/condition-related/conditionals'

onMounted(() => {
  local_Storage()
})


</script>

<style scoped>
@import '../../../assets/custom-css/task-form.css';
@import '../../../assets/custom-css/addTask-form.css';
</style>
