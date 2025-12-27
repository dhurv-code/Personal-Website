

 const Home=()=> {
  return (
    
    <div className="bg-black text-amber-100 text-center py-16" id="home">
      <img src="/Dhurv.jpg" alt=""  className="mx-auto w-55 h-full rounded-full object-cover transform transition-transform duration-200 hover:scale-110"/>
      <h1 className="text-5xl fond-bold py-5">
        I'm <span>Dhuruv Kumar Gupta</span> Full Stack Developer
      </h1>
      <p className="mt-7 text-lg text-gray-200 ">
        I am passionate about building modern, responsive, and SEO-friendly web applications. 
      </p>
      <div className="mt-8 space-x-7">
        <a href="/FULL STACK DEVELOPER.pdf" className=' text-2xl bg-gradient-to-r from-red-400 to-violet-300 hidden md:inline transform transition-transform duration 300 hover scale-100 px-4 py-2 rounded-full'>Resume</a>
      </div>


    </div>


  );
}

export default Home
