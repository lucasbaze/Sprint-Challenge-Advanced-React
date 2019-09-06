import React from 'react';

//Components
import { Card } from 'semantic-ui-react';

const PlayerCard = props => {
    let { player } = props;

    return (
        <Card>
            <Card.Header data-testid="player-name">{player.name}</Card.Header>
            <Card.Meta data-testid="player-country">{player.country}</Card.Meta>
            <Card.Description data-testid="player-searches">
                {player.searches}
            </Card.Description>
        </Card>
    );
};

export default PlayerCard;

// <div style={{ backgroundColor: 'skyblue' }}>
//     <h2 data-testid="player-name">{player.name}</h2>
//     <div>{player.country}</div>
//     <div>{player.searches}</div>
// </div>
