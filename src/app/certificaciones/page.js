// Next.js components
import Link from "next/link";
import Image from "next/image";

// images
import cursos from "@/public/img/cursos.svg";
import heroSection from "@/public/img/hero-section.png";
import ISOimage from "@/public/img/depositphotos_356301122-stock-illustration-iso-9001-icon-standard-quality.jpg";

// Lucide icons
import { Sprout, } from "lucide-react";

// Shandcn UI components

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


// Custom components
import ProgramsCard from "@/components/cards/ProgramsCard";
import estandarIcon from "@/public/img/estandar-de-competencia.svg";
import Footer from "@/components/organisms/Footer";
import MainLink from "@/components/atoms/MainLink";
import CtaButton from "@/components/atoms/CtaButton";
import ButtonAlike from "@/components/atoms/ButtonAlike";

// SVG elements
const Headset = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg>

// Data for components
const estandares = [
  {
    id: "EC0217.01",
    title: "EC0217.01",
    description: "Servicios educativos",
    content: "Impartición de cursos de formación de capital humano de manera presencial grupal",
    snc: "3/5",
    borColor: "border-t-purple-400",
    comite: "Asociación Mexicana de Capacitación de Personal y Empresarial, A.C",
    sector: "Servicios educativos",
    ocupaciones: "Capacitador, facilitador, instructor",
    duracion: "1 hora en gabinete y 2 horas en campo, totalizando 3 horas",
    proposito: "El estándar de competencia impartición de cursos de formación del capital humano de manera presencial y grupal contempla las funciones sustantivas de preparar, conducir y evaluar cursos de capacitación. Preparar la sesión mediante la planeación de la sesión y la comprobación de la existencia y el funcionamiento de los recursos requeridos para la sesión. Conducir la sesión realizando el encuadre, desarrollo y cierre, empleando técnicas instruccionales y grupales que faciliten el proceso de aprendizaje. Evaluar el aprendizaje antes, durante y al final del curso, considerando la satisfacción de los participantes/capacitandos",
    requisitos: "Ninguno",
    icon: estandarIcon,
    price: "$5,000 MXN",
  },
  {
    id: "EC0366",
    title: "EC0366",
    description: "Servicios educativos",
    content: "Desarrollo de cursos de formación en línea",
    snc: "3/5",
    borColor: "border-t-blue-400",
    comite: "Comité de Gestión por Competencias de la Formación para el Trabajo",
    sector: "Servicios educativos",
    ocupaciones: "Instructor y capacitador",
    duracion: "6 horas",
    proposito: "Servir como referente para la evaluación y certificación de las personas que se desempeñan como desarrolladores de cursos para formación en línea.",
    requisitos: "Ninguno",
    icon: estandarIcon,
    price: "$5,500 MXN",
  },
  {
    id: "EC0301",
    title: "EC0301",
    description: "Servicios educativos",
    content: "Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso",
    snc: "3/5",
    borColor: "border-t-orange-400",
    comite: "Asociación Mexicana de Capacitación de Personal y Empresarial. AMECAP, A.C. ",
    sector: "Servicios educativos",
    ocupaciones: "Capacitador, facilitador, instructor",
    duracion: "2 horas en gabinete y 1 hora en campo, totalizando 3 horas",
    proposito: "Servir como referente para la evaluación y certificación de las personas que diseñan cursos de formación del capital humano de manera presencial grupal, diseñando cursos de capacitación presenciales, diseñando instrumentos para la evaluación de cursos de capacitación presenciales y desarrollando manuales del curso de capacitación presenciales",
    requisitos: "Ninguno",
    icon: estandarIcon,
    price: "$5,800 MXN",
  },
]

export default function Certificaciones(params) {
  return (
    <>
      <main className="w-full mt-6">
        <section className="py-2 h-auto">

          <Separator className="my-[5rem]" />
          <div className="container mt-[6rem]">
            <h3 className="text-2xl font-bold">Documentos básicos</h3>
            <div className="flex flex-col lg:flex-row">
              <div className="w-1/3 border rounded-xl px-8 lg:px-10 py-6 dark:bg-slate-900 mt-5 mr-8">
                <p className="text-lg mb-5 leading-6">
                  Derechos y obligaciones de los usuarios del Sistema Nacional de Competencias
                </p>
                <Button className="text-xl text-white bg-teal-500 hover:bg-teal-600 px-5 py-1 mr-2 rounded-md z-10 transition-colors  ease-in-out duration-300">
                  Descargar
                </Button>
              </div>
              <div className="w-1/3 border rounded-xl px-8 lg:px-10 py-6 dark:bg-slate-900 mt-5 mr-8">
                <p className="text-lg mb-5 leading-6">
                  Guía del candidato
                </p>
                <Button className="text-xl text-white bg-teal-500 hover:bg-teal-600 px-5 py-1 mr-2 rounded-md z-10 transition-colors  ease-in-out duration-300">
                  Descargar
                </Button>
              </div>
              <div className="max-w-fit h-fit lg:w-3/12  mt-5 mx-4 lg:mx-0">
                <div className="flex flex-col justify-center items-center bg-slate-100 dark:bg-slate-700 rounded-lg px-6 py-6">
                  <Image src={ISOimage} alt="ISO certification logo" width={50} height={50} className="" />
                  <div className="py-3">
                    <h5 className="text-center text-slate-900 dark:text-slate-200 text-base lg:text-lg font-bold px-3">Secure from the start</h5>
                    <p className="text-center text-muted-foreground dark:text-white text-sm px-3">
                      Procesos de evaluación acreditados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex-grow-0 bg-blue-50/85 dark:bg-gray-900 mt-[6rem]">
          <div className="bg-transparent max-w-28 mx-auto pt-[5rem]">
            <Image
              src={cursos}
              width={140}
              height={140}
              alt="icon for"
              className="w-auto" />
          </div>
          <div className="container w-full pb-10 mt-6">
            <h2 className="scroll-m-20 text-2xl lg:text-3xl text-center font-bold tracking-normal pb-4">
              Explora los programas que tenemos para tí
            </h2>
            <p className="text-muted-foreground text-xl text-center pb-8 mb-[3rem] w-full lg:w-2/3 mx-auto text-pretty">
              Domina las habilidades más demandadas actualmente con capacitación personalizada en áreas como liderazgo, comunicación, marketing digital y más. Creamos las mejores soluciones de preparación y fortalecimiento previo a evaluaciones.
            </p>
            <ProgramsCard />
          </div>
        </section>
        {/* Reclutamiento */}
        <div className="container flex flex-col lg:flex-row justify-center w-11/12lg:w-full h-auto md:h-[26rem] lg:h-[19rem] mb-[7rem] mt-[7rem] px-10 md:px-[4rem] py-8 rounded-xl mx-auto border">
          <div className="px-2 lg:px-6 pb-8 lg:self-start">
            <Sprout
              size={70}
              strokeWidth={1.50}
              className="bg-teal-500 dark:bg-slate-200 text-white dark:text-gray-800 p-3 rounded-full ml-auto mr-auto lg:ml-0" />
            <h3 className="text-center lg:text-left text-3xl font-bold mb-2 mt-8">
              ¿Ya estás certificado y te interesa ser evaluador?
            </h3>
          </div>
          <div className="px-6 pt-10 lg:self-end">
            <p className="text-xl text-center lg:text-left py-3 mb-5">
              Ponte contacto con un asesor y aumenta tus ingresos realizando evaluaciones
            </p>
            <MainLink href="./" linkText="Ver requisitos" />
          </div>
        </div>
        <section className="mx-auto">
          <div className="flex justify-center items-center bg-slate-700 dark:bg-slate-900 py-[4rem] h-auto lg:h-[30rem]">
            <div className="px-2">
              <p className="text-4xl text-center text-white font-bold mb-3">
                ¿Necesitas más ayuda?
              </p>
              <h1 className="text-xl text-center text-slate-300 mb-10">
                Estamos listos para asesorarte. Un experto te ayudará a resolver todas las dudas.
              </h1>
              <Dialog>
                <DialogTrigger className="block w-fit mx-auto">
                  <ButtonAlike ButtonText="Contactar soporte" iconButton={Headset} className="" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <p className="text-xl">Selecciona un tema con el que necesites ayuda.</p>
                    </DialogTitle>
                    <DialogDescription>

                      <p>Lorem Ipsum tido width .</p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}