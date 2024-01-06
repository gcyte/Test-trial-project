import React, { useState } from 'react';
import { logo } from '../assets';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const navLinks = [
        {
            title: "01.History",
            link: "#",
        },
        {
            title: "02.Team",
            link: "#",
        },
    ];

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return ( 
        <div className="lg:w-[1280px] mx-auto p-3">
            <div className="navigation">
                <div className="lg:flex items-center">
                    <div className="flex-1">
                     <div className="flex items-center justify-between"> 
                    <img src={logo} alt="Logo" style={{ maxWidth: '100px' }} />

                    <div className="lg:hidden text-right">
                            <button onClick={toggleMenu}>
                                {showMenu ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                          </div>
                        </div>  
                    </div>
                   
                    <div className={`lg:flex justify-end ${showMenu ? '' : 'hidden'}`}>
                        <ul className="lg:flex gap-5  lg:justify-start">
                            {navLinks.map((link, index) => (
                                <li className='underline-offset-8 mt-5' key={index}><a className='italic font-semibold underline text-white' href={link.link}>{link.title}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
