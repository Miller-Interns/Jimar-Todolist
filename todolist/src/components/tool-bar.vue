<template>    
<div>
    <div id="inbox" class="tool-bar-element">
        <inbox/>
    </div>

    <div id="newTask" class="tool-bar-element">
        <newTask/>
    </div>

    <div id="category" class="tool-bar-element" style="height:50%;">
        category <br>
        <category/>
    </div>

    <div>
        <taskList/>
    </div>
</div> 
</template>

<script setup>
    import inbox from "./inbox.vue"
    import newTask from "./add-task.vue"
    import category from "./category.vue" 

</script>

<style scoped>
#inbox{
    border:1px solid orange;
}

#newTask{
    border:1px solid lime;
}

#category{
    border:1px solid lightblue;
}
.tool-bar-element{
    height:10%;
}
</style>
