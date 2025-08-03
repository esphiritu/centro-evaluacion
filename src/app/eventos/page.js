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
import { CalendarDays, CalendarClock, Clock, MapPin, ArrowRight } from "lucide-react";
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

// Shadcn UI components
import { Separator } from "@/components/ui/separator";

export default function Socios() {
  return (
    <>
      <main className="w-full pt-20">
        <div className="container py-10 space-y-5">
          <p className="text-2xl font-bold">EN VIVO 1 de agosto, 7:35 a.m. EDT (1135 UTC)</p>
          <Separator className="w-full mx-auto mb-8" />
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Foro Internacional de Consultoría y Capacitación</h1>
            <p className="text-xl mt-4">Cobertura en vivo de todas las pláticas con los invitados especiales</p>
            <ArrowRight size={30} className="text-white top-5 left-7 bg-blue-500 rounded-full p-1 z-20" />
          </div>
        </div>


        <section>
          <h2 className="text-3xl font-semibold text-center py-4 mb-20">Eventos destacados</h2>
          <div className="relative container flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 px-2 text-center pt-10">
              <h3 className="text-4xl font-bold text-gray-800 dark:text-white pt-2 mb-4">
                Convención anual ICEM 2025
              </h3>
              <p className="text-xl mb-4">
                Mejorar tu productividad y fortalecer tu empresa
              </p>
              <span className="w-28 h-[3px] bg-teal-400 block mb-6 mx-auto"></span>
              <div className="text-lg max-h-fit mt-10 mb-8">
                <p className="pb-10 text-lg">Impartido por: Dra. Elisa Martínez A.</p>
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
                <div className="flex mt-10">
                  <MapPin /><p className="pl-4 mr-6">Lugar: Cancún, México</p>
                  <CalendarClock /><p className="pl-4">Fecha: noviembre 29, 2025</p>
                </div>

              </div>
            </div>
            <Image src={Convencion} alt="Convención anual 2024" className="w-full lg:w-1/2 rounded-2xl" />
            <span className="absolute top-4 lg:-top-10 left-1/6 lg:left-40 inline-block w-full lg:w-4/5 h-132 bg-linear-to-b lg:bg-linear-to-r from-transparent from-20% dark:from-5% md:from-2% to-gray-100 dark:to-slate-600 to-27% rounded-2xl -z-10"></span>
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
        <section className="container flex flex-col md:flex-row justify-between mt-32 mb-10">
          <h3 className="text-3xl font-bold">Conoce información importante de los eventos</h3>

        </section>
      </main>
      <Footer />
    </>
  );
}