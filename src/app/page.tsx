import { HeaderMain } from "@/components/HeaderMain";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-slate-950">
      <main className="
      h-[740px] relative 
      bg-[url('/assets/images/bg-main.png')] bg-cover bg-no-repeat
      "
      >
        <div className="max-w-[1200px] mx-auto bg-blue-600">
        <HeaderMain />
        <div className="">
          <div className="">
            <h1 className="text-lg">Tranformando suas ideias 
            em realidade com tecnologia
            e criatividade.</h1>
            <p className="">Se você precisa de um site personalizado, automação eficiente ou um chatbot avançado com IA, eu crio a solução ideal para você.</p>
            <button className="bg-orange-500 p-2 ">Solicite um orcamento</button>
          </div>
          <Image src="/assets/images/teki.png" alt="Logo" width={100} height={100} />
        </div>
        </div>
      </main>

      <div className="min-h-96">

      </div>
    </div>
  );
}
