"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Image from "next/image";


const clients = [
  {
    image: '/client1.png',
    name: 'David R.',
    comments: "I've been getting my haircut by Tru Hair Saloon for over a year now, and I wouldn't go anywhere else. They are incredibly skilled and consistent. Whether it's a simple trim or a more detailed style, they nail it every single time. I always walk out feeling sharp and confident. Truly a master of their craft! My one-stop destination for all your hair care."
  },
  {
    image: '/client2.png',
    name: 'Michael S.',
    comments: "Finding a barber who really pays attention to the details, especially with beard trims, was tough until I found Tru Hair Saloon. The precision is fantastic – clean lines, perfect fade, and they actually listen to what you want. My beard has never looked better. Highly recommend for anyone who's particular about their look."
  },
  {
    image: '/client3.png',
    name: 'Jordan P.',
    comments: "It's not just about the great haircut here (though that's always spot on!), it's the whole experience. From the moment you walk into Tru Hair Saloon, the vibe is welcoming and relaxed. They are friendly, professional, and great to chat with. It feels like a proper, quality barbershop. I actually look forward to my appointments!"
  }
];



const Testimonial = () => {

  useEffect(() => {
      AOS.init({
        duration: 800,
        offset: 200,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);


  return (
    <section id="testimonials" className="w-full md:px-20 px-10 py-10 flex flex-col justify-end items-center h-fit pb-[300px] gap-16 bg-[#a69f7d] ">
      <h1 data-aos="zoom-in" className="text-6xl text-white font-bold text-center">
        What Our Clients Say
      </h1>

      <div id="clients" className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-8 w-full mt-10 ">
        {clients.map((client, index) => (
          <div key={index} data-aos="slide-up" data-aos-delay="200" id="main-box" className="w-full bg-white p-6 flex flex-col justify-center items-center gap-6 tounded-3xl rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <div id="top" className="flex justify-between items-center gap-8 w-full">
                    <div className="flex justify-center items-center gap-4 relative">
                      <BiSolidQuoteAltLeft className="text-4xl text-[#1caf7e] absolute left-0 -top-10 opacity-40" />
                      <h1 className="text-2xl font-bold text-slate-500 right-0">{client.name}</h1>
                    </div>
                    <Image src={client.image} alt="client" width={100} height={100} className="w-[100px] h-[100px] rounded-full object-cover transform hover:scale-110 transition duration-300 cursor-pointer" />
              </div>
              <div id="bottom" className="w-full">
                <p className="text-slate-500 text-center text-lg font-medium">{client.comments}</p>
              </div>
          </div>
        ))}
      </div>  
    </section>
  )
}

export default Testimonial
