import { useState } from 'react';
import PokemonCard from '../../../../../../components/PokemonCard/PokemonCard';
import css from '../PlayerBoard/PlayerBoard.module.css';
import cn from 'classnames';


const PlayerBoard = ({ cards, onClickCard, player, dis }) => {
  const [isSelected, setIsSelected] = useState(null)

  return (
    <>
      {
        cards.map((item) => (
          <div className={cn(css.cardBoard, { [css.selected]: isSelected === item.id }, { [css.disableDiv]: dis })}
            onClick={() => {
              setIsSelected(item.id);
              onClickCard({ player, ...item, })
            }}
            key={item.id}>
            <PokemonCard
              key={item.id}
              type={item.type}
              img={item.img}
              name={item.name}
              values={item.values}
              id={item.id}
              isActive
              minimize />
          </div>

        ))
      }
    </>
  );
}
export default PlayerBoard;

