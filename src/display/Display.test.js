import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Displays if gate is open/closed', () => {
  const locked = true;
  const closed = true;
  const tree = render(<Display 
    locked={locked}
    closed={closed}
    />)
  expect(tree.baseElement).toMatchSnapshot();
})