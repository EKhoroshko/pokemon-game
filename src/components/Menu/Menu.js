import PropTypes from 'prop-types';
import css from '../Menu/Menu.module.css';
import cn from 'classnames'

const Menu = ({ isActive, handleChangePage, handleClickButton }) => {
    const handleClickMenu = (page) => {
        handleChangePage && handleChangePage(page);
        handleClickButton && handleClickButton();
    }

    return (
        <div className={cn(css.menuContainer, { [css.active]: isActive }, { [css.deactive]: !isActive })}>
            <div className={css.overlay} />
            <div className={css.menuItems}>
                <ul>
                    <li>
                        <a href="#welcome" onClick={() => { handleClickMenu("home") }}>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game" onClick={() => { handleClickMenu("game") }}>
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

Menu.propTypes = {
    handleChangePage: PropTypes.func,
    handleClickButton: PropTypes.func,
    isActive: PropTypes.bool,
};

export default Menu;


