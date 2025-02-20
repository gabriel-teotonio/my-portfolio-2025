import Image from "next/image";

export const HeaderMain = () => {
    return (
        <header className="w-[1400px] flex items-center p-4
         bg-opacity-10 bg-slate-300 rounded-lg fixed top-4
         justify-between
         "
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