
import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/header/Header';
import SelectionType from './components/selection-type/SelectionType';
import UserPlaylist from './components/user-playlist/UserPlaylist';
import Results from './components/results/Results';
import ResultPlaylist from './components/result-playlist/ResultPlaylist';

class App extends Component {
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                this.setState({musics: res.results});
            })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <SelectionType />
                <UserPlaylist />
                <button type="text">Comparar</button>
                <Results />
                <ResultPlaylist />
            </div>
        );
    }
}


export default App
