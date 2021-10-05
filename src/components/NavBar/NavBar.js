/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as Logotype } from '../../assets/imges/logo.svg';
import { ReactComponent as Login } from '../../assets/imges/login.svg';
import { ReactComponent as User } from '../../assets/imges/user.svg';
import cn from 'classnames';
import css from '../NavBar/NavBar.module.css';
import { useSelector } from 'react-redux';
import { selectUserLoading, selectLocalID } from '../../store/user';
import { Link } from 'react-router-dom';

const NavBar = ({ onClicklogin, isActive, handleClickBurgger, bgActive = false }) => {
    const isLoadingUser = useSelector(selectUserLoading);
    const localId = useSelector(selectLocalID);
    console.log(localId);

    return (
        <nav className={cn(css.root, { [css.bgActive]: bgActive })}>
            <div className={css.navWrapper}>
                <p className={css.brand}>
                    <Logotype className={css.logo} />
                </p>
                <div className={css.loginAndMenu}>
                    {(!isLoadingUser && !localId) && (<div className={css.loginWrap}
                        onClick={onClicklogin}>
                        <Login />
                    </div>)}
                    {(!isLoadingUser && localId) && (
                        <Link className={css.loginWrap}
                            to="/user">
                            <User />
                        </Link>)}
                    <div className={cn(css.menuButton, { [css.active]: isActive })}
                        onClick={() => handleClickBurgger()}>
                        <span />
                    </div>
                </div>

            </div>
        </nav >
    );
}

NavBar.propTypes = {
    handleClickButton: PropTypes.func,
    isActive: PropTypes.bool,
    bgActive: PropTypes.bool,
};

export default NavBar;