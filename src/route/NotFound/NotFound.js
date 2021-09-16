import React from 'react';
import NotRoute from '../../assets/imges/NotFound.jpg'
import css from '../NotFound/NotFound.module.css'

const NotFound = () => {
    return (
        <section className={css.section}>
            <img src={NotRoute} alt="404" />
        </section>
    );
}

export default NotFound;