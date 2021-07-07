import React from 'react';
import Players from './Players';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('players dispaly with a name, country, and search quantity', async () => {
    let fakePlayers = [
        { name: 'Jillian', country: 'UK', searches: 3 },
        { name: 'Frank', country: 'United States', searches: 4 },
        { name: 'Justin', country: 'UK', searches: 23 },
    ];

    const { getAllByTestId } = await render(<Players players={fakePlayers} />);
    // const playerNames = getAllByTestId('player-name').map(
    //     div => div.textContent
    // );
    // console.log(playerNames);
    console.log('FFFFF&*$ THIS!');
});
