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
        </div>
      </main>

      <div className="min-h-96">

      </div>
    </div>
  );
}
