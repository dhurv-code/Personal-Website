
const Projects = () => {
    const projects=[
        {
            id:1,
            name:"Ai-gpt",
            technology:"React,tailwind",
            github:"https://github.com/dhurv-code/Ai-gpt"
        },
        {
            id:2,
            name:"Restaurent-bokking",
            technology:"MERN Stack",
            github:"https://github.com/dhurv-code/Restaurant-booking-"
        },
        {
            id:3,
            name:"Personal-Portfolio",
            technology:"React,tailwind",
            github:"https://github.com/dhurv-code/Personal-Website"
        },
        {
            id:4,
            name:"Movie-recommender system",
            technology:"Machine Learning",
            github:"https://github.com/dhurv-code/Movies-recommender"
        },
        {
            id:5,
            name:"Rock vs Mine recognizing",
            technology:"Machine Learning",
            github:"https://github.com/dhurv-code/Rock-vs-Mine-model"
        },
        {
            id:6,
            name:"Personal-Blog website",
            technology:"Python",
            github:"https://github.com/dhurv-code/My-blog-website"
        },
        {
            id:7,
            name:"Shop-Z",
            technology:"Python",
            github:"https://github.com/dhurv-code/Shop-Z"
        },
        {
            id:8,
            name:"Expense-Tracker",
            technology:"React,tailwind",
            github:"https://github.com/dhurv-code/Ex-pense"
        },
        {
            id:9,
            name:"Career-Suggestion",
            technology:"Next.js , API Integration",
            github:"https://github.com/dhurv-code/Career-suggestion"
        },
        {
            id:10,
            name:"Flight-Search",
            technology:"React.js, Node.js, Express.js",
            github:"https://github.com/dhurv-code/Flight-Search"
        },
        
        
    ]
  return (
    <div className=' bg-black text-white py-20' id="Projects">
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-15'>
                Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project,index)=>(
                    <div>
                        <div key={index} className='bg-gray-500 px-6 pb-8 py-3 rounded-lg  transform transition-transform duration-300 hover: scale-105'>
                            <div className='text-left text-2xl font-mono '> 
                                {project.id}

                            </div>
                            <h2 className='text-left text-2xl font-mono  '>{project.name}</h2>
                            <h3 className='py-4'>technologies : {project.technology}</h3>
                            <a href={project.github} className=' bg-gradient-to-r from-blue-500 to-green-500 border border-amber-500 rounded-full px-3 py-2'>Github</a>
                        </div>
                    </div>
                ))}
            
            </div>
            </div>
            </div>
  )
}

export default Projects
