import cn from 'classnames';

import css from './ArrowChoice.module.css';

const ArrowChoice = ({ stop = false, side = 0 }) => {
  return <div class={cn(css.arrow, {
    [css.rightSide]: side === 2,
    [css.leftSide]: side === 1
  })} />
};

export default ArrowChoice;
