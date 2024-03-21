export default function LanguageForm({text, fieldsQuantity, information, setInformation}){
    return(
        <form className="pl-6">
            {
                new Array(fieldsQuantity).fill(0).map((_, index) => <LanguageField text={text} index={index} key={`language-${index}`} information={information} setInformation={setInformation}></LanguageField>)
            }
        </form>
    )
}

function LanguageField({text, index, information, setInformation}){
    
    function handleChange(event){
        let field = event.target.id.split("-");
        field = field[field.length - 1];
        let newInformation = {...information};
        newInformation.languages[index][field] = event.target.value;
        setInformation(newInformation);
    }
    
    return(
        <fieldset>
            <legend className="text-xl font-bold">{text.languages}</legend>
            <article className="flex flex-col pb-2">
                <label htmlFor={`language-${index}-name`} className="w-fit font-semibold text-lg">{text.socialName}</label>
                <input type="text" id={`language-${index}-name`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={information.languages[index].name}/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={`language-${index}-level`} className="w-fit font-semibold text-lg">{text.level}</label>
                <input type="text" id={`language-${index}-level`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={information.languages[index].level}/>
            </article>
        </fieldset>
    )
}