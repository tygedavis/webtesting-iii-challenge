import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('Dashboard renders Display and Control', () => {
  const tree = render(<Dashboard />)
  expect(tree.baseElement).toMatchSnapshot();
})