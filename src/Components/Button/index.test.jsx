import React from 'react';
import { render } from '@testing-library/react';

import Button from './index';

test('Snapshot Button', () => {
  const { asFragment } = render(
    <Button text="Test" onClick={() => {}} type="button" />,
  );
  expect(asFragment()).toMatchSnapshot();
});
