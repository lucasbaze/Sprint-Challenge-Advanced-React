import React, { Component } from 'react';
import axios from 'axios';

//CSS
import 'semantic-ui-css/semantic.min.css';
import './App.css';

//Components
import { Header } from 'semantic-ui-react';
import Players from './components/Players';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('failed to fetch');
                }
                this.setState({ ...this.state, players: response.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <Header as="h1" content="World Cup Winners" />
                <Players players={this.state.players} />
            </div>
        );
    }
}

export default App;
