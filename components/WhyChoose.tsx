"use client";
import React, { useEffect }from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAngleDoubleRight } from 'react-icons/fa';




const WhyChoose = () => {

     useEffect(() => {
        AOS.init({
          duration: 800,
          offset: 200,
          easing: "ease-in-sine",
          delay: 100,
        });
      }, []);


  return (
    <section id='about' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-10 bg-cover bg-center mb-4'
    style={{ backgroundImage: "url('/why3.webp')" }}>
      <div data-aos="zoom-in" className='flex flex-col justify-center items-center gap-10 bg-transparent border-2 border-[#a69f7d] p-10 rounded-xl md:w-[40%] w-full'>
            <h1 className='text-4xl font-bold text-[#a69f7d]'>WORKING HOURS</h1>
            <div className='flex flex-col justify-center items-center gap-4'>
                <p>9:00 AM - 9:00 PM</p>
                <p>WEDNESDAY OFF</p>
            </div>
            <button 
                onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                className='px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white mt-6 cursor-pointer'
            >
                BOOK ONLİNE
            </button>
      </div>

      <div data-aos="slide-up" data-aos-delay="200" className='md:w-[40%] w-full flex flex-col justify-center items-start gap-10 h-fit'>
        <h1 className='text-6xl text-white font-bold text-center'>
            Why Choose Us?
        </h1>
        <p className='text-2xl font-semibold text-white text-center md:text-start'>
          Experience luxury grooming at its finest. Our commitment to excellence, combined with our expertise, ensures you leave looking and feeling your absolute best.
        </p>
        <div id='icon-list' className='flex flex-col justify-center items-start gap-4'>
            <div id='icon-box' className='flex justify-center items-center gap-4'>
                <FaAngleDoubleRight className='text-white size-6' />
                <h4 className='text-md text-white font-semibold'>Expert stylists with years of experience</h4>
            </div>
            <div id='icon-box' className='flex justify-center items-center gap-4'>
                <FaAngleDoubleRight className='text-white size-6' />
                <h4 className='text-md text-white font-semibold'>Relaxing and professional atmosphere</h4>
            </div>
            <div id='icon-box' className='flex justify-center items-center gap-4'>
                <FaAngleDoubleRight className='text-white size-6' />
                <h4 className='text-md text-white font-semibold'>Latest trends and techniques</h4>
            </div>
            <div id='icon-box' className='flex justify-center items-center gap-4'>
                <FaAngleDoubleRight className='text-white size-6' />
                <h4 className='text-md text-white font-semibold'>Quality products and personalized service</h4>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
