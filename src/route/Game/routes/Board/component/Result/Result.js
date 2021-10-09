import { useState, useEffect } from 'react';
import css from './Result.module.css';
import YouWin from '../../../../../../assets/imges/you-win.png';
import YouLose from '../../../../../../assets/imges/you-lose.png';
import Draw from '../../../../../../assets/imges/draw.png';

const Result = ({ type }) => {
    const [url, setUrl] = useState(null);

    useEffect(() => {
        switch (type) {
            case 'win':
                setUrl(YouWin);
                break;
            case 'lose':
                setUrl(YouLose);
                break;
            case 'draw':
                setUrl(Draw);
                break;
            default:
                setUrl(YouWin);
        }
    }, [type]);

    return (
        <div className={css.result}>
            <img src={url} alt="result" />
        </div>
    );
};

export default Result;
