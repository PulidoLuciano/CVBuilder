import { useState } from "react";
import formatDate from "../utils/formatDate";

export default function ExperienceForm({text, fieldsQuantity, information, setInformation}){
    return(
        <form className="pl-6">
            {
                new Array(fieldsQuantity).fill(0).map((_, index) => <ExperienceField text={text} index={index} key={`experience-${index}`} information={information} setInformation={setInformation}></ExperienceField>)
            }
        </form>
    )
}

function ExperienceField({text, index, information, setInformation}){
    
    const [initialDate, setInitialDate] = useState("2023-03-01");
    const [finalDate, setFinalDate] = useState("2024-06-01");

    function handleChange(event){
        let result;
        if(event.target.id.includes("Date")){
            result = formatDate(event.target.value, text);
            if(event.target.id.includes("initial"))
                setInitialDate(event.target.value)
            else
                setFinalDate(event.target.value)
        }
        else
            result = event.target.value;
        let field = event.target.id.split("-");
        field = field[field.length - 1];
        let newInformation = {...information};
        newInformation.experience[index][field] = result;
        setInformation(newInformation);
    }
    
    return(
        <fieldset>
            <legend className="text-xl font-bold">{text.job}</legend>
            <article className="flex flex-col pb-2">
                <label htmlFor={`experience-${index}-company`} className="w-fit font-semibold text-lg">{text.company}</label>
                <input type="text" id={`experience-${index}-company`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={information.experience[index].company}/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={`experience-${index}-position`} className="w-fit font-semibold text-lg">{text.position}</label>
                <input type="text" id={`experience-${index}-position`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={information.experience[index].position}/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={`experience-${index}-initialDate`} className="w-fit font-semibold text-lg">{text.initialDate}</label>
                <input type="date" id={`experience-${index}-initialDate`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={initialDate}/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={`experience-${index}-finalDate`} className="w-fit font-semibold text-lg">{text.finalDate}</label>
                <input type="date" id={`experience-${index}-finalDate`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={finalDate}/>
            </article>
            <article className="flex flex-col pb-2">
                <label htmlFor={`experience-${index}-summary`} className="w-fit font-semibold text-lg">{text.summary}</label>
                <textarea id={`experience-${index}-summary`} className="w-full tablet:w-2/3 border-b-2 border-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 dark:text-gray-300 dark:bg-gray-700" onChange={handleChange} value={information.experience[index].summary}></textarea>
            </article>
        </fieldset>
    )
}