export default function SocialForm({text, fieldsQuantity, information, setInformation}){
    return(
        <form className="pl-6">
            {
                new Array(fieldsQuantity).fill(0).map((_, index) => <SocialField text={text} index={index} key={`social-${index}`} information={information} setInformation={setInformation}></SocialField>)
            }
        </form>
    )
}

function SocialField({text, index, information, setInformation}){
    
    function handleChange(event){
        let field = event.target.id.split("-");
        field = field[field.length - 1];
        let newInformation = {...information};
        newInformation.personalInfo.social[index][field] = event.target.value;
        setInformation(newInformation);
    }
    
    return(
        <fieldset>
            <legend className="text-xl font-bold">{text.network}</legend>
            <article className="flex flex-col pb-2">
                <label htmlFor={`social-${index}-page`} className="w-fit font-semibold text-lg">{text.socialName}</label>
                <input type="text" name={`social-${index}-page`} id={`social-${index}-page`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" value={information.personalInfo.social[index].page} onChange={handleChange}/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={`social-${index}-url`} className="w-fit font-semibold text-lg">{text.link}</label>
                <input type="text" name={`social-${index}-url`} id={`social-${index}-url`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" value={information.personalInfo.social[index].url} onChange={handleChange}/>
            </article>
        </fieldset>
    )
}