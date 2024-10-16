import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import TechCarousel from "./carousel";
import ProjectList from "./list";
import WeatherWidget from "./weatherWidget";


export default function ContentBar() {
    return (
        <div className="flex-col absolute right-0 w-7/12 background bg-fixed">
            <BentoBox id = "about"/>
            <ProjectList Title={"Projects"} id="project"/>
            <Tech id = "stack"/>
        </div>
    );
}

export function SectionTitle({ name }) {
    return (
        <div>
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
                Hi! I&apos;m a second-year Computer Science student at <a href="https://www.ubc.ca/" target="_blank" className="text-sky-300 font-bold hover:text-orange-400">UBC</a>!
                Currently, I am also a Teaching Assistant for a <a target="_blank" href="https://secure.math.ubc.ca/php/MathNet/courseinfo.php?session=2018W&t=outline&name=180:102" className="font-bold text-pink-400 hover:text-orange-400">calculus course</a> and 
                a <a href="https://cs110.students.cs.ubc.ca/" target="_blank" className="font-bold text-indigo-400 hover:text-orange-400">systematic programming course</a>.
            </Tilt>
            <Tilt className="row-span-3 bento-box p-4"
            tiltReverse={true}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}>
                <h1 className="text-3xl font-semibold">Links</h1>
                <ul className="list-disc list-inside marker:text-orange-400">
                    <li>Lorem</li>
                    <li>ipsum</li>
                    <li>dolor </li>
                    <li>sit </li>
                    <li>amet</li>
                    <li>consectetur </li>
                </ul>
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

