export interface ITodolist {
  id: number
  text: string
  done: boolean
  editMode: boolean
  subTask?: string[]
}
