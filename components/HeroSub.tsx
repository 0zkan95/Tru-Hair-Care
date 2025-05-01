"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSub = () => {

     useEffect(() => {
            AOS.init({
              duration: 800,
              offset: 200,
              easing: "ease-in-sine",
              delay: 100,
            });
          }, []);


  return (
    <section
      id="section-2"
      className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10"
    >
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
            <Image
            src="/sissor.png"
            alt="sissor"
            width={100}
            height={100}
            className="size-16 transform hover:scale-110 duration-300"
            />
            <h1 className="text-2xl text-black font-semibold">Regular Hair Cut</h1>
            <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#a69f7d] hover:text-black cursor-pointer">
                    MORE
            </button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
            <Image
            src="/menshair.png"
            alt="Men's Hair"
            width={100}
            height={100}
            className="size-16 transform hover:scale-110 duration-300"
            />
            <h1 className="text-2xl text-black font-semibold">Men`s Hair</h1>
            <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#a69f7d] hover:text-black cursor-pointer">
                    MORE
            </button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
            <Image
            src="/trimmer.png"
            alt="trimmer"
            width={100}
            height={100}
            className="size-16 transform hover:scale-110 duration-300"
            />
            <h1 className="text-2xl text-black font-semibold">Trimmer</h1>
            <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#a69f7d] hover:text-black cursor-pointer">
                    MORE
            </button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
            <Image
            src="/womenhair.png"
            alt="women hair"
            width={100}
            height={100}
            className="size-16 transform hover:scale-110 duration-300"
            />
            <h1 className="text-2xl text-black font-semibold">Women&apos;s Hair</h1>
            <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#a69f7d] hover:text-black cursor-pointer">
                    MORE
            </button>
        </div>
       
    </section>
  );
};

export default HeroSub;
