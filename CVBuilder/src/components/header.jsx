import sheetImage from "../assets/sheet.svg"
import darkMode from "../assets/darkmode.svg"
import lightMode from "../assets/lightmode.svg"
import britain from "../assets/britain.svg"
import spain from "../assets/spain.svg"
import { useEffect, useState } from "react"

export default function Header(){
    return(
        <header className="w-full bg-gray-200 dark:bg-gray-900 dark:text-white h-12 px-6 select-none flex justify-between items-center shadow-xl">
            <span className="flex gap-1 text-2xl">
                <img src={sheetImage} alt="Web icon" className="size-8 dark:invert"/>
                <h1 className="cursor-default">CVBuilder</h1>
            </span>
            <span className="flex items-center gap-3">
                <LanguageButton></LanguageButton>
                <ModeButton></ModeButton>
            </span>
        </header>
    )
}

function ModeButton(){
    
    const [mode, setMode] = useState(localStorage.getItem("mode") ?? (matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light");

    useEffect(() => {
        let storedTheme = localStorage.getItem("mode");
        if(storedTheme){
            setMode(storedTheme);
        }else{ 
            let defaultTheme = (window.matchMedia('(prefers-color-scheme: dark)'.matches) ? "dark" : "light");
            setMode(defaultTheme);
            localStorage.setItem("mode", defaultTheme);
        }
    }, []);

    useEffect(() => {
        let root = document.querySelector("body");
        if(mode == "light")
            root.classList.remove("dark");
        else
            root.classList.add("dark");
    }, [mode])

    function changeMode(){
        let newTheme = (mode == "light") ? "dark" : "light"
        setMode(newTheme);
        localStorage.setItem("mode", newTheme);
    }

    return(
        <button className="pr-3" onClick={changeMode}><img src={(mode == "light") ? lightMode : darkMode} alt={(mode == "light") ? "Light mode icon" : "Dark mode icon"} className="size-8 dark:invert" /></button>
    )
}

function LanguageButton(){
    const [language, setLanguage] = useState(localStorage.getItem("lang"));

    useEffect(() => {
        let storedLanguage = localStorage.getItem("lang");
        if(storedLanguage){
            setLanguage(storedLanguage);
        }else{ 
            let navigatorLanguage = (navigator.language == "es") ? "es" : "en"
            setLanguage(navigatorLanguage);
            localStorage.setItem("lang", navigatorLanguage);
        }
    }, [])

    function changeLanguage(){
        let newLanguage = (language == "en") ? "es" : "en";
        setLanguage(newLanguage);
        localStorage.setItem("lang", newLanguage);
    }

    return(
        <button className="rounded-sm" onClick={changeLanguage}><img src={(language == "en") ? britain : spain} alt={((language == "en") ? "United Kingdom" : "Spain") + " flag"} className="size-8" /></button>
    )
}