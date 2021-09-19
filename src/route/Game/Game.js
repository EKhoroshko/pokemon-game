import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import css from '../../components/Layout/Layout.module.css'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import database from '../../service/firebase';
import db from '../../base/db.json'

const GamePage = () => {
    const [pokemons, setPokemons] = useState({})
    const history = useHistory();

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, [pokemons])

    const handlClickCard = (id) => {
        setPokemons(prewState => {
            return Object.entries(prewState).reduce((acc, item) => {
                const pokemon = { ...item[1] };
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                    database.ref('pokemons/' + item[0]).set({ ...pokemon });
                };
                acc[item[0]] = pokemon;
                return acc;
            }, {});
        })
    }

    const AddPokemon = () => {
        const randomaizer = Math.floor(Math.random() * db.length);
        const newKey = database.ref().child("pokemons").push().key;
        database.ref("pokemons/" + newKey).set(db[randomaizer]);
        console.log(pokemons);

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