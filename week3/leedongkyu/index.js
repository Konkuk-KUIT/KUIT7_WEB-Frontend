let todos = [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const newTodo = {
    id: Date.now(),
    text,
    done: false,
    editing: false,
  };

  todos.push(newTodo);
  input.value = "";
  render();
});

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  todo.done = !todo.done;
  render();
}

function updateTodo(id, newText) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  if (todo.editing) {
    const text = (
      newText ?? document.getElementById(`edit-${todo.id}`)?.value
    )?.trim();
    if (!text) return;

    todo.text = text;
    todo.editing = false;
  } else {
    todos.forEach((t) => {
      t.editing = false;
    });
    todo.editing = true;
  }

  render();
}

function render() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    if (todo.editing) {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = todo.text;
      editInput.id = `edit-${todo.id}`;

      editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          updateTodo(todo.id, editInput.value);
        }
      });

      li.appendChild(editInput);

      setTimeout(() => {
        editInput.focus();
      }, 0);
    } else {
      const span = document.createElement("span");
      span.textContent = todo.text;
      span.style.cursor = "pointer";
      span.onclick = () => toggleDone(todo.id);
      li.appendChild(span);
    }

    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => updateTodo(todo.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.className = "del-btn";
    delBtn.onclick = () => deleteTodo(todo.id);

    const btnWrap = document.createElement("div");
    btnWrap.className = "btn-wrap";
    btnWrap.appendChild(editBtn);
    btnWrap.appendChild(delBtn);

    li.appendChild(btnWrap);
    list.appendChild(li);
  });
}

render();
