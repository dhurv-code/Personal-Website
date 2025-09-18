import { useState } from "react";
function Skills() {
    const [active, setActive]=useState(null)
    const sections=[
        {
            title: "Programming Knowledge",
            content: " Python-Advance, Java, C++, C"
        },
        {
            title: "Framework Knowledge",
            content: "React.js, Next.js, Node.js, Html, Css, JavaScript "
        },
        {
            title: "Machine learning Knowledge",
            content: " Pandas , Numpy , matplotlib , Scikit-learn , deeplearning , neural-networks ,Natural language processing"
        },
        
    ];


    return(
        <div className="flex flex-col item-center pt-8 gap-20">
            {sections.map((loop,index)=>(
                <div className="text-center ">
                    <button onClick={()=>setActive(active==index?null:index)} 
                    className="cursor-pointer bg-gradient-to-r from-cyan-200 to-gray-300 border-4 rounded-4xl px-6 py-5 text-3xl font-serif" >
                        {loop.title}</button>
                    {active===index &&(
                        <div>
                            <p className="text-3xl pt-7 text-blue-600 font-semibold">{loop.content}</p>
                        </div>
                    )}
                </div>


            ))}
        
            
        </div>
    )
}
export default Skills