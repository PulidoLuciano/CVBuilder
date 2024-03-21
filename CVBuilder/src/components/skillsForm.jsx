export default function SkillsForm({fieldsQuantity, information, setInformation}){
    return(
        <form className="pl-6">
            {
                new Array(fieldsQuantity).fill(0).map((_, index) => <SkillField index={index} key={`skill-${index}`} information={information} setInformation={setInformation}></SkillField>)
            }
        </form>
    )
}

function SkillField({index, information, setInformation}){
    
    function handleChange(event){
        let result = event.target.value;
        if(result == "")
            result = null
        let newInformation = {...information};
        newInformation.skills[index] = result;
        setInformation(newInformation);
    }

    return(
        <fieldset>
            <article className="flex flex-col pb-2">
                <input type="text" id={`skill-${index}`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={information.skills[index]}/>
            </article>
        </fieldset>
    )
}