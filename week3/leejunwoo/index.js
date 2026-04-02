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
  }
});

function deleteTodo(id) {
  // 해당 id의 todo를 찾아 없애거나 아니면 새롭게 만들거나 -> render 호출
  todos = todos.filter(todo => todo.id !== id);
  render();
}

function toggleDone(id) {
  // 완료 기능 -> Todo.Done을 true, false 전환 -> render 호출
  todos.forEach(todo => {
    if(todo.id === id) {
      todo.done ? todo.done = false : todo.done=true;
      render();
    }
  });
}

function render() {
  list.innerHTML = ""; // 기존 내용 지우기
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);

    const delBtn = document.createElement("button");
    delBtn.className = "delBtn"
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const edBtn = document.createElement("button");
    edBtn.className = "edBtn";
    edBtn.textContent = "수정";
    edBtn.onclick = () => updateTodo(todo.id);

    li.appendChild(span);

    const blc = document.createElement("div");
    blc.appendChild(edBtn);
    blc.appendChild(delBtn);
    li.appendChild(blc);
    list.appendChild(li);
  });
}

function updateTodo(id) {
  // 수정 : 프롬프트 띄워서 새 값 받고 해당 tod에 반영하고...
  // 이번에는 수정 버튼을 하나 만들어라 -> 수정 버튼 누르면 span이 input 창으로 바뀌고 거기서 수정하면 반영되는 코드로
  // html 수정해서 수정 버튼 만들면 매우 굿,,,
  const todo = document.getElementById(id);
  todo.span = document.createElement("text");
  render();
}
