"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
      id="contact"
      className="w-full h-hit  grid grid-cols-1 lg:grid-cols-2 justify-center items-start"
    >
      <div
        data-aos="zoom-in"
        className="w-full bg-cover bg-center h-[700px]"
        style={{ backgroundImage: "url('/contactimg.jpg')" }}
      ></div>
      <div
        id="form-box"
        className="bg-gray-900 p-16 flex flex-col justify-center items-center gap-12 w-full h-[700px]"
      >
        <h1
          data-aos="zoom-in"
          className="text-white text-6xl font-bold text-center"
        >
          Contact Us
        </h1>
        <div
          data-aos="zoom-out"
          data-aos-delay="400"
          id="form"
          className="w-full flex flex-col justify-center items-center gap-12"
        >
          <form className="w-full flex flex-col justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-[90%] md:w-[60%] h-12 px-4 rounded-lg outline-none border-2 border-gray-300 focus:border-gray-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="w-[90%] md:w-[60%] h-12 px-4 rounded-lg outline-none border-2 border-gray-300 focus:border-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[90%] md:w-[60%] h-12 px-4 rounded-lg outline-none border-2 border-gray-300 focus:border-gray-500"
            />
            <div className="w-[90%] md:w-[60%] flex gap-4">
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input type="radio" name="gender" value="male" className="cursor-pointer" />
                Male
              </label>
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input type="radio" name="gender" value="female" className="cursor-pointer" />
                Female
              </label>
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input type="radio" name="gender" value="kid" className="cursor-pointer" />
                Kid
              </label>
            </div>
            <div className="w-[90%] md:w-[60%] flex flex-col md:flex-row gap-4">
              <input
                type="date"
                className="w-full md:w-1/2 h-12 px-4 rounded-lg outline-none border-2 border-gray-300 focus:border-gray-500"
              />
              <select
                className="w-full md:w-1/2 h-12 px-4 rounded-lg outline-none border-2 border-gray-300 focus:border-gray-500 cursor-pointer"
              >
                <option value="">Select Time</option>
                <option value="09:00">09:00</option>
                <option value="09:30">09:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="16:30">16:30</option>
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
              </select>
            </div>
            <textarea
              placeholder="Message"
              className="w-[90%] md:w-[60%] h-32 px-4 rounded-lg outline-none border-2 border-gray-300 focus:border-gray-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500  text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
