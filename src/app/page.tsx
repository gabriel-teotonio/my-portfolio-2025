"use client";

import AnimatedImages from "@/components/animatedImages";
import FeatureCard from "@/components/cardService";
import PortfolioCarousel from "@/components/caroussel";
import { HeaderMain } from "@/components/HeaderMain";
import Image from "next/image";


export default function Home() {
  return (
    <div className={`relative min-h-full overflow-hidden`}>
      <main className="
      h-screen relative
      bg-[url('/assets/images/bg-main.png')] bg-cover bg-no-repeat
      "
      >
        <div className="max-w-[1440px] mx-auto pt-40">
        <HeaderMain />
        <div className="flex">
          <div className="w-[60%]">
            <h1 className="text-4xl font-extrabold">Tranformando suas ideias <br /> 
            em realidade com <span className="text-primary">tecnologia</span>
            <br /> e <span className="text-primary">criatividade</span>.</h1>
            <p className="w-10/12 mt-2 text-gray-300">Se você precisa de um site personalizado, automação eficiente ou um chatbot avançado com IA, eu crio a solução ideal para você.</p>
              <div className="flex mt-12">
                <button 
                className="bg-primary p-2 rounded-full px-6 w-3/6 h-12 text-sm font-semibold 
                flex justify-center items-center gap-2 
                hover:-translate-y-1 transition-all duration-200"
                >
                  <Image src="/assets/icons-svg/icon-ideia.svg" alt="lampada" width={24} height={24} />
                  Começar um novo projeto
                </button>
                <button 
                className="bg-transparent p-2 rounded-full px-6 h-12 text-sm 
                flex justify-center items-center gap-2
                hover:-translate-y-1 transition-all duration-200"
                >
                  <Image src="/assets/icons-svg/stack.svg" alt="lampada" width={24} height={24} />
                  Portfólio
                </button>
              </div>
          </div>
          <AnimatedImages />
        </div>
        </div>
        <Image
          src="/assets/icons-svg/divider.svg"
          alt="divisor"
          width={1400} // Valor inicial (será sobrescrito pelo CSS)
          height={64}
          className="absolute bottom-0"
          style={{ width: "100%", height: "auto" }}
        />
      </main>

      <section className="min-h-screen max-w-[1400px] mx-auto pt-8 relative">
      <div
        className="w-[400px] h-[400px] absolute bottom-0 -right-48 
                  bg-orange-500 blur-[150px] opacity-20 rounded-full -z-10 
                  animate-pulse [animation-duration:6s]"
      ></div>

        <div className="flex flex-col items-center gap-4">
          <span className="w-28 h-1 rounded-sm bg-secundary "></span>
          <h2 className="text-3xl font-bold">Para cada problema, uma solução eficiente.</h2>
        </div>

        <ul className="flex justify-center gap-4 mt-8">
          <FeatureCard
          title="Seu Próprio APP"
          description="Tenha seu próprio aplicativo integrado à sua base de dados existente ou criamos uma para você."
          imageSrc="/assets/icons-svg/mobile.svg"
          buttonText="Quero meu APP"
          onButtonClick={() => alert("Botão clicado!")}
          />
          <FeatureCard
          title="Websites"
          description="Precisa de uma Landing Page para capturar leads ou um site institucional totalmente personalizado e exclusivo? 
          Nós criamos a solução ideal!"
          imageSrc="/assets/icons-svg/website.svg"
          buttonText="Quero meu Site"
          onButtonClick={() => alert("Botão clicado!")}
          />
          <FeatureCard
          title="Automação IA"
          description="Precisa de um assistente virtual humanizado para agendamentos, suporte, vendas e muito mais? Tudo isso diretamente pelo WhatsApp ou integrado ao seu site. "
          imageSrc="/assets/icons-svg/chatbot.svg"
          buttonText="Quero minha própria IA"
          onButtonClick={() => alert("Botão clicado!")}
          />
        </ul>
      </section>

      {/* portfolio */}
      <section className="relative min-h-screen">
        <div className="max-w-[1400px] mx-auto pt-8">
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="w-28 h-1 rounded-sm bg-secundary "></span>
          <h2 className="text-3xl font-bold">Projetos Incríveis</h2>
        </div>

        <div className="flex items-center mb-6 pl-4 gap-3">
          <Image src="/assets/icons-svg/icon-website.svg" alt="icon site" width={36} height={36} />
          <h3 className="text-1xl font-medium">Landing Pages e Sites Institucionais</h3>
        </div>
        <PortfolioCarousel />
        </div>
        
        <Image
          src="/assets/images/divider2.png"
          alt="divisor"
          width={1440} // Valor inicial (será sobrescrito pelo CSS)
          height={123}
          className="absolute bottom-0"
          style={{ width: "100%", height: "auto" }}
        />
      </section>

      <section className="min-h-[678px] pt-8 bg-[url('/assets/images/bg-processos.png')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center gap-4">
        <span className="w-28 h-1 rounded-sm bg-secundary "></span>
        <h2 className="text-3xl font-bold">Processo de Desenvolvimento</h2>
      </div>
    
      <div className="max-w-[1440px] mx-auto pt-8">
        <div className="grid grid-cols-2 max-md:grid-cols-1 place-items-center gap-12">
          <div className="flex gap-4 w-[470px]">
            <Image src="/assets/icons-svg/num-um.svg" alt="rocket" width={96} height={24} />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold">Briefing</h3>
              <p className="text-gray-300 text-sm">Aqui será feito um apanhado geral sobre seu projeto, seus requisitos e necessidades. Por meio de reunião e por um formulário que vou lhe mandar para coletar suas preferências.</p>
            </div>
          </div>
          <div className="flex gap-4 w-[470px]">
            <Image src="/assets/icons-svg/num-dois.svg" alt="rocket" width={96} height={24} />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold">Design e Feedback</h3>
              <p className="text-gray-300 text-sm">Criamos o design inicial com foco na experiência do usuário, alinhando cores, tipografia e layout. Você revisa e fornece feedback para ajustes antes do desenvolvimento.</p>
            </div>
          </div>
          <div className="flex gap-4 w-[470px]">
            <Image src="/assets/icons-svg/num-tres.svg" alt="rocket" width={96} height={24} />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold">Desenvolvimento</h3>
              <p className="text-gray-300 text-sm">Transformamos o design aprovado em um site funcional, utilizando tecnologia de ponta para garantir performance, responsividade e escalabilidade.</p>
            </div>
          </div>
          <div className="flex gap-4 w-[470px]">
            <Image src="/assets/icons-svg/num-quatro.svg" alt="rocket" width={96} height={24} />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold">Otmização e Entrega</h3>
              <p className="text-gray-300 text-sm">Refinamos o projeto para garantir carregamento rápido, SEO eficiente e compatibilidade total. Após testes, fazemos a entrega final, pronto para ser publicado e gerar resultados. </p>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="min-h-[678px]">
        <div className="max-w-[1440px] mx-auto pt-8">
          <div className="bg-[url('/assets/images/banner-contato.png')] bg-cover bg-no-repeat 
          w-[1123px] h-[370px] mx-auto 
          relative
          "
          >
            <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-3xl font-bold">Ficou interesado?</h3>
              <p className="text-gray-300 text-sm">Tem um projeto em mente? <br /> vamos conversar sobre ele! ;)</p>
              <ul className="flex flex-col gap-1 list-none mt-4">
                <li className="flex items-center gap-2">
                  <Image src="/assets/icons-svg/instagram.svg" alt="instagram icon" width={24} height={24} />
                  <p>@gabriel_odev</p>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/assets/icons-svg/tiktok.svg" alt="tiktok icon" width={24} height={24} />
                  <p>@gabrielst21y</p>
                </li>
              </ul>
              <button
              className="flex gap-2 rounded-full w-full justify-center bg-primary 
              px-4 py-2 mt-4 text-white font-medium transition-all duration-200
              text-sm
              " 
              >
                <Image src="/assets/icons-svg/whatsapp.svg" alt="whatsapp icon" width={20} height={20} />
                Entrar em contato
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
