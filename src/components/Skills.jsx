
const Skills = () => {
    const fields = [
        {
            title: "Programming Knowledge",
            content: [" Python [With DSA]", "Java", "C++ [With DSA]", "C"]
        },
        {
            title: "Framework Knowledge",
            content: ["React.js", "Next.js", "Node.js", "Html", "Css", "Express.js"]
        },
        {
            title: "Machine learning Knowledge",
            content: [" Pandas ", "Numpy" , "matplotlib" , "Scikit-learn" , "deeplearning" , "neural-networks" , "Natural language processing"]
        },
        {
            title: "Additional",
            content: [" SQL", "Github" , "matplotlib" ]
        },

    ];
    return (
        <div className=' bg-black text-white py-20' id="Skills">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-20'>
                    Skills
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {fields.map((field, index) => (
                        <div>
                            <div key={index}>
                                <div>
                                    <h1 className='text-2xl px-2 py-6'>
                                        {field.title}

                                    </h1>

                                    <ul className="list-disc list-inside space-y-1">
                                        {field.content.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}

export default Skills

