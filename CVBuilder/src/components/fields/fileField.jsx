import { useState } from "react"

export default function FileField({text, id}){
    
    const [isChecked, setIsChecked] = useState(true);
    
    function handleCheck(event){
        setIsChecked(!isChecked);
    }

    return(
        <>
            <article className="flex flex-col pb-2">
                <p htmlFor={id} className="w-fit text-lg font-semibold select-none">{text[id]}</p>
                <label htmlFor="show-photo" className="flex gap-2 pb-2 items-center">
                    <p>{text.showPhoto}</p>
                    <input type="checkbox" name="show-photo" id="show-photo" checked={isChecked} onChange={handleCheck} className="size-5"/>
                </label>
                {
                    (isChecked)
                    ?
                    <input type="file" name={id} id={id} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700"/>
                    :
                    null
                }
                
            </article>
        </>
    )
}