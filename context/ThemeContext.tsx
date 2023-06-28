'use client'
import { createContext, ReactElement, useEffect, useState } from "react";

export const MyThemeContext = createContext({
  isDarkTheme: true,
  setLightThemeHandler: () => {},
  setDarkThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!
      );
      isDarkTheme && document.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function setLightThemeHandler(): void {
    setIsDarkTheme(false);
    applyThemeClass(false);
    setValueToLocalStorage(false);
  }

  function setDarkThemeHandler(): void {
    setIsDarkTheme(true);
    applyThemeClass(true);
    setValueToLocalStorage(true);
  }

  function applyThemeClass(isDark: boolean): void {
    document.querySelector("body")!.classList.toggle("dark", isDark);
  }

  function setValueToLocalStorage(isDark: boolean): void {
    localStorage.setItem("isDarkTheme", `${isDark}`);
  }

  return (
    <MyThemeContext.Provider
      value={{ isDarkTheme, setLightThemeHandler, setDarkThemeHandler }}
    >
      {props.children}
    </MyThemeContext.Provider>
  );
}