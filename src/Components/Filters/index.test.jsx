import React from 'react';
import { render } from '@testing-library/react';

import Filters from './index';

test('Snapshot Filters', () => {
  const { asFragment } = render(
    <Filters
      resolved={false}
      unresolved={false}
      dotColors={[]}
      setResolved={() => {}}
      setUnresolved={() => {}}
      setFilterColor={() => {}}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
