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
      text: text,
      done: false,
    };
    todos.push(newTodo);
    input.value = "";
    render();
  }
});

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        id: todo.id,
        text: todo.text,
        done: !todo.done,
      };
    }
    return todo;
  });
  render();
}

function updateTodo(id, updateText) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        id: todo.id,
        text: updateText,
        done: todo.done,
      };
    }
    return todo;
  });
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

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "수정";
    updateBtn.style.backgroundColor='orange'

    updateBtn.onclick = () => {
      if (updateBtn.textContent === "수정") {
        const updateInput = document.createElement("input");
        updateInput.type = "text";
        updateInput.value = todo.text;

        li.replaceChild(updateInput, span);
        updateBtn.textContent = "완료";
        updateInput.focus();

        updateInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            const updateText = updateInput.value.trim();

            if (updateText) {
              updateTodo(todo.id, updateText);
            } else {
              render();
            }
          }
        });
      } else {
        const updateInput = li.querySelector("input");
        const updateText = updateInput.value.trim();

        if (updateText) {
          updateTodo(todo.id, updateText);
        } else {
          render();
        }
      }
    };

    li.appendChild(span);
    li.appendChild(updateBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}