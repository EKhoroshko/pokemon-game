/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../../../../Context/FirebaseContext';
import { PokemonContext } from '../../../../Context/PokemonContext';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import css from '../Start/Start.module.css';

const StartPage = () => {
    const firebase = useContext(FirebaseContext);
    const pokeContext = useContext(PokemonContext);
    const [pokemons, setPokemons] = useState({});
    const history = useHistory()

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        });
        return () => firebase.offtPokemonSocket();
    }, []);

    const handlClickCard = (key) => {
        const pokemon = { ...pokemons[key] }
        pokeContext.addPokemonContext(key, pokemon)
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
                    disabled={Object.keys(pokeContext.pokemon).length < 5}
                > Start Game</button>
            </div>

            <div className={css.flex}>
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
                            if (Object.keys(pokeContext.pokemon).length < 5 || selected) {
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