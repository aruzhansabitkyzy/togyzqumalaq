'use client';
import { PlayerContextProps } from "@/utils/PlayerInterface";


function PlayerBanner(props:PlayerContextProps) {
   
    
    return(
        <div className='player'>
             <h2>{props.player1?.username}</h2>
             <h4>score: {props.player1?.getScore()}</h4>
        </div>
    )
}
export default PlayerBanner;