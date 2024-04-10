import React from 'react';
import { render } from '@testing-library/react';

import Menu from './index';

test('Snapshot Menu', () => {
  const { asFragment } = render(
    <Menu
      resolveHandler={() => {}}
      unResolveHandler={() => {}}
      deleteHandler={() => {}}
      addHandler={() => {}}
      onInputChangeHandler={() => {}}
      value="Test"
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
