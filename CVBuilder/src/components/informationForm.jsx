import EducationForm from "./educationForm"
import ExperienceForm from "./experienceForm"
import LanguageForm from "./languageForm"
import PersonalForm from "./personalForm"
import SkillsForm from "./skillsForm"
import SocialForm from "./socialForm"

export default function InformationForm({section, children, text}){
    
    const Forms= {
        personal: <PersonalForm text={text}></PersonalForm>,
        social: <SocialForm text={text} fieldsQuantity={3}></SocialForm>,
        education: <EducationForm text={text} fieldsQuantity={2}></EducationForm>,
        experience: <ExperienceForm text={text} fieldsQuantity={3}></ExperienceForm>,
        skills: <SkillsForm fieldsQuantity={6}></SkillsForm>,
        languages: <LanguageForm text={text} fieldsQuantity={3}></LanguageForm>
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