import InformationForm from "./informationForm"

const sections= [
    "personal",
    "social",
    "education",
    "experience",
    "skills",
    "languages"
]

export default function Information({text}){
    return(
        <section className="p-3">
            <h2>{text.information}</h2>
            {
                sections.map((section) => <InformationForm key={section.id} section={section} text={text}>{text[section]}</InformationForm>)
            }
        </section>
    )
}