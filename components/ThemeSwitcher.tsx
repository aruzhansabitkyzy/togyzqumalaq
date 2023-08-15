"use client";
import { useState, useEffect, useContext } from "react";
import { MyThemeContext } from "@/context/ThemeContext";
import '/public/css/selection.css'; 
import Image from "next/image";
const ThemeSwitcher = () => {
  const themeCtx: {
    isDarkMode?: boolean;
    setLightThemeHandler: () => void;
    setDarkThemeHandler: () => void;
  } = useContext(MyThemeContext);
  const isDark = localStorage.getItem("isDarkTheme");

  useEffect(() => {
    console.log(localStorage.getItem("isDarkTheme"));
  });

  function setLightTheme(): void {
    themeCtx.setLightThemeHandler();
  }

  function setDarkTheme(): void {
    themeCtx.setDarkThemeHandler();
  }

  return (
    <>
      <div className="popup__option" onClick={setDarkTheme}>
        <div
          className={`popup__option_circle`}
        >
          {isDark == "true" ? (
            <div className='tick'></div>
          ) : (
            ""
          )}
        </div>
        <div className="popup__option_text text-black dark:text-white">
          dark
        </div>
      </div>
      <div className="popup__option" onClick={setLightTheme}>
        <div
          className={`popup__option_circle`}
        >
          {isDark == "false" ? (
            <div className='tick'></div>
          ) : (
            ""
          )}
        </div>
        <div className="popup__option_text text-black dark:text-white">
          light
        </div>
      </div>
    </>
  );
};
export default ThemeSwitcher;
