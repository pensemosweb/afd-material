import { useDispatchContext, useGameContext } from "./GameContext";
import Square from "./Square";

export default function Board() {
  const { isFinished, squares } = useGameContext();
  const dispatch = useDispatchContext();

  function onSquareClickHandler(i) {
    if (isFinished) {
      return;
    }

    dispatch({ type: "moved", index: i });
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <Square
          value={squares[0]}
          onSquareClick={() => onSquareClickHandler(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => onSquareClickHandler(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => onSquareClickHandler(2)}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Square
          value={squares[3]}
          onSquareClick={() => onSquareClickHandler(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => onSquareClickHandler(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => onSquareClickHandler(5)}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Square
          value={squares[6]}
          onSquareClick={() => onSquareClickHandler(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => onSquareClickHandler(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => onSquareClickHandler(8)}
        />
      </div>
    </>
  );
}
