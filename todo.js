let count = 0;

function add() {
  let content = document.getElementById('todo').value;
  if (content === '') {
    alert('할일을 입력해주세요.');
    return;
  }

  let checkBox = `<input type='button' class="toggle" value="do" onclick='toggle("todo_" + ${count});'>`;
  // let change = `<input type='button' value='수정' onclick='change("list_" + ${count}, );'>`;
  let remove = `<input type='button' value='삭제' onclick='remove("todo_" + ${count});'>`;

  let node = document.createElement("li");
  node.setAttribute("id", `todo_${count}`);
  // node.innerHTML = `${checkBox} ${content} ${change} ${remove}`;
  node.innerHTML = `${checkBox} <span class='todo_text'>${content}</span> ${remove}`;
  document.getElementById('todo_list').appendChild(node);

  count++;
}

function remove(id) {
  let ul = document.getElementById('todo_list');
  ul.removeChild(document.getElementById(id));
  count--;
}

function change(id, content) {
  let field = document.getElementById(id);
}

function toggle(id) {
  let field = document.getElementById(id);
  let toggle = field.getElementsByClassName("toggle")[0];
  let todoText = field.getElementsByClassName("todo_text")[0];
  if (toggle.value === "do") {
    todoText.innerHTML = `<s>${todoText.innerText}</s>`;
    toggle.value = "undo";
  } else {
    todoText.innerHTML = `${todoText.innerText}`;
    toggle.value = "do";
  }
}
