<template>
    <div id="outerForm">
        <form>
            <input type="text" placeholder="Task Name" v-model="category"/>
            <p>Category:
                <select>
                    <option>Career</option>
                    <option>Education</option>
                    <option>Life</option>
                    <option>Favorites</option>
                    <option>Others</option>
                </select>
            </p>
            
        </form>
    </div>
</template>

<script>
export default{
    data(){
        return{
            category:""
        }
    }
}
</script>

<style scoped>
#outerForm{
    height:10vw;
    width:30vw;
    z-index:1;
    background-color:orange;
    position:absolute;
    bottom:25vw;
    left:35vw;
    display:flex;
    place-content:center;
    place-items:center;
    border:1px solid black;
}
</style>