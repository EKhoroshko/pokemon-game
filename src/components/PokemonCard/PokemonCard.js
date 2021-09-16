import card from '../../assets/imges/card-back-side.jpg';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from '../PokemonCard/PokemonCard.module.css';

function PokemonCard({ type, img, name, values, id, handlClickCard, isActive }) {
    return (
        <div className={css.root} onClick={() => handlClickCard(id)}>
            <div className={cn(css.pokemonCard, { [css.active]: isActive })}>
                <div className={css.cardFront}>
                    <div className={cn(css.wrap, css.front)}>
                        <div className={cn(css.pokemon, css[type])}>
                            <div className={css.values}>
                                <div className={cn(css.count, css.top)}>{values.top}</div>
                                <div className={cn(css.count, css.right)}>{values.right}</div>
                                <div className={cn(css.count, css.bottom)}>{values.bottom}</div>
                                <div className={cn(css.count, css.left)}>{values.left}</div>
                            </div>
                            <div className={css.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={css.info}>
                                <span className={css.number}>#{id}</span>
                                <h3 className={css.name}>{name}</h3>
                                <small className={css.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.cardBack}>
                    <div className={cn(css.wrap, css.back)}>
                        <img src={card} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    );
}

PokemonCard.propTypes = {
    type: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.object,
    id: PropTypes.number,
    isActive: PropTypes.bool,
    handlClickCard: PropTypes.func,
};

export default PokemonCard;