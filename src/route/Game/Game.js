import { useRouteMatch, Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetcPlayer2 } from '../../service/boardApi';
import { PokemonContext } from '../../Context/PokemonContext';
import StartPage from './routes/Start/Start';
import BoardPage from './routes/Board/Board';
import FinishPage from './routes/Finish/Finish';

const Game = () => {
    const match = useRouteMatch();
    const [selectedPokemon, setSelectedPokemon] = useState({});
    const [playerTwo, setPlayerTwo] = useState([]);
    const [counter, setCounter] = useState(0)

    const addPokemonContext = (key, pokemon) => {
        setSelectedPokemon(prevState => {
            if (prevState[key]) {
                const copyState = { ...prevState };
                delete copyState[key];
                return copyState;
            }
            return {
                ...prevState,
                [key]: pokemon,
            }
        });
    }

    const updatePokemon2 = () => fetcPlayer2().then(({ data }) => setPlayerTwo(() => {
        return data.map(item => ({
            ...item,
            possession: 'red',
        }))
    }));

    useEffect(() => {
        updatePokemon2();
    }, [])

    const clearContext = () => {
        setSelectedPokemon({});
        setPlayerTwo([]);
    }

    return (
        <PokemonContext.Provider value={{
            pokemon: selectedPokemon,
            playerTwo: playerTwo,
            counter: counter,
            addPokemonContext,
            clearContext,
            updatePokemon2,
            setCounter,
        }} >
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>

    );
}

export default Game;