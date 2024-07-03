export type TodoList = {
  id: number
  text: string
  done: boolean
  editMode: boolean,
  subTask?:{
    sub_id:number,
    sub_text:string,
    sub_done:boolean,
    sub_editMode:boolean
  }
}
