import { createContext, useContext } from 'react';

export const GameContext = createContext(null);
export const DispatchContext = createContext(null);

export function useGameContext() {
  return useContext(GameContext);
}

export function useDispatchContext() {
  return useContext(DispatchContext);
}