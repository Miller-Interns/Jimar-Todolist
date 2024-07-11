<!-- 
  PURPOSE:
  TOOL-BAR CATEGORY OPTIONS

  NOT USED IN SELECTS
-->

<template>
  <!-- <option id="disabled" disabled value="" style="cursor: default;">Please select one</option> -->
  <option @click="goToLifePage">Life</option>
  <option @click="goToEducationPage">Education</option>
  <option @click="goToWorkPage">Work</option>
  <option @click="goToNaturePage">Nature</option>
  <option @click="goToOthersPage">Others</option>
</template>

<style scoped>
option {
  background-color: #353839;
  cursor: pointer;
  transition-duration: 0.5s;
  padding: 1vw;
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
