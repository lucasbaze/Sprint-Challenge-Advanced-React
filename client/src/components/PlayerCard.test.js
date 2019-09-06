import React from 'react';
import PlayerCard from './PlayerCard';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Player Card fucking does something ANYTHING PLEASE', () => {
    let fakePlayer = {
        name: 'Janey',
        country: 'United States',
    };

    let { getByTestId } = render(<PlayerCard player={fakePlayer} />);

    const playerName = getByTestId('player-name').textContent;
    const playerCountry = getByTestId('player-country').textContent;
    const playerSearches = getByTestId('player-searches').textContent;

    expect(fakePlayer.name).toEqual(playerName);
    expect(fakePlayer.country).toEqual(playerCountry);
});
