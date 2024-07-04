<!-- INSIDE OF TO-DO-LIST -->

<template>

  <div id="outerBox_toolBar"><!-- CHANGE NAMING TYPE INTO CAMEL_CASE, change into outerBox_toolBar-->
    <!-- Inbox -->
    <div id="inbox" class="tool-bar-element" @click="toggleCondition()"><!--USE FUNCTION, NEVER USE LOGIC IN TEMPLATE; PUT IN SCRIPT-->
      <button v-bind:style="toggle_DisplayTaskList_Style">Inbox</button>
    </div>

    <!-- Add Task -->
    <div
      id="newTask"
      class="tool-bar-element"
      @click="toggleAddButton_State()"
    >
      <button :style="toggle_AddButton_Style">
        Add Task
      </button>
    </div>

    <!-- Add Task Pressed | Separate component-->
    <addTaskForm/>

    <!-- <div style="width:100%; height:fit-content; background-color: aqua;" class="tool-bar-element">
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { toggleAddButton_State } from '../../../composables/condition-related-stuffs/conditionals'
import { toggleCondition } from '../../../composables/condition-related-stuffs/conditionals';
import { toggle_AddButton_Style, toggle_DisplayTaskList_Style } from '../../../composables/condition-related-stuffs/conditional-styles';
import addTaskForm from './add-task-form.vue';

</script>

<style scoped>
@import '../../../assets/custom-css/tool-bar.css';
</style>
