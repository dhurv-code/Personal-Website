const Skills = () => {
    const fields = [
        {
            title: "Core Languages",
            content: [
                "Python",
                "C++"
            ]
        },
        {
            title: "Frontend",
            content: [
                "React.js",
                "HTML5",
                "CSS3",
                "Tailwind CSS"
            ]
        },
        {
            title: "Backend",
            content: [
                "FastAPI",
                "Node.js",
                "Express.js",
                "REST API Design"
            ]
        },
        {
            title: "AI / Automation",
            content: [
                "LLM Applications",
                "RAG Systems",
                "Chatbots",
                "Computer Vision",
                "Machine Learning",
                "Deep Learning"
            ]
        }
    ];
    return (
        <section className='bg-black text-white py-20' id="Skills">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold'>Skills</h2>
                    <p className='mt-4 max-w-2xl mx-auto text-slate-400'>Expertise across front-end, backend, and AI systems for building product-ready digital experiences.</p>
                </div>
                <div className='mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                    {fields.map((field, index) => (
                        <div key={index} className='rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-2'>
                            <h3 className='text-2xl font-semibold text-white'>{field.title}</h3>
                            <ul className='mt-6 space-y-3 text-slate-300'>
                                {field.content.map((item, idx) => (
                                    <li key={idx} className='rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

