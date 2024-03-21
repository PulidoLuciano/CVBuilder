export default function TextArea({text, id, max}){
    return(
        <article className="flex flex-col pb-2">
            <label htmlFor={id} className="w-fit font-semibold text-lg">{text[id]}</label>
            <textarea name={id} id={id} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700"/>
        </article>
    )
}