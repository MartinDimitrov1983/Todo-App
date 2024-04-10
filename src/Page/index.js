import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SketchPicker } from 'react-color';
import { Menu, Todos, Modal, Loading, Filters } from '../Components';
import { useUtils } from '../Hooks/index.js';
import styles from './index.module.css';
import { editTodo } from '../Redux/slices/todo.js';
import { PICK_COLOR, WHITE_COLOR } from '../Constants';

const Page = () => {
  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state) => state.todos.isLoading);
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [resolved, setResolved] = useState(false);
  const [unresolved, setUnresolved] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(WHITE_COLOR);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [dotColors, setDotColors] = useState([]);
  const [filterColor, setFilterColor] = useState(null);

  const {
    resolveHandler,
    unResolveHandler,
    deleteTodoHandler,
    deleteHandler,
    addHandler,
    getAllTodos,
    resolveSingleTodoHandler,
  } = useUtils(value, todos, setValue);

  useEffect(() => {
    getAllTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setColorsForDots = (todos) => {
    const allColors = todos?.map((todo) => todo.color);
    const uniquesColors = new Set(allColors);
    setDotColors(Array.from(uniquesColors));
  };

  useEffect(() => {
    setColorsForDots(todos);
  }, [todos]);

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor.hex);
  };

  const addColorHandler = () => {
    dispatch(editTodo({ id: selectedTodo, color: color }));
    setIsOpen(false);
    setColor(WHITE_COLOR);
    setSelectedTodo(null);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.page}>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          onAddColor={addColorHandler}
          header={PICK_COLOR}
        >
          <SketchPicker color={color} onChange={handleColorChange} />
        </Modal>
      )}
      <Menu
        resolveHandler={resolveHandler}
        unResolveHandler={unResolveHandler}
        deleteHandler={deleteHandler}
        addHandler={addHandler}
        onInputChangeHandler={(e) => setValue(e.target.value)}
        value={value}
      />
      <main className={styles.children}>
        <Filters
          resolved={resolved}
          unresolved={unresolved}
          setResolved={setResolved}
          setUnresolved={setUnresolved}
          setFilterColor={setFilterColor}
          dotColors={dotColors}
        />
        <Todos
          todos={todos}
          resolved={resolved}
          unresolved={unresolved}
          deleteTodoHandler={deleteTodoHandler}
          resolveSingleTodoHandler={resolveSingleTodoHandler}
          openModal={() => setIsOpen(true)}
          setSelectedTodo={setSelectedTodo}
          selectedColor={filterColor}
        />
      </main>
    </div>
  );
};

export default Page;
