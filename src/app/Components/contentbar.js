import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import TechCarousel from "./carousel";
import ProjectList from "./list";
import WeatherWidget from "./weatherWidget";


export default function ContentBar() {
    return (
        <div className="flex-col absolute right-0 w-7/12 background bg-fixed">
            <section id="about" className="">
                <BentoBox />
            </section>
            <section id="project" className="pt-10">
                <ProjectList Title={"Projects"} />
            </section>
            <section id="stack" className="pt-10">
                <Tech />
            </section>
        </div>
    );
}

export function SectionTitle({ name }) {
    return (
        <div className="">
            <h1 className="font-Bebas_Neue text-3xl menu-underline underline-offset-8">{ name }</h1>
        </div>
    );
}


function BentoBox() {
    return (
        <div className="grid grid-cols-3 grid-row-3 gap-6 mt-12 ml-20 mr-12">
            <Tilt className="col-span-2 bento-box p-5 text-xl"
            tiltReverse={true}
            tiltMaxAngleX={4}
            tiltMaxAngleY={10}>
                Hi! I&apos;m a second-year Computer Science student at <a href="https://www.ubc.ca/" target="_blank" rel="noopener noreferrer" className="text-sky-300 font-bold hover:text-orange-400">UBC</a>!
                Currently, I am also a Teaching Assistant for a <a target="_blank" rel="noopener noreferrer" href="https://secure.math.ubc.ca/php/MathNet/courseinfo.php?session=2018W&t=outline&name=180:102" className="font-bold text-pink-400 hover:text-orange-400">calculus course</a> and 
                a <a href="https://cs110.students.cs.ubc.ca/" target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-400 hover:text-orange-400">systematic programming course</a>.
            </Tilt>
            <Tilt className="row-span-3 bento-box p-4"
            tiltReverse={true}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}>
                <h1 className="text-3xl font-semibold">Links</h1>
                <div className="flex flex-col gap-4 mt-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="flex items-center justify-center w-12 h-12 rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </button>
                        <span className="text-sm mt-1 block text-center">LinkedIn</span>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="flex items-center justify-center w-12 h-12 rounded bg-gray-800 hover:bg-gray-900 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </button>
                        <span className="text-sm mt-1 block text-center">GitHub</span>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="flex items-center justify-center w-12 h-12 rounded bg-red-600 hover:bg-red-700 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                            </svg>
                        </button>
                        <span className="text-sm mt-1 block text-center">Resume</span>
                    </a>
                </div>
            </Tilt>
            <Tilt className="row-span-2 col-span-1 bento-box p-5"
            tiltReverse={true}
            tiltMaxAngleX={13}
            tiltMaxAngleY={10}>
                Outside of school, I am an <span className="profile-underline decoration-green-500">avid skier</span> (praying on a good season) 
                and love <span className="profile-underline decoration-blue-500">watching movies</span>. 
                My favourite movie of all time is <span className="profile-underline decoration-stone-600">The Dark Knight</span>.
            </Tilt>
            <Tilt className="row-span-2 col-span-1 bento-box p-5"
            tiltReverse={true}
            tiltMaxAngleX={13}
            tiltMaxAngleY={10}>            
                <WeatherWidget/>
            </Tilt>
        </div>
    );
}


function Tech() {
    return (
        <div className="flex flex-col mt-8 ml-20 mr-12 gap-2">
            <SectionTitle className="self-start" name={"My Tech Stacks"}/>
            <div className="flex flex-row items-center pt-6">
                <TechCarousel type={0}/>
                <TechCarousel type={1}/>
                <TechCarousel type={2}/>
            </div>
        </div>
    );
}
