'use client';
import Board from "@/components/Board";
import {useState, useEffect} from 'react'
import '/public/css/game.css'
import Button from "@/components/ui/Button/Button";
import PlayerBanner from "@/components/PlayerBanner";
import { usePlayerContext } from "@/context/PlayerContext";


const Game = () => {
  const {player1, player2} = usePlayerContext();

  return(
     <div className='game bg-light3 dark:bg-dark3'>
         <div className='game__board'>
             <Board player1 ={player1} player2 = {player2}/>
         </div>
         <div className='game__players'>
             <div className='players'>
               <span><PlayerBanner player1 ={player1} player2 = {player2}/></span> 
                <span><PlayerBanner player1 ={player1} player2 = {player2}/></span>
             </div>
             <div className="game__buttons">
              <span><Button children={'Reset'} size={'btn-large'} onClick={() => {console.log("reset")}}/></span>
              <span><Button children={'Stop'} size={'btn-large'} onClick={() => {console.log("stop")}}/></span>
             </div>
            
         </div>
     </div>
   )
}
export default Game;