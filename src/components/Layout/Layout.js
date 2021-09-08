import React from 'react';
import PropTypes from 'prop-types';
import css from '../Layout/Layout.module.css'

const Layout = ({ title, desc, urlBg, colorBg }) => {
    return (
        <section className={css.root} style={{ backgroundImage: `url(${urlBg})`, background: colorBg }}>
            <div className={css.wrapper}>
                <article>
                    <div className={css.title}>
                        <h3>{title}</h3>
                        <span className={css.separator}></span>
                    </div>

                    <div className={`${css.desc} ${css.full}`}>
                        <p>{desc}</p>
                    </div>
                </article>
            </div>
        </section >
    );
}

Layout.propTypes = {
    title: PropTypes.string,
    descr: PropTypes.string,
    urlBg: PropTypes.string,
    colorBg: PropTypes.string,
};

export default Layout;