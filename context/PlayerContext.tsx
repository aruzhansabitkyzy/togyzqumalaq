'use client';
import {createContext, useContext, useState} from 'react';
import Player from '@/gameManager/Player';
import {PlayerContextType} from '@/utils/PlayerInterface';

interface PlayerPropsInterface {
    children?: JSX.Element | Array<JSX.Element>;
  }
  

const PlayerContext = createContext<PlayerContextType>({
    player1: null,
    player2:null, 
    createPlayers : () =>{}
})


export const usePlayerContext = () => useContext(PlayerContext);

export function PlayerProvider(props:PlayerPropsInterface) {
    const [player1, setPlayer1] = useState<Player | null>(null)
    const [player2, setPlayer2] = useState<Player | null>(null)
    
    function createPlayers(user1:string, user2:string) {
        const pl1 = new Player(user1);
        const pl2 = new Player(user2);
        setPlayer1(pl1);
        setPlayer2(pl2);
    }
    function setTuzdyq(index: number) {
        
    }

    // function setTurn(playerIndex: number) {
    //     if(playerIndex == 0 && player1 && player2) {
    //         player1.isGoing = true;
    //         player2.isGoing = false;
    //         setPlayer1(player1);
    //         setPlayer2(player2);
    //     }
    //     else if(playerIndex == 1 && player1 && player2){
    //         player1.isGoing = false;
    //         player2.isGoing = true;
    //         setPlayer1(player1);
    //         setPlayer2(player2);
    //     }
    // }

    return (
        <PlayerContext.Provider value={{player1, player2, createPlayers}}>
            {props.children}
        </PlayerContext.Provider>
    )
}