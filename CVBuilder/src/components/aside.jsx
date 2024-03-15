import { useState } from "react"

export default function Aside({text}){
    
    const [sectionShown, setSectionShown] = useState("designs");
    
    return(
        <aside className="overflow-auto tablet:w-1/3 dark:text-white">
            <nav className="p-3">
                <button onClick={() => setSectionShown("designs")} className={`navButton mr-3 ${(sectionShown == "designs") ? "bg-slate-500" : "bg-none"}`}>{text.designs}</button>
                <button onClick={() => setSectionShown("information")} className={`navButton ${(sectionShown != "designs") ? "bg-slate-500" : "bg-none"}`}>{text.information}</button>
            </nav>
            <hr className="w-11/12 mx-auto"/>
            {
                (sectionShown == "designs")
                ?
                <section className="p-3">
                    <h2>{text.designs}</h2>
                </section>
                :
                <section className="p-3">
                    <h2>{text.information}</h2>
                </section>
            }
        </aside>
    )
}