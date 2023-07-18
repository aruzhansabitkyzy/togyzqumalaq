'use client';
import {useEffect} from 'react';
import { usePlayerContext } from "@/context/PlayerContext";

function PlayerBanner() {
    const context = usePlayerContext();

    
    
    return(
        <>
        <div className={`player ${context.player1?.isGoing? 'current' : 'not-current'}`}>
             <h2>{context.player1?.username}</h2>
             <h4>score: {context.player1?.getScore()}</h4>
        </div>
        <div className={`player ${context.player2?.isGoing ? 'current' : 'not-current'}`}>
            <h2>{context.player2?.username}</h2>
            <h4>score: {context.player2?.getScore()}</h4>
        </div>
        </>
        
    )
}
export default PlayerBanner;
