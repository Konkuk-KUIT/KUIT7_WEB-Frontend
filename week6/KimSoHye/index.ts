console.log("TypeScript 연결 확인");
type Todo = {
  id: number;
  text: string;
  done: boolean;
};

let todos: Todo[] = [];

const form = document.querySelector<HTMLFormElement>("#todo-form");
const input = document.querySelector<HTMLInputElement>("#todo-input");
const list = document.querySelector<HTMLUListElement>("#todo-list");

if (form && input && list) {
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
}

function deleteTodo(id:number):void {
  todos = todos.filter((todo:Todo) => todo.id !== id);
  render();
}

function toggleDone(id:number):void {
  todos = todos.map((todo:Todo) => {
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

function updateTodo(id:number, updateText:string):void {
  todos = todos.map((todo:Todo) => {
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

function render():void {
    if (!list) return;
  list.innerHTML = "";

  todos.forEach((todo:Todo) => {
    const li:HTMLElement = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span:HTMLSpanElement = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);

    const delBtn:HTMLButtonElement = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const updateBtn: HTMLButtonElement = document.createElement("button");
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

        updateInput.addEventListener("keydown", (e:KeyboardEvent) => {
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
        const updateInput = li.querySelector<HTMLInputElement>("input");
        if (!updateInput) return;
        const updateText:string = updateInput.value.trim();

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