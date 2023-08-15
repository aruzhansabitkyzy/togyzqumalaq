"use client";
import "/public/css/header.css";
import { useEffect, useState } from "react";
import Modal from "./ui/Modal";
import React from "react";
import OrnamentSquare from "./ui/OrnamentSquare";
import { useRouter } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const router = useRouter();

  return (
    <>
      <div className="header bg-light1  dark:bg-dark1">
        <div className="container header__container">
          <div className="header__left" onClick={() => router.push("/")}>
            <h3 className="header__title text-black dark:text-white">
              Togyzqumalaq
            </h3>
            <OrnamentSquare />
          </div>
          <div className="header__right">
            {/* <span
            className="text-black dark:text-white"
            onClick={() => {
              openPopup();
              setAction("lang");
            }}
          >
            eng
          </span> */}
            <span
              className="text-black dark:text-white"
              onClick={() => setIsOpen(true)}
            >
              theme
            </span> 
            <span className="text-black dark:text-white" onClick={() => {setSoundOn(!soundOn)}}>
              {soundOn && (<p>sound off</p>)}
              {!soundOn && (<p>sound on</p>)}
            </span>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} autoClose={false}>
        
        <h2 className="popup__title text-black dark:text-white">theme</h2>
        <div className="popup__body">
          <ThemeSwitcher />
        </div>
        <div
          className="popup__close text-black dark:text-white"
          onClick={() => setIsOpen(false)}
        >
          close
        </div>
      </Modal>
    </>
  );
};

export default Header;
