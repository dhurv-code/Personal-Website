
import { useState } from "react";
function Qualification() {

    const [selected, setSelected] = useState(null)
    return (
        <div >
            <div className="flex pt-11">

                <h1 className=" text-amber-400 text-5xl pt-6 border-2 border-b-gray-100 border-t-gray-100 border-amber-400 inline-block mx-auto px-4 py-7 rounded-4xl">Study Qualifications</h1>
            </div > 
            {!selected && (
                <nav className="justify-center text-blue-300 text-6xl flex space-x-30 pt-9 ">
                    <button onClick={() => setSelected("10th")} className="font-bold text-fuchsia-200 border-3 rounded-3xl py-3 px-4">High-School</button>
                    <button onClick={() => setSelected("12th")} className="font-bold text-cyan-200 border-3 rounded-3xl py-3 px-4">Intermediate</button>
                    <button onClick={() => setSelected("graduation")} className="font-bold text-shadow-teal-100 border-3 rounded-3xl py-3 px-4">Graduation</button>
                </nav>
            )}

            <div className="pt-25 ">
                {selected == "10th" && <div className="text-blue-200 text-4xl p-5 flex flex-col gap-5 font-mono">
                    <h1 className="bg-gradient-to-r from-amber-300 text-blue-700 border inline-block py-3 px-4 rounded-4xl ">School : Smart Indian Model School, Rampur (U.P)</h1>
                    <h1 className="bg-gradient-to-l from-emerald-300 text-blue-700 border inline-block py-3 px-4 rounded-4xl">Board : Central Board Of Secondary Education</h1>
                    <h1 className="bg-gradient-to-r from-green-200 text-blue-700 border inline-block py-3 px-4 rounded-4xl">Percentage : 90% </h1>
                </div>}
                {selected == "12th" && <div className="text-blue-200 text-4xl p-5 flex flex-col gap-5 font-mono">
                    <h1 className="bg-gradient-to-r from-blue-400 to-neutral-400 text-blue-700 border inline-block py-3 px-4 rounded-4xl ">School : Smart Indian Model School, Rampur (U.P)</h1>
                    <h1 className="bg-gradient-to-r from-cyan-200 to-neutral-600 text-blue-700 border inline-block py-3 px-4 rounded-4xl">Board : Central Board Of Secondary Education</h1>
                    <h1 className="bg-gradient-to-r from-gray-400 to-gray-100 text-blue-700 border inline-block py-3 px-4 rounded-4xl">Percentage : 98% </h1></div>}
                {selected == "graduation" && <div iv className="text-blue-200 text-4xl p-5 flex flex-col gap-5 font-mono">
                    <h1 className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-blue-700 border inline-block py-3 px-4 rounded-4xl ">University : Uttarakhand Technical University, Dehradun  </h1>
                    <h1 className="bg-gradient-to-r from-blue-200 to-cyan-400 text-blue-700 border inline-block py-3 px-4 rounded-4xl ">Course : Bachelor of Technology in Computer Science and Engineering </h1>
                    <h1 className="bg-gradient-to-r from-gray-400 to-cyan-100 text-blue-700 border inline-block py-3 px-4 rounded-4xl ">Specialization : Artificial Intelligence & Machine Learning </h1>
                    <h1 className="bg-gradient-to-r from-blue-400 to-neutral-400 text-blue-700 border inline-block py-3 px-4 rounded-4xl ">Batch : 2027 </h1>


                </div>}

                <div className="flex">
                    {selected && (
                        <div className=" text-amber-600 text-center text-5xl border-2 inline-block mx-auto rounded-4xl bg-amber-700 px-5 py-5 ">
                            <button onClick={() => setSelected(null)} className="cursor-pointer text-amber-200 ">GO Back</button>
                        </div>
                    )}
                </div>
            </div>

        </div>

    )
}

export default Qualification;