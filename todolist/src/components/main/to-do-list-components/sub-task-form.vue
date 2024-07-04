<template>
    hollow blocks
    <div>
        
        {{taskName}}
    </div>
</template>

<script lang="ts">
let taskName = '';

export function receive(subTaskName){
    taskName = subTaskName;
}
export default{
    setup() {
        taskName
    }
}

</script>

<style></style>