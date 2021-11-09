import PlayerBoard from '../Board/component/PlayerBoard/PlayerBoard';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowChoice from './component/ArrowChoice/ArrowChoice';
import request from '../../../../service/request';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';

import { saveCounter, saveType, selectTypeData } from '../../../../store/counter';
import { setPokemonData } from '../../../../store/selectedPokemon';
import { selectPokemonData } from '../../../../store/secondPlayer';
import { counterWin, returnBoard } from '../../../../service/CounterWin';
import Result from '../Board/component/Result/Result';

import css from '../Board/Board.module.css';

const BoardPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const pokemonSelect = useSelector(setPokemonData);
  const secondPlayer = useSelector(selectPokemonData);
  const type = useSelector(selectTypeData);
  const [startSide, setStartSide] = useState(0);
  const [board, setBoard] = useState([]);
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [choiceCard, setChoiceCard] = useState(null);
  const [steps, setSteps] = useState(0);
  const [serverBoard, setServerBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    async function fetchData() {
      const boardRequest = await request.getBoard();
      setBoard(boardRequest.data);
      setPlayer2(() => secondPlayer.map(item => ({
        ...item,
        possession: 'red',
      })))
    }

    fetchData();
    return () => {
      setTimeout(() => {
        const side = Math.floor(Math.random() * 2) + 1;
        setStartSide(side)
      }, 2000);
    }
  }, [secondPlayer])

  useEffect(() => {
    setPlayer1(Object.values(pokemonSelect).map(item => ({
      ...item,
      possession: 'blue',
    })));
  }, [pokemonSelect])

  useEffect(() => {
    (async () => {
      if (startSide === 2) {
        const params = {
          currentPlayer: 'p2',
          hands: {
            p1: player1,
            p2: player2
          },
          move: null,
          board: serverBoard,
        };
        const game = await request.game(params);
        setPlayer2(() => game.hands.p2.pokes.map(item => item.poke));
        setServerBoard(game.board);
        setBoard(returnBoard(game.board));
        setSteps(prevState => {
          const count = prevState + 1;
          return count;
        });
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startSide])

  const HandleClickPlate = async (position) => {
    if (choiceCard) {
      const params = {
        currentPlayer: 'p1',
        hands: {
          p1: player1,
          p2: player2
        },
        move: {
          poke: {
            ...choiceCard,
          },
          position,
        },
        board: serverBoard,
      };

      if (choiceCard.player === 1) {
        setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id));
      }

      setBoard(prevState => prevState.map(item => {
        if (item.position === position) {
          return {
            ...item,
            card: choiceCard,
          }
        }
        return item;
      }))

      const game = await request.game(params);
      setBoard(returnBoard(game.oldBoard));

      setSteps(prevState => {
        const count = prevState + 1;
        return count;
      });

      if (game.move !== null) {
        const idAi = game.move.poke.id;

        setTimeout(() => {
          setPlayer2(prevState => prevState.map(item => {
            if (item.id === idAi) {
              return {
                ...item,
                isSelected: true,
              }
            }
            return item;
          }));
        }, 1000);

        setTimeout(() => {
          setPlayer2(() => game.hands.p2.pokes.map(item => item.poke));
          setServerBoard(game.board);
          setBoard(returnBoard(game.board));
          setSteps(prevState => {
            const count = prevState + 1;
            return count;
          });
        }, 1500);
      }
    }
  }

  useEffect(() => {
    if (steps === 9) {
      setTimeout(() => {
        history.push(`/game/finish`)
      }, 3000);
      const [count1, count2] = counterWin(board, player1, player2);
      dispatch(saveCounter(count1))

      if (count1 > count2) {
        dispatch(saveType('win'))
        return;
      }
      if (count1 < count2) {
        dispatch(saveType('lose'))
        return;
      } else {
        dispatch(saveType('draw'))
      }
    }
  }, [board, dispatch, history, player1, player2, steps]);

  if (Object.values(pokemonSelect).length === 0) {
    history.replace('/game')
  }

  return (
    <div className={css.root}>
      {type && <Result type={type} />}
      {!choiceCard && <ArrowChoice side={startSide} />}
      <div className={css.playerOne}>
        <PlayerBoard
          player={1}
          cards={player1}
          onClickCard={(card) => setChoiceCard(card)} />
      </div>

      <div className={css.playerTwo}
        disabled>
        <PlayerBoard
          player={2}
          cards={player2}
          dis />
      </div>

      <div className={css.board}>
        {board.map(item => (
          <div
            key={item.position}
            className={css.boardPlate}
            onClick={() => !item.card && HandleClickPlate(item.position)}>
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