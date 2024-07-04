<template>
  <div id="categoriesContainer" class="tool-bar-element">
    <div id="categoriesHeader">
        
      

      <div style="border: 1px solid pink; width: 100%;">
        <span>Categories</span>
        <span id="spanEmoji" @click="showCategories = toggle(showCategories)" v-if="showCategories"
          >🔽</span
        >
        <span id="spanEmoji" @click="showCategories = toggle(showCategories)" v-else>🔼</span>
      </div>

      <div v-if="false">
        <taskForm/>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toggle } from '../../../../composables/condition-related/toggle-functions'
import taskForm from '../task-form.vue';

const showCategories = ref(true)
</script>

<style scoped>
#categoriesContainer {
  width: 100%;
  height: fit-content;
  border: 1px solid red;
  display:flex;
  place-items:center;
  border-bottom: 1px solid grey;
  border-radius: 0vw;
}

#categoriesHeader{
    width:100%;
}

#spanEmoji {
  font-size: 1vw;
  cursor: pointer;
}
</style>
