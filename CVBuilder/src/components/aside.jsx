import { useState } from "react"
import designs from "../utils/designs";
import Designs from "./designs";
import Information from "./information";

export default function Aside({text, selectedDesign, setDesign}){
    
    const [sectionShown, setSectionShown] = useState("designs");

    return(
        <aside className="tablet:overflow-auto tablet:w-1/3 dark:text-white print:hidden">
            <nav className="p-3">
                <button onClick={() => setSectionShown("designs")} className={`navButton mr-3 ${(sectionShown == "designs") ? "bg-slate-500" : "bg-none"}`}>{text.designs}</button>
                <button onClick={() => setSectionShown("information")} className={`navButton ${(sectionShown != "designs") ? "bg-slate-500" : "bg-none"}`}>{text.information}</button>
            </nav>
            <hr className="w-11/12 mx-auto"/>
            {
                (sectionShown == "designs")
                ?
                <Designs text={text} selectedDesign={selectedDesign} designs={designs} setDesign={setDesign}></Designs>
                :
                <Information text={text}></Information>
            }
        </aside>
    )
}