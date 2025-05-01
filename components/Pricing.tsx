"use client";
import React, { useEffect }from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {

  useEffect(() => {
          AOS.init({
            duration: 800,
            offset: 200,
            easing: "ease-in-sine",
            delay: 100,
          });
        }, []);


  return (
    <section id='pricing' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-24 mb-20'>
      <h1 data-aos="zoom-in" className='text-6xl font-bold text-black text-center'> Our Pricing </h1>
      <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 w-[85%]'>
        <div data-aos="zoom-in" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] p-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Classic Haircut</h1>
          <p className='text-[#a69f7d] text-4xl font-bold'>$35</p>
        </div>
        <div data-aos="zoom-in" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] p-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Beard Trim & Shape</h1>
          <p className='text-[#a69f7d] text-4xl font-bold'>$25</p>
        </div>
        <div data-aos="zoom-in" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] p-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Hair Color & Style</h1>
          <p className='text-[#a69f7d] text-4xl font-bold'>$75</p>
        </div>
        <div data-aos="zoom-in" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] p-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Kids Haircut</h1>
          <p className='text-[#a69f7d] text-4xl font-bold'>$25</p>
        </div>
        <div data-aos="zoom-in" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] p-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Hair Treatment</h1>
          <p className='text-[#a69f7d] text-4xl font-bold'>$55</p>
        </div>
        <div data-aos="zoom-in" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] p-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Highlights</h1>
          <p className='text-[#a69f7d] text-4xl font-bold'>$85</p>
        </div>
        <div data-aos="zoom-in" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] p-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Luxury Shave</h1>
          <p className='text-[#a69f7d] text-4xl font-bold'>$45</p>
        </div>
        <div data-aos="zoom-in" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] p-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Full Service Package</h1>
          <p className='text-[#a69f7d] text-4xl font-bold'>$120</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
