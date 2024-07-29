<!-- INSIDE OF HOMEVIEW -->

<!--
 TODOLIST APP
The core of todolist APP
 -->

<template>
  <div id="outerBox_todoList">
    <!--Change var name into outerBox_todoList-->
    <div id="toolBar">
      <toolBar />
    </div>

    <div id="displayBox">
      <displayBox />
    </div>
  </div>
</template>

<script setup lang="ts">
import toolBar from './to-do-list-components/tool-bar.vue'
import displayBox from './to-do-list-components/display-box.vue'
</script>

<style scoped>
#outerBox_todoList {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  background-color: #292b29;
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
