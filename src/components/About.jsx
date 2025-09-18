function About() {
  return (
    <div className="px-4 sm:px-8 py-10 sm:py-15 space-y-12 sm:space-y-20">
      
     
      <div className="flex items-start">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-cyan-100 text-3xl sm:text-4xl lg:text-5xl">With the Greetings! ☺️</p>
          <p className="text-lg sm:text-2xl lg:text-4xl pt-6 sm:pt-9 text-indigo-900 font-medium leading-normal">
            It's Dhuruv kumar Gupta, The creator of this website for my personal portfolio.
            <p>
              Apart from my personal life this website contains my professional Background like ,
            </p>
            <p>
            I have completed DSA using python and c++ that enhance my problem solving skills . 
            </p> 
            <p>Also using React + vite + tailwind Framework i designed this website within 20 hours. </p>
            <p className="leading-29 bg-gray-600 rounded-t-full text-purple-200 px-6">
              Contact mail : dhurvgupta05@gmail.com
            </p>
          </p>
          <br />
         
        </div>
        <div className="w-1/2 h-160 flex justify-start pl-35">
          <img
            src="1000022484-02.jpeg"
            className="w-3/4 border-l-6 rounded-l-4xl shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8">
        <div className="w-5/12 flex justify-start">
          <img
            src="1000023172-01.jpeg"
            className="w-3/4 max-w-md rounded-r-2xl shadow-lg border-r-4 border-gray-300"
          />
        </div>

        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-pink-300 text-3xl sm:text-4xl lg:text-5xl">Overview🚀</p>
          <p className="text-lg sm:text-2xl lg:text-4xl w-full pt-4 sm:pt-6 text-white leading-relaxed">
            As I am in specialization feild of Artificial Intelligence and Machine Learnign , but i am not stucked with AI & ML only i really want to explore different technologies, like now i have feeling awesome to design websites using react. My mind is always ready to adapt new technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
