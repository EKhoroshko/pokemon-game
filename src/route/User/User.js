import { useDispatch, useSelector } from "react-redux";
import { selectUser, removeUser } from '../../store/user';
import { ReactComponent as LogOut } from '../../assets/imges/logoutmin.svg';
import { useHistory } from "react-router";

import css from '../User/User.module.css';

const User = () => {
    const history = useHistory();
    const data = useSelector(selectUser);
    const dispatch = useDispatch();

    const timeCreateAcc = (date) => new Date(parseInt(date)).toLocaleDateString();

    const handlLogOut = () => {
        localStorage.removeItem('idToken');
        dispatch(removeUser())
        history.push('/');
    }

    return (
        <div className={css.box}>
            <div className={css.title}>
                <h1> User info</h1>
                <div onClick={handlLogOut} className={css.loginWrap}>
                    <LogOut />
                </div>
            </div>

            <p>email user: {data.email}</p>
            <p>Data registration: {timeCreateAcc(data.createdAt)}</p>
        </div>
    );
}

export default User;