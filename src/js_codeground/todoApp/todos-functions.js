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

export const generateTodoDOM = (element) => {
  const p = document.createElement('p');
  p.textContent = `${element.text}`;
  p.classList.add('todo');
  document.querySelector('.todos').appendChild(p);
};

export const renderTodos = (array, filters) => {
  const filteredTodos = array
    .filter((el) => el.text.toLowerCase().includes(filters.searchText.toLowerCase()))
    .filter((el) => el.completed === !filters.hideCompleted || !el.completed);
  // cleaning todos
  document.querySelector('.todos').innerHTML = '';

  filteredTodos.forEach((element) => {
    generateTodoDOM(element);
  });
};
