import React from 'react';
import { render } from '@testing-library/react';

import ColorDot from './index';

test('Snapshot Dot', () => {
  const { asFragment } = render(
    <ColorDot color="#ffffff" onClick={() => {}} />,
  );
  expect(asFragment()).toMatchSnapshot();
});
