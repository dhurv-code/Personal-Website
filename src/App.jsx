import { Navbar } from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Service from "./components/Service"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App(){
  return(

    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Service></Service>
      <Projects></Projects>
      <Skills></Skills>
      
    </div>
    
  )
}
export default App