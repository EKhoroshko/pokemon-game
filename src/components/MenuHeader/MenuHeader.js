import React, { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import NavBar from '../NavBar/NavBar';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import { NotificationManager } from 'react-notifications';

const KEY = 'AIzaSyCf-lcmD5kNBRfiZ8paKG4Cm02rkH3VsKY';

const loginSignupUser = async ({ email, password, type }) => {
    const options = {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
        })
    }
    switch (type) {
        case 'signup':
            return await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`, options)
                .then(response => response.json());
        case 'login':
            return await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`, options)
                .then(response => response.json());
        default: return 'I cannot login user';
    }
}

const MenuHeader = ({ bgActive }) => {
    const [isActive, setIsActive] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        clearToken();
    }, [])

    const clearToken = () => {
        localStorage.removeItem('idToken');
    }

    const handleClickBurgger = () => {
        setIsActive(!isActive);
    }

    const handlClickLogin = () => {
        setIsOpenModal(prevState => !prevState);
    }

    const onSubmit = async (props) => {
        const response = await loginSignupUser(props)
        if (response.hasOwnProperty('error')) {
            NotificationManager.error(response.error.message, 'Warning');
        } else {
            localStorage.setItem('idToken', response.idToken)
            NotificationManager.success("Welcome");
            handlClickLogin();
        }
    }

    return (
        <section>
            <NavBar
                isActive={isActive}
                bgActive={bgActive}
                handleClickBurgger={handleClickBurgger}
                onClicklogin={handlClickLogin} />
            <Menu
                isActive={isActive}
                handleClickBurgger={handleClickBurgger} />
            <Modal
                isOpen={isOpenModal}
                title={'log in...'}
                onCloseModal={handlClickLogin}
                onSubmit={onSubmit}
                isResetField={!isOpenModal}>
                <LoginForm />
            </Modal>
        </section>
    );
}

MenuHeader.propTypes = {
    bgActive: PropTypes.bool,
};

export default MenuHeader;