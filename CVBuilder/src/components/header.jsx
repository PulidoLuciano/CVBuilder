import sheetImage from "../assets/sheet.svg"
import darkMode from "../assets/darkmode.svg"
import lightMode from "../assets/lightmode.svg"
import britain from "../assets/britain.svg"
import spain from "../assets/spain.svg"
import { useEffect, useState } from "react"

export default function Header({setLanguage, text}){
    return(
        <header className="bg-gray-200 dark:bg-gray-900 dark:text-white mobile-m:px-6 select-none flex justify-between items-center shadow-xl print:hidden">
            <span className="flex gap-1 text-2xl">
                <img src={sheetImage} alt="Web icon" className="size-8 dark:invert"/>
                <h1 className="cursor-default">CVBuilder</h1>
            </span>
            <span className="hidden tablet:flex gap-2">
                <p>{text.madeBy}</p>
                <a href="https://github.com/PulidoLuciano" className="underline" no-referer="true" target="_blank">Luciano Pulido</a>
            </span>
            <span className="flex items-center gap-3">
                <LanguageButton setLanguage={setLanguage}></LanguageButton>
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
        <button onClick={changeMode}><img src={(mode == "light") ? lightMode : darkMode} alt={(mode == "light") ? "Light mode icon" : "Dark mode icon"} className="size-8 dark:invert" /></button>
    )
}

function LanguageButton({setLanguage}){
    function changeLanguage(){
        let newLanguage = (localStorage.getItem("lang") == "en") ? "es" : "en";
        setLanguage(newLanguage);
        localStorage.setItem("lang", newLanguage);
    }

    return(
        <button className="rounded-sm pr-3" onClick={changeLanguage}><img src={(localStorage.getItem("lang") == "en") ? britain : spain} alt={((localStorage.getItem("lang") == "en") ? "United Kingdom" : "Spain") + " flag"} className="size-8" /></button>
    )
}