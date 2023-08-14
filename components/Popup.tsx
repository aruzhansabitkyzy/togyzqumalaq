'use client';
import '/public/css/popup.css';
import Selection from '@/components/Selection';
import {useEffect} from 'react';
import PopupBody from './PopupBody';

const LANGUAGES = ['english', 'kazakh', 'russian']
const THEMES = ['dark' , 'light']

type Props  = {
    action: string,
    show: boolean, 
    setShow: Function,
    action2?: boolean,
    setAction2?: Function,
    action3?: boolean,
    setAction3?: Function,
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
        <div className='popup__box bg-light1 dark:bg-dark1'>
           {type=='lang' && ( <PopupBody action={type}  show={props.show} setShow={props.setShow}/>)}
           {type=='theme' && ( <PopupBody action={type}  show={props.show} setShow={props.setShow}/>)}
        </div>
      </div>
   )
}
export default Popup;