const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");

const toDoList = document.getElementById("todo-list");
let toDos = []; //이 배열 시작할 때 localStorage에서 발견되는 이전의 toDo들로 시작하고 싶다

const TODOS_KEY = "todos";

//배열인 toDos를 낱개의 string으로 각각 만들어서 localStorage에 넣어주자.
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "  ❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.append(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log(item);
  const newTodo = item;
  paintToDo(newTodo);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
