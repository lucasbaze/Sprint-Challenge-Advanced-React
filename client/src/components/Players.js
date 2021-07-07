import React, { useState, useEffect } from 'react';

//components
import PlayerCard from './PlayerCard';
import CustomLoader from './CustomLoader.js';
import { Card, Dropdown } from 'semantic-ui-react';

//hooks
import { useHttp, useLocalStorage } from '../hooks';

//css
import styled from 'styled-components';

const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const StyledCardGroup = styled(Card.Group)`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const Players = props => {
    //Get All Players
    let [loading, setLoading] = useState(true);
    let [players, setPlayers] = useState([]);
    let [country, setCountry] = useLocalStorage('country', '');

    useEffect(() => {
        if (props.players.length == 0) {
            return;
        } else {
            setPlayers(props.players);
            setLoading(false);
        }
    }, []);

    //Get Select players
    let url = 'http://localhost:5000/api/players';
    let post = { country: country };
    let [isLoading, fetchedData] = useHttp(url, [country], post);

    useEffect(() => {
        setPlayers(fetchedData);
    }, [fetchedData]);

    let options = [];
    if (props.players !== null) {
        options = props.players.map(player => player.country);
        options = options.filter((country, index) => {
            return options.indexOf(country) === index;
        });
        options = options.map(option => {
            return {
                key: option,
                value: option,
                text: option,
            };
        });
    }

    const handleChange = (e, { value }) => {
        e.preventDefault();
        setCountry(value);
    };

    return (
        <>
            <Dropdown
                selection
                options={options}
                value={country}
                onChange={handleChange}
            />
            <StyledCardContainer>
                {isLoading ? (
                    <CustomLoader loading={isLoading} type="spinner" />
                ) : (
                    <StyledCardGroup>
                        {players.map((player, index) => {
                            return (
                                <PlayerCard
                                    key={player + index}
                                    player={player}
                                />
                            );
                        })}
                    </StyledCardGroup>
                )}
            </StyledCardContainer>
        </>
    );
};

export default Players;
