let todos = [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    todos.push(newTodo);
    input.value = "";
  }
  render();
});

function deleteTodo(id) {
  todos = todos.filter((todo) => id != todo.id);
  render();
}

function toggleDone(id) {
  for (let todo of todos) {
    if (todo.id == id) {
      todo.done = !todo.done;
    }
  }
  render();
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);

    const editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.textContent = "수정";
    editBtn.onclick = () => updateTodo(todo, li);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function updateTodo(todo, li) {
  //todo.id , span으로 바꾸기
  const editInput = document.createElement("input");
  const span = li.querySelector("span");
  const editBtn = li.querySelector(".editBtn");
  editInput.value = todo.text;
  li.replaceChild(editInput, span);

  function saveEdit() {
    span.textContent = editInput.value.trim();
    todo.text = editInput.value.trim();
    li.replaceChild(span, editInput);
    editBtn.onclick = () => updateTodo(todo, li);
  }
  editInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      saveEdit();
    }
  });

  editBtn.onclick = () => {
    saveEdit();
  };
}
