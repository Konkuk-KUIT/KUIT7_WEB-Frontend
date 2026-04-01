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
    render();
  }
});

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id) {
  todos = todos.map(todo => {
    if(todo.id === id) {
      return { ...todo, done: !todo.done}
    }
    return todo
  });
  render();
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");       

    const span = document.createElement("span");      //실제 할 일
    span.className = todo.done ? "done" : "";         //완료했을 때와 안했을 때 css로 구분하기위함
    span.textContent = todo.text;
    span.style.cursor = "pointer";                    //커서를 올렸을 때 마우스 아이콘이 바뀜
    span.onclick = () => toggleDone(todo.id);         //클릭했을 때 동작

    const delBtn = document.createElement("button");  //todo 삭제
    delBtn.textContent = "삭제";
    delBtn.className = "del_btn";
    delBtn.onclick = () => deleteTodo(todo.id);

    const updBtn = document.createElement("button");  //todo 수정
    updBtn.textContent = "수정";
    updBtn.className = "upd_btn";
    updBtn.onclick = () => updateTodo(todo.id, span);

    const Btn = document.createElement("div");
    Btn.appendChild(updBtn);
    Btn.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(Btn);
    list.appendChild(li);                             //화면에 표시하기위함
  });
}

function updateTodo(id, span) {
  const input = document.createElement("input");    

  span.replaceWith(input);                            //span 요소를 input 으로 바꿈
  input.focus();                                      //바로 키보드 입력 가능하도록

  input.addEventListener("keydown", (e) => {          
    if(e.key === "Enter") {                           //Enter 키를 누르면
      const modText = input.value.trim();

      if (modText) {
        todos = todos.map(todo =>
          todo.id === id ? {...todo, text: modText } : todo
        );                                            //id 가 같은 todo에 접근해서 수정된 텍스트 저장
      }

      render();
    }
  })

}
