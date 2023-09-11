import Board from './Board'
import { useDispatchContext, useGameContext } from './GameContext';

export default function Game() {
  const { squares, winner, isFinished } = useGameContext();
  const dispatch = useDispatchContext();

  return (
    <>
      {isFinished ? <h1>The Winner is {winner}</h1> : null}

      <Board
        squares={squares}
        isFinished={isFinished}
      ></Board>
      <button onClick={() => dispatch({ type: 'resetted' })}>Restart</button>
    </>
  )
}