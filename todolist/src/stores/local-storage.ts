import { watch } from 'vue'
import { todos } from '../composables/add-todo'

export const local_Storage = () => {
  const list_todos = window.localStorage.getItem('todos')

  if (list_todos) {
    todos.value = JSON.parse(list_todos)
  }

  watch(
    todos,
    (val) => {
      window.localStorage.setItem('todos', JSON.stringify(val))
    },
    { deep: true }
  )
}
