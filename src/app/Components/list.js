import { SectionTitle } from "./contentbar";
import Image from "next/image";

export default function ProjectList({ Title }) {
    return (
        <div className="flex flex-col mt-8 ml-20 mr-12 gap-0">
            <SectionTitle name={Title}/>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Jasonzh1/Minimal-Type" className="project-animation list-item-style mt-6 flex flex-row items-center">
                <Image
                    src={'/Minimal Type.png'}
                    alt="Screenshot of application landing page. Big logo with the words Minimal Type."
                    height={220}
                    width={240}
                    className="m-6 rounded-xl"
                />
                <div className="flex flex-col items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-6 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                        <h1 className="text-3xl font-Bebas_Neue">Minimal Type</h1>
                        <h2 className="text-sm">Developed a minimal typing environment to help people train typing speed and accuracy, 
                        applying <a className="text-underline">OOP principals</a> in <a className="text-underline">Java</a> for a scalable, maintainable codebase</h2>
                </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Jasonzh1/FPS-Game" className="project-animation list-item-style flex flex-row items-center">
                <Image
                    src={'/FPS Game.png'}
                    alt="Screenshot from First Person Shooter game. Facing mountains and platforms."
                    height={220}
                    width={240}
                    className="m-6 rounded-xl"
                />
                <div className="flex flex-col items-start mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-6 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    <h1 className="text-3xl font-Bebas_Neue ">Shoot + Jump</h1>
                    <h2 className="text-sm">FPS and Plaformer game developed with the <a className="text-underline">Unity Engine</a> and C#. Custom assets created in <a className="text-underline">Figma</a> and Blender</h2>
                </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Jasonzh1/1994-Income-Predictor" className="project-animation list-item-style flex flex-row items-center">
                <Image
                    src={'/Wage Predictor.png'}
                    alt="Screenshot of scatterplot. Datapoints concentrated in bottom left with two different colours for datapoints."
                    height={220}
                    width={240}
                    className="m-6 rounded-xl"
                />
                <div className="flex flex-col items-start mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-6 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    <h1 className="text-3xl font-Bebas_Neue">1994 Income Predictor</h1>
                    <h2 className="text-sm">Utilized machine learning to train a income prediction model based on different factors &#40;race, sex, age, etc.&#41;.  
                        Implemented with <a className="text-underline">R</a> and the <a className="text-underline">tidyverse</a> machine learning library.
                    </h2>
                </div>
            </a>
        </div>
    );
}