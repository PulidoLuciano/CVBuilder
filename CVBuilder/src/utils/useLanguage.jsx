import { useEffect, useState } from "react";
import spanish from "./spanish";
import english from "./english";

export default function useLanguage(){

    const [language, setLanguage] = useState(null);
    const [text, setText] = useState(null);

    useEffect(() => {
        let storedLanguage = localStorage.getItem("lang");
        if(storedLanguage){
            setLanguage(storedLanguage);
        }else{ 
            let navigatorLanguage = (navigator.language == "es") ? "es" : "en"
            setLanguage(navigatorLanguage);
            localStorage.setItem("lang", navigatorLanguage);
        }
    }, []);

    useEffect(() => {
        setText((language == "en") ? english : spanish);
    }, [language]);

    return {text, setLanguage};
}