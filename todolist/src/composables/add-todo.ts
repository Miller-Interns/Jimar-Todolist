// USED FOR ADDING TO-DO-LISTS

import { ref, computed } from 'vue'
import { ITodolist } from "./Interface";
// import { signUp} from './LocalStorage';

let id = 0;

export const hideCompleted = ref(false)
export const todos = ref<ITodolist[]>([])

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

    todos.value.push({ id: id++, text: taskName, done: false, editMode: false})
    console.log(todos.value)
}

export function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

export function editTodo(todo){
  todo = null;
  console.log(todo)
}