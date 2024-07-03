<template>
  <div class="outerForm" v-if="false">
    <!-- Subtask Area -->
    <div style="display: flex; place-items: center; place-content: center">
      <!-- Add Subtask Toggle-->
      <button
        @click="addSubtask_State = !addSubtask_State"
        :style="addSubtask_State ? { 'background-color': 'red' } : {}"
      >
        {{ addSubtask_State ? 'Cancel' : 'Add Subtask' }}
      </button>
    </div>
    <div v-if="addSubtask_State">
      <ul>
        <li v-for="subtodo in filteredSubTodos" :key="subtodo.id">
          <button
            class="remove"
            id="subremove"
            @click="removeSubTodo(subtodo)"
            v-if="!subtodo.editMode"
          >
            <span class="emoji_class">✖</span>
          </button>
          {{ subtodo.text }}
        </li>
      </ul>
      <input type="text" placeholder="Task Name" v-model="subtask_name" />

      <center>
        <button v-if="addSubtask_State" @click="addSubTodo(subtask_name, todos)">
          Add {{ subtask_name }}
        </button>
      </center>
    </div>
  </div>
</template>

<script lang="ts">
import {
  addSubTodo,
  filteredSubTodos,
  removeSubTodo,
  editSubTodo,
  hideCompleted,
  subtodos
} from '../../composables/add-sub-todo'
import { Subtask } from './task-list.vue'
import { todos } from '../../composables/add-todo'
// import {watch} from 'vue'

export default {
  data() {
    const todos_id = 0
    return {
      addSubtask_State: false,
      subtask_name: '',
      todos_id
    }
  },
  mounted() {
    this.todos_id = 0
  },
  setup() {
    return {
      addSubTodo,
      filteredSubTodos,
      removeSubTodo,
      editSubTodo,
      hideCompleted,
      subtodos,
      Subtask,
      todos
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
  border-bottom: 1px solid grey;
  padding: 6vw;
  border-radius: 0vw;
}

button {
  width: 50%;
}

#subremove {
  width: 10%;
  height: 5%;
}
</style>
