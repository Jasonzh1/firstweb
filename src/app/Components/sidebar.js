'use client'
import React from "react";   
  

export default function Sidebar() {
    return (
        <div className="flex flex-col shrink-0 background fixed w-full h-full">
            <button className="flex flex-col p-6 m-12 menu-button w-fit">
                <h1 className="text-3xl text-white font-Bebas_Neue text-opacity-65">Hi I&apos;m</h1>
                <h1 className="text-9xl text-white font-Bebas_Neue heading-underline">Jason Zheng</h1>
            </button>
            <Menu />
        </div>
    );
}

function Menu() {
    return (
        <div className="flex flex-col items-start">
            <button className="menu-button">
                <a className="menu-underline">Pr</a>ojects
            </button>
            <button className="menu-button">
                <a className="menu-underline">Te</a>chnologies
            </button>
            <button className="menu-button">
                <a className="menu-underline">Su</a>rvey
            </button>
        </div>
    );
}