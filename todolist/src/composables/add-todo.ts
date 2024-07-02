interface ITodolist{
    id:number,
    text:string,
    done:boolean
}

import { ref, computed } from 'vue'

let id = 0;

// const newTodo = ref('')
export const hideCompleted = ref(false)
export const todos = ref<ITodolist[]>([
  { id: id++, text: 'Learn HTML', done: true }
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
    todos.value.push({ id: id++, text: taskName, done: false })
}

export function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

export function editTodo(todo){
    console.log(todo.text);
}