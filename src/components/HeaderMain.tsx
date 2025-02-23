"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const HeaderMain = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    return (
        <header 
         className={`w-[1440px] flex items-center p-4 rounded-lg fixed top-4 justify-between 
        z-[999] bg-slate-300 bg-opacity-10 backdrop-blur-sm`}
         >
            <Image src="/assets/icons-svg/logo-teki.svg" alt="Logo" width={100} height={100} />

            <ul className="flex gap-4 text-sm">
                <a 
                className="font-semibold hover:text-orange-500 transition-all duration-200" 
                href="#"
                >Home</a>
                <a 
                className="font-semibold hover:text-orange-500 transition-all duration-200" 
                href="#"
                >Sobre</a>
                <a 
                className="font-semibold hover:text-orange-500 transition-all duration-200" 
                href="#"
                >Projetos</a>
                <a 
                className="font-semibold hover:text-orange-500 transition-all duration-200" 
                href="#"
                >Contato</a>
            </ul>
        </header>
    )
};