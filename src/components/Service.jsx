
const Service = () => {
    const services=[
        
        {
            id:1,
            title: "Web Design",
            description:"Building visually appealing and user-friendly web designs."
        },
        {
            id:2,
            title: "Frontend Development",
            description:"Building responsive and interactive User-interfaces with react js + tailwind css."
        },
        {
            id:3,
            title: "Backend-development",
            description:"Applying Server side logic and connecting with the databases usign nodejs and mongo-db."
        },
        {
            id:4,
            title: "Machine-Learning",
            description:"I also have a good idea about in build a machine learning model using different different algorithm like pandas, scikit-learn, tensorflow, pytorch also many more."
        },
        {
            id:5,
            title: "Python Developer",
            description:"Using of python library i can easily build the ."
        },
    ]


  return (
    <div className=' bg-black text-white py-20' id="Service">
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-15'>
                Services
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                
                {services.map((service,index)=>(
                <div >
                    <div key={index} className='bg-gray-800 px-6 pb-8 py-3 rounded-lg  transform transition-transform duration-300 hover: scale-105'>
                        <div className='text-left text-2xl font-mono '>
                            {service.id}
                        </div>
                        <h3 className='text-3xl font-mono '>{service.title}</h3>
                        <p className='mt-2 text-gray-300'>{service.description}</p>
                    </div>
                </div>
                ))}
                </div>
        </div>
    </div>
  )
}

export default Service