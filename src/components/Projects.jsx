import { useState } from "react"

function Projects() {
    const [active, setActive] = useState(null)
    const Html = [
        {
            content: "1:-Chat bot Look",
            links: " https://dhurv-code.github.io/Chat-bot-look/"

        },

        {
            content: "2:- Spotify-Clone",
            links: "https://dhurv-code.github.io/Spotify-clone/"
        },
    ];
    const React = [
        {
            content: "1:-Ai-gpt",
            links: " https://github.com/dhurv-code/Ai-gpt"

        },
        {
            content: "2:- Personal Website",
            
        },
    ];
    const Machine_Learning = [
        {
            content: "1:-Rock Vs Mine detection",
            links: "https://github.com/dhurv-code/Rock-vs-Mine-model/blob/main/Rock%20vs%20Mine.ipynb"
        },
        {
            content: "2-Movie Recommender",
            links: "https://github.com/dhurv-code/Movies-recommender"
        },
    ];
    const Python = [
        {
            content: "1: My- Blog- website",
            // links : "https://github.com/dhurv-code/Rock-vs-Mine-model/blob/main/Rock%20vs%20Mine.ipynb"
        },
        {
            content: "2- Online Shop-z",
            // links : "https://github.com/dhurv-code/Movies-recommender"
        },
    ];



    return (
        <div className="flex px-6 py-15 gap-x-33">
            <div className="text-4xl text-gray-200 ">
                <div>
                    <button onClick={() => setActive(active === "Html" ? null : "Html")} className="border-8 px-3 py-4 rounded-br-4xl cursor-pointer"> Html-Project</button>
                    <div className="text-4xl pt-9 text-blue-900 font-semibold font-mono">
                        {active === "Html" && (
                            <div>
                                {Html.map((loop, index) => (
                                    <div key={index}>
                                        <p>{loop.content}</p>
                                        <a href={loop.links}>|Open-Project|</a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>


            <div className="text-4xl text-gray-300">
                <button onClick={() => setActive(active === "React" ? null : "React")} className="border-8 px-3 py-4 rounded-br-4xl cursor-pointer">  React-Project</button>
                <div className="text-4xl pt-9 text-blue-900 font-semibold font-mono">
                    {active === "React" && (
                        <div>
                            {React.map((loop1, index1) => (
                                <div key={index1}>
                                    <p>{loop1.content}</p>
                                    <a href={loop1.links} >|Open Project|</a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>



            <div className="text-4xl text-gray-300">
                <button onClick={() => setActive(active === "Python" ? null : "Python")} className="border-8 px-3 py-4 rounded-br-4xl cursor-pointer"> Python-Project</button>
                <div className="text-4xl pt-9 text-blue-900 font-semibold font-mono">
                {active === "Python" && (
                    <div>
                        {Python.map((loop1, index1) => (
                            <div key={index1}>
                                <p>{loop1.content}</p>
                                <a href={loop1.links} >|Open Project|</a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            </div>


            <div className="text-4xl text-gray-300">
                <button onClick={() => setActive(active === "Machine_Learning" ? null : "Machine_Learning")} className="border-8 px-3 py-4 rounded-br-4xl cursor-pointer"> Machine_Learning</button>
                <div className="text-4xl pt-9 text-blue-900 font-semibold font-mono">
                {active === "Machine_Learning" && (
                    <div>
                        {Machine_Learning.map((loop1, index1) => (
                            <div key={index1}>
                                <p>{loop1.content}</p>
                                <a href={loop1.links} >|Open Project|</a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            </div>
        </div>

    )
}
export default Projects