// USED FOR ADDING TO-DO-LISTS

import { ref, computed } from 'vue'
import { TodoList } from '../types/types'
import { hideCompleted } from './conditions'

let id = 0

export const todos = ref<TodoList[]>([])

export const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value
})

export function addTodo(taskName: string) {
  if (taskName == '') {
    alert('Must contain texts')
    return
  } //check if empty

  todos.value.push({ id: id++, text: taskName, done: false, editMode: false })
}

export function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

export function editTodo(todo) {
  todo = null
  console.log(todo)
}
