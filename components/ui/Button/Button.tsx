'use client';
import { MouseEventHandler } from "react";
import '/public/css/button.css';

const SIZES = ['btn-large, btn-medium, btn-small'];
const COLORS = ['yellow'];


interface ButtonProps {
    children:string
    size:string,
    color:string,
    onClick: Function
}
const Button = (props:ButtonProps) => {
    const {children, size, color, onClick} = props;
    const buttonColor = COLORS.includes(color) ? color : COLORS[0];
    const buttonSize = SIZES.includes(size) ? size: SIZES[0];
    
   return(
      <div className='button'>
           <button className={`btn ${buttonSize}  bg-light2 dark:bg-dark2`} onClick={() => onClick()}>
              {children}
           </button>
      </div>
   )
}
export default Button;