// Next.js components
import Image from "next/image";

// Lucide icons
import { Check } from "lucide-react";

// Custom components
import Footer from "@/components/organisms/Footer";

// Shadcn UI components
import { Separator } from "@/components/ui/separator";


export default function Estandar() {
  return (
    <>
      <main className="w-full pt-20">
        <div className="container py-10 space-y-5">
          <p className="text-2xl font-bold">EN VIVO 1 de agosto, 7:35 a.m. EDT (1135 UTC)</p>
          
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Foro Internacional de Consultoría y Capacitación</h1>
            <p className="text-xl mt-4">Cobertura en vivo de todas las pláticas con los invitados especiales</p>
            
          </div>
        </div>
        

        <section>
          <h2 className="text-3xl font-semibold text-center py-4 mb-20">Eventos destacados</h2>
          <div className="relative container flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 px-2 text-center pt-10">
              
            </div>
            
          </div>
        </section>

        <section className="container mt-32">
          <h2 className="text-3xl font-bold py-4 mb-20">Nuestros presentadores</h2>

        </section>
        <section className="container mb-10">
          <h3 className="text-3xl font-bold mb-6">Próximos eventos</h3>
          <div className="flex flex-col lg:flex-row space-x-10">
            <div className="border rounded-xl shadow-lg w-full lg:w-1/3 px-8 py-7">
              <h2 className="text-2xl mb-8 mt-2">
                Estrategias de Marketing Digital
              </h2>
              <div className="flex space-x-5 mb-9">
                <div className="w-fit border rounded-xl px-4 py-2 leading-[0.7]">
                  <time dateTime="2008-02-14 20:00"><span className="text-3xl text-center font-bold">14</span><br /><span className="pl-1 text-red-600 dark:text-red-400">Feb</span></time>
                </div>
                <div>
                  <p className="text-lg">Taller presencial</p>
                  <p className="text-xl font-bold"><time dateTime="18:00">18:00 horas</time></p>
                </div>
              </div>
              
            </div>
            <div className="border rounded-md shadow-lg w-full lg:w-1/3">
            </div>
            <div className="border rounded-md shadow-lg w-full lg:w-1/3">
            </div>
          </div>
        </section>
        <section className="container flex flex-col md:flex-row justify-between mt-32 mb-10">
          <h3 className="text-3xl font-bold">Conoce información importante de los eventos</h3>

        </section>
      </main>
      <Footer />
    </>
  );
}