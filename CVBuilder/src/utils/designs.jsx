import PhoneIcon from "../assets/phone.svg";
import LocationIcon from "../assets/location.svg";
import EmailIcon from "../assets/email.svg";
import formatDate from "./formatDate";

export default
[
    {
        id: 1,
        preview: <div className="design-preview bg-white"></div>,
        content(information, text){
            return(
                <div className="p-8">
                    <div className="flex items-center gap-3">
                        {
                            (information.personalInfo.photo.isDisplay)
                            ?
                            <img src={information.personalInfo.photo.src} alt="" className="size-20 rounded-full outline outline-1"/>
                            :
                            null
                        }
                        <div>
                            <h1 className="text-5xl font-bold font-serif">{information.personalInfo.name} {information.personalInfo.surname}</h1>
                            <h3 className="text-2xl text-gray-700 font-serif">{information.personalInfo.position}</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <p><span className="font-bold">{text.city}:</span> {information.personalInfo.city}</p>
                        <p><span className="font-bold">{text.phone}:</span> {information.personalInfo.phone}</p>
                        <p><span className="font-bold">{text.email}:</span> {information.personalInfo.email}</p>
                        {
                            information.personalInfo.social.map((social) => <p><span className="font-bold">{social.page}:</span> {social.url}</p>)
                        }
                    </div>
                    <p className="mt-2 text-pretty text-sm">
                        {information.personalInfo.summary}
                    </p>
                    <div className="mt-2">
                        <h2 className="font-serif text-3xl p-0">{text.education}</h2>
                        <hr className="mb-1"/>
                        {
                            information.education.map(
                                (item) => 
                                (item.degree.trim() != "")
                                ?
                                <div className="flex mb-1">
                                    <p className="w-1/4 font-bold">{item.initialYear}-{item.finalYear}</p>
                                    <div className="w-3/4">
                                        <p className="font-bold font-serif">{item.degree}</p>
                                        <p>{item.institution}</p>
                                    </div>
                                </div>
                                :
                                null
                            )
                        }
                    </div>
                    <div className="mt-2">
                        <h2 className="font-serif text-3xl p-0">{text.experience}</h2>
                        <hr className="mb-1"/>
                        {
                            information.experience.map(
                                (item) => 
                                (item.position.trim() != "")
                                ?
                                <div className="flex mb-1">
                                    <p className="w-1/3 font-bold">{item.initialDate}-{item.finalDate ?? text.current}</p>
                                    <div className="w-3/4">
                                        <p className="font-bold font-serif">{item.position}</p>
                                        <p>{item.company}</p>
                                        <p className="text-sm">{item.summary}</p>
                                    </div>
                                </div>
                                :
                                null
                            )
                        }
                    </div>
                    <div className="mt-2">
                        <h2 className="font-serif text-3xl p-0">{text.skills}</h2>
                        <hr className="mb-1"/>
                        <ul className="grid grid-flow-row grid-cols-3 pl-3">
                            {
                                information.skills.map(
                                    (item) => 
                                    (item) ?
                                    <li className="list-item list-disc">{item}</li>
                                    :
                                    null
                                )
                            }
                        </ul>
                    </div>
                    <div className="mt-2">
                        <h2 className="font-serif text-3xl p-0">{text.languages}</h2>
                        <hr className="mb-1"/>
                        <ul className="grid grid-flow-row grid-cols-3 pl-3">
                            {
                                information.languages.map(
                                    (item) => 
                                    (item.name != "") ?
                                    <li className="list-item list-disc">{item.name} - {item.level}</li>
                                    : null
                                )
                            }
                        </ul>
                    </div>
                </div>
            )
        }
    },
    {
        id: 2,
        preview: 
            <div className="design-preview bg-white">
                <div className="h-full bg-default-primary w-2/6"></div>
            </div>,
        content(information, text){
            return(
                <div className="flex w-full h-full">
                    <aside className="w-1/3 bg-default-primary h-full pt-20 p-8 text-white print:bg-default-primary print-bg">
                        {
                            (information.personalInfo.photo.isDisplay)
                            ?
                            <img src={information.personalInfo.photo.src} alt="Your photo" className="rounded-full size-48 mx-auto"/>
                            :
                            null
                        }
                        <section className="mt-3">
                            <h1 className="text-xl">{text.about.toUpperCase()}</h1>
                            <p className="text-xs text-pretty">{information.personalInfo.summary}</p>
                        </section>
                        <section className="mt-3">
                            <h1 className="text-xl font-bold">{text.social.toUpperCase()}</h1>
                            {
                                information.personalInfo.social.map((item) => 
                                    <>
                                        <h2 className="font-bold text-base p-0 mt-1">{item.page}:</h2>
                                        <p className="text-sm">{item.url}</p>
                                    </>
                                )
                            }
                        </section>
                        <section className="mt-3">
                            <h1 className="text-xl font-bold">{text.languages.toUpperCase()}</h1>
                            {
                                information.languages.map((item) => 
                                    (item.name != "") ?
                                    <p className="text-sm mt-1"><span className="font-bold p-0 mt-1">{item.name}</span> - {item.level}</p>
                                    : null
                                )
                            }
                        </section>
                    </aside>
                    <main className="p-8 pt-20 w-2/3 text-default-primary">
                        <section className="flex justify-between w-full items-center">
                            <div>
                                <h1 className="text-3xl font-extrabold">{information.personalInfo.name.toUpperCase()}</h1>
                                <h1 className="text-3xl font-extrabold">{information.personalInfo.surname.toUpperCase()}</h1>
                                <h2 className="text-base">{information.personalInfo.position.toUpperCase()}</h2>
                            </div>
                            <div>
                                <p className="flex gap-1 mb-1"><img src={EmailIcon} alt="E-mail icon" /> {information.personalInfo.email}</p>
                                <p className="flex gap-1 mb-1"><img src={LocationIcon} alt="Location icon" /> {information.personalInfo.city}</p>
                                <p className="flex gap-1 mb-1"><img src={PhoneIcon} alt="Phone icon" />{information.personalInfo.phone}</p>
                            </div>
                        </section>
                        <hr className="mb-3"/>
                        <section>
                            <h2 className="text-xl">{text.experience.toUpperCase()}</h2>
                            {
                                information.experience.map(
                                    (item) => 
                                    <div className="flex mb-1">
                                        <div className="w-1/3">
                                            <p className="font-bold">{item.initialDate} -</p>
                                            <p className="font-bold">{item.finalDate ?? text.current}</p>
                                        </div>
                                        <div className="w-3/4">
                                            <p className="font-bold">{item.position}</p>
                                            <p>{item.company}</p>
                                            <p className="text-sm">{item.summary}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </section>
                        <hr className="my-3"/>
                        <section>
                            <h2 className="text-xl">{text.skills.toUpperCase()}</h2>
                            <ul className="grid grid-flow-row grid-cols-3 pl-3">
                                {
                                    information.skills.map(
                                        (item) => 
                                        (item) ?
                                        <li className="list-item list-disc">{item}</li>
                                        : null
                                    )
                                }
                            </ul>
                        </section>
                        <hr className="my-3"/>
                        <section>
                            <h2 className="text-xl">{text.education.toUpperCase()}</h2>
                            {
                                information.education.map(
                                    (item) => 
                                    <div className="flex mb-1">
                                        <p className="w-1/3 font-bold">{item.initialYear}-{item.finalYear}</p>
                                        <div className="w-3/4">
                                            <p className="font-bold">{item.degree}</p>
                                            <p>{item.institution}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </section>
                    </main>
                </div>
            )
        }
    },
    {
        id: 3,
        preview: 
            <div className="design-preview bg-white">
                <div className="bg-default-primary h-1/5"></div>
                <div className="flex h-[80%]">
                    <div className="bg-default-secondary w-2/6"></div>
                </div>
            </div>,
        content(information, text){
            return(
                <div className="w-full h-full grid grid-rows-[168px,auto]">
                    <header className="flex bg-default-primary print-bg text-white items-center">  
                        {
                            (information.personalInfo.photo.isDisplay)
                            ?
                            <div className="w-1/3 px-8">
                                <img src={information.personalInfo.photo.src} alt="Your photo" className="rounded-full size-32 mx-auto my-5"/>
                            </div>
                            :
                            null
                        }
                        <div className="w-2/3 px-8">
                            <h1 className="text-4xl font-bold">{information.personalInfo.name} {information.personalInfo.surname}</h1>
                            <h2 className="text-base font-light">{information.personalInfo.position}</h2>
                        </div>
                    </header>
                    <div className="flex">
                        <aside className="w-1/3 bg-default-secondary p-8 print-bg">
                            <section className="mt-3">
                                <h1 className="text-xl font-bold p-1">{text.contact.toUpperCase()}</h1>
                                <p className="flex gap-1 mb-1 text-sm"><img src={EmailIcon} alt="E-mail icon" className="size-4"/> {information.personalInfo.email}</p>
                                <p className="flex gap-1 mb-1 text-sm"><img src={LocationIcon} alt="Location icon" className="size-4"/> {information.personalInfo.city}</p>
                                <p className="flex gap-1 mb-1 text-sm"><img src={PhoneIcon} alt="Phone icon" className="size-4"/>{information.personalInfo.phone}</p>
                            </section>
                            <section className="mt-3">
                                <h1 className="text-xl font-bold">{text.social.toUpperCase()}</h1>
                                {
                                    information.personalInfo.social.map((item) => 
                                        <>
                                            <h2 className="font-bold text-base p-0 mt-1">{item.page}:</h2>
                                            <p className="text-sm">{item.url}</p>
                                        </>
                                    )
                                }
                            </section>
                            <section className="mt-3">
                                <h1 className="text-xl font-bold">{text.skills.toUpperCase()}</h1>
                                <ul>
                                    {
                                        information.skills.map(
                                            (item) => 
                                            (item) ?
                                            <li className="text-sm">{item}</li>
                                            : null
                                        )
                                    }
                                </ul>
                            </section>
                            <section className="mt-3">
                                <h1 className="text-xl font-bold">{text.languages.toUpperCase()}</h1>
                                {
                                    information.languages.map((item) => 
                                        (item != "") ?
                                        <p className="text-sm mt-1"><span className="font-bold p-0 mt-1">{item.name}</span> - {item.level}</p>
                                        : null
                                    )
                                }
                            </section>
                        </aside>
                        <main className="p-8 w-2/3 text-default-primary">
                            <section>
                                <h2 className="text-xl">{text.about.toUpperCase()}</h2>
                                <p className="text-xs text-pretty">{information.personalInfo.summary}</p>
                            </section>
                            <hr className="my-3"/>
                            <section>
                                <h2 className="text-xl">{text.experience.toUpperCase()}</h2>
                                {
                                    information.experience.map(
                                        (item) => 
                                        <div className="flex mb-1">
                                            <div className="w-1/3">
                                                <p className="font-bold">{item.initialDate} -</p>
                                                <p className="font-bold">{item.finalDate ?? text.current}</p>
                                            </div>
                                            <div className="w-3/4">
                                                <p className="font-bold">{item.position}</p>
                                                <p>{item.company}</p>
                                                <p className="text-sm">{item.summary}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </section>
                            <hr className="my-3"/>
                            <section>
                                <h2 className="text-xl">{text.education.toUpperCase()}</h2>
                                {
                                    information.education.map(
                                        (item) => 
                                        <div className="flex mb-1">
                                            <p className="w-1/3 font-bold">{item.initialYear}-{item.finalYear}</p>
                                            <div className="w-3/4">
                                                <p className="font-bold">{item.degree}</p>
                                                <p>{item.institution}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </section>
                        </main>
                    </div>
                </div>
            )
        }
    },
    {
        id: 4,
        preview: 
            <div className="design-preview bg-white relative">
                <div className="bg-default-primary w-2/6 h-full"></div>
                <div className="bg-default-secondary h-2 absolute top-6 w-full"></div>
            </div>,
        content(information, text){
            return(
                <div className="w-full h-full grid grid-rows-[168px,60px,auto]">
                    <header className="flex items-center">
                        {
                            (information.personalInfo.photo.isDisplay)
                            ?
                            <div className="w-1/3 px-8 bg-default-primary print-bg">
                                <div className="size-32 mx-auto my-5 p-3 border-2 border-white">
                                    <img src={information.personalInfo.photo.src} alt="Your photo"/>                                
                                </div>
                            </div>
                            :
                            null
                        }
                        <div className="w-2/3 px-8">
                            <h1 className="text-5xl font-bold">{information.personalInfo.name.toUpperCase()} {information.personalInfo.surname.toUpperCase()}</h1>
                            <h2 className="text-2xl font-light">{information.personalInfo.position.toUpperCase()}</h2>
                        </div>
                    </header>
                    <div>
                        <section className="bg-default-secondary flex h-full items-center px-20 justify-between print-bg">
                            <p className="flex gap-1 mb-1 text-sm"><img src={EmailIcon} alt="E-mail icon" className="size-4"/> {information.personalInfo.email}</p>
                            <p className="flex gap-1 mb-1 text-sm"><img src={LocationIcon} alt="Location icon" className="size-4"/> {information.personalInfo.city}</p>
                            <p className="flex gap-1 mb-1 text-sm"><img src={PhoneIcon} alt="Phone icon" className="size-4"/>{information.personalInfo.phone}</p>
                        </section>
                    </div>
                    <div className="flex">
                        <aside className="w-1/3 bg-default-primary text-white p-8 print-bg">                            
                            <section className="mt-3">
                                <h1 className="text-xl font-bold">{text.social.toUpperCase()}</h1>
                                {
                                    information.personalInfo.social.map((item) => 
                                        <>
                                            <h2 className="font-bold text-base p-0 mt-1">{item.page}:</h2>
                                            <p className="text-sm">{item.url}</p>
                                        </>
                                    )
                                }
                            </section>
                            <section className="mt-3">
                                <h1 className="text-xl font-bold">{text.skills.toUpperCase()}</h1>
                                <ul>
                                    {
                                        information.skills.map(
                                            (item) => 
                                            (item) ?
                                            <li className="text-sm">{item}</li>
                                            : null
                                        )
                                    }
                                </ul>
                            </section>
                            <section className="mt-3">
                                <h1 className="text-xl font-bold">{text.languages.toUpperCase()}</h1>
                                {
                                    information.languages.map((item) => 
                                        (item != "") ?
                                        <p className="text-sm mt-1"><span className="font-bold p-0 mt-1">{item.name}</span> - {item.level}</p>
                                        : null
                                    )
                                }
                            </section>
                            <section className="mt-3">
                                <h1 className="text-xl font-bold">{text.education.toUpperCase()}</h1>
                                {
                                    information.education.map(
                                        (item) => 
                                        <div className="mb-1">
                                            <p>{item.initialYear}-{item.finalYear}</p>
                                            <div>
                                                <p className="font-bold">{item.degree.toUpperCase()}</p>
                                                <p>{item.institution}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </section>
                        </aside>
                        <main className="p-8 w-2/3 text-default-primary">
                            <section>
                                <h2 className="text-xl">{text.about.toUpperCase()}</h2>
                                <p className="text-xs text-pretty">{information.personalInfo.summary}</p>
                            </section>
                            <hr className="my-3"/>
                            <section>
                                <h2 className="text-xl">{text.experience.toUpperCase()}</h2>
                                {
                                    information.experience.map(
                                        (item) => 
                                        <div className="flex mb-1">
                                            <div className="w-1/3">
                                                <p className="font-bold">{item.initialDate} -</p>
                                                <p className="font-bold">{item.finalDate ?? text.current}</p>
                                            </div>
                                            <div className="w-3/4">
                                                <p className="font-bold">{item.position}</p>
                                                <p>{item.company}</p>
                                                <p className="text-sm">{item.summary}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </section>
                        </main>
                    </div>
                </div>
            )
        }
    },
    {
        id: 5,
        preview: 
            <div className="design-preview bg-white flex relative">
                <div className="bg-default-primary w-2/6 h-5"></div>
                <div className="bg-default-primary w-2/3 h-5 absolute right-0 bottom-0"></div>
            </div>,
        content(information, text){
            return(
                <div className="flex w-full h-full">
                    <aside className="w-1/3 h-full">
                        <div className="bg-default-primary h-16 print-bg"></div>
                        <div className="p-8">
                            <section className="flex justify-between w-full items-center">
                                <div>
                                    <h1 className="text-3xl font-extrabold">{information.personalInfo.name.toUpperCase()}</h1>
                                    <h1 className="text-3xl font-extrabold">{information.personalInfo.surname.toUpperCase()}</h1>
                                    <h2 className="text-base">{information.personalInfo.position.toUpperCase()}</h2>
                                </div>
                            </section>
                            {
                                (information.personalInfo.photo.isDisplay)
                                ?
                                <img src={information.personalInfo.photo.src} alt="Your photo" className="rounded-full size-48 mx-auto"/>
                                :
                                null
                            }
                            <section className="mt-3">
                                <h1 className="text-xl font-bold">{text.contact.toUpperCase()}</h1>
                                <h2 className="font-bold text-base p-0 mt-1">{text.email}:</h2>
                                <p className="text-sm">{information.personalInfo.email}</p>
                                <h2 className="font-bold text-base p-0 mt-1">{text.city}:</h2>
                                <p className="text-sm">{information.personalInfo.city}</p>
                                <h2 className="font-bold text-base p-0 mt-1">{text.phone}:</h2>
                                <p className="text-sm">{information.personalInfo.phone}</p>
                                {
                                    information.personalInfo.social.map((item) => 
                                        <>
                                            <h2 className="font-bold text-base p-0 mt-1">{item.page}:</h2>
                                            <p className="text-sm">{item.url}</p>
                                        </>
                                    )
                                }
                            </section>
                            <section className="mt-3">
                                <h1 className="text-xl font-bold">{text.languages.toUpperCase()}</h1>
                                {
                                    information.languages.map((item) => 
                                        (item.name != "") ?
                                        <p className="text-sm mt-1"><span className="font-bold p-0 mt-1">{item.name}</span> - {item.level}</p>
                                        : null
                                    )
                                }
                            </section>
                        </div>
                    </aside>
                    <main className="p-8 pt-20 w-2/3 text-default-primary relative">
                        <section className="mb-3">
                            <h2 className="text-xl">{text.about.toUpperCase()}</h2>
                            <p className="text-xs text-pretty">{information.personalInfo.summary}</p>
                        </section>
                        <hr className="mb-3"/>
                        <section>
                            <h2 className="text-xl">{text.experience.toUpperCase()}</h2>
                            {
                                information.experience.map(
                                    (item) => 
                                    <div className="flex mb-1">
                                        <div className="w-1/3">
                                            <p className="font-bold">{item.initialDate} -</p>
                                            <p className="font-bold">{item.finalDate ?? text.current}</p>
                                        </div>
                                        <div className="w-3/4">
                                            <p className="font-bold">{item.position}</p>
                                            <p>{item.company}</p>
                                            <p className="text-sm">{item.summary}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </section>
                        <hr className="my-3"/>
                        <section>
                            <h2 className="text-xl">{text.skills.toUpperCase()}</h2>
                            <ul className="grid grid-flow-row grid-cols-3 pl-3">
                                {
                                    information.skills.map(
                                        (item) => 
                                        (item) ?
                                        <li className="list-item list-disc">{item}</li>
                                        : null
                                    )
                                }
                            </ul>
                        </section>
                        <hr className="my-3"/>
                        <section>
                            <h2 className="text-xl">{text.education.toUpperCase()}</h2>
                            {
                                information.education.map(
                                    (item) => 
                                    <div className="flex mb-1">
                                        <p className="w-1/3 font-bold">{item.initialYear}-{item.finalYear}</p>
                                        <div className="w-3/4">
                                            <p className="font-bold">{item.degree}</p>
                                            <p>{item.institution}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </section>
                        <div className="bg-default-primary absolute bottom-0 w-full h-16 print-bg"></div>
                    </main>
                </div>
            )
        }
    }
]