// interface ITodolist{
//     id:number,
//     text:string,
//     done:boolean
// }

// USED FOR ADDING TO-DO-LISTS

import { ref, computed } from 'vue'
import { ITodolist } from "./Interface";
import { signUp} from './LocalStorage';

let id = 0;
let list_of_todos = [];

// const newTodo = ref('')
export const hideCompleted = ref(false)
export const todos = ref<ITodolist[]>([
  // { id: id++, text: 'Learn HTML', done: true }
])

export const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

export function addTodo(taskName:string) { 
    if(taskName == ""){
        alert("Must contain texts");
        return;
    }//check if empty
    id+=1;
    console.log(taskName)
    signUp(id,taskName,false);

    todos.value.push({ id: id++, text: taskName, done: false })
    console.log(todos.value)
}

export function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

export function editTodo(todo){
  todo = null;
  console.log(todo)
}