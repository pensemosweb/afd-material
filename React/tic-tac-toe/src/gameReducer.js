export const initialState = {
  squares: Array(9).fill(null),
  moveCounter: 0,
  isFinished: false,
  winner: null
};

export default function gameReducer(state = [], action) {
  switch(action.type) {
    case 'moved': {
      const nextSquares = state.squares.slice();
      
      if (state.moveCounter % 2 === 0) {
        nextSquares[action.index] = 'X';
      } else {
        nextSquares[action.index] = 'O';
      }

      const winner = calculateWinner(nextSquares);

      return {
        squares: nextSquares,
        moveCounter: state.moveCounter + 1,
        isFinished: Boolean(winner),
        winner
      };
    }
    case 'resetted':
      return initialState;
    default:
      return state;
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if(squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
}
