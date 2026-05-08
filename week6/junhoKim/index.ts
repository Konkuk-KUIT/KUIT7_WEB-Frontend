interface Todo {
  id: number;
  text: string;
  done: boolean;
  isEditing: boolean;
} // todo 인터페이스 ㄱㄱ

let todos: Todo[] = []; 
// todo 인터페이스만 넣어주겟습니다

// 3. DOM 요소 가져올 때 "이건 HTML 폼이야!", "이건 인풋창이야!" 하고 확신(단언)해주기
// const form = document.getElementById("todo-form") as HTMLFormElement;
// const input = document.getElementById("todo-input") as HTMLInputElement;
// const list = document.getElementById("todo-list") as HTMLUListElement;

// 여기서 as를 안쓴다면

// DOM 가져오기 (이때는 HTMLElement | null 타입)
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
// if 못 찾았거나 해당 태그가 아니면 에러를 던진다
if (!(form instanceof HTMLFormElement)) throw new Error("Form 요소를 찾을 수 없습니다.");
if (!(input instanceof HTMLInputElement)) throw new Error("Input 요소를 찾을 수 없습니다.");
if (!(list instanceof HTMLUListElement)) throw new Error("List 요소를 찾을 수 없습니다.");
// 의 형태로 ??

// 근데 이제 as를 안써야하나? 했을때, 타입추론에 한계가 있는 만큼 as를 이용하는 것도 좋다고 생각하신다고 하심


form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const text = input.value.trim(); 

  if (text) {
    const newTodo: Todo = {
      id: Date.now(), 
      text,
      done: false,
      isEditing: false, 
    };

    todos.push(newTodo); 
    input.value = ""; 

    render();
  }
});

function deleteTodo(id: number): void {
  todos = todos.filter((todo) => todo.id !== id); 
  render();
}

function toggleDone(id: number): void {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done }; 
    }
    return todo;
  });

  render();
}

function render(): void {
  list.innerHTML = "";


  todos.forEach((todo) => {
    const li = document.createElement("li");

    const btnContainer = document.createElement("div"); 
    btnContainer.classList.add("btn-group");
    
    if (todo.isEditing) { 
      const editInput = document.createElement("input");
      editInput.value = todo.text; 
      
      editInput.onkeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {

          const target = e.target as HTMLInputElement;
          updateTodo(todo.id, target.value);
        }
      };

      li.appendChild(editInput);

    } else {
      li.className = todo.done ? "done" : "";

      const span = document.createElement("span");
      span.textContent = todo.text;
      span.style.cursor = "pointer";
      span.onclick = () => toggleDone(todo.id);

      const updateBtn = document.createElement("button");
      updateBtn.classList.add("btn-update"); 
      updateBtn.textContent = "수정";
      updateBtn.onclick = () => updateTodo(todo.id);

      li.appendChild(span);
      btnContainer.appendChild(updateBtn); 
    }

    const delBtn = document.createElement("button");
    delBtn.classList.add("btn-delete"); 
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    list.appendChild(li);
    btnContainer.appendChild(delBtn);

    li.appendChild(btnContainer);
  });
}

function updateTodo(id: number, newText: string | null = null): void {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      if (newText === null) {
        return { ...todo, isEditing: true };
      } else {
        return { ...todo, text: newText.trim(), isEditing: false };
      }
    }
    return todo;
  });

  render();
}