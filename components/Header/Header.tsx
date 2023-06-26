'use client';
import './header.css';
import {useState} from 'react';
import React from 'react';
import Popup from '../ui/Popup/Popup';
import OrnamentSquare from '../ui/Ornament/OrnamentSquare';

const Header = () => {
   const [show, setShow] = useState(false);
   const [action, setAction] = React.useState<string>("");

   function openPopup() {
      setShow(true)
   }
    return (
    <div className='header'>
      <div className='container header__container'>
         <div className='header__left'>
            <h3>Togyzqumalaq</h3>
            <OrnamentSquare />
         </div>
         <div className='header__right'>
            <span onClick={() => {openPopup(); setAction("lang")}}>eng</span>
            <span onClick={() => {openPopup(); setAction("theme")}}>theme</span>
            <span onClick={() => {openPopup(); setAction("sound")}}>sound</span>
         </div>
      </div>
      {show && <Popup action={action} setAction={setAction} show={show} setShow={setShow}/>}
    </div>
    )
}

export default Header;