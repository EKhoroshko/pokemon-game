import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from '../Menu/Menu.module.css';
import cn from 'classnames';

const Menu = ({ isActive, handleClickBurgger }) => {
  return (
    <div className={cn(css.menuContainer, { [css.active]: isActive === true }, { [css.deactive]: isActive === false })}>
      <div className={css.overlay} />
      <div className={css.menuItems}>
        <ul>
          <li >
            <Link className={css.item} to="/" onClick={() => handleClickBurgger()}>
              <h4>HOME</h4>
            </Link>
          </li>
          <li>
            <Link className={css.item} to="/game" onClick={() => handleClickBurgger()}>
              <h4>GAME</h4>
            </Link>
          </li>
          <li>
            <Link className={css.item} to="/about" onClick={() => handleClickBurgger()}>
              <h4>ABOUT</h4>
            </Link>
          </li>
          <li>
            <Link className={css.item} to="/contact" onClick={() => handleClickBurgger()}>
              <h4>CONTACT</h4>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

Menu.propTypes = {
  handleClickBurgger: PropTypes.func,
  isActive: PropTypes.bool,
};

export default Menu;


