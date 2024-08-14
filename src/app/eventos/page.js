import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CalendarDays, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Socios() {
    return (
    <main className="w-full pt-19">
      <Carousel opts={{
          align: "center",
          loop: true,
        }}
          autoplay={2900}
        >
          <CarouselContent className="p-0 md:p-5 h-[38rem]">
            <CarouselItem className="bg-gray-100 dark:bg-slate-900 rounded-md py-10 px-6 md:px-10 text-gray-900 dark:text-gray-50">
              <p className="text-xl md:text-2xl text-left">Estás invitad@ al <span className="font-bold">webinar gratuito</span></p>
              <h1 className="font-bold text-3xl md:text-5xl text-[#7369E2] text-center mt-10">Estrategias para aumentar productividad</h1>
              <p className="mb-10 text-lg">Impartido por: Elisa M. A.</p>

              {/* Temario del evento */}
              <div className="text-xl">
                <p className="">Aprenderás:</p>
                <ol className="">
                  <li>Buen manejo del estrés</li>
                  <li>Mejorar la comunicación</li>
                </ol>

              </div>
              <div className="flex flex-col lg:flex-row md:justify-around mt-8 items-center md:items-stretch">
                {/* Fecha y hora del evento */}
                <div className="flex items-center mb-4">
                  <Clock className="size-7" />
                  <time className="uppercase text-left text-2xl font-light px-5" dateTime="20:00">8:00 PM</time>
                </div>
                <div className="flex mb-4 items-center">
                  <CalendarDays className="size-7" />
                  <time dateTime="2024-09-28" className="uppercase text-left text-2xl font-light px-5">28 SEP 2024</time>
                </div>
                {/* Team leader */}
                <div className="">
                  <p>Cupo limitado</p>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 px-4 text-lg text-white font-extrabold mt-5">Regístrate ahora</Button>
              </div>
            </CarouselItem>
            <CarouselItem>
              <h1 className="text-2xl md:text-3xl">Descarga la guía del candidato</h1>
            </CarouselItem>
            <CarouselItem>
              <h1 className="text-2xl md:text-3xl">Asiste al evento presencial</h1>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      <h2 className="text-2xl font-semibold py-4">¿Ya estás certificado y te interesa ser evaluador?</h2>
    </main>
    );
  }