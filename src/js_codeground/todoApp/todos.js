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

const uncompleted = todos.filter((el) => !el.completed);

const summary = document.createElement('p');
summary.textContent = `You have ${uncompleted.length} todos !`;
document.body.appendChild(summary);

todos.forEach((element) => {
  const todo = document.createElement('p');
  todo.textContent = `N: ${element.text}`;
  document.body.appendChild(todo);
});
