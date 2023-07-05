"use client";
import {useState, useEffect, useContext} from 'react';
import { MyThemeContext } from '@/context/ThemeContext';
const ThemeSwitcher =() => {
    const themeCtx: { isDarkMode?: boolean; setLightThemeHandler: () => void; setDarkThemeHandler: () => void} =
    useContext(MyThemeContext);
    const isDark = localStorage.getItem("isDarkTheme");

    useEffect(() => {
        console.log(localStorage.getItem("isDarkTheme"))
    })

    function setLightTheme(): void {
        themeCtx.setLightThemeHandler();
    }
    
    function setDarkTheme(): void {
        themeCtx.setDarkThemeHandler();
    }
  
  
    return(
        <>
       
            <div className='popup__option' onClick={setDarkTheme}>
                <div className={`popup__option_circle ${isDark=='true' ? 'bg-dark2' : ''}`}>
                       {isDark=='true'  ? 
                       (<img src={'/images/tick.png'}/>)
                    : ('')}
                </div>
                <div className='popup__option_text'>dark</div>
            </div> 
            <div className='popup__option' onClick={setLightTheme}>
                <div className={`popup__option_circle ${isDark=='false' ? 'bg-dark2' : ''}`}>
                {isDark=='false'  ?
                       (<img src={'/images/tick.png'}/>)
                    : ('')}
                </div>
                <div className='popup__option_text'>light</div>
            </div> 
      
        </>
        
    )
}
export default ThemeSwitcher