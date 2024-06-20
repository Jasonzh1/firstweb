'use client'
import React from "react";
 
export default function Sidebar() {
    return (
        <div className="flex flex-col fixed top-0 left-0">
            <button className="flex flex-col p-7 m-12 menu-button">
                <h1 className="text-3xl text-white font-Bebas_Neue text-opacity-45">Hi I&apos;m</h1>
                <h1 className="text-9xl text-white font-Bebas_Neue underline decoration-teal-700/55">Jason Zheng</h1>
            </button>
            <Menu />
        </div>
    );
}

function Menu() {
    return (
        <div className="flex flex-col items-start">
            <button className="menu-button">
                <a className="underline decoration-teal-700/55 decoration-8">Pr</a>ojects
            </button>
            <button className="menu-button">
                <a className="underline decoration-teal-700/55 decoration-8">Te</a>chnologies
            </button>
            <button className="menu-button">
                <a className="underline decoration-teal-700/55 decoration-8">Su</a>rvey
            </button>
        </div>
    );
}