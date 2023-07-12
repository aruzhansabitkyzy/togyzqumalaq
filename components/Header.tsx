'use client';
import '/public/css/header.css';
import {useEffect, useState} from 'react';
import React from 'react';
import Popup from './Popup';
import OrnamentSquare from './ui/Ornament/OrnamentSquare';

const Header = () => {
   const [show, setShow] = useState(false);
   const [action, setAction] = React.useState<string>("");

   function openPopup() {
      setShow(true)
   }
    return (
    <div className='header bg-light1  dark:bg-dark1'>
      <div className='container header__container'>
         <div className='header__left'>
            <h3 className='header__title text-black dark:text-white'>Togyzqumalaq</h3>
            <OrnamentSquare />
         </div>
         <div className='header__right'>
            <span className='text-black dark:text-white' onClick={() => {openPopup(); setAction("lang")}}>eng</span>
            <span className='text-black dark:text-white' onClick={() => {openPopup(); setAction("theme")}}>theme</span>
            <span className='text-black dark:text-white' onClick={() => {}}>sound</span>
         </div>
      </div>
      {show && <Popup action={action} show={show} setShow={setShow}/>}
    </div>
    )
}

export default Header;