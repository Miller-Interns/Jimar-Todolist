import { ref, computed } from 'vue'
// import { ITodolist } from './Interface'
export const hideCompleted = ref(false)

let id = 0

export const subtodos = ref<ITodolist[]>([
  // { id: id++, text: 'Learn HTML', done: true }
])

export const filteredSubTodos = computed(() => {
  return hideCompleted.value ? subtodos.value.filter((t) => !t.done) : subtodos.value
})

export function addSubTodo(taskName: string) {
  if (taskName == '') {
    alert('Must contain texts')
    return
  } //check if empty

  subtodos.value.push({ id: id++, text: taskName, done: false, editMode: false })
  console.log(subtodos.value)
}

export function removeSubTodo(todo) {
  subtodos.value = subtodos.value.filter((t) => t !== todo)
}

export function editSubTodo(todo) {
  todo = null
  console.log(todo)
}
