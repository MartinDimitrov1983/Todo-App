import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SketchPicker } from 'react-color';
import {
  CheckBox,
  Dot,
  Menu,
  Todos,
  Modal,
  Button,
  Loading,
} from '../Components';
import { useUtils } from '../Hooks/index.js';
import styles from './index.module.css';
import { editTodo } from '../Redux/slices/todo.js';
import {
  CLEAR_FILTERS,
  FILTERS,
  MY_TASKS,
  PIC_COLOR,
  RESOLVED,
  UNRESOLVED,
  WHITE_COLOR,
} from '../Constants';

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
  const [colorsForFilter, setColorsforFilter] = useState([]);
  const [filterColor, setFilterColor] = useState(null);

  const {
    resolveHandler,
    unResolveHandler,
    deleteTodoHandler,
    deleteHandler,
    addHandler,
    getAllTodos,
    resolveSingleTodo,
  } = useUtils(value, todos, setValue);

  useEffect(() => {
    getAllTodos();
  }, []);

  const dotColors = (todos) => {
    const allColors = todos?.map((todo) => todo.color);
    const uniquesColors = new Set(allColors);
    setColorsforFilter(Array.from(uniquesColors));
  };

  useEffect(() => {
    dotColors(todos);
  }, [todos]);

  if (loading) {
    return <Loading />;
  }

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor.hex);
  };

  const addColorHandler = () => {
    dispatch(editTodo({ id: selectedTodo, color: color }));
    setIsOpen(false);
    setColor(WHITE_COLOR);
    setSelectedTodo(null);
  };

  return (
    <div className={styles.page}>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          onAddColor={addColorHandler}
          header={PIC_COLOR}
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
      {/* Отделен компонент */}
      <main className={styles.children}>
        <h2 className={styles.title}>{MY_TASKS}</h2>
        <div>
          <div className={styles.filters}>
            <h4>{FILTERS}</h4>
            <Button
              onClick={() => {
                setResolved(false);
                setUnresolved(false);
                setFilterColor(false);
              }}
              text={CLEAR_FILTERS}
            />
          </div>
          <div className={styles.filter}>
            <CheckBox
              label={RESOLVED}
              checked={resolved}
              onChange={() => setResolved((prev) => !prev)}
            />
            <CheckBox
              label={UNRESOLVED}
              checked={unresolved}
              onChange={() => setUnresolved((prev) => !prev)}
            />
          </div>
          <div>
            <h5>Colors</h5>
            <div className={styles.colorFilter}>
              {colorsForFilter.map((color) => (
                <Dot
                  color={color}
                  key={color}
                  onClick={() => setFilterColor(color)}
                />
              ))}
            </div>
          </div>
        </div>
        <Todos
          todos={todos}
          resolved={resolved}
          unresolved={unresolved}
          deleteTodoHandler={deleteTodoHandler}
          resolveSingleTodo={resolveSingleTodo}
          openModal={() => setIsOpen(true)}
          setSelectedTodo={setSelectedTodo}
          selectedColor={filterColor}
        />
      </main>
    </div>
  );
};

export default Page;
