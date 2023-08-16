'use client';
import {useState, useEffect} from 'react'
import Ball from "./Ball";
import '/public/css/game.css'
import { OtauProps } from "@/utils/interfaces";

export default function Otau(props:OtauProps) {
    const {quantity, tuzdyq, hover} = props;
    const [balls, setBalls] = useState<JSX.Element[]>([])

    useEffect(() => {
        let tempBalls= []

        for(let i=0;i<quantity;i++) {
            if(tuzdyq) {
                tempBalls.push(<Ball key={i} type={'tuzdyq'} />)
                break;
            }
            tempBalls.push(<Ball key={i}/>)
        }
        setBalls([...tempBalls]); 
    }, [props.quantity])

        return(
            <div className={`otau-in ${hover==true ? 'otau-hover' : ''} `}>
                {!tuzdyq ? <div className='cur__quantity'>{quantity}</div> : ''}
                <div className='otau__balls'>
                  {balls && balls.filter((el, index) => index < 10).map((el) =>
                         el
                   )}
                   <div className='otau__balls__overflow-c1'>
                        {balls && balls.filter((el, index) => index >= 10 && index <15).map((el) =>
                                el
                        )}
                    </div>
                    <div className='otau__balls__overflow-c2'>
                        {balls && balls.filter((el, index) => index >= 15 && index <20).map((el) =>
                                el
                        )}
                    </div>
                    <div className='otau__balls__overflow2-c1'>
                            {balls && balls.filter((el, index) => index >= 20 && index <25).map((el) =>
                                    el
                            )}
                    </div>
                    <div className='otau__balls__overflow2-c2'>
                            {balls && balls.filter((el, index) => index >= 25 && index <30).map((el) =>
                                    el
                            )}
                    </div>
                </div>
               
            </div>
        )
}