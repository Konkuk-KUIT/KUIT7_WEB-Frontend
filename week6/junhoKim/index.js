"use strict";
// 2. 이 배열에는 무조건 Todo 규격을 갖춘 애들만 들어올 수 있다고 선언!
let todos = [];
// 3. DOM 요소 가져올 때 "이건 HTML 폼이야!", "이건 인풋창이야!" 하고 확신(단언)해주기
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
// 4. 이벤트 객체(e)의 타입도 Event로 지정
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
        const newTodo = {
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
// 매개변수 id도 number라고 쾅 박아두기
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    render();
}
function toggleDone(id) {
    todos = todos.map((todo) => {
        if (todo.id === id) {
            return { ...todo, done: !todo.done };
        }
        return todo;
    });
    render();
}
function render() {
    list.innerHTML = "";
    // (아까 문제였던 바깥쪽 잉여 컨테이너는 TS 쓰면서 자연스럽게 제거 완료!)
    todos.forEach((todo) => {
        const li = document.createElement("li");
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-group");
        if (todo.isEditing) {
            const editInput = document.createElement("input");
            editInput.value = todo.text;
            // 5. 키보드 이벤트 타입(KeyboardEvent) 지정!
            editInput.onkeydown = (e) => {
                if (e.key === "Enter") {
                    // e.target이 뭔지 TS는 모르니까, 인풋창이라고 다시 한번 알려줌
                    const target = e.target;
                    updateTodo(todo.id, target.value);
                }
            };
            li.appendChild(editInput);
        }
        else {
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
// 6. newText는 문자열(string)일 수도 있고 아무것도 안 넘길 수도(null) 있으니까 합집합 파이프(|) 사용!
function updateTodo(id, newText = null) {
    todos = todos.map((todo) => {
        if (todo.id === id) {
            if (newText === null) {
                return { ...todo, isEditing: true };
            }
            else {
                return { ...todo, text: newText.trim(), isEditing: false };
            }
        }
        return todo;
    });
    render();
}
