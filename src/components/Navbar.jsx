
export const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl text-white'>
      <div className='container mx-auto flex flex-wrap items-center justify-between gap-4 px-8 py-5 md:px-16 lg:px-24'>
        <a href="#home" className='text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500'>Dhuruv</a>
        <nav className='flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-200'>
          <a className='transition hover:text-cyan-300' href="#home">Home</a>
          <a className='transition hover:text-cyan-300' href="#About">About</a>
          <a className='transition hover:text-cyan-300' href="#Service">Services</a>
          <a className='transition hover:text-cyan-300' href="#Projects">Projects</a>
          <a className='transition hover:text-cyan-300' href="#Skills">Skills</a>
        </nav>
        <div className='flex items-center gap-3'>
          <a href="mailto:dhurvgupta05@gmail.com" className='rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-cyan-400 hover:bg-cyan-500/10'>
            <img src="/mail.png" alt="Email" className='h-6 w-6' />
          </a>
          <a href="https://www.linkedin.com/in/dhuruv-kumar-gupta-017a4724a/" className='rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-cyan-400 hover:bg-cyan-500/10'>
            <img src="/linkedin icon.png" alt="LinkedIn" className='h-6 w-6' />
          </a>
          <a href="https://github.com/dhurv-code" className='rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-cyan-400 hover:bg-cyan-500/10'>
            <img src="/github icon.png" alt="GitHub" className='h-6 w-6' />
          </a>
        </div>
      </div>
    </header>
  )
}
