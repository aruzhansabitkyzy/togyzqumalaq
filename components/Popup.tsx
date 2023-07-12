'use client';
import '/public/css/popup.css';
import Selection from '@/components/Selection';
import {useEffect} from 'react';
import PopupBody from './PopupBody';
import GamePopup from './GamePopup';

const LANGUAGES = ['english', 'kazakh', 'russian']
const THEMES = ['dark' , 'light']

type Props  = {
    action: string,
    show: boolean, 
    setShow: Function
}
const Popup = (props:Props) => {

    const type=props.action
    useEffect(() => {
        if(type=='tuzdyq') {
            const timeId = setTimeout(() => {
                props.setShow(false)
              }, 1500)
        return () => {
                clearTimeout(timeId)
        }  
        }
    })
   

   return(
      <div className='popup'>
        <div className='popup__box'>
           {type=='lang' && ( <PopupBody action={type}  show={props.show} setShow={props.setShow}/>)}
           {type=='theme' && ( <PopupBody action={type}  show={props.show} setShow={props.setShow}/>)}
           {type=='tuzdyq' && (<GamePopup type={type} show={props.show} setShow={props.setShow}/>)}
           {type=='winner' && (<GamePopup type={type} show={props.show} setShow={props.setShow}/>)}
        </div>
      </div>
   )
}
export default Popup;