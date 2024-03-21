import PersonalForm from "./personalForm"

export default function InformationForm({section, children, text}){
    
    const Forms= {
        personal: <PersonalForm text={text}></PersonalForm>
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