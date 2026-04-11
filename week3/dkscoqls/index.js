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
    render();
    input.value = "";
  }
});

// 삭제
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    render();
}

// 완료(treu/false)
function toggleDone(id) {
    todos = todos.map((todo) => 
        todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    render();
}  

// 렌더링
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
    delBtn.className = "delete-btn";
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);


    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "수정";
    editBtn.onclick = () => {
        const newText = document.createElement("input");
        newText.class = "edit-input";
        newText.value = todo.text;

        li.replaceChild(newText, span);
        newText.focus();

        newText.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                updateTodo(todo.id, newText.value);
            }
        });
    }

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
  });
}

// 수정
function updateTodo(id, newText) {
    todos = todos.map((todo) => {
        return todo.id === id ? { ...todo, text: newText } : todo;
    });
    render();
}
