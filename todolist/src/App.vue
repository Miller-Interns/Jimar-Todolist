<!-- Purpose of style is to make homeview 100% -->

<script setup>
import home from "./views/HomeView.vue"
import newForm from "./components/new-task-form.vue"
</script>

<template>
    <div style="height:100%;">
        <home/>
    </div>
    
    <div>
        <newForm/>
    </div>

</template>

<style>
</style>