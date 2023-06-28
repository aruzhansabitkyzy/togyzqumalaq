'use client';
import '/public/css/popup.css';
import Selection from '@/components/Selection/Selection';

const LANGUAGES = ['english', 'kazakh', 'russian']
const THEMES = ['dark' , 'light']

type Props  = {
    action: string,
    setAction: Function,
    show: boolean, 
    setShow: Function
}
const Popup = (props:Props) => {
   
   const isTheme = props.action=='theme'
   const isLanguage = props.action=='lang'
   
   return(
      <div className='popup'>
        <div className='popup__box'>
            <h2 className='popup__title'>{props.action}</h2>
            <div className='popup__body'>
               <Selection isTheme={isTheme} isLanguage={isLanguage} />
            </div>
            <div className='popup__close' onClick={() => props.setShow(false)}>
                close
            </div>
        </div>
      </div>
   )
}
export default Popup;