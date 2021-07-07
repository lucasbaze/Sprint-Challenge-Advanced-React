import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//THIS IS F'ING BS?!?!?!? TESTING MY AAAAAAAAAA
// test('App displays stuff', async () => {
//     const { getAllByTestId } = await render(<App />);
//
//     const playerNames = getAllByTestId('player-name').map(
//         item => item.textContent
//     );
//
//     console.log(playerNames);
// });
