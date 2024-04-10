import React from 'react';
import { render } from '@testing-library/react';

import Todo from './index';

test('Snapshot Todo', () => {
  const { asFragment } = render(
    <Todo
      text="Test"
      onDelete={() => {}}
      isResolved={true}
      onResolveSingleTodo={() => {}}
      color="Test"
      onAddColor={() => {}}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
