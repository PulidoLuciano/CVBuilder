export default function LanguageForm({text, fieldsQuantity}){
    return(
        <form className="pl-6">
            {
                new Array(fieldsQuantity).fill(0).map((_, index) => <LanguageField text={text} index={`language-${index}`} key={`education-${index}`}></LanguageField>)
            }
        </form>
    )
}

function LanguageField({text, id}){
    return(
        <fieldset>
            <legend className="text-xl font-bold">{text.languages}</legend>
            <article className="flex flex-col pb-2">
                <label htmlFor={id} className="w-fit font-semibold text-lg">{text.socialName}</label>
                <input type="text" name={id} id={id} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700"/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={id} className="w-fit font-semibold text-lg">{text.level}</label>
                <input type="text" name={id} id={id} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700"/>
            </article>
        </fieldset>
    )
}