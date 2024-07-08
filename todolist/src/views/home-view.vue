<!-- INSIDE OF APP -->

<template>
  <div id="welcomeContainer">
    <div id="welcomeContent">
      <welcome />

      <center>
        <RouterLink :to="{name:'todolistview'}">Go to App</RouterLink>
      </center>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import welcome from '../components/messages/welcome-view.vue'
</script>

<style scoped>
#welcomeContainer {
  height: 100%;
  display: flex;
  place-content: center;
  place-items: center;
}

#WelcomeContent {
  width: 50%;
}
</style>
