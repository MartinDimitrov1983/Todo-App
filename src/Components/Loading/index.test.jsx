import React from 'react';
import { render } from '@testing-library/react';

import Loading from './index';

test('Snapshot Loading', () => {
  const { asFragment } = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});
