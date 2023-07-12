'use client';
import Board from "@/components/Board";
import {useState, useEffect} from 'react'
import '/public/css/game.css'
import Button from "@/components/ui/Button/Button";
import PlayerBanner from "@/components/PlayerBanner";
import { usePlayerContext } from "@/context/PlayerContext";


const Game = () => {
  const context = usePlayerContext();

  return(
     <div className='game bg-light3 dark:bg-dark3'>
         <div className='game__board'>
             <Board/>
         </div>
         <div className='game__players'>
             <div className='players'>
                <span><PlayerBanner player ={context.player1}/></span> 
                <span><PlayerBanner player = {context.player2}/></span>
             </div>
             <div className="game__buttons">
              <span><Button text={'Reset'} size={'btn-large'} onClick={() => {console.log("reset")}}/></span>
              <span><Button text={'Exit'} size={'btn-large'} onClick={() => {console.log("stop")}}/></span>
             </div>
            
         </div>
     </div>
   )
}
export default Game;