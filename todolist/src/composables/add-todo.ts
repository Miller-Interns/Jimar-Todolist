// USED FOR ADDING TO-DO-LISTS

import { ref, computed } from 'vue'
import { TodoList } from '../types/types'
import { hideCompleted } from './main-data-flow';

let id = 0;
// let sub_id = 0;

export const changedText = ref('default');

export const todos = ref<TodoList[]>([])

export const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value
})

export function addTodo(taskName: string, selectedCategory:string) {
  if (taskName === '') {
    alert('Must contain texts')
    return
  } //check if empty

  changedText.value = taskName; //initialize changed text
  todos.value.push({ id: id++, text: taskName, done: false, editMode: false, category: selectedCategory})
}

export function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

export function checkIfTaskIsDone(doneState){
  if(doneState === true){
    alert('Yahalo')
  }
}