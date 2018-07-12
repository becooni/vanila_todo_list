'use strict';

const finish = '완료';
const unfinish = '미완료';

let count = 0;

function add() {
  let content = document.getElementById('todo').value;
  if (content === '') {
    alert("할일을 입력해주세요.");
    return;
  }
  let id = `todo_${count}`;

  let toggleButton = createButton('toggle', finish, function() {
    toggle(id);
  });
  let todoContent = createSpan(content);
  let changeButton = createButton('change', '수정', function() {
    change(id);
  });
  let removeButton = createButton('remove', '삭제', function() {
    remove(id);
  });

  let li = document.createElement('li');
  li.setAttribute('id', id);

  li.appendChild(toggleButton);
  li.appendChild(todoContent);
  li.appendChild(changeButton);
  li.appendChild(removeButton);

  document.getElementById("todo_list").appendChild(li);

  count++;
}

function createSpan(content) {
  let span = document.createElement('span');
  span.className = 'todo_content'
  span.innerText = content;
  return span;
}

function createButton(c, v, func) {
  let button = document.createElement('input');
  button.type = 'button';
  button.className = c;
  button.value = v;
  button.onclick = func;
  return button;
}

function remove(id) {
  let ul = document.getElementById('todo_list');
  ul.removeChild(document.getElementById(id));
  count--;
}

function change(id) {
  let field = document.getElementById(id);
  let todoContent = field.getElementsByClassName(`todo_content`)[0];
  todoContent.innerText = prompt("수정해요", todoContent.textContent);
}

function toggle(id) {
  let field = document.getElementById(id);
  let toggleButton = field.getElementsByClassName(`toggle`)[0];
  let todoText = field.getElementsByClassName(`todo_content`)[0];
  if (toggleButton.value === finish) {
    todoText.innerHTML = `<s>${todoText.innerText}</s>`;
    toggleButton.value = unfinish;
  } else {
    todoText.innerHTML = `${todoText.innerText}`;
    toggleButton.value = finish;
  }
}
