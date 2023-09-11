import { useReducer } from 'react';
import gameReducer, { initialState } from './gameReducer';
import { DispatchContext, GameContext } from './GameContext';

export default function GameProvider({ children }) {
  const [gameState, dispatch] = useReducer(gameReducer, initialState); 

  return (
    <GameContext.Provider value={gameState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </GameContext.Provider>
  );
}