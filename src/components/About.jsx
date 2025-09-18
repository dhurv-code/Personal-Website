function About() {
  return (
    <div className="px-6 md:px-16 py-16 md:py-24 space-y-24 bg-gradient-to-b from-gray-700 via-red-00 to-red-00 min-h-screen">
      
   
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        
     
        <div className="md:w-1/2">
          <p className="text-cyan-100 text-4xl md:text-5xl font-semibold">
            With the Greetings! ☺️
          </p>

          <div className="text-xl md:text-2xl pt-6 text-indigo-200 font-medium leading-relaxed space-y-4">
            <p>
              It's Dhuruv Kumar Gupta, the creator of this website for my personal portfolio.
            </p>
            <p>
              Apart from my personal life, this website contains my professional background like:
            </p>
            <p>
              I have completed DSA using Python and C++ which enhanced my problem-solving skills.
            </p>
            <p>
              Also, using <span className="text-purple-400">React + Vite + Tailwind</span>, I designed this website within 20 hours.
            </p>
            <p className="bg-gray-700 rounded-full text-purple-200 px-6 py-2 inline-block">
              Contact mail : dhurvgupta05@gmail.com
            </p>
          </div>
        </div>

     
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/1000022484-02.jpeg"
            alt="Dhuruv"
            className="w-3/5 rounded-3xl shadow-lg border-4 border-gray-700"
          />
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        
        
        <div className="md:w-5/12 flex justify-center">
          <img
            src="/1000023172-01.jpeg"
            alt="Overview"
            className="w-3/4 rounded-3xl shadow-lg border-4 border-gray-700"
          />
        </div>


        <div className="md:w-1/2">
          <p className="text-pink-300 text-4xl md:text-5xl font-semibold">
            Overview 🚀
          </p>
          <p className="text-xl md:text-2xl pt-6 text-white leading-relaxed">
            As I have a specialization in Artificial Intelligence and Machine Learning,
            my mindset is different — I like to explore all popular technologies.
            Till now, I have learned Python, React, and many more tools to expand my skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
