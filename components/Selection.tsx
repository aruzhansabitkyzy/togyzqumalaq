"use client";
import { useDispatch } from "react-redux";
import "/public/css/selection.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

//constant arrays
const LANGUAGES = ["english", "kazakh", "russian"];
const THEMES = ["dark", "light"];

//type
type PropType = {
  isTheme: boolean;
  isLanguage: boolean;
};

const Selection = ({ isTheme, isLanguage }: PropType) => {
  return <>{isTheme && <ThemeSwitcher />}</>;
};
export default Selection;
