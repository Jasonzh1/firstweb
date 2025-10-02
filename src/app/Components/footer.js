'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const footerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (footerRef.current) {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                const parallaxElements = footerRef.current.querySelectorAll('.parallax-element');
                
                parallaxElements.forEach((element, index) => {
                    const speed = (index + 1) * 0.3;
                    element.style.transform = `translateY(${rate * speed}px)`;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer ref={footerRef} className="relative w-full footer-gradient text-white overflow-hidden z-20 mt-20">
            {/* Parallax Background Layers */}
            <div className="absolute inset-0">
                {/* Animated gradient overlay */}
                <div className="parallax-element absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.2),transparent_60%)]" 
                     style={{ animation: 'subtlePulse 8s ease-in-out infinite' }}></div>
                
                {/* Moving dots pattern */}
                <div className="parallax-element absolute inset-0 opacity-40" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fb923c' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px',
                    backgroundAttachment: 'fixed',
                    animation: 'float 25s ease-in-out infinite'
                }}></div>
                
                {/* Secondary pattern layer */}
                <div className="parallax-element absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea580c' fill-opacity='0.4'%3E%3Cpath d='M50 50m-2 0a2,2 0 1,1 4,0a2,2 0 1,1 -4,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px',
                    backgroundAttachment: 'fixed',
                    animation: 'parallaxMove 35s ease-in-out infinite reverse'
                }}></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-Bebas_Neue text-orange-400 underline decoration-orange-400 decoration-2 underline-offset-4">
                            About
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Computer Science student at UBC passionate about web development, 
                            software engineering, and creating meaningful digital experiences.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" 
                               className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" 
                               className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a href="/public/files/resume.pdf" target="_blank" rel="noopener noreferrer" 
                               className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-Bebas_Neue text-orange-400 underline decoration-orange-400 decoration-2 underline-offset-4">
                            Navigation
                        </h3>
                        <nav className="space-y-2">
                            <a href="#about" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                                About
                            </a>
                            <a href="#project" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                                Projects
                            </a>
                            <a href="#tech" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                                Technologies
                            </a>
                            <a href="#stack" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                                Stacks
                            </a>
                        </nav>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-Bebas_Neue text-orange-400 underline decoration-orange-400 decoration-2 underline-offset-4">
                            Get In Touch
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                                <span className="text-gray-300">Vancouver, BC</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                                <a href="mailto:your-email@example.com" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Jason Zheng. Built with Next.js & Tailwind CSS.
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <span>Made with</span>
                        <span className="text-red-500 animate-pulse">♥</span>
                        <span>at UBC</span>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
        </footer>
    );
}