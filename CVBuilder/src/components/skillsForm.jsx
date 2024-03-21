export default function SkillsForm({fieldsQuantity}){
    return(
        <form className="pl-6">
            {
                new Array(fieldsQuantity).fill(0).map((_, index) => <SkillField index={`skill-${index}`} key={`skill-${index}`}></SkillField>)
            }
        </form>
    )
}

function SkillField({id}){
    return(
        <fieldset>
            <article className="flex flex-col pb-2">
                <input type="text" name={id} id={id} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700"/>
            </article>
        </fieldset>
    )
}