"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Gallary = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <section
        id="gallary"
        className="w-full md:px-20 px-10 py-10 flex flex-col justify-center items-center h-fit pb-[300px] gap-16 bg-gray-900 -mb-[200px]"
      >
        <h1 className="text-5xl text-white font-bold text-center italic">
          experience the best care 
        </h1>
        <span className="italic text-xl text-[#a69f7d]">you deserve it!</span>
      </section>

      <div className="w-full flex flex-col justify-center items-center mb-20 mx-4">
        <div className="lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 justify-center justify-items-center items-center gap-10 md:-mb[540px]">
          <Image
            src="/gal1.jpg"
            alt="gallary"
            width={500}
            height={500}
            className="w-[400px] h-[350px] object-cover rounded-xl"
            data-aos="zoom-out"
            data-aos-delay="200"
            priority
          />
          <Image
            src="/gal2.jpg"
            alt="gallary"
            width={500}
            height={500}
            className="w-[400px] h-[350px] object-cover rounded-xl"
            data-aos="zoom-out"
            data-aos-delay="200"
            priority
          />
          <Image
            src="/gal3.jpg"
            alt="gallary"
            width={500}
            height={500}
            className="w-[400px] h-[350px] object-cover rounded-xl"
            data-aos="zoom-out"
            data-aos-delay="200"
            priority
          />
          <Image
            src="/gal4.jpg"
            alt="gallary"
            width={500}
            height={500}
            className="w-[400px] h-[350px] object-cover rounded-xl"
            data-aos="zoom-out"
            data-aos-delay="200"
            priority
          />
          <Image
            src="/gal5.jpg"
            alt="gallary"
            width={500}
            height={500}
            className="w-[400px] h-[350px] object-cover rounded-xl"
            data-aos="zoom-out"
            data-aos-delay="200"
            priority
          />
          <Image
            src="/gal6.jpg"
            alt="gallary"
            width={500}
            height={500}
            className="w-[400px] h-[350px] object-cover rounded-xl"
            data-aos="zoom-out"
            data-aos-delay="200"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Gallary;
