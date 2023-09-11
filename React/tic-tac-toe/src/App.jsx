import Game from "./Game";
import GameProvider from "./GameProvider";

export default function App() {


  return (
   <GameProvider>
      <Game></Game>
   </GameProvider>
  )
}