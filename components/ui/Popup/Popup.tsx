import {useState, useEffect} from 'react';
import '/public/css/popup.css';

const LANGUAGES = ['english', 'kazakh', 'russian']
const THEMES = ['dark' , 'light']

type Props  = {
    action: string,
    setAction: Function ,
    show: boolean, 
    setShow: Function
}
const Popup = (props:Props) => {
   
   const isTheme = props.action=='theme'
   const isLanguage = props.action=='lang'
   
   function closePopup() {
       props.setShow(false);
   }


   return(
      <div className='popup'>
        <div className='popup__box'>
            <h2 className='popup__title'>{props.action}</h2>
            <div className='popup__body'>
            {isTheme && THEMES.map((el) => (
                <div className='popup__option'>
                    <div className='popup__option_circle'></div>
                    <div className='popup__option_text'>{el}</div>
                </div>     
            ))}
            {isLanguage && LANGUAGES.map((el) => (
                <div className='popup__option'>
                    <div className='popup__option_circle'></div>
                    <div className='popup__option_text'>{el}</div>
                </div>     
            ))}
            </div>
            <div className='popup__close' onClick={() => closePopup()}>
                close
            </div>
        </div>
      </div>
   )
}
export default Popup;