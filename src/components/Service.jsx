
const Service = () => {
    const services = [
        {
            id: 1,
            title: "AI Product Strategy",
            description: "Designing smart product roadmaps and building AI-first web experiences that scale."
        },
        {
            id: 2,
            title: "Intelligent Web Platforms",
            description: "Crafting responsive front-end experiences with React, Tailwind, and polished UI motion."
        },
        {
            id: 3,
            title: "Data & API Engineering",
            description: "Implementing secure backend workflows, APIs, and automation pipelines for fast delivery."
        },
        {
            id: 5,
            title: "Growth-ready SaaS UX",
            description: "Building clean interfaces and product flows that convert visitors into users."
        },
    ]

  return (
    <section className='bg-black text-white py-20' id="Service">
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-16'>Services</h2>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                {services.map((service) => (
                <div key={service.id} className='rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30'>
                    <div className='text-2xl font-semibold text-cyan-300'>{service.id.toString().padStart(2, '0')}</div>
                    <h3 className='mt-4 text-2xl font-bold text-white'>{service.title}</h3>
                    <p className='mt-4 text-slate-300'>{service.description}</p>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Service