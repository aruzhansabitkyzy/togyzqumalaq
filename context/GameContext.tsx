// 'use client';
// import { createContext, useContext, useState } from 'react';
// import Game from '../gameManager/Game';


// interface GameContextData {
//     game: Game | null;
//     createGame: (player1: Player, player2: Player) => void;
//   }
//   interface GamePropsInterface {
//     children?: JSX.Element | Array<JSX.Element>;
//   }
  
//   const GameContext = createContext<GameContextData>({
//     game: null,
//     createGame: () => {},
//   });
  
//   export const useGameContext = () => useContext(GameContext);
  
//   export function GameProvider(props:GamePropsInterface) {
//     const [game, setGame] = useState<Game | null>(null);
  
//     const createGame = (player1: Player, player2: Player) => {
//       const newGame = new Game(player1, player2);
//       setGame(newGame);

//     };
  
//     return (
//       <GameContext.Provider value={{ game, createGame }}>
      
//            {props.children}
     
//       </GameContext.Provider>
//     );
//   };