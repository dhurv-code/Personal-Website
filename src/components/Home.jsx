export default function Home() {
  return (
    <div className="relative h-screen overflow-auto">
      
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 w-full h-full object-cover"
      >
        <source src="/snowfall.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
        <div>
        <h1 className="text-cyan-50 text-4xl md:text-6xl font-bold ">
          Hi, I'm Dhuruv Gupta Welcome To My Site
        </h1>
        <br />
        <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-120">

        <a href="https://github.com/dhurv-code" className="bg-amber-900 text-5xl rounded-4xl px-3 py-3">Github Link🌐</a>
        <a href="https://www.linkedin.com/in/dhuruv-kumar-gupta-017a4724a/" className="bg-amber-900 text-5xl rounded-4xl px-3 py-3">Linked-in Link🌐</a>
        </div>
      </div>
    </div>
    </div>
  );
}
