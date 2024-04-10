import React from 'react';
import { render } from '@testing-library/react';

import Checkbox from './index';

test('Snapshot Checkbox', () => {
  const { asFragment } = render(
    <Checkbox label="Test" checked={true} onChange={() => {}} />,
  );
  expect(asFragment()).toMatchSnapshot();
});
