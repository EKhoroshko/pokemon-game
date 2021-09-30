import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveCounter } from '../../../../store/counter';
import { setPokemonData } from '../../../../store/selectedPokemon';
import { selectPokemonData, targetPokemon } from '../../../../store/secondPlayer';
import { fetchData, cheackPlate } from '../../../../service/boardApi';
import { counterWin } from '../../../../service/CounterWin';
import PlayerBoard from '../Board/component/PlayerBoard/PlayerBoard';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';

import css from '../Board/Board.module.css';

const BoardPage = () => {
    const pokemonSelect = useSelector(setPokemonData);
    const secondPlayer = useSelector(selectPokemonData);
    const dispatch = useDispatch();
    const [board, setBoard] = useState([]);
    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0);
    const history = useHistory();

    useEffect(() => {
        fetchData().then(({ data }) => setBoard(data));
        dispatch(targetPokemon());
    }, [dispatch]);

    useEffect(() => {
        setPlayer2(secondPlayer);
    }, [secondPlayer])

    useEffect(() => {
        setPlayer1(Object.values(pokemonSelect).map(item => ({
            ...item,
            possession: 'blue',
        })));
    }, [pokemonSelect])

    const onClickPlate = async (position) => {
        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board,
            };
            if (choiceCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id));
            }
            if (choiceCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id));
            }
            await cheackPlate(params).then(({ data }) => setBoard(data));
            setSteps(prevState => {
                const count = prevState + 1;
                return count;
            })
        }
    }

    useEffect(() => {
        if (steps === 9) {
            history.push(`/game/finish`)
            const [count1, count2] = counterWin(board, player1, player2);
            dispatch(saveCounter(count1))

            if (count1 > count2) {
                alert('WIN');
                return;
            }
            if (count1 < count2) {
                alert('LOSE');
                return;
            } else {
                alert('DRAW');
            }
        }
    }, [board, dispatch, history, player1, player2, steps]);

    if (Object.values(pokemonSelect).length === 0) {
        history.replace('/game')
    }

    return (
        <div className={css.root}>

            <div className={css.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={player1}
                    onClickCard={(card) => setChoiceCard(card)} />
            </div>

            <div className={css.playerTwo}>
                <PlayerBoard
                    player={2}
                    cards={player2}
                    onClickCard={(card) => setChoiceCard(card)} />
            </div>

            <div className={css.board}>
                {board.map(item => (
                    <div
                        key={item.position}
                        className={css.boardPlate}
                        onClick={() => !item.card && onClickPlate(item.position)}>
                        {
                            item.card && <PokemonCard {...item.card} isActive minimize />
                        }

                    </div>
                ))}
            </div>
        </div>
    );
};

export default BoardPage;