<template>
  <div class="taskListContent">
    <div class="taskListContentMiddle">
      <span :class="{ done: isDone }">
        <div id="taskListClickableContents">
          <div class="displayFlex">
            <!-- TYPE CHECKBOX -->
            <input type="checkbox" v-model="todo.done" />
          </div>

          <div class="clickable" :style="checkBoxStateToggleStyle(isDone)">
            <!-- SHOW TASK NAME -->
            {{ taskName }}
          </div>

          <!-- EDIT MODE -->
          <div id="editModeButtons">
            <div v-if="!isDone" style="display: flex">
              <div v-if="!editMode" style="display: flex">
                <button class="displayBox_buttons" @click="toggleEditModeState(todo)">
                  <span class="emoji_class">🖊</span>
                </button>
              </div>
              <!-- DONE -->
              <div v-else class="onEditMode">
                <button class="displayBox_buttons" @click="toggleEditModeState(todo)">Done</button>
                <!-- DONE -->
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
        Category: <span> {{ category }} </span>

        <!--EDIT MODE INPUTS-->
        <div id="editModeInputs" v-if="!isDone">
          <span v-if="editMode">
            <input type="text" v-model.lazy="taskName" required maxLength="23" /><!--TYPE TEXT-->
            <select class="tool-bar-element" v-model="category">
              <optionsSelect />
            </select>
          </span>
        </div>
        <!--EDIT MODE INPUTS-->
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { removeTodo } from '../../../composables/add-todo'
import { checkBoxStateToggleStyle } from '../../../composables/condition-related/conditional-styles'
import { removable, toggleEditModeState } from '../../../composables/condition-related/conditionals'
import { TodoList } from '../../../types/types'
import { computed } from 'vue'
import optionsSelect from './templates/options-select.vue'

const props = defineProps<{
  todo: TodoList
}>()

const isDone = computed(() => {
  return props.todo.done
})

const taskName = computed({
  get() {
    return props.todo.text
  },
  set(newName) {
    return (props.todo.text = newName)
  }
})

const category = computed({
  get() {
    return props.todo.category
  },
  set(newCategory) {
    return (props.todo.category = newCategory)
  }
})

const editMode = computed(() => {
  return props.todo.editModeState
})
</script>

<style scoped>
@import '../../../assets/custom-css/task-form.css';
@import '../../../assets/custom-css/addTask-form.css';
</style>
