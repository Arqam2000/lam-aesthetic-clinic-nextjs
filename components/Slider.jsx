'use client'
// import slider1 from "../assets/look-studio-HtXyytr9304-unsplash.jpg"
import slider1 from "@/public/skin-aesthetic-clinic-leeds-uk.jpg"
import slider2 from "@/public/lam-aesthetic-slider.avif"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Slider = () => {

  const images = [
    slider1,
    slider2,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  // Function to show the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="md:h-[490px]">
      {/* <Slide autoplay={true} infinite duration={5000}>
        {
          images.map((image, index) => (
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${image})` }}>
                <div className='mx-2 mb-2 lg:mx-11'>
                  <h1 className='lg:text-xl font-bold text-base text-[#ff0a64] italic'>Aesthetic Excellence for Ageless Beauty</h1>
                </div>
                <div className='lg:w-2/6 w-[290px]  flex flex-col gap-2 lg:ml-10 ml-2  bg-gray-300 opacity-65 px-2 py-3'>

                  <p className='font-normal text-justify text-sm text-black'><span className='italic font-medium text-base block'>Welcome to Lam Aesthetic Clinic</span> Your destination for safe, effective, and elegant facial rejuvenation treatments. Specializing in Botox, Dermal Fillers, and Skin Boosters, we help you look and feel your best.

                  </p >
                  <p className='font-xl font-semibold text-justify text-base text-red-600'>Consultations for FREE!</p>
                  <Link href="/book-appointment" className='bg-[#A64166] text-white rounded-full py-2 px-3 w-[58%] lg:w-[45%] xl:w-[40%] 2xl:w-[30%] text-center'>Book Appointment</Link>
                </div>
              </div>
            </div>
          ))
        }
      </Slide> */}

      <div className="relative w-full mx-auto mt-4">
        <div
          className="relative h-[490px] md:mx-12 group hover:-translate-y-2 flex flex-col justify-center"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={images[currentIndex]}
            alt={`Skin Care Aesthetic Clinic Leeds UK ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            loading="eager"
            fetchPriority="high"
            preload={true}
            className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
          />
          <div>
            <div className='mx-2 mb-2 lg:mx-11 relative'>
              <h1 className='lg:text-xl font-bold text-base text-[#ff0a64] italic'>Aesthetic Excellence for Ageless Beauty</h1>
            </div>
            <div className='lg:w-2/6 w-[250px]  flex flex-col gap-2 lg:ml-10 ml-2  bg-gray-300 opacity-65 px-2 py-3'>

              <p className='font-normal text-justify text-sm text-black'><span className='italic font-medium text-base block'>Welcome to Lam Aesthetic Clinic, Leeds UK</span> Your destination for safe, effective, and elegant facial rejuvenation treatments. Specializing in Botox, Lip Fillers, Dermal Fillers, Anti Wrinkles, Eyebrows Lift, Bunny lines treatment, Profhilo/skin booster Treatment, Hayfever vaccine, Dissolving filler injection. We help you look and feel your best.

              </p >
              <p className='font-xl font-semibold text-justify text-base text-red-600'>Consultations for FREE!</p>
              <Link href="/book-appointment" className='bg-[#A64166] text-white rounded-full py-2 px-3 w-fit lg:w-[45%] xl:w-[40%] 2xl:w-[30%] text-center'>Book Appointment</Link>
            </div>
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 transform h-[459px] rounded-xl md:hover:bg-[#1a222f] mx-1 -mt-2.5 -translate-y-1/2 text-white p-2 group"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-gray-400 group-hover:text-white" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform h-[459px] rounded-xl md:hover:bg-[#1a222f] mx-1 -mt-2.5 -translate-y-1/2 text-white p-2 group"
          onClick={nextSlide}
        >
          <ChevronRight className="text-gray-400 group-hover:text-white" />
        </button>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-10 mx-1 ${index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
                } transition-all duration-500 ease-in-out`}
            ></div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Slider
