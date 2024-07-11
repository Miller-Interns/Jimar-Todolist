// USED FOR ADDING TO-DO-LISTS

import { ref, computed } from 'vue'
import { TodoList } from '../types/types'
import { hideCompleted } from './main-data-flow'

const id = ref(0)

export const changedText = ref('default')

export const todos = ref<TodoList[]>([])

export const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value
})

export function addTodo(taskName: string, selectedCategory: string) {
  //checks if taskName is empty
  if (taskName === '') {
    alert('Must contain texts')
    return
  }

  changedText.value = taskName //initialize changed text
  todos.value.push({
    id: id.value++,
    text: taskName,
    done: false,
    editModeState: false,
    category: selectedCategory
  })
  console.log(todos.value)
}

export function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
