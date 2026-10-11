const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function addTodo(text) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('done', checkbox.checked);
  });

  const label = document.createElement('span');
  label.className = 'todo-text';
  label.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete-button';
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', () => {
    li.remove();
  });

  li.append(checkbox, label, deleteButton);
  list.appendChild(li);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTodo(text);
  input.value = '';
  input.focus();
});
