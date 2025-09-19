
export const Navbar = () => {
  return (
    <div className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50 shadow-md'>
        <div className='container py-6 flex justify-center md:justify-between items-center '>
            <div className='text-3xl font-bold hidden md:inline'>Dhuruv</div>
            <div className='space-x-8'>
                <a className='hover:text-gray-400' href="#home">Home</a>
                <a className='hover:text-gray-400' href="#About">About </a>
                <a className='hover:text-gray-400' href="#Service">Services</a>
                <a className='hover:text-gray-400' href="#Projects">Projects</a>
                <a className='hover:text-gray-400' href="#Skills">Skills</a>
            </div>
            <div className='flex space-x-4'>
            
            <a href="mailto:dhurvgupta05@gmail.com">
              <img src="/mail.png" alt="" className='bg-white'></img>
            </a>
            <a href="https://www.linkedin.com/in/dhuruv-kumar-gupta-017a4724a/">
              <img src="/linkedin icon.png" alt="" className='bg-white'></img>
            </a>
            <a href="https://github.com/dhurv-code">
              <img src="/github icon.png" alt="" className='bg-white'></img>
            </a>
            </div>
        </div>
    </div>
  )
}
