let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

window.onload = function() {
  tasks.forEach(task => renderTask(task));
};

function addTask() {
  const input = document.getElementById('taskInput');
  if (!input.value.trim()) return;
  const task = { text: input.value, completed: false };
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTask(task);
  input.value = '';
}

function renderTask(task) {
  const ul = document.getElementById('taskList');
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.onchange = () => {
    task.completed = checkbox.checked;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => {
    ul.removeChild(li);
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(task.text));
  li.appendChild(deleteBtn);
  ul.appendChild(li);
}
