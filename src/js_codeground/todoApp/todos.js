const todos = [
  {
    text: 'Cleanup an apartment',
    completed: false,
  },
  {
    text: 'Sweep the floor',
    completed: false,
  },
  {
    text: 'Fill up the car',
    completed: true,
  },
  {
    text: 'Take a walk',
    completed: true,
  },
  {
    text: 'Buy bread',
    completed: false,
  },
];

const filters = {
  searchText: '',
  hideCompleted: false,
};

const renderSummary = () => {
  const uncompleted = todos.filter((el) => !el.completed);

  const summary = document.createElement('p');
  summary.textContent = `You have ${uncompleted.length} todos !`;
  document.querySelector('#info').appendChild(summary);
};

renderSummary();

const renderTodos = (array) => {
  array.forEach((element) => {
    const todo = document.createElement('p');
    todo.textContent = `${element.text}`;
    todo.classList.add('todo');
    document.querySelector('.todos').appendChild(todo);
  });
};

renderTodos(todos);

const renderFilteredNotes = (elements, search) => {
  const filteredTodos = elements
    .filter((el) => el.text.toLowerCase().includes(search.searchText.toLowerCase()))
    .filter((el) => el.completed === !search.hideCompleted || !el.completed);
  // cleaning todos
  document.querySelector('.todos').innerHTML = '';
  // rendering new set of todos
  renderTodos(filteredTodos);
};

document.querySelector('#search-todo').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderFilteredNotes(todos, filters);
});

const form = document.querySelector('#add-todo');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  todos.push({ text: e.target.elements.addTodo.value, completed: false });
  renderFilteredNotes(todos, filters);
  form.reset();
});

const hideCheck = document.querySelector('#hide');

hideCheck.addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderFilteredNotes(todos, filters);
});
