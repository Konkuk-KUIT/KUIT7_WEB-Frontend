let todos = []; // 할 일 목록을 저장하는 배열

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim(); // 트림을 사용해서 앞뒤 공백 
  // 조건문에 text가 비어있으면 false로
  if (text) {

    const newTodo = {
      id: Date.now(), // 현재시간으로 고유id 생성
      text,
      done: false,
      isEditing: false, // 수정 모드 여부
    };

    todos.push(newTodo); // 새로운 할 일을 배열에 추가
    input.value = ""; // 입력창 초기화

    render();
  }
});

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id); // 해당 id를 제외한 새로운 배열 생성
  render();
}

function toggleDone(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done }; // done 상태 토글
    }
    return todo;
  });

  render();
}

function render() {
  list.innerHTML = "";



  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-group"); // CSS에서 꾸미기 위해 클래스 추가

  // 배열에 있는 할 일들을 순회하면서 li 요소를 생성하여 목록에 추가
  todos.forEach((todo) => {
    const li = document.createElement("li");

    const btnContainer = document.createElement("div"); 
    btnContainer.classList.add("btn-group");
    
    if (todo.isEditing) { 
      const editInput = document.createElement("input");
      editInput.value = todo.text; // 기존 글자 보여주기
      
      // 엔터키를 누르면 저장하도록 설정
      editInput.onkeydown = (e) => {
        if (e.key === "Enter") {
          updateTodo(todo.id, e.target.value);
        }
      };

      li.appendChild(editInput);

    // 2. 일반 모드라면? 기존처럼 span과 버튼들을 보여준다
    } else {
      li.className = todo.done ? "done" : "";

      const span = document.createElement("span");
      span.textContent = todo.text;
      span.style.cursor = "pointer";
      span.onclick = () => toggleDone(todo.id);

      const updateBtn = document.createElement("button");
      updateBtn.classList.add("btn-update"); // 수정 버튼 스타일을 위한 클래스 추가
      updateBtn.textContent = "수정";

      updateBtn.onclick = () => updateTodo(todo.id);

      li.appendChild(span);
      btnContainer.appendChild(updateBtn); // li말고 div에 넣기
    }

    // 삭제 버튼은 어떤 모드에서든 공통으로
    const delBtn = document.createElement("button");
    delBtn.classList.add("btn-delete"); //css에서 꾸미기 위해
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    list.appendChild(li);
    btnContainer.appendChild(delBtn);


    // 마지막으로 바구니를 li에 넣기
    li.appendChild(btnContainer);
  });
}

//수정버튼
function updateTodo(id, newText = null) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      if (newText === null) {
        // 1. newText가 없으면: "수정" 버튼을 누른 상황 -> 수정 모드 진입
        return { ...todo, isEditing: true };
      } else {
        // 2. newText가 있으면: 인풋창에서 엔터를 친 상황 -> 내용 저장 및 모드 종료
        return { ...todo, text: newText.trim(), isEditing: false };
      }
    }
    return todo;
  });

  render();
}
