const counterWin = (board, player1, player2) => {
  let player1Count = player1.length;
  let player2Count = player2.length;

  board.forEach(item => {
    if (item.card.possession === "blue") {
      player1Count += 1;
    }

    if (item.card.possession === "red") {
      player2Count += 1;
    }
  });

  return [player1Count, player2Count];
}

const returnBoard = (board) => {
  return board.map((item, index) => {
    let card = null;
    if (typeof item === 'object') {
      card = {
        ...item.poke,
        possession: item.holder === 'p1' ? 'blue' : 'red',
      };
    }
    return {
      position: index + 1,
      card,
    }
  })
}

export { counterWin, returnBoard };