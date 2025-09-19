
const About = () => {
  return (
    <div className='bg-black text-amber-50 py-20' id="About">
      <div className=' container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-10'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-15'>
          <img src="/dodo-image.jpeg" alt="" className='w-50 h-full rounded object-cover mb-8 md:mb-0 transform transition-transform duration-500 hover:scale-130'/>
          <div className='flex-1'>
            <p className='text-lg mb-8'> 
            It's Dhuruv Kumar Gupta, Student of <span className="text-red-700">Uttarakhand Technical University</span> Pursuing <span className="text-cyan-300">Bachelor of Technology</span> in Computer Science and Engineering with the specialization of <span className="text-blue-200">Artificial Intelligence And Machine Learning</span> with the cgpa of 7.00 .
            I am Always ready to adapt new technology that enhance my interest to learn something new about technology.
          </p>
          <div className='space-y-2'>
            <div className='flex items-center' >
              <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from bg-green-500 to-green-200 h-2.5 rounded-full w-11/12  transform transition-transform duration-300 hover:scale-102'></div>
              </div>
            </div>
            <div className='flex items-center' >
              <label htmlFor="react" className='w-2/12'>REACT .JS</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from bg-green-500 to-green-200 h-2.5 rounded-full w-full  transform transition-transform duration-300 hover:scale-102'></div>
              </div>
            </div>
            <div className='flex items-center' >
              <label htmlFor="node" className='w-2/12'>NODE .JS</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from bg-green-500 to-green-200 h-2.5 rounded-full w-3/4 transform transition-transform duration-300 hover:scale-102'></div>
              </div>
            </div>
            <div className='flex items-center' >
              <label htmlFor="express" className='w-2/12'>EXPRESS . JS</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from bg-green-500 to-green-200 h-2.5 rounded-full w-11/12  transform transition-transform duration-300 hover:scale-102'></div>
              </div>
            </div>
            <div className='flex items-center' >
              <label htmlFor="mongo" className='w-2/12'>MONGO-DB</label>
              <div className='grow bg-gray-800 rounded-full h-3'>
                <div className='bg-gradient-to-r from bg-green-500 to-green-200 h-2.5 rounded-full w-3/4  transform transition-transform duration-300 hover:scale-102'></div>
              </div>
            </div>
          </div>
           

          <div className= "mt-12 flex justify-between text-center">
            <div>
            <h2 className='text-2xl font bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 '>10+</h2>
            <p>Projects Completed</p>
            </div>
          </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About