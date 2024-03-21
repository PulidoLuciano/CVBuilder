import EducationForm from "./educationForm"
import ExperienceForm from "./experienceForm"
import LanguageForm from "./languageForm"
import PersonalForm from "./personalForm"
import SkillsForm from "./skillsForm"
import SocialForm from "./socialForm"

export default function InformationForm({section, children, text, information, setInformation}){
    
    const Forms= {
        personal: <PersonalForm text={text} information={information} setInformation={setInformation}></PersonalForm>,
        social: <SocialForm text={text} fieldsQuantity={3} information={information} setInformation={setInformation}></SocialForm>,
        education: <EducationForm text={text} fieldsQuantity={2} information={information} setInformation={setInformation}></EducationForm>,
        experience: <ExperienceForm text={text} fieldsQuantity={3} information={information} setInformation={setInformation}></ExperienceForm>,
        skills: <SkillsForm fieldsQuantity={6} information={information} setInformation={setInformation}></SkillsForm>,
        languages: <LanguageForm text={text} fieldsQuantity={3} information={information} setInformation={setInformation}></LanguageForm>
    }

    return(
        <details className="mb-4" open={(section == "personal")}>
            <summary className="text-2xl font-bold select-none cursor-pointer mb-2"> 
                {children}
                <hr className="ml-6"/>
            </summary>
            {Forms[section]}
        </details>
    )
}