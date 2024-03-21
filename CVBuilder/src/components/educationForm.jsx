export default function EducationForm({text, fieldsQuantity, information, setInformation}){
    return(
        <form className="pl-6">
            {
                new Array(fieldsQuantity).fill(0).map((_, index) => <EducationField text={text} index={index} information={information} setInformation={setInformation} key={`education-${index}`}></EducationField>)
            }
        </form>
    )
}

function EducationField({text, index, information, setInformation}){
    
    function handleChange(event){
        let field = event.target.id.split("-");
        field = field[field.length - 1];
        let newInformation = {...information};
        newInformation.education[index][field] = event.target.value;
        setInformation(newInformation);
    }

    return(
        <fieldset>
            <legend className="text-xl font-bold">{text.education}</legend>
            <article className="flex flex-col pb-2">
                <label htmlFor={`education-${index}-institution`} className="w-fit font-semibold text-lg">{text.institution}</label>
                <input type="text" id={`education-${index}-institution`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={information.education[index].institution}/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={`education-${index}-degree`} className="w-fit font-semibold text-lg">{text.degree}</label>
                <input type="text" id={`education-${index}-degree`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={information.education[index].degree}/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={`education-${index}-initialYear`} className="w-fit font-semibold text-lg">{text.initialDate}</label>
                <input type="number" id={`education-${index}-initialYear`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={information.education[index].initialYear}/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={`education-${index}-finalYear`} className="w-fit font-semibold text-lg">{text.finalDate}</label>
                <input type="number" id={`education-${index}-finalYear`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={information.education[index].finalYear}/>
            </article>
        </fieldset>
    )
}