"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  { title: "Projeto 1", description: "Descrição do projeto 1.", image: "/assets/images/cebs.png" },
  { title: "Projeto 2", description: "Descrição do projeto 2.", image: "/assets/images/trend.png" },
  { title: "Projeto 3", description: "Descrição do projeto 3.", image: "/assets/images/cartorio.png" },
  { title: "Projeto 4", description: "Descrição do projeto 4.", image: "/assets/images/cebs.png" },
  { title: "Projeto 5", description: "Descrição do projeto 5.", image: "/assets/images/trend.png" },
  { title: "Projeto 6", description: "Descrição do projeto 6.", image: "/assets/images/cartorio.png" },
  { title: "Projeto 6", description: "Descrição do projeto 6.", image: "/assets/images/cartorio.png" },
  { title: "Projeto 6", description: "Descrição do projeto 6.", image: "/assets/images/cartorio.png" },
];

export default function PortfolioCarousel() {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 >= projects.length - (slidesToShow - 1) ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? projects.length - slidesToShow : prev - 1));

  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1 >= projects.length - (slidesToShow - 1) ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slidesToShow]);

  return (
    <div className="relative w-full max-w-[1400px] overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out "
        style={{ 
            transform: `translateX(calc(-${index * (window.innerWidth < 1024 ? 95 : 100 / slidesToShow)}%))` 
        }}
      >
        {projects.map((project, i) => (
          <div key={i} className={`w-[calc(100%/${slidesToShow})] max-sm:w-[95%]  px-2 flex-shrink-0 flex justify-center`}> 
            <div className="bg-gradient-to-r from-[#010613] to-[#061437] p-2 rounded-lg
             shadow-lg text-white text-center max-w-xs border-slate-50 border-opacity-15 border
             flex flex-col justify-between
             "
             >
              <Image src={project.image} alt={project.title} width={400} height={200} className="rounded-md mx-auto" />
            
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                <p className="text-gray-300 text-xs">{project.description}</p>
                <button className="bg-secundary mt-4 uppercase p-2 rounded-md px-6 w-full h-7 text-sm flex justify-center items-center gap-2 hover:-translate-y-1 transition-all duration-200">
                  Ver projeto
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Image
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 shadow-lg hover:cursor-pointer hover:scale-110 hover:opacity-80 transition"
        src="/assets/icons-svg/arrow-left.svg" alt="Seta para esquerda" width={42} height={42} 
      />

      <Image
        onClick={nextSlide}
        className="rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 shadow-lg hover:cursor-pointer hover:scale-110 hover:opacity-80 transition"
        src="/assets/icons-svg/arrow-left.svg" alt="Seta para direita" width={42} height={42} 
      />
    </div>
  );
}
