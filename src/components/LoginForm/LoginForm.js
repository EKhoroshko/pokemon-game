import { useEffect, useState } from 'react';
import Input from '../Input/Input';
import css from '../LoginForm/LoginForm.module.css'

const LoginForm = ({ onSubmit, isResetField = false }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [changeForm, setChangeForm] = useState(true);

    useEffect(() => {
        setPassword('');
        setEmail('');
    }, [isResetField])

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit({
            type: changeForm ? 'login' : 'signup',
            email,
            password,
        })
        setEmail('');
        setPassword('');
    };

    const handleChangeEmail = e => {
        setEmail(e.target.value);
    };

    const handleChangeNPassword = e => {
        setPassword(e.target.value);
    };

    const handleChangeForm = () => {
        setChangeForm(!changeForm);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                title={'Email'}
                label={"email"}
                value={email}
                type={"email"}
                name={"email"}
                onChange={handleChangeEmail}
            />

            <Input
                title={'Password'}
                label={"Password"}
                value={password}
                type={"password"}
                name={"password"}
                onChange={handleChangeNPassword}
            />
            <div className={css.box}>
                <button className={css.button} type="submit">
                    {changeForm ? "SignIn" : "SignUp"}
                </button>
                <button className={css.buttonREgistr} onClick={handleChangeForm} type="submit">
                    {changeForm ? "Registration" : "LogIn"}
                </button>
            </div>
        </form>
    );
}

export default LoginForm;