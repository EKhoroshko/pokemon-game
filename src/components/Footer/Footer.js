import React from 'react';
import css from '../Footer/Footer.module.css'

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    );
}

export default Footer;