
const Projects = () => {
    const projects=[
        {
            id:1,
            name:"Ai-Research Assistant",
            technology:"LLM, RAG, AI, FastAPI, React.js",
            github:"https://github.com/dhurv-code/Ai-Research-assistant"
        },
        {
            id:2,
            name:"Nex-Worth",
            technology:"AI, FastAPI, ML, React.js, Authentication",
            github:"https://github.com/dhurv-code/NexWorth"
        },
        {
            id:3,
            name:"Driver-Drowsiness-Detection",
            technology:"Computer Vision, Python, MediaPipe",
            github:"https://github.com/dhurv-code/Driver-Drowsiness-Detection-System"
        },
        {
            id:4,
            name:"Health-prediction-app",
            technology:"ML, FastAPI, React.js, Authentication",
            github:"https://github.com/dhurv-code/Ai-gpt"
        },
        {
            id:5,
            name:"Resume-Analyzer for students",
            technology:"AI/ML, FastAPI, React.js",
            github:"https://github.com/dhurv-code/Ai-gpt"
        },
        {
            id:6,
            name:"Restaurent-bokking",
            technology:"MERN Stack",
            github:"https://github.com/dhurv-code/Ai-gpt"
        },
        {
            id:7,
            name:"Personal-Portfolio",
            technology:"React, Tailwind CSS",
            github:"https://github.com/dhurv-code/Personal-Website"
        },
        {
            id:8,
            name:"Movie-recommender system",
            technology:"Machine Learning, Python",
            github:"https://github.com/dhurv-code/Movies-recommender"
        },
        {
            id:10,
            name:"Rock vs Mine recognizing",
            technology:"Machine Learning, Computer Vision",
            github:"https://github.com/dhurv-code/Rock-vs-Mine-model"
        },
        {
            id:11,
            name:"Personal-Blog website",
            technology:"Python, Web Content",
            github:"https://github.com/dhurv-code/My-blog-website"
        },
    ]
  return (
    <section className='bg-black text-white py-20' id="Projects">
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col items-center gap-4 text-center'>
              <h2 className='text-4xl font-bold'>Projects</h2>
              <p className='max-w-2xl text-slate-400'>A curated portfolio of AI, automation, and product engineering work built with modern stacks and tangible product value in mind.</p>
            </div>
            <div className='mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {projects.map((project) => (
                    <div key={project.id} className='rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/10 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30'>
                        <div className='flex items-center justify-between text-sm uppercase tracking-[0.35em] text-cyan-300/80'>
                            <span>Project {project.id}</span>
                            <span>Live</span>
                        </div>
                        <h2 className='mt-4 text-2xl font-bold text-white'>{project.name}</h2>
                        <p className='mt-4 text-slate-300'>Technologies: <span className='text-slate-100'>{project.technology}</span></p>
                        <a href={project.github} target="_blank" rel="noreferrer noopener" className='mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:brightness-110'>View GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects