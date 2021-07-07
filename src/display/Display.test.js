import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

describe("Renders Display", () => {
  test('Renders', () => {
    render(<Display />)
  })
})

describe("Display Component", () => {
  test('Displays if gate is closed', () => {
    const locked = true;
    const closed = true;
    const tree = render(<Display 
      locked={locked}
      closed={closed}
      />)
    expect(tree.baseElement).toMatchSnapshot();
  })

  it('Displays red led if locked and closed', () => {
    const display = render(<Display closed={true} locked={true} />)
    const locked = display.getByText('Locked')
    const closed = display.getByText('Closed')
    expect(locked.className).toMatch('red-led')
    expect(closed.className).toMatch('red-led')
  })

  it('Displays green led if unlocked and open', () => {
    const display = render(<Display closed={false} locked={false} />)
    const unlocked = display.getByText('Unlocked')
    const open = display.getByText('Open')
    expect(unlocked.className).toMatch('green-led')
    expect(open.className).toMatch('green-led')
  })
});