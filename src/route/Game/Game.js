import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import css from '../../components/Layout/Layout.module.css'
import data from '../../base/db.json';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const GamePage = () => {
    const [pokemons, setPokemons] = useState(data)
    const history = useHistory();

    const handlClickCard = (id) => {
        setPokemons(pokemons.map(card => {
            if (card.id === id) {
                card.active = !card.active;
            }
            return card;
        }));
    }

    const handleClick = () => {
        history.push('/');
    }

    return (
        <section>

            <button type="button" onClick={handleClick}> Go back</button>
            <h1> This Game Page</h1>

            <Layout title={'Interface'} desc={'We will collect them all'} colorBg={'#ccc'} >
                <div className={css.flex}>
                    {data.map(({ type, img, name, values, id, active }) => (
                        <PokemonCard
                            key={id}
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