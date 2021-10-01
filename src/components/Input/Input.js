import css from '../Input/Input.module.css';

const Input = ({ value, type = "text", title, onChange, label, name }) => {

    return (
        <div className={css.root}>
            <input
                className={css.input}
                label={label}
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                required
            />
            <span className={css.highlight}></span>
            <span className={css.bar}></span>
            <label className={css.label}>{title}</label>
        </div>
    );
}

export default Input;