import React, { useState, useEffect } from 'react';
import { img1, img2, peak } from '../assets';
import Heading from './Heading';

const ImageBackground = () => {
  const images = [
    img1,
    img2,
    peak,
    img2,
   
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const changeImage = (newImage) => {
    setCurrentImage(newImage);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <div className="min-h-screen  grid grid-cols-1 content-between  bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${currentImage})` }}>
      
        <div className="lg:w-[1180px] mx-auto pt-20">
        <Heading number="01" title="HISTORY" />     
          <div className="text-paragraph lg:w-[980px] font-bold text-[#3c495f] lg:pl-20"> 
           
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
          </div>
        </div>
        <div className="flex justify-center mt-4 p-[50px]  bg-[#3c495f]/[0.6]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => changeImage(image)}
              className={`lg:w-[250px] lg:h-[150px]  h-12 w-12 border-2  border-white cursor-pointer mx-2 ${
                currentImage === image ? 'border-opacity-100' : 'border-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    
  );
};

export default ImageBackground;
