'use client';
import '/public/css/game.css'
import Ball from './Ball';


type PropsType ={
    score: number
}
const Qazandyq = (props: PropsType) => {

    const array = Array.from(Array(props.score).keys())
    const row1 = array.slice(0, 20);
    const row2  = array.slice(20, 40);
    const upperRow1  = array.slice(40, 60);
    const upperRow2 = array.slice(60, 81);
    return(
        <div className='qazandyq'>
             <div className="counter">{props.score}</div>
             <div className='qumalaqs'>
                    <div className='row1'>
                        {row1 &&row1.map((row1) => (
                            <Ball key={row1}/>
                        ))}
                    </div>
                    <div className='row2'>
                        {row2 && row2.map((row2) => (
                            <Ball key={row2}/>
                            ))}
                    </div>
                    <div className='upper_row1'>
                    {upperRow1 && upperRow1.map((upperRow1) => (
                                <Ball key={upperRow1} />
                            ))}
                    </div>
                    <div className='upper_row2'>
                    {upperRow2 && upperRow2.map((upperRow2) => (
                                <Ball key={upperRow2}/>
                            ))}
                    </div>
             </div>
        </div>
    )
}
export default Qazandyq;