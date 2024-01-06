import React from 'react';
import { logo1 } from '../assets';

const NavbarV2 = () => {
   

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



    return ( 
        <div className="lg:w-[1280px] mx-auto p-5">
            <div className="navigation">
                <div className="lg:flex items-center">
                    <div className="flex-1">
                     <div className="flex items-center justify-between"> 
                    <img src={logo1} alt="Logo" />

                
                        </div>  
                    </div>
                   
                    <div className='lg:flex justify-end' >
                        <ul className="lg:flex gap-5  lg:justify-start">
                            {navLinks.map((link, index) => (
                                <li className='underline-offset-8 mt-5' key={index}><a className='italic font-semibold underline text-[#414f6b]' href={link.link}>{link.title}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarV2;
