'use client';
import { GeneralPlayerContext } from "@/utils/PlayerInterface";


function PlayerBanner(props:GeneralPlayerContext) {
   
    
    return(
        <div className='player'>
             <h2>{props.player?.username}</h2>
             <h4>score: {props.player?.getScore()}</h4>
        </div>
    )
}
export default PlayerBanner;