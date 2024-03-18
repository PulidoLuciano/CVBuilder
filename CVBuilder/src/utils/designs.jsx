export default
[
    {
        id: 1,
        preview: <div className="design-preview bg-white"></div>,
        content(information){
            return(
                <div className="p-8">
                    <div className="flex items-center gap-3">
                        <img src={information.personalInfo.photo} alt="" className="size-20 rounded-full outline outline-1"/>
                        <div>
                            <h1 className="text-5xl font-bold font-serif">{information.personalInfo.name}</h1>
                            <h3 className="text-2xl text-gray-700 font-serif">{information.personalInfo.position}</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <p><span className="font-bold">City:</span> {information.personalInfo.city}</p>
                        <p><span className="font-bold">Phone:</span> {information.personalInfo.phone}</p>
                        <p><span className="font-bold">E-mail:</span> {information.personalInfo.email}</p>
                        {
                            information.personalInfo.social.map((social) => <p><span className="font-bold">{social.page}:</span> {social.url}</p>)
                        }
                    </div>
                    <p className="mt-2 text-pretty">
                        {information.personalInfo.summary}
                    </p>
                    <div className="mt-2">
                        <h2 className="font-serif text-3xl p-0">Education</h2>
                        <hr className="mb-1"/>
                        {
                            information.education.map(
                                (item) => 
                                <div className="flex mb-1">
                                    <p className="w-1/4 font-bold">{item.initialYear}-{item.finalYear}</p>
                                    <div className="w-3/4">
                                        <p className="font-bold font-serif">{item.degree}</p>
                                        <p>{item.institution}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="mt-2">
                        <h2 className="font-serif text-3xl p-0">Work experience</h2>
                        <hr className="mb-1"/>
                        {
                            information.experience.map(
                                (item) => 
                                <div className="flex mb-1">
                                    <p className="w-1/3 font-bold">{item.initialDate}-{item.finalDate}</p>
                                    <div className="w-3/4">
                                        <p className="font-bold font-serif">{item.position}</p>
                                        <p>{item.company}</p>
                                        <p>{item.summary}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="mt-2">
                        <h2 className="font-serif text-3xl p-0">Skills</h2>
                        <hr className="mb-1"/>
                        <ul className="grid grid-flow-row grid-cols-3 pl-3">
                            {
                                information.skills.map(
                                    (item) => 
                                    <li className="list-item list-disc">{item}</li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="mt-2">
                        <h2 className="font-serif text-3xl p-0">Language</h2>
                        <hr className="mb-1"/>
                        <ul className="grid grid-flow-row grid-cols-3 pl-3">
                            {
                                information.languages.map(
                                    (item) => 
                                    <li className="list-item list-disc">{item.name} - {item.level}</li>
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
    },
    {
        id: 4,
        preview: 
            <div className="design-preview bg-white relative">
                <div className="bg-default-primary w-2/6 h-full"></div>
                <div className="bg-default-secondary h-2 absolute top-6 w-full"></div>
            </div>,
    },
    {
        id: 5,
        preview: 
            <div className="design-preview bg-white relative flex justify-center">
                <div className="bg-default-primary h-2 absolute top-6 w-11/12"></div>
                <div className="bg-default-primary h-2 absolute top-14 w-11/12"></div>
                <div className="bg-default-primary h-2 absolute top-20 w-11/12"></div>
            </div>,
    },
    {
        id: 6,
        preview: 
            <div className="design-preview bg-white relative">
                <div className="bg-default-primary h-2 absolute top-2 w-full"></div>
                <div className="bg-default-primary h-2 absolute bottom-0 w-full"></div>
            </div>,
    },
    {
        id: 7,
        preview: 
            <div className="design-preview bg-white flex relative">
                <div className="bg-default-primary w-2/6 h-5"></div>
                <div className="bg-default-primary w-2/3 h-5 absolute right-0 bottom-0"></div>
            </div>,
    }
]