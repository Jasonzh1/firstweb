'use client'
import React, { useState, useEffect } from "react";   
  
export default function Sidebar() {
    const [activeSection, setActiveSection] = useState('');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Get the element's position relative to the viewport
            let yOffset = 0;
            if (id === 'about') {
                yOffset = -50;
            } else {
                yOffset = 20;
            }
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'project', 'tech', 'stack'];
            let currentSection = '';
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 50 && rect.bottom >= 50) {
                        currentSection = section;
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col shrink-0 background fixed w-full h-full">
            <div 
                onClick={() => scrollToSection('about')} 
                className={`flex flex-col p-6 m-12 menu-button w-fit cursor-pointer ${activeSection === 'about' ? 'border-orange-400' : ''}`}
            >
                <h1 className="text-3xl text-white font-Bebas_Neue text-opacity-65">Hi I&apos;m</h1>
                <h1 className="text-9xl text-white font-Bebas_Neue heading-underline">Jason Zheng</h1>
            </div>
            <Menu scrollToSection={scrollToSection} activeSection={activeSection} />
        </div>
    );
}

function Menu({ scrollToSection, activeSection }) {
    return (
        <div className="flex flex-col items-start">
            <div 
                onClick={() => scrollToSection('project')} 
                className={`menu-button cursor-pointer ${activeSection === 'project' ? 'border-orange-400' : ''}`}
            >
                <span className="menu-underline">Pr</span>ojects
            </div>
            <div 
                onClick={() => scrollToSection('tech')} 
                className={`menu-button cursor-pointer ${activeSection === 'tech' ? 'border-orange-400' : ''}`}
            >
                <span className="menu-underline">Te</span>chnologies
            </div>
            <div 
                onClick={() => scrollToSection('stack')} 
                className={`menu-button cursor-pointer ${activeSection === 'stack' ? 'border-orange-400' : ''}`}
            >
                <span className="menu-underline">St</span>acks
            </div>
        </div>
    );
}