import React from 'react';
import { Todo } from '..';

const Todos = ({
  todos,
  resolved,
  unresolved,
  deleteTodoHandler,
  resolveSingleTodo,
  openModal,
  setSelectedTodo,
  selectedColor,
}) => {
  const setActiveTodo = (id) => {
    openModal();
    setSelectedTodo(id);
  };

  return (
    <>
      {todos
        .filter((todo) => {
          if (resolved && unresolved) {
            return todo;
          }
          if (resolved) {
            return todo.isResolved === true;
          }
          if (unresolved) {
            return todo.isResolved === false;
          }

          return todo;
        })
        .filter((todo) => {
          if (selectedColor) {
            return todo.color === selectedColor;
          }

          return todo;
        })
        .map((todo, index) => {
          return (
            <Todo
              text={todo.title}
              key={todo.id}
              isResolved={todo.isResolved}
              isDone={todo.isDone}
              onDelete={() => deleteTodoHandler(todo.id)}
              resolveSingleTodo={(e) => resolveSingleTodo(todo, index)}
              addColor={() => setActiveTodo(todo.id)}
              color={todo.color}
            />
          );
        })}
    </>
  );
};

export default Todos;
