import React, { useState } from 'react';

// Child component: AddTodo
function AddTodo({ onAdd }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed); // communicate to parent
    setValue('');  // reset input
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a new to-do"
        style={styles.input}
        aria-label="New to-do"
      />
      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
}

// Parent component: TodoList
function TodoList() {
  const [todos, setTodos] = useState([]); // state lifted in parent

  // Callback function to handle new to-dos from child
  const addTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div style={styles.container}>
      <h1>Todo List</h1>

      {/* Child component receives callback as prop */}
      <AddTodo onAdd={addTodo} />

      <ul style={styles.list}>
        {todos.length === 0 ? (
          // Optional: show nothing or a placeholder when list is empty
          null
        ) : (
          todos.map((todo, index) => (
            <li key={index} style={styles.item}>{todo}</li>
          ))
        )}
      </ul>
    </div>
  );
}

// Inline simple styles for clarity
const styles = {
  container: {
    maxWidth: 400,
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    gap: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    padding: '8px 12px',
    fontSize: 16,
  },
  button: {
    padding: '8px 16px',
    fontSize: 16,
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: 20,
  },
  item: {
    margin: '6px 0',
  },
};

export default TodoList;