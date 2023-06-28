'use client';
import {useDispatch} from 'react-redux';
import '/public/css/selection.css';
import ThemeSwitcher from '@/app/ThemeSwitcher';

//constant arrays
const LANGUAGES = ['english', 'kazakh', 'russian']
const THEMES = ['dark' , 'light']

//type
type PropType = {
    isTheme: boolean,
    isLanguage: boolean
}

const Selection = ({isTheme, isLanguage}: PropType) => {
    

    function handleTheme(el:string) {
        
     }
  
     function handleLanguage(el:string) {
       
     }
    return(
        <>
         {isTheme && <ThemeSwitcher />}
            {/* {isLanguage && LANGUAGES.map((el) => (
                <div key={el} className='popup__option' onClick={() => handleLanguage(el)}>
                    <div className={`popup__option_circle ${language === el  ? 'yellow' : ''}`}>
                       {language === el && (
                            <img src={'/images/tick.png' }/>
                        )}
                    </div>
                    <div className='popup__option_text'>{el}</div>
                </div> 
           ))} */}
        </>
          
               
    )
}
export default Selection;