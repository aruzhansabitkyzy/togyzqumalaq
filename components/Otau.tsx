'use client';
import Ball from "./Ball";
import '/public/css/game.css'

type PropsType = {
    quantity: number
}

const Otau = (props:PropsType) => {
    const quantity = props.quantity;
    return(
       <div className='otau-in'>
       
            <div className='col1'>
               <Ball />
               <Ball />
               <Ball />
               <Ball />
               <Ball />
            </div>
            <div className='col2'>
                <Ball />
                <Ball />
                <Ball />
                <Ball />
                <Ball />
            </div>
            {quantity >= 11 && (
                <div className='upper-col'>

                </div>
            )}
            
       </div>
    )
} 
export default Otau;