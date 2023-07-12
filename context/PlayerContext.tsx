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
    createPlayers : () =>{},
    setContextScore : () => {},
    setContextTuzdyq : () => {},
    setContextWinner : () => {}
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

    function setContextTuzdyq(otauId: number, playerId: number) {
        playerId == 0 ?  player1?.setTuzdyq(otauId) : player2?.setTuzdyq(otauId)
    }

    function setContextScore(score: number, playerId: number) {
        playerId == 0 ? player1?.setScore(score) : player2?.setScore(score);
    }

    function setContextWinner(playerId: number) {
        playerId == 0 ? player1?.setWinner(true) : player2?.setWinner(true);
    }
    return (
        <PlayerContext.Provider value={{player1, player2, createPlayers, setContextScore, setContextTuzdyq, setContextWinner}}>
            {props.children}
        </PlayerContext.Provider>
    )
}