// TODO
// 1) 할 일 추가 기능 만들기 (new Todo객체 만들어서 배열 넣기) -> 완
// 2) 삭제 기능 만들기 -> 완
// 3) 완료 기능 만들기 (true <-> false) -> 완
// 4) 수정 기능 만들기 (update todo)

let todos = [];

const form = document.getElementById('todo-form'); // 할 일 입력, 추가버튼
const input = document.getElementById('todo-input'); // 입력 칸
const list = document.getElementById('todo-list'); // ul list

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
      editing: false,
    };

    todos.push(newTodo);
    render();
    input.value = '';
  }
});

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id != id);
  render();
}

function toggleDone(id) {
  todos.forEach((todo) => {
    if (id === todo.id) {
      todo.done = !todo.done;
    }
  });
  render();
}

function updateTodo(id, li) {
  const span = li.querySelector('span');
  const input = document.createElement('input');

  input.value = span.innerText;
  span.replaceWith(input);
  input.focus();

  input.onkeydown = (e) => {
    if (e.key === 'Enter') {
      const newText = input.value.trim();
      if (newText) {
        todos.forEach((todo) => {
          if (id === todo.id) {
            todo.text = newText;
          }
        });
      }
      render();
    }
  };
}

function render() {
  list.innerHTML = '';
  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.className = todo.done ? 'done' : '';

    const span = document.createElement('span');
    span.textContent = todo.text;
    span.style.cursor = 'pointer';
    span.onclick = () => toggleDone(todo.id);

    const editBtn = document.createElement('button');
    editBtn.textContent = '수정';
    editBtn.onclick = () => updateTodo(todo.id, li);

    const delBtn = document.createElement('button');
    delBtn.textContent = '삭제';
    delBtn.onclick = () => deleteTodo(todo.id);

    const btnSpace = document.createElement('span');
    btnSpace.appendChild(editBtn);
    btnSpace.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(btnSpace);
    list.appendChild(li);
  });
}
