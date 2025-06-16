// Next.js components
import Image from "next/image";
import Link from "next/link";
// Shadcn UI components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CalendarDays, CalendarClock, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
// Images
import Convencion from "@/public/img/Convencion-2024.jpg";
// Custom components
import MainLink from "@/components/atoms/MainLink";
import SecondaryLink from "@/components/atoms/SecondaryLink";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import Footer from "@/components/organisms/Footer";
import ButtonAlike from "@/components/atoms/ButtonAlike";

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
          <CarouselContent className="p-5 h-[38rem] mb-[5rem] pt-[8rem]">
            <CarouselItem className="dark:bg-slate-900 rounded-2xl py-10 text-gray-900 dark:text-gray-50">
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
          <h2 className="text-3xl font-semibold text-center py-4 mb-[5rem]">Eventos destacados</h2>
          <div className="relative container flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 px-2 text-center pt-10">
              <h3 className="text-4xl font-bold text-gray-800 dark:text-white pt-2 mb-4">
                Convención anual ICEM 2025
              </h3>
              <p className="text-xl mb-4">
                Mejorar tu productividad y fortalecer tu empresa
              </p>
              <span className="w-[7rem] h-[3px] bg-teal-400 block mb-6 mx-auto"></span>
              <div className="text-lg max-h-fit mt-10 mb-8">
                <div className="flex mb-6 justify-center">
                  <MapPin /><p className="pl-4 mr-6">Lugar: Cancún, México</p>
                  <CalendarClock /><p className="pl-4">Fecha: noviembre 29, 2025</p>
                </div>
                <Sheet>
                  <SheetTrigger>
                    <div
                      className="w-full inline-block font-normal text-white text-center bg-teal-500 hover:bg-teal-600 px-4 py-3 rounded-sm transition-colors ease-in-out duration-300">
                      <span className="px-3 text-xl">Reservar lugar</span>
                    </div>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="text-xl font-light">Reservar lugar</SheetTitle>
                      <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
                <p className="pt-10 text-lg">Impartido por: Dra. Elisa Martínez A.</p>
              </div>
            </div>
            <Image src={Convencion} alt="Convención anual 2024" className="w-full lg:w-1/2 rounded-2xl" />
            <span className="absolute top-4 lg:-top-10 left-1/6 lg:left-[10rem] inline-block w-full lg:w-4/5 h-[33rem] bg-gradient-to-b lg:bg-gradient-to-r from-transparent from-20% dark:from-5% md:from-2% to-slate-200 dark:to-slate-600 to-27% rounded-2xl -z-10"></span>
          </div>
        </section>

        <section className="container mt-[8rem]">
          <h2 className="text-3xl font-bold py-4 mb-[5rem]">Nuestros presentadores</h2>

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
              <Sheet>
                <SheetTrigger className="w-full">
                  <div
                    className="font-bold text-white text-center bg-teal-500 hover:bg-teal-600 px-4 py-3 rounded-sm transition-colors ease-in-out duration-300">
                    <span className="px-3 text-xl">Reservar lugar</span>
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Reserva lugar</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div className="border rounded-md shadow-lg w-full lg:w-1/3">
            </div>
            <div className="border rounded-md shadow-lg w-full lg:w-1/3">
            </div>
          </div>
        </section>
        <section className="container flex flex-col md:flex-row justify-between mt-[8rem] mb-10">
          <h3 className="text-3xl font-bold">Conoce información importante de los eventos</h3>
        </section>
      </main>
      <Footer />
    </>
  );
}