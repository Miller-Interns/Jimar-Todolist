<script setup>
import home from './views/home-view.vue'
import welcome from './components/messages/welcome-view.vue'
import { ref } from 'vue'

let goto_todolist = ref(false)
</script>

<template>
  <div v-if="!goto_todolist" id="welcome">
    <div style="width: 50%">
      <div>
        <welcome />
      </div>

      <div>
        <button @click="goto_todolist = true">Go to App</button>
      </div>
    </div>
  </div>

  <!-- If button ispressed then go to to-do-list -->
  <div style="height: 100%" v-if="goto_todolist">
    <home />
  </div>
</template>

<style scoped>
#welcome {
  /* border:1px solid blue; */
  height: 100%;
  display: flex;
  place-content: center;
  place-items: center;
}
</style>
