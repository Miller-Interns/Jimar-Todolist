<script setup lang="ts">
import { updateDisplayEducationCategory_State, updateDisplayLifeCategory_State, updateDisplayNatureCategory_State, updateDisplayOthersCategory_State, updateDisplayWorkCategory_State } from '../../../../composables/condition-related/conditionals';
</script>

<!-- 
  PURPOSE:
  TOOL-BAR CATEGORY OPTIONS

  NOT USED IN SELECTS
-->

<template>
  <!-- <option id="disabled" disabled value="" style="cursor: default;">Please select one</option> -->
  <option @click="updateDisplayLifeCategory_State(true)">Life</option>
  <option @click="updateDisplayEducationCategory_State(true)">Education</option>
  <option @click="updateDisplayWorkCategory_State(true)">Work</option>
  <option @click="updateDisplayNatureCategory_State(true)">Nature</option>
  <option @click="updateDisplayOthersCategory_State(true)">Others</option>
</template>

<style scoped>
option {
  background-color: #353839;
  cursor: pointer;
  transition-duration: 0.5s;
  padding: 1vw;
  color:white;
}

option:hover {
  background-color: grey;
}

#disabled {
  /* border-bottom: 1px #161a1a solid; */
  opacity: 0.8;
}

#disabled:hover {
  background-color: #353839;
}
</style>
