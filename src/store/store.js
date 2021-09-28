import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemons';
import counterReducer from './counter';
import selectToGame from './selectedPokemon';
import secondPlayer from './secondPlayer'

export default configureStore({
    reducer: {
        pokemons: pokemonReducer,
        counter: counterReducer,
        selectToGame: selectToGame,
        secondPlayer: secondPlayer,
    },
})