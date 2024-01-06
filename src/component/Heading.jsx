const Heading = ({ number, title }) => {
    return ( 
      <div className="flex items-center">
        <h2 className="lg:text-[120px] font-semibold text-[50px] text-[#3c495f] opacity-50">{number}</h2>
        <div className="pt-5">
          <p className="text-[40px] font-bold text-[#3c495f]">{title}</p>
          <div className="h-5 w-5 opacity-50 bg-[#3c495f]"></div>
        </div>
      </div>
    );
  };
  
  export default Heading;