import React from 'react';
import { render } from '@testing-library/react';

import AddTodo from './index';

test('Snapshot AddTodo', () => {
  const { asFragment } = render(
    <AddTodo onClick={() => {}} onInputChange={() => {}} value="Test" />,
  );
  expect(asFragment()).toMatchSnapshot();
});
