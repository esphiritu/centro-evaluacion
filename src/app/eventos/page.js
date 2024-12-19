// Next.js components
import Image from "next/image";
// Shadcn UI components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CalendarDays, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
// Images
import Convencion from "@/public/img/Convencion-2024.jpg";
// Custom components
import MainLink from "@/components/atoms/MainLink";
import SecondaryLink from "@/components/atoms/SecondaryLink";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import Footer from "@/components/organisms/Footer";

// Lucide icons
import { Check } from "lucide-react";

export default function Socios() {
  return (
    <>
      <main className="w-full pt-10">
        <Carousel opts={{
          align: "center",
          loop: true,
        }}
        // autoplay={2900}
        >
          <CarouselContent className="p-5 h-[38rem] mb-[5rem]">
            <CarouselItem className="bg-gray-200 dark:bg-slate-900 rounded-2xl py-10 text-gray-900 dark:text-gray-50">
              <div className="px-[10rem]">
                <div className="mt-10 h-1/2">
                  <h1 className="font-bold text-xl md:text-3xl text-center mt-10 mb-6">Retos de la productividad de las
                    <span className="
                      before:block 
                      before:absolute 
                      before:-inset-1 
                      before:-skew-y-2 
                      before:bg-teal-600 
                      before:rounded-md 
                      relative 
                      inline-block 
                      ml-2">
                      <span className="relative text-white text-center px-1">
                        empresas manufactureras
                      </span>
                    </span></h1>
                  <p className="mb-10 text-lg">Impartido por: Elisa M. A.</p>
    
                </div>
                {/* Información general del evento */}
                <div className="flex flex-col lg:flex-row justify-between mt-8 items-center">
                  {/* Fecha y hora del evento */}
                  <div className="flex">
                    <div className="flex items-center mb-4">
                      <Clock className="size-6" />
                      <time className="uppercase text-left text-xl font-light px-5" dateTime="20:00">8:00 pm</time>
                    </div>
                    <div className="flex mb-4 items-center">
                      <CalendarDays className="size-6" />
                      <time dateTime="2024-09-28" className="uppercase text-left text-xl font-light px-5">28 SEP 2024</time>
                    </div>
                  </div>
                  
                  <Button className="bg-teal-600 hover:bg-teal-700 px-4 text-lg text-white font-extrabold mt-5">Regístrate</Button>
                </div>
                <p className="text-base md:text-lg text-right mt-6"><span className="font-bold">Webinar gratuito.</span> Cupo limitado</p>
              </div>
  
            </CarouselItem>
            <CarouselItem>
              <h1 className="text-2xl md:text-3xl">Presentación del libro</h1>
            </CarouselItem>
            <CarouselItem>
              <h1 className="text-2xl md:text-3xl">Conferencia Digital</h1>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <section>
          <h2 className="text-3xl font-semibold text-center py-4 mb-[5rem]">Eventos de Proyecta Empresarial</h2>
          <div className="relative container flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 px-8 text-center">
              <h3 className="text-2xl font-semibold mb-2">Conferecia digital</h3>
              <p className="text-xl">Mejorar tu productividad y fortalecer tu empresa</p>
              <div className="text-lg max-h-fit mt-10 mb-10">
                <p className="font-bold mb-3">Aprenderás:</p>
                <ol className="mb-10">
                  <li className="flex justify-center items-center py-1"><Check size={20} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-teal-600 min-w-7" /> Buen manejo del estrés</li>
                  <li className="flex justify-center items-center py-1"><Check size={20} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-teal-600 min-w-7" /> Mejorar la comunicación</li>
                </ol>
                <SecondaryButton linkText="Participar" href="./" />
              </div>
            </div>
            <Image src={Convencion} alt="Convención anual 2024" className="w-full lg:w-1/2 rounded-2xl" />
            <span className="absolute top-4 lg:-top-10 left-1/6 lg:left-10 inline-block w-full lg:w-3/4 h-[33rem] bg-gradient-to-b lg:bg-gradient-to-r from-transparent from-20% md:from-10% to-blue-200 to-17% rounded-2xl -z-10"></span>
          </div>
        </section>
  
        <section className="mt-[8rem]">
          <h2 className="text-3xl font-semibold text-center py-4 mb-[5rem]">Nuestros presentadores</h2>
  
        </section>

        <section className="container flex flex-col md:flex-row justify-between mt-[8rem] mb-10">
          <h3 className="text-3xl font-bold">Eventos programados</h3>
        </section>
  
      </main>
      <Footer />
    </>
  );
}