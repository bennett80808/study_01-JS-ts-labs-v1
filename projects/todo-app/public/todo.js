"use strict";
// Dom 요소 선택.
const dateTitle = document.getElementById("date-title"); // 오늘 날짜
const inputData = document.getElementById("add-input"); // input 창
const addForm = document.getElementById("add-form"); // 추가 폼.
const taskCount = document.getElementById("task-count"); // ? task left
const todoList = document.getElementById("todo-list"); // 투두리스트 ul
// 상태 변수들
const todoListArray = []; // todoList 배열
let currentIndex = 0; // data-id 값
// 오늘 날짜 표시시
if (dateTitle) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const dayIndex = today.getDay();
    const koreanDays = ["일", "월", "화", "수", "목", "금", "토"];
    const dayName = koreanDays[dayIndex];
    const formatted = `${year}. ${month}. ${date} (${dayName})`;
    dateTitle.innerHTML =
        `<div class="date-title" id="date-title">${formatted}</div>`;
}
// 엔터 또는 추가 버튼 클릭 시 실행 : inputData 에 있는걸 todoList에 
if (addForm && inputData && todoList) {
    addForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const inputDataValue = inputData.value.trim();
        const currentIndexToString = currentIndex.toString();
        if (!inputDataValue)
            return;
        todoListArray.push({ id: currentIndexToString, itemText: inputDataValue });
        inputData.value = ""; // 값 초기화
        updateTaskCount();
        const listItems = todoListArray
            .slice() // 배열 복사
            .reverse()
            .map((item) => `
    <li class="todo-item" data-id="${item.id}">
    <input type="checkbox" class="todo-checkbox">
    <span class="todo-title">${item.itemText}</span>
    <button class="icon-btn edit-btn" aria-label="수정" tabindex="-1"><svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.1 2.3l2.6 2.6-9.1 9.1-2.7.1.1-2.7 9.1-9.1z"></path></svg></button>   
    <button class="icon-btn delete-btn" aria-label="삭제" tabindex="-1"><svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="4" x2="13" y2="13"></line><line x1="13" y1="4" x2="4" y2="13"></line></svg></button>
    </li>`)
            .join("");
        if (todoList) {
            todoList.innerHTML = `${listItems}`;
        }
        currentIndex++;
    });
}
// 할 일 완료/취소 토글
if (todoList) {
    todoList.addEventListener("change", (event) => {
        const target = event.target;
        // 체크박스 클릭 한 경우
        if (target && target.classList.contains("todo-checkbox")) {
            const todoItem = target.closest(".todo-item");
            if (todoItem) {
                if (target.checked) {
                    todoItem.classList.add("completed");
                }
                else {
                    todoItem.classList.remove("completed");
                }
            }
        }
    });
}
// 수정, 삭제 버튼 작동.
if (todoList) {
    todoList.addEventListener("click", (event) => {
        const target = event.target;
        // 삭제 버튼 클릭 시.
        if (target.closest(".delete-btn")) {
            const item = target.closest(".todo-item");
            if (item) {
                const id = item.getAttribute("data-id");
                if (id) {
                    const index = todoListArray.findIndex((todo) => todo.id === id);
                    if (index != -1) {
                        todoListArray.splice(index, 1);
                        updateTaskCount();
                    }
                }
                item.remove();
            }
        }
        // 수정 버튼 클릭 시.
        if (target.closest(".edit-btn")) {
            const item = target.closest(".todo-item");
            const titleSpan = item?.querySelector(".todo-title");
            if (item && titleSpan) {
                const originalText = titleSpan.textContent;
                const input = document.createElement("input");
                input.className = "edit-input";
                titleSpan.style.display = "none";
                if (originalText != null) {
                    input.value = originalText;
                }
                item.insertBefore(input, titleSpan);
                input.focus();
                const cleanup = () => {
                    input.remove();
                    titleSpan.style.display = "";
                };
                const saveEdit = () => {
                    const newValue = input.value.trim();
                    if (newValue) {
                        titleSpan.textContent = newValue;
                        const id = item.getAttribute("data-id");
                        if (id) {
                            const arrayTarget = todoListArray.find((todo) => todo.id === id);
                            if (arrayTarget && titleSpan.textContent !== null) {
                                arrayTarget.itemText = newValue;
                            }
                        }
                    }
                    cleanup();
                };
                const cancelEdit = () => { cleanup(); };
                // 키 입력 처리
                input.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        saveEdit();
                    }
                    else if (e.key === "Escape") {
                        cancelEdit();
                    }
                });
                input.addEventListener("blur", cancelEdit);
            }
        }
    });
}
// 남은 할일 표시.
function updateTaskCount() {
    if (taskCount) {
        taskCount.innerHTML = `${todoListArray.length} tasks left`;
    }
}
