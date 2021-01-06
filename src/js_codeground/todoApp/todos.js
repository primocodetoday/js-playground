/* eslint-disable import/extensions */
import { readFromLocal, renderSummary, renderTodos, saveToLocal, removeTodo } from './functions.js';

let todos = readFromLocal();

export const filters = {
  searchText: '',
  hideCompleted: false,
};

renderSummary(todos);
renderTodos(todos, filters);

const search = document.querySelector('#search-todo');

search.addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

const form = document.querySelector('#add-todo');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  todos.push({
    // eslint-disable-next-line no-undef
    id: uuidv4(),
    text: e.target.elements.addTodo.value,
    completed: false,
  });
  saveToLocal(todos);
  renderTodos(todos, filters);
  form.reset();
});

const hideCheck = document.querySelector('#hide');

hideCheck.addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});

const deleteButtons = document.querySelectorAll('.button-delete');

deleteButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const { id } = e.target.parentElement.dataset;
    todos = removeTodo(id, todos);
    saveToLocal(todos);
    renderTodos(todos, filters);
  });
});
