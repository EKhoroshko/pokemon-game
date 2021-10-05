import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemons';
import counterReducer from './counter';
import selectToGame from './selectedPokemon';
import secondPlayer from './secondPlayer';
import user from './user';

export default configureStore({
    reducer: {
        pokemons: pokemonReducer,
        counter: counterReducer,
        selectToGame: selectToGame,
        secondPlayer: secondPlayer,
        user: user,
    },
})