import { useRouteMatch, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import { PokemonContext } from '../../Context/PokemonContext';
import StartPage from './routes/Start/Start';
import BoardPage from './routes/Board/Board';
import FinishPage from './routes/Finish/Finish';

const Game = () => {
    const match = useRouteMatch();
    const [selectedPokemon, setSelectedPokemon] = useState({})

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

    return (
        <PokemonContext.Provider value={{
            pokemon: selectedPokemon,
            addPokemonContext,
        }} >
            <Switch>
                <Route path={`${match.path}`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>

    );
}

export default Game;