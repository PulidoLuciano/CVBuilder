export default function EducationForm({text, fieldsQuantity}){
    return(
        <form className="pl-6">
            {
                new Array(fieldsQuantity).fill(0).map((_, index) => <EducationField text={text} index={`education-${index}`} key={`education-${index}`}></EducationField>)
            }
        </form>
    )
}

function EducationField({text, id}){
    return(
        <fieldset>
            <legend className="text-xl font-bold">{text.education}</legend>
            <article className="flex flex-col pb-2">
                <label htmlFor={id} className="w-fit font-semibold text-lg">{text.institution}</label>
                <input type="text" name={id} id={id} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700"/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={id} className="w-fit font-semibold text-lg">{text.degree}</label>
                <input type="text" name={id} id={id} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700"/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={id} className="w-fit font-semibold text-lg">{text.initialDate}</label>
                <input type="number" name={id} id={id} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700"/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={id} className="w-fit font-semibold text-lg">{text.finalDate}</label>
                <input type="number" name={id} id={id} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700"/>
            </article>
        </fieldset>
    )
}