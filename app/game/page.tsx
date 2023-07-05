'use client';
import Board from "@/components/Board";
import '/public/css/game.css'
import Button from "@/components/ui/Button/Button";
import PlayerBanner from "@/components/PlayerBanner";

const Game = () => {
   return(
     <div className='game bg-light3 dark:bg-dark3'>
         <div className='game__board'>
             <Board />
         </div>
         <div className='game__players'>
             <div className='players'>
               <span><PlayerBanner /></span>
               <span><PlayerBanner /></span>
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