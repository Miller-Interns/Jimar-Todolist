let todoS = [];

if (localStorage.getItem("todo_s") != null) {
  todoS = JSON.parse(localStorage.getItem("todo_s"));
}

export function signUp(id,text,done) {
  let todolist = {
    id,
    text,
    done
  };

  todoS.push(todolist);
  localStorage.setItem("todo_s", JSON.stringify(todoS)); //todo_s, stringified
  console.log(todoS); 

}
