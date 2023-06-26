'use client';
import {useDispatch} from 'react-redux';
import { AppDispatch } from '@/store/store';
import { changeLanguage, changeTheme } from '@/store/reducers/settingsSlice';
import { useAppSelector } from '@/store/store';
import '/public/css/selection.css';

//constant arrays
const LANGUAGES = ['english', 'kazakh', 'russian']
const THEMES = ['dark' , 'light']

//type
type PropType = {
    isTheme: boolean,
    isLanguage: boolean
}

const Selection = ({isTheme, isLanguage}: PropType) => {
    
    const dispatch = useDispatch<AppDispatch>();
    const {theme, language} = useAppSelector((state) => state.settings.settings)

    function handleTheme(el:string) {
        dispatch(changeTheme(el))
     }
  
     function handleLanguage(el:string) {
        dispatch(changeLanguage(el))
     }
    return(
        <>
         {isTheme && THEMES.map((el) => (
                <div key={el} className='popup__option' onClick={() => handleTheme(el)}>
                    <div className={`popup__option_circle ${theme === el  ? 'yellow' : ''}`}>
                        {theme === el && (
                            <img src={'/images/tick.png'}/>
                        )}
                    </div>
                    <div className='popup__option_text'>{el}</div>
                </div> 
           ))}
            {isLanguage && LANGUAGES.map((el) => (
                <div key={el} className='popup__option' onClick={() => handleLanguage(el)}>
                    <div className={`popup__option_circle ${language === el  ? 'yellow' : ''}`}>
                       {language === el && (
                            <img src={'/images/tick.png' }/>
                        )}
                    </div>
                    <div className='popup__option_text'>{el}</div>
                </div> 
           ))}
        </>
          
               
    )
}
export default Selection;