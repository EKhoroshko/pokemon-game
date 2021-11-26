import React from 'react';

import css from '../Contact/Contact.module.css'

const Contact = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.flex}>
        <h1 className={css.title}> Our contacts:</h1>
        <ul className={css.list}>
          <li><span>Tel: </span><a href="tel:380930725966">+380930725966 </a></li>
          <li><span>Email: </span><a href="mailto:xapoxa14@gmail.com"> write here </a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;