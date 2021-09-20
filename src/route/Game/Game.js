import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../../Context/FirebaseContext';
import Layout from '../../components/Layout/Layout';
import css from '../../components/Layout/Layout.module.css'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Data from '../../base/db.json'

const GamePage = () => {
    const firebase = useContext(FirebaseContext);
    const [pokemons, setPokemons] = useState({})
    const history = useHistory();

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        })
    }, []);

    const handlClickCard = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] };
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                };
                acc[item[0]] = pokemon;
                firebase.postPokemon(item[0], pokemon)
                return acc;
            }, {});
        })
    }

    const AddPokemon = () => {
        const data = Data;
        firebase.addPokemon(data);
    }

    const handleClick = () => {
        history.push('/');
    }

    return (
        <section>

            <button type="button" onClick={handleClick}> Go back</button>
            <h1> This Game Page</h1>

            <Layout title={'Interface'} desc={'We will collect them all'} colorBg={'#ccc'} >
                <div className={css.addPoke}>
                    <button onClick={AddPokemon}>Add POKEMONS</button>
                </div>

                <div className={css.flex}>
                    {Object.entries(pokemons).map(([key, { type, img, name, values, id, active }]) => (
                        <PokemonCard
                            key={key}
                            type={type}
                            img={img}
                            name={name}
                            values={values}
                            id={id}
                            isActive={active}
                            handlClickCard={handlClickCard}
                        />
                    ))}
                </div>
            </Layout>
        </section>

    );
}

export default GamePage;