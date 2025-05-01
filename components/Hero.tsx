"use client";
import React from "react";
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Hero = () => {
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
        id="hero"
        className="flex flex-col justify-center items-center gap-20 md:flex-row"
      >
        <div>
          <h1 className="text-5xl font-bold text-center" data-aos="zoom-in">
            Welcome to Hair Designer
          </h1>
          <p className="text-center text-xl text-gray-500 mt-3" data-aos="zoom-in">
            Your one-stop destination for all your hair care needs.
          </p>
          <div
            data-aos="slide-up"
            className="flex flex-col justify-center items-start gap-6 ml-6 mt-4 w-full px-4 md:px-0"
          >
            <div
              id="icon-box"
              className="flex justify-start items-center gap-4 w-full max-w-md"
            >
              <FaLocationDot className="text-black size-6 shrink-0" />
              <p className="text-gray-500">
                Capital Avenue, No: 32, Berlin/Germany
              </p>
            </div>
            <div
              id="icon-box"
              className="flex justify-start items-center gap-4 w-full max-w-md"
            >
              <MdOutlinePhoneAndroid className="text-black size-6 shrink-0" />
              <p className="text-gray-500">(+90) 540 555 33 22 </p>
            </div>
            <div
              id="icon-box"
              className="flex justify-start items-center gap-4 w-full max-w-md"
            >
              <MdEmail className="text-black size-6 shrink-0" />
              <p className="text-gray-500">company@gmail.com</p>
            </div>
            <button
              data-aos="zoom-in"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white transition duration-300 ease-in-out hover:cursor-pointer self-center"
            >
              BOOK ONLINE
            </button>
          </div>
        </div>
        <div data-aos="zoom-in" id="image-box" className="w-full md:w-[50%]">
          <Image
            src="/hero.jpg"
            alt="hero"
            width={500}
            height={1000}
            priority
            className="w-[90%] md:h-[700px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
