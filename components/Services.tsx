"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Services = () => {
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
      id="services"
      className="w-full flex flex-col md:px-20 px-10 md:py-20 py-10 justify-center items-center gap-16 mb-20 bg-gray-900"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h1
          data-aos="zoom-in"
          className="text-6xl text-white font-bold text-center"
        >
          Tru Hair Care Saloon
        </h1>
        <p data-aos="zoom-in" className="text-xl text-slate-200 text-center">
          Your one-stop destination for all your hair care needs. We offer a wide range of services to keep you looking sharp and feeling great. From haircuts to beard trims, we have you covered. Our experienced barbers are dedicated to providing top-notch service and ensuring your satisfaction. Come visit us today and experience the difference!
        </p>
      </div>

      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
        <div id="image-box">
          <Image
            data-aos="zoom-in"
            data-aos-delay="200"
            src="/servicimg.jpg"
            alt="services"
            width={700}
            height={600}
            priority
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8">
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="flex flex-col justify-center items-center gap-4 rounded-xl bg-white px-8 py-4 shadow-lg md:px-4"
          >
            <Image
              src="/ser1.png"
              alt="haircut"
              width={100}
              height={100}
              className="w-20 h-20 object-cover transform hover:scale-110 transition duration-300 cursor-pointer"
            />
            <h1 className="text-black text-center text-md font-bold">Hair Care</h1>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="flex flex-col justify-center items-center gap-4 rounded-xl bg-white px-8 py-4 shadow-lg md:px-4"
          >
            <Image
              src="/ser2.png"
              alt="haircut"
              width={100}
              height={100}
              className="w-20 h-20 object-cover transform hover:scale-110 transition duration-300 cursor-pointer"
            />
            <h1 className="text-black text-center text-md font-bold">Smooth Skin</h1>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="flex flex-col justify-center items-center gap-4 rounded-xl bg-white px-8 py-4 shadow-lg md:px-4"
          >
            <Image
              src="/ser3.png"
              alt="haircut"
              width={100}
              height={100}
              className="w-20 h-20 object-cover transform hover:scale-110 transition duration-300 cursor-pointer"
            />
            <h1 className="text-black text-center text-md font-bold">Beard Mustache Care</h1>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="flex flex-col justify-center items-center gap-4 rounded-xl bg-white px-8 py-4 shadow-lg md:px-4"
          >
            <Image
              src="/ser4.png"
              alt="haircut"
              width={100}
              height={100}
              className="w-20 h-20 object-cover transform hover:scale-110 transition duration-300 cursor-pointer"
            />
            <h1 className="text-black text-center text-md font-bold">Hair Design</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
