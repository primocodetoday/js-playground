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
};

const renderSummary = () => {
  const uncompleted = todos.filter((el) => !el.completed);

  const summary = document.createElement('p');
  summary.textContent = `You have ${uncompleted.length} todos !`;
  document.querySelector('#info').appendChild(summary);
};

renderSummary();

const renderTodos = () => {
  todos.forEach((element) => {
    const todo = document.createElement('p');
    todo.textContent = `N: ${element.text}`;
    document.querySelector('#todos').appendChild(todo);
  });
};

renderTodos();

const renderFilteredNotes = (elements, search) => {
  const filteredTodos = elements.filter((element) =>
    element.text.toLowerCase().includes(search.searchText.toLowerCase()),
  );
  // cleaning todos
  document.querySelector('#todos').innerHTML = '';
  // rendering new set of todos
  filteredTodos.forEach((node) => {
    const todoEl = document.createElement('p');
    todoEl.textContent = `N: ${node.text}`;
    todoEl.classList.add('todo');
    document.querySelector('#todos').appendChild(todoEl);
  });
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
