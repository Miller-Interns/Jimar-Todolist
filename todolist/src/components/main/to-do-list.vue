<!-- INSIDE OF HOMEVIEW -->

<template>
  <div id="todolist">
    <div id="toolBar">
      <toolBar />
    </div>
    <div id="displayBox">
      <displayBox />
    </div>
  </div>
</template>

<script setup>
import toolBar from './tool-bar.vue'
import displayBox from '../main/display-box.vue'
</script>

<style scoped>
#todolist {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  background-color: #292b29;
  /* 
  
  */
}

#toolBar {
  width: 30%;
  height: 100%;
  /* border: 1px solid purple; */
  float: left;
  border-radius: 0vw;
  background-color: #151515;
  color: white;
  padding: 1vw;
}

#displayBox {
  width: 70%;
  height: 100%;
  /* border: 1px solid blue; */
  float: right;
  border-radius: 0vw;
  overflow: auto;
}
</style>
