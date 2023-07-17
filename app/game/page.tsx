'use client';
import Board from "@/components/Board";
import {useState, useEffect} from 'react'
import '/public/css/game.css'
import Button from "@/components/ui/Button/Button";
import PlayerBanner from "@/components/PlayerBanner";
import Popup from "@/components/Popup";
import { useRouter } from "next/navigation";


const Game = () => {

    const [values, setValues] = useState({
        currentPlayer: 0,
        qazandyq1: 0,
        qazandyq2: 0,
        tuzdyq1: -1, 
        tuzdyq2: -1,
        winner : -1
    });
    const router= useRouter();
    const [reset, setReset] = useState(false);
    const [exit, setExit] = useState(false);
    const [show, setShow] = useState(false);
    const [action, setAction] = useState('');

    useEffect(() => {
       if(reset == true) {
          setShow(false);
          setReset(false);
       }
    }, [reset])

    useEffect(() => {
        if(exit == true) {
            router.push("/");
        }
    }, [exit])

    function exitHandle() {
        setShow(true);
        setAction('exit');
    }

    function resetHandle() {
        setShow(true); 
        setAction('reset');
    }
    
    return(
     <div className='game bg-light3 dark:bg-dark3'>
         <div className='game__board'>
             <Board values={values} setValues={setValues} reset ={reset}/>
         </div>
         <div className='game__players'>
             <div className='players'>
                <span><PlayerBanner/></span> 
             </div>
             <div className="game__buttons">
              <span><Button text={'Reset'} size={'btn-large'} onClick={() => resetHandle()}/></span>
              <span><Button text={'Exit'} size={'btn-large'} onClick={() => exitHandle()}/></span>
             </div>
         </div>
         {show && action=='reset' && (<Popup action={action} show={show} setShow={setShow} action2={reset} setAction2={setReset}/>)} 
         {show && action=='exit' && (<Popup action={action} show={show} setShow={setShow} action2={exit} setAction2={setExit} action3={reset} setAction3= {setReset}/>)} 
     </div>
   )
}
export default Game;