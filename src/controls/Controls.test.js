import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';

// test('Toggles closed and locked states', () => {
//   const locked = true;
//   const closed = true;
//   const toggleLocked = true;
//   const toggleClosed = true;
//   const tree = render(<Controls 
//     locked = {locked}
//     closed = {closed}
//     toggleLocked = {toggleLocked}
//     toggleClosed = {toggleClosed}
//     />)
//   expect(tree.baseElement).toMatchSnapshot()
// })

describe('<Controls />', () => {
  it('Renders Controls', () =>{
    render(<Controls />)
  })
})