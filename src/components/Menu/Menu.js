import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import css from '../Menu/Menu.module.css';
import cn from 'classnames'

const Menu = ({ isActive, handleClickBurgger }) => {
    return (
        <div className={cn(css.menuContainer, { [css.active]: isActive === true }, { [css.deactive]: isActive === false })}>
            <div className={css.overlay} />
            <div className={css.menuItems}>
                <ul>
                    <li>
                        <Link to="/" onClick={() => handleClickBurgger()}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="game" onClick={() => handleClickBurgger()}>
                            GAME
                        </Link>
                    </li>
                    <li>
                        <Link to="about" onClick={() => handleClickBurgger()}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" onClick={() => handleClickBurgger()}>
                            CONTACT
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


