'use client';
import '/public/css/game.css';

const type = ['regular' , 'tuzdyq']

type PropsType = {
   type?: string
}
function Ball({type='regular'}:PropsType) {
   return(
    <div className={`ball ${type} rounded-full m-1 border border-black`}></div>
   )
}
export default Ball;