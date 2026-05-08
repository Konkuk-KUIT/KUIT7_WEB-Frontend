type Todo = {
  id: number;
  text: string;
  done: boolean;
};

let todos: Todo[] = [];

const formElement = document.getElementById("todo-form");
const inputElement = document.getElementById("todo-input");
const listElement = document.getElementById("todo-list");

if (
  !(formElement instanceof HTMLFormElement) ||
  !(inputElement instanceof HTMLInputElement) ||
  !(listElement instanceof HTMLUListElement)
) {
  throw new Error("필요한 요소를 찾을 수 없습니다.");
}

const form = formElement;
const input = inputElement;
const list = listElement;

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

function deleteTodo(id: number): void {
  todos = todos.filter((todo) => id != todo.id);
  render();
}

function toggleDone(id: number) {
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

function updateTodo(todo: Todo, li: HTMLLIElement): void {
  const span = li.querySelector<HTMLSpanElement>("span");
  const editBtn = li.querySelector<HTMLButtonElement>(".editBtn");

  if (!span || !editBtn) return;
  const safeSpan = span;
  const safeEditBtn = editBtn;

  const editInput = document.createElement("input");
  editInput.value = todo.text;
  li.replaceChild(editInput, span);

  function saveEdit(): void {
    if (!span || !editBtn) return;
    // 수정된 text로 ui, data 수정하고 , 다시 span으로 replace / editBtn의 onclick 다시 변경하기
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
