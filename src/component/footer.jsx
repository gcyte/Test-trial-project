import { logo1 } from "../assets";


const Footer = () => {
    return ( 
        <div className="bg-[#3c495f] py-5">
          <div className="lg:w-[1280px] mx-auto">
            <div className="flex justify-between items-center">
                <img src={logo1} alt="" /> 
               
               <p className="font-bold text-[#48505e]">
               COPYRIGHT 2018. ALL RIGHTS RESERVED.
               </p>
            </div>
            
        </div> 
           
        </div>
     );
}
 
export default Footer;