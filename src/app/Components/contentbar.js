import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import TechCarousel from "./carousel";
import ProjectList from "./list";


export default function ContentBar() {
    return (
        <div className="flex-col absolute right-0 w-7/12 background bg-fixed">
            <BentoBox/>
            <ProjectList Title={"Projects"}/>
            <Tech/>
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

