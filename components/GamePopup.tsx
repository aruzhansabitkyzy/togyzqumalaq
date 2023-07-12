
import { usePlayerContext } from "@/context/PlayerContext";
import Button from "./ui/Button/Button";
import '/public/css/popup.css';
type PropsType = {
    type: string,
    show: boolean,
    setShow : Function
}
const GamePopup = (props: PropsType) => {
     const context = usePlayerContext()

     const tuzdyq = ()  => {
        if(context.player1?.isTuzdyq) {
            return context.player1.username
        }
        else if(context.player2?.isTuzdyq) {
            return context.player2.username
        }
     } 
     const winner = () => {
        if(context.player1?.isWinner) {
            return context.player1.username
        }
        else if(context.player2?.isWinner) {
            return context.player2.username
        }
     }
     return(
        <>
           {props.type == 'tuzdyq' && (
               <div className="tuzdyqPopup">
                    <h1>{tuzdyq()} got Tuzdyq</h1>
               </div>
           )}
           {props.type == 'winner' && (
             <div className='winnerPopup'>
                  <h1>{winner()} is a winner</h1>
                  <div className='winnerPopup__btns'>
                  <Button children='Play again' size={'btn-medium'} onClick={() => {}}/>
                  <Button children='Go to Home' size={'btn-medium'} onClick={() => {}}/>
                  </div>
                  
             </div>
           )}
        </>
     )
}

export default GamePopup;