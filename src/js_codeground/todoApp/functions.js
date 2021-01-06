export const readFromLocal = () => {
  const todosJson = localStorage.getItem('todos');
  if (todosJson !== null) {
    return JSON.parse(todosJson);
  }
  return [];
};

export const saveToLocal = (array) => {
  localStorage.setItem('todos', JSON.stringify(array));
};

export const renderSummary = (array) => {
  const uncompleted = array.filter((el) => !el.completed);

  const summary = document.createElement('p');
  summary.textContent = `You have ${uncompleted.length} todos !`;
  document.querySelector('#info').appendChild(summary);
};

export const removeTodo = (id, array) => {
  const result = array.filter((todo) => {
    return todo.id !== id;
  });
  return result;
};

// rendering Todos
export const generateTodosDOM = (todo) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('todo');
  wrapper.dataset.id = `${todo.id}`;

  const text = document.createElement('span');
  text.textContent = `${todo.text}`;

  const button = document.createElement('button');
  button.textContent = 'Delete';
  button.classList.add('button-delete');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');

  wrapper.appendChild(checkbox);
  wrapper.appendChild(text);
  wrapper.appendChild(button);

  document.querySelector('.todos').appendChild(wrapper);
};

export const renderTodos = (array, filters) => {
  const filteredTodos = array
    .filter((el) => el.text.toLowerCase().includes(filters.searchText.toLowerCase()))
    .filter((el) => el.completed === !filters.hideCompleted || !el.completed);
  // cleaning todos
  document.querySelector('.todos').innerHTML = '';

  filteredTodos.forEach((todo) => {
    generateTodosDOM(todo);
  });
};
