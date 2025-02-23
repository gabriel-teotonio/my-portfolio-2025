"use client"; // Se estiver usando Next.js App Router

import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function FeatureCard({
  title,
  description,
  imageSrc,
  buttonText,
  onButtonClick,
}: FeatureCardProps) {
  return (
    <li
      className="w-[400px] flex flex-col items-center gap-12 justify-between
      bg-[url('/assets/images/bg-card.png')] bg-cover bg-no-repeat p-4
      border-slate-50 border-opacity-15 border-2 rounded-lg"
    >
      {/* Título e Descrição */}
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>

      {/* Imagem e Botão */}
      <div className="flex flex-col w-full gap-4">
        <Image
          src={imageSrc}
          alt={title}
          width={150}
          height={180}
          className="self-center"
        />
        <button
          onClick={onButtonClick}
          className="w-full bg-secundary bg-opacity-10 rounded-md border-2 
          border-slate-50 border-opacity-20 p-1 hover:bg-secundary hover:text-white 
          transition-all duration-200 text-sm"
        >
          {buttonText}
        </button>
      </div>
    </li>
  );
}
