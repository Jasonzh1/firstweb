import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';



export default function ContentBar() {
    return (
        <div className="flex-col absolute right-0 w-7/12 background bg-fixed">
            <BentoBox/>
            <List Title={"Projects"}/>
            <Tech/>
        </div>
    );
}

function SectionTitle({ name }) {
    return (
        <div>
            <h1 className="font-Bebas_Neue text-3xl menu-underline underline-offset-8">{ name }</h1>
        </div>
    );
}


function BentoBox() {
    return (
        <div className="grid grid-cols-3 grid-row-4 gap-6 mt-12 ml-20 mr-12">
            <div className="col-span-3">
                <SectionTitle name={"About Me"}/>
            </div>
            <Tilt className="row-span-3 bento-box p-6"
            tiltReverse={true}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum eu mi eu cursus. Morbi id eros sed risus cursus rhoncus. Aliquam dictum turpis sit amet ante sollicitudin porta ac eget tortor.
                Mauris non ligula nec magna efficitur fringilla eu sed odio. Aenean non magna eu nunc suscipit luctus. 
            </Tilt>
            <Tilt className="col-span-2 bento-box p-6"
            tiltReverse={true}
            tiltMaxAngleX={15}
            tiltMaxAngleY={5}>
                Aliquam volutpat sagittis fermentum. Fusce eu mollis tellus. Donec tristique lobortis commodo. Donec pellentesque massa non nulla sagittis, ut dignissim orci venenatis. Quisque et urna sit
                amet urna feugiat viverra nec eu elit. 
            </Tilt>
            <Tilt className="row-span-2 col-span-1 bento-box p-6"
            tiltReverse={true}
            tiltMaxAngleX={13}
            tiltMaxAngleY={10}>
                <ul className="list-disc list-inside marker:text-orange-400">
                    <li>Lorem</li>
                    <li>ipsum</li>
                    <li>dolor </li>
                    <li>sit </li>
                    <li>amet</li>
                    <li>consectetur </li>
                </ul>
            </Tilt>
            <Tilt className="row-span-2 col-span-1 bento-box p-6"
            tiltReverse={true}
            tiltMaxAngleX={13}
            tiltMaxAngleY={10}>            
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum
            </Tilt>
        </div>
    );
}


function List({ Title }) {
    return (
        <div className="flex flex-col mt-8 ml-20 mr-12 gap-0">
            <SectionTitle name={Title}/>
            <a href="https://github.com/Jasonzh1/Minimal-Type" className="bento-box mt-6 project-animation border-0">
                <div className="flex flex-row items-center">
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
                </div>
            </a>
            <a href="https://github.com/Jasonzh1/FPS-Game" className="bento-box mt-3 project-animation border-0">
                <div className="flex flex-row items-center">
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
                </div>
            </a>
            <a href="https://github.com/Jasonzh1/1994-Income-Predictor" className="bento-box mt-3 project-animation border-0">
                <div className="flex flex-row items-center">
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
                </div>
            </a>
        </div>
    );
}


function Tech() {
    return (
        <div className="flex flex-col mt-8 ml-20 mr-12 gap-0">
            <SectionTitle name={"Technologies"}/>
            <div className="flex flex-row">
                
            </div>
        </div>
    );
}

