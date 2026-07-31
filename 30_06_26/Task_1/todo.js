  let todos = [];
  let nextId = 1;
 
  // ----- DOM references -----
  const todoInput = document.getElementById('todoInput');
  const addBtn = document.getElementById('addBtn');
  const todoList = document.getElementById('todoList');
  const counter = document.getElementById('counter');
 
  // ----- CREATE -----
  function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;
 
    todos.push({
      id: nextId++,
      text: text,
      done: false
    });
 
    todoInput.value = '';
    render();
  }
 
  // ----- READ / RENDER -----
  function render() {
    todoList.innerHTML = '';
 
    if (todos.length === 0) {
      todoList.innerHTML = '<div class="empty-msg">No tasks yet. Add one above.</div>';
    }
 
    todos.forEach(function (todo) {
      const li = document.createElement('li');
      if (todo.done) li.classList.add('done');
 
      // text span (click to toggle complete)
      const span = document.createElement('span');
      span.className = 'todo-text';
      span.textContent = todo.text;
      span.addEventListener('click', function () {
        toggleDone(todo.id);
      });
 
      // edit button
      const editBtn = document.createElement('button');
      editBtn.className = 'icon-btn';
      editBtn.textContent = '✏️';
      editBtn.addEventListener('click', function () {
        startEdit(todo.id, li);
      });
 
      // delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'icon-btn';
      deleteBtn.textContent = '🗑️';
      deleteBtn.addEventListener('click', function () {
        deleteTodo(todo.id);
      });
 
      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    });
 
    const doneCount = todos.filter(function (t) { return t.done; }).length;
    counter.textContent = todos.length
      ? doneCount + ' of ' + todos.length + ' completed'
      : '';
  }
 
  // ----- UPDATE (toggle complete) -----
  function toggleDone(id) {
    const todo = todos.find(function (t) { return t.id === id; });
    if (todo) todo.done = !todo.done;
    render();
  }
 
  // ----- UPDATE (edit text) -----
  function startEdit(id, li) {
    const todo = todos.find(function (t) { return t.id === id; });
    if (!todo) return;
 
    li.innerHTML = '';
    const input = document.createElement('input');
    input.className = 'edit-input';
    input.value = todo.text;
    li.appendChild(input);
    input.focus();
 
    function saveEdit() {
      const newText = input.value.trim();
      todo.text = newText === '' ? todo.text : newText;
      render();
    }
 
    input.addEventListener('blur', saveEdit);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') saveEdit();
    });
  }
 
  // ----- DELETE -----
  function deleteTodo(id) {
    todos = todos.filter(function (t) { return t.id !== id; });
    render();
  }
 
  // ----- Events -----
  addBtn.addEventListener('click', addTodo);
  todoInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') addTodo();
  });
 
  // initial render
  render();