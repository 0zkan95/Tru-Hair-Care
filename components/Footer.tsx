"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
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
        id="footer"
        className="flex flex-col items-center justify-center bg-slate-200 w-full md:px-20 px-10 py-10 gap-6 border-[20px] border-[#a69f7d] rounded-t-[100px]"
      >
        <h1 className="text-black font-bold text-5xl">
          Tru Hair Care{" "}
          <span className="italic text-[#a69f7d]"> Saloon & Shop </span>
        </h1>
        <p className="text-xl text-black font-semibold">
          Your one-stop destination for all your hair care needs.
        </p>
        <div className="flex justify-center items-center gap-10">
          <div
            id="icons"
            className="bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300"
          >
            <FaFacebook className="text-2xl text-white" />
          </div>
          <div
            id="icons"
            className="bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram className="text-2xl text-white" />
          </div>
          <div
            id="icons"
            className="bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300"
          >
            <FaYoutube className="text-2xl text-white" />
          </div>
          <div
            id="icons"
            className="bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300"
          >
            <FaXTwitter className="text-2xl text-white" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
