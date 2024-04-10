import React from 'react';
import { render } from '@testing-library/react';

import Modal from './index';

test('Snapshot Modal', () => {
  const { asFragment } = render(
    <Modal
      isOpen={false}
      onClose={() => {}}
      onAddColor={() => {}}
      header="Test"
      children={null}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
