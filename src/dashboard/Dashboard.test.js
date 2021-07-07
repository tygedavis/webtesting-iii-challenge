import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

describe('Renders <Dashboard />', () => {
  it('Renders Controls and Display', () => {
    render(<Dashboard />)
  })
})