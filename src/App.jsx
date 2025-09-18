import { Link, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Qualification from "./components/Qualification/Qualification"
import Projects from "./components/Projects"
import Skills from "./components/Skills"




function App(){
  return(

    
      <>
        <nav className="text-center pt-4 ">

          <Link to="/" 
          className="text-amber-200 text-3xl md:text-5xl  p-5 "
          >Home</Link>
          <Link to="/about"
          className="text-amber-200 text-3xl md:text-5xl  p-5" 
          >About</Link>
          <Link to="/qualification"
          className="text-amber-200 text-3xl md:text-5xl  p-5"
          >Acadamics</Link>
          <Link to="/projects"
          className="text-amber-200 text-3xl md:text-5xl  p-5"
          >Projects</Link>

          <Link to="/skills"
          className="text-amber-200 text-3xl md:text-5xl  p-5 "
          >Assets</Link>
        </nav>
      
    

    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}/> 
        <Route path="/about" element={<About></About>}/> 
        <Route path="/qualification" element={<Qualification/>}>
          
        </Route>
        
        <Route path="/skills" element={<Skills></Skills>}/> 
        <Route path="/projects" element={<Projects></Projects>}/> 


      </Routes>

    </div>
    </>
    
  )
}
export default App