import React from 'react';
import { render } from '@testing-library/react';

import Todos from './index';

test('Snapshot Todos', () => {
  const { asFragment } = render(
    <Todos
      todos={[
        {
          color: '',
          id: '1-delectus aut autem',
          isDone: false,
          isResolved: true,
          title: 'delectus aut autem',
        },
        {
          color: '',
          id: '2-quis ut nam facilis et officia qui',
          isDone: true,
          isResolved: false,
          title: 'quis ut nam facilis et officia qui',
        },
      ]}
      resolved={false}
      unresolved={false}
      deleteTodoHandler={() => {}}
      resolveSingleTodo={() => {}}
      openModal={() => {}}
      setSelectedTodo={() => {}}
      selectedColor={null}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
