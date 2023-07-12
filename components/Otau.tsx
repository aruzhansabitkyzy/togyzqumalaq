'use client';
import Ball from "./Ball";
import '/public/css/game.css'


type PropsType = {
    quantity: number,
    tuzdyq: boolean
}

const Otau = (props:PropsType) => {
    const quantity = props.quantity;
    const tuzdyq = props.tuzdyq;
    const array = Array.from(Array(quantity).keys())
    const col1 = array.slice(0, 5);
    const col2  = array.slice(5, 10);
    const upper1  = array.slice(10, 15);
    const upper2 = array.slice(15, 20);

    

    return(
        <>
        
        {tuzdyq == false ? (
            <div className='otau-in'>
                <div className='cur__quantity'>{quantity}</div>
                <div className='col1'>
                    {col1 && col1.map((el) => (
                        <Ball key={el}/>
                    ))}
                </div>
                <div className='col2'>
                    {col2 && col2.map((el) => (
                        <Ball key={el}/>
                        ))}
                </div>
                <div className='upper_col1'>
                {upper1 && upper1.map((el) => (
                        <Ball key={el}/>
                        ))}
                </div>
                <div className='upper_col2'>
                {upper2 && upper2.map((el) => (
                            <Ball key={el}/>
                        ))}
                </div>
            </div>
        ) : (
            <div className='otau-in'>
                <div className='cur__quantity'>{quantity}</div>
                <div className='col1'>
                        <Ball type={'tuzdyq'}/>
                </div>
            </div>
        )}
        
        </>
       
    )
} 
export default Otau;