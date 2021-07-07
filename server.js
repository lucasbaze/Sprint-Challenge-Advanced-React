const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const { data } = require('./data');

app.use(bodyParser.json());

app.use(cors());

const players = data.map((player, index) => ({ ...player, id: index }));

app.get('/api/players', (req, res) => {
    console.log('Returning Players');
    res.send(players);
});

app.post('/api/players', (req, res) => {
    if (req.body.country != '') {
        let { country } = req.body;
        console.log(req);
        let filterdPlayers = players.filter(player => {
            return player.country == country;
        });
        console.log(filterdPlayers);
        res.send(filterdPlayers);
    } else {
        res.send(players);
    }
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
