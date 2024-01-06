import React, { useState } from 'react';
import { mountain } from '../assets';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // State to manage active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="bg-[#3c495f]">
      <div className="tab-menu lg:w-[1280px] mx-auto flex gap-5 py-2">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
         <span className='text-[21px] uppercase font-semibold text-[#b0b4be] py-2 px-5'>mountain 1</span>
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          <span className='text-[21px] uppercase font-semibold text-[#b0b4be] py-2 px-5'>mountain 2</span>
        </button>
        {/* Add more tabs as needed */}
      </div>
      </div>
      <div className='bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${mountain})` }}>
      <div className="tab-content h-screen lg:w-[1280px] mx-auto lg:p-20 p-10" >
        {activeTab === 'tab1' && 
        <div className="box p-10 border-2 lg:w-[500px] text-[#3c495f] bg-white">
         <h2 className='font-semibold text-[32px] uppercase '>Schedule</h2>
         <div className='flex justify-between py-5'>
         <p>25 Nov 2016</p>
         <p>Vestibulum viverra</p>
        </div>   
        <div className='flex justify-between py-5'>
         <p>28 Nov 2016</p>
         <p>Vestibulum viverra</p>
        </div>   
        <div className='flex justify-between py-5'>
         <p>18 Dec 2016</p>
         <p>Vestibulum viverra</p>
        </div>   
        <div className='flex justify-between py-5'>
         <p>7 Jan 2017</p>
         <p>Vestibulum viverra</p>
        </div>   
        
        </div>
        }
        {activeTab === 'tab2' && 
          <div className="box p-10 border-2 lg:w-[500px] text-[#3c495f] bg-white">
          <h2 className='font-semibold text-[32px] uppercase '>Schedule</h2>
          <div className='flex justify-between py-5'>
          <p>01 Nov 2018</p>
          <p>Vestibulum viverra</p>
         </div>   
         <div className='flex justify-between py-5'>
          <p>15 Nov 2018</p>
          <p>Vestibulum viverra</p>
         </div>   
         <div className='flex justify-between py-5'>
          <p>17 Dec 2018</p>
          <p>Vestibulum viverra</p>
         </div>   
         <div className='flex justify-between py-5'>
          <p>18 Jan 2019</p>
          <p>Vestibulum viverra</p>
         </div>   
         
         </div>
        
        }
        {/* Add content for more tabs as needed */}
      </div>
      </div>
    </div>
  );
};

export default TabMenu;
