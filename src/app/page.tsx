import AnimatedImages from "@/components/animatedImages";
import { HeaderMain } from "@/components/HeaderMain";
import Image from "next/image";


export default function Home() {
  return (
    <div className={`relative min-h-full bg-slate-300`}>
      <main className="
      h-screen
      bg-[url('/assets/images/bg-main.png')] bg-cover bg-no-repeat
      "
      >
        <div className="max-w-[1400px] mx-auto pt-40">
        <HeaderMain />
        <div className="flex">
          <div className="w-[60%]">
            <h1 className="text-5xl font-extrabold">Tranformando suas ideias <br /> 
            em realidade com tecnologia
            <br /> e criatividade.</h1>
            <p className="w-10/12 mt-2">Se você precisa de um site personalizado, automação eficiente ou um chatbot avançado com IA, eu crio a solução ideal para você.</p>
            <button className="bg-orange-500 p-2 mt-6 rounded-3xl px-6 w-4/6 h-14 text-md font-semibold">
              Começar um novo projeto
            </button>
          </div>
          <AnimatedImages />
          {/* <div className="relative">
            <Image src="/assets/images/gabriel.png" alt="Logo" width={540} height={378} />
            <Image className="absolute top-14 -left-8" src="/assets/icons-svg/code-element.svg" alt="element" width={100} height={378} />
            <Image className="absolute -top-8 left-6" src="/assets/icons-svg/nodejs-element.svg" alt="element" width={80} height={378} />
            <Image className="absolute bottom-28 right-20" src="/assets/icons-svg/figma-element.svg" alt="element" width={150} height={378} />
            <Image className="absolute bottom-16 right-20" src="/assets/icons-svg/n8n-element.svg" alt="element" width={150} height={378} />
          </div> */}
        </div>
        </div>
      </main>

      <div className="min-h-96">

      </div>
    </div>
  );
}
