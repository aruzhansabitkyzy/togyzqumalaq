'use client';
import Otau from "./Otau"
import Qazandyq from "./Qazandyq";
import '/public/css/game.css';

const otauNumber = [1,2,3,4,5,6,7,8,9]
const Board = () => {
    return(
        <div className='board'>
            <div className='opponent'>
                <div className='otaular'>
                    {otauNumber.map((el) => (
                        <div className='otau' key={el}>
                        <Otau quantity={el}/>
                        </div>
                    ))}
                </div>
                <div className='qazandyq'>
                    <Qazandyq />
                </div>
            </div>

            <div className='own'>
                <div className='qazandyq'>
                    <Qazandyq />
                </div>
                <div className='otaular flex'>
                    {otauNumber.map((el) => (
                        <div className='otau' key={el}>
                        <Otau quantity={el}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Board;