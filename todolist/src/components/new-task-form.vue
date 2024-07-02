<template>
  <div id="outerForm">
    <div style="">
      <input type="text" placeholder="Category Name">
      <button>OK</button>
      <p>
        Category:
        <select>
          <option>Career</option>
          <option>Education</option>
          <option>Life</option>
          <option>Favorites</option>
        </select>
      </p>
    </div>
      
  </div>

</template>

<script lang="ts">

</script>

<style scoped>
#outerForm {
  height: fit-content;
  width: fit-content;
  z-index: 1;
  background-color: orange;
  border: 1px solid black;
  padding:1vw;
}
</style>
