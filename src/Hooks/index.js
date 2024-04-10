import { useDispatch } from 'react-redux';
import {
  addTodo,
  removeAllTodos,
  removeTodo,
  resolveAllTodos,
  unresolveAllTodos,
  getTodos,
  editTodo,
} from '../Redux/slices/todo.js';
import { MESSAGE_EMPTY_INPUT } from '../Constants';

export const useUtils = (value, todos, setValue) => {
  const dispatch = useDispatch();

  const resolveHandler = (e) => {
    e.preventDefault();
    dispatch(resolveAllTodos());
  };

  const unResolveHandler = (e) => {
    e.preventDefault();
    dispatch(unresolveAllTodos());
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(removeAllTodos());
  };

  const addHandler = (e) => {
    e.preventDefault();

    if (value) {
      dispatch(
        addTodo({
          id: `${todos.length}-${value}`,
          title: value,
          isDone: false,
          isResolved: false,
          color: '',
        }),
      );

      setValue('');
    } else {
      alert(MESSAGE_EMPTY_INPUT);
    }
  };

  const deleteTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const getAllTodos = () => {
    dispatch(getTodos());
  };

  const resolveSingleTodo = (todo, index) => {
    dispatch(editTodo({ ...todo, isResolved: !todo.isResolved }));
  };

  return {
    resolveHandler,
    unResolveHandler,
    deleteTodoHandler,
    deleteHandler,
    addHandler,
    getAllTodos,
    resolveSingleTodo,
  };
};
