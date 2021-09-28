import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPokemonData, getPokemonsAsync, selectPokemonLoading } from '../../../../store/pokemons';
import { addPokemon, setPokemonData } from '../../../../store/selectedPokemon';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import Loader from '../../../../components/Loader/Loader'

import css from '../Start/Start.module.css';

const StartPage = () => {
    const pokemonRedux = useSelector(selectPokemonData);
    const pokemonSelect = useSelector(setPokemonData);
    const isLoading = useSelector(selectPokemonLoading);
    const dispatch = useDispatch();
    const history = useHistory()
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        dispatch(getPokemonsAsync());
    }, [dispatch]);

    useEffect(() => {
        setPokemons(pokemonRedux);
    }, [pokemonRedux])

    const handlClickCard = (key) => {
        const pokemon = { ...pokemons[key] }
        dispatch(addPokemon({ key, pokemon }))
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))
    }

    const handleClick = () => {
        history.push('/game/board');
    }

    return (
        <section>
            <div className={css.addPoke}>
                <button onClick={handleClick}
                    disabled={Object.keys(pokemonSelect).length < 5}
                > Start Game</button>
            </div>

            <div className={css.flex}>
                {isLoading && <Loader />}
                {Object.entries(pokemons).map(([key, { type, img, name, values, id, selected }]) => (
                    <PokemonCard
                        className={css.card}
                        key={key}
                        type={type}
                        img={img}
                        name={name}
                        values={values}
                        id={id}
                        isSelected={selected}
                        isActive={true}
                        handlClickCard={() => {
                            if (Object.keys(pokemonSelect).length < 5 || selected) {
                                handlClickCard(key)
                            }
                        }}
                    />
                ))}
            </div>
        </section>

    );
}

export default StartPage;