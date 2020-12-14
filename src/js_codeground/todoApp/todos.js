// eslint-disable-next-line import/extensions
import { readFromLocal, renderSummary, renderTodos, saveToLocal } from './todos-functions.js';

const todos = readFromLocal();

const filters = {
  searchText: '',
  hideCompleted: false,
};

renderSummary(todos);
renderTodos(todos, filters);

document.querySelector('#search-todo').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

const form = document.querySelector('#add-todo');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  todos.push({ text: e.target.elements.addTodo.value, completed: false });
  // move
  saveToLocal(todos);
  renderTodos(todos, filters);
  form.reset();
});

const hideCheck = document.querySelector('#hide');

hideCheck.addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
