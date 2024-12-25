// Next.js components
import Link from "next/link";
import Image from "next/image";

// images
import resultados from "@/public/img/consulta-resultados.svg";
import heroSection from "@/public/img/hero-section.png";
import ISOimage from "@/public/img/depositphotos_356301122-stock-illustration-iso-9001-icon-standard-quality.jpg";

// Shandcn UI components

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lightbulb, BookOpenCheck, Hammer, Medal, User, Sprout, Building2, GraduationCap, Store, HeartHandshake, File, BookMarked, ShieldCheck, Brain, Check, Award, Trophy } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Custom components
import ProgramsCard from "@/components/cards/ProgramsCard";
import estandarIcon from "@/public/img/estandar-de-competencia.svg";
import Footer from "@/components/organisms/Footer";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import MainLink from "@/components/atoms/MainLink";
import SecondaryLink from "@/components/atoms/SecondaryLink";

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
      <header className="w-full py-2 mb-1">
        <div className="container z-20 flex flex-col-reverse lg:flex-row h-auto lg:h-[30rem] justify-center items-center">
          <div className="relative w-full lg:w-3/5 flex flex-col justify-normal items-center lg:items-start rounded-lg text-slate-800 dark:text-slate-200 py-2 lg:py-8 mt-2 lg:mt-10">
            <h1 className="w-4/5 text-2xl md:text-4xl text-left font-bold md:leading-[2.5rem] pt-5 pb-4 pr-5">Certificación de Competencias Laborales
            </h1>
            <span className="w-[3.5rem] h-[5px] bg-teal-400 inline-block mb-6"></span>
            <p className="w-4/5 text-lg md:text-xl text-left text-slate-500 py-1 mb-4 pr-5 lg:pr-10">
              Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu área
            </p>
            <ul className="px-6 lg:px-2 py-3">
              <li className="flex p-1 items-center"><Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-teal-500 min-w-4 min-h-4 rounded-full" /> <span className="text-slate-700 dark:text-slate-400 pl-2">Certificados con validez oficial de <strong className="whitespace-nowrap">SEP-CONOCER</strong></span></li>
              <li className="flex p-1 items-center"><Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-teal-500 min-w-4 min-h-4 rounded-full" /> <span className="text-slate-700 dark:text-slate-400 pl-2">Procesos ágiles de certificación</span></li>
              <li className="flex p-1 items-center"><Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-teal-500 min-w-4 min-h-4 rounded-full" /> <span className="text-slate-700 dark:text-slate-400 pl-2">Sin requisitos académicos</span></li>
            </ul>
            <SecondaryButton href="./" linkText="Comienza tu certificación" />
          </div>
          <div className="relative w-3/5 lg:w-2/5 px-0 lg:px-10 mx-auto">
            <Image
              src={heroSection}
              width="100%"
              height="teal"
              alt="image with some people" />
          </div>
        </div>
        <div className="container mb-[4rem]">
          <Separator className="mb-8 lg:mb-2" />
          <div className="flex justify-center lg:justify-end items-center pt-4">
            <Image src={ISOimage} alt="ISO certification logo" width={50} height={50} className="" />
            <div>
              <h5 className="text-slate-900 dark:text-slate-200  text-base lg:text-lg font-bold px-6">Secure from the start, and throughout</h5>
              <p className="text-muted-foreground dark:text-white text-sm px-6">
                Procesos de evaluación acreditados
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full">
        <section className="py-2 h-auto">
          {/* Estándares disponibles */}
          <div className="w-full lg:container">
            <div className="flex items-center justify-start">
              <Trophy
                absoluteStrokeWidth={true}
                size={22}
                strokeWidth={1.50}
                className="text-slate-500 dark:text-slate-100 min-w-6 min-h-6" />
              <p className="text-left text-base text-slate-500 px-4 py-[0.3rem] rounded-full leading-wider tracking-widest font-bold w-fit">EMPIEZA AQUÍ</p>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-center md:text-left pb-6 pt-[1.8rem] mb-[1.8rem]">
              Certificaciones disponibles con <span className="bg-teal-200 whitespace-nowrap px-3 rounded-md text-gray-900 font-bold">Proyecta Empresarial</span>
            </h4>
            <div className="flex flex-col lg:flex-row py-6 mb-[2rem]">
              <Tabs defaultValue="educativo" className="w-full md:w-9/12">
                <TabsList className="overflow-x-scroll no-scrollbar overflow-y-hidden">
                  <TabsTrigger value="educativo" className="rounded-full">
                    <span className="inline">Sector educativo</span>
                  </TabsTrigger>
                  <TabsTrigger value="empresarial" className="rounded-full">
                    <span className="inline">Sector empresarial</span>
                  </TabsTrigger>
                  <TabsTrigger value="gobierno" className="rounded-full">
                    <span className="inline">Sector gobierno</span>
                  </TabsTrigger>
                  <TabsTrigger value="social" className="rounded-full">
                    <span className="inline">Sector social</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="educativo" className="lg:pr-[4rem] px-0">
                  <Table className="mt-2">
                    <TableCaption>
                      <p className="w-full">Certificaciones</p>
                    </TableCaption>
                    <TableHeader className="text-xl font-bold">
                      <TableRow className="">
                        <TableHead
                          className="w-2/12 md:1/6 lg:w-1/5">
                          Código EC</TableHead>
                        <TableHead
                          className="w-7/12 md:4/6 lg:w-3/5">
                          Estándar de competencia</TableHead>
                        <TableHead
                          className="w-3/12 md:1/6 lg:w-1/5">
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="text-xl">
                      {estandares.map(
                        (estandar => {
                          return (
                            <TableRow
                              key={estandar.id}
                              className="group/item">
                              <TableCell className="text-left text-base lg:text-xl">{estandar.title}</TableCell>
                              <TableCell className="pl-2 pr-0 md:px-3 lg:px-2">
                                <Drawer className="relative">
                                  <DrawerTrigger className="text-left text-base lg:text-xl">
                                    {estandar.content}
                                  </DrawerTrigger>
                                  <DrawerContent>
                                    <ScrollArea>
                                      <DrawerHeader className="flex w-full">
                                        <div className="content-center w-full mt-10 md:mt-4">
                                          <DrawerTitle className="text-2xl mb-2 bg-slate-200 text-slate-800 rounded-sm py-4 px-4">
                                            {estandar.content}
                                          </DrawerTitle>
                                          <DrawerDescription
                                            className="text-lg">
                                            Detalles del estándar de compencia
                                          </DrawerDescription>
                                          <Separator className="mt-3 w-full" />
                                        </div>
                                      </DrawerHeader>

                                      <div className="w-full text-xl text-gray-700 dark:text-gray-400 lg:w-1/2 mx-auto px-5 py-2">
                                        <h2 className="text-2xl mb-5">{estandar.title}</h2>
                                        <p className="mb-6">
                                          <span className="text-slate-800 dark:text-gray-200 font-bold">
                                            Propósito: </span>
                                          {estandar.proposito}
                                        </p>
                                        <ul className="w-full text-lg mb-3 border rounded-sm px-3 lg:px-8 py-3">
                                          <li className="flex py-1">
                                            <div className="bg-slate-100 dark:bg-slate-700 w-fit max-h-10 rounded-full px-2 py-2 mb-1">
                                              <User className="text-slate-800 dark:text-slate-100 min-w-6 min-h-6" />
                                            </div>
                                            <p className="mb-3 px-4">
                                              <span className="text-slate-800 dark:text-gray-200 font-bold">Ocupaciones asociadas: </span>
                                              {estandar.ocupaciones}
                                            </p>
                                          </li>
                                          <li className="flex py-1">
                                            <div className="bg-slate-100 dark:bg-slate-700 w-fit max-h-10 rounded-full px-2 py-2 mb-1">
                                              <Brain className="text-slate-800 dark:text-slate-100 min-w-6 min-h-6" />
                                            </div>
                                            <p className="mb-3 px-4">
                                              <span className="text-slate-800 dark:text-gray-200 font-bold">Nivel en el Sistema Nacional de Competencia: </span>
                                              {estandar.snc}
                                            </p>
                                          </li>
                                          <li className="flex py-1">
                                            <div className="bg-slate-100 dark:bg-slate-700 w-fit max-h-10 rounded-full px-2 py-2 mb-1">
                                              <BookMarked className="text-slate-800 dark:text-slate-100 min-w-6 max-h-6" />
                                            </div>
                                            <p className="mb-3 px-4">
                                              <span className="text-slate-800 dark:text-gray-200 font-bold">Comité desarrollador: </span>
                                              {estandar.comite}
                                            </p>
                                          </li>
                                        </ul>
                                        <p className="text-sm text-muted-foreground py-4 mt-5">Descarga el formato completo del estándar de competencia</p>
                                        <Button
                                          variant="outline"
                                          className="py-6 pl-3 pr-5 text-xl text-gray-800 dark:text-gray-200 hover:text-white hover:bg-gray-800 text-center  dark:hover:bg-gray-600 mb-3">
                                          <span className="pl-3 pr-3 py-6">Descargar</span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                        </Button>
                                      </div>
                                      <Separator className="mt-1 w-full" />
                                      <DrawerFooter className="w-full lg:w-1/2 mx-auto">
                                        <div className="flex flex-row place-content-end items-center">
                                          <p className="text-2xl text-red-500 dark:text-red-400 font-bold mr-8 md:mr-10">
                                            <span className="text-sm text-muted-foreground font-thin line-through">{estandar.price}</span> {estandar.price}
                                          </p>
                                          <SecondaryButton href="./" linkText="Obtener" />
                                        </div>
                                        <DrawerClose className="absolute top-0 left-3 mx-auto hover:bg-slate-100 hover:text-teal-600 dark:hover:bg-slate-800 rounded-full transition-colors ease-in-out duration-300 z-20">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="48"
                                            height="48"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-circle"><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                        </DrawerClose>

                                      </DrawerFooter>
                                    </ScrollArea>
                                  </DrawerContent>
                                </Drawer>
                              </TableCell>
                              <TableCell className="text-right px-0 lg:px-2">
                                <Link href="./" className="group/details visible lg:invisible lg:group-hover/item:visible text-base lg:text-xl text-teal-600 dark:text-teal-400 group-hover/details:text-teal-700 hover:text-white dark:hover:text-white hover/item:bg-teal-500 pl-3 pr-1 lg:pl-4 lg:pr-2 py-2 mr-2 rounded-full z-10 transition-colors ease-in-out duration-300">Obtener
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-right ml-1 origin-left inline transition group-hover/details:translate-x-1 group-hover/details:text-white"><path d="m6 17 5-5-5-5" /></svg>
                                </Link>
                              </TableCell>
                            </TableRow>
                          )
                        })
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="empresarial">
                  Certificaciones disponibles para el sector productivo
                </TabsContent>
                <TabsContent value="gobierno">
                  Certificaciones para el sector del servicio público
                </TabsContent>
                <TabsContent value="social">
                  Certificaciones para las organizaciones sociales
                </TabsContent>
              </Tabs>
              <div className="max-w-fit h-fit lg:w-3/12  mt-[3rem] lg:mt-[5rem] mx-4 lg:mx-0 ">
                <div className="border rounded-xl px-8 lg:px-10 py-6 dark:bg-slate-900">
                  <h3 className="text-xl font-bold mb-2">Documentos básicos</h3>
                  <p className="text-lg mb-5 leading-6">
                    Derechos y obligaciones de los usuarios del Sistema Nacional de Competencias
                  </p>
                  <Button className="text-xl text-white bg-teal-500 hover:bg-teal-600 px-5 py-1 mr-2 rounded-md z-10 transition-colors  ease-in-out duration-300">
                    Descargar
                  </Button>
                </div>

              </div>

            </div>
          </div>
        </section>
        <section className="flex-grow-0 bg-blue-50/85 dark:bg-gray-900 mt-[6rem]">
          <div className="bg-transparent max-w-28 mx-auto pt-[5rem]">
            <Image
              src={resultados}
              width={140}
              height={140}
              alt="icon for"
              className="w-auto" />
          </div>
          <div className="container w-full pb-10 mt-6">
            <h2 className="scroll-m-20 text-2xl lg:text-3xl text-center font-bold tracking-normal pb-4">
              Explora los programas que tenemos para tí
            </h2>
            <p className="text-2xl text-center text-gray-500 pb-8 mb-[5rem] w-full lg:w-2/3 mx-auto text-pretty">
              Creamos las mejores soluciones de preparación y fortalecimiento previo a evaluaciones.
            </p>
            <ProgramsCard />
          </div>
        </section>
        <section className="mx-auto mb-15 py-10 mt-[3rem] mb-[2rem]">
          <div className="py-[7rem] px-5 lg:px-0 mb-[5rem]">
            {/* <Accordion 
              type="single" 
              collapsible 
              className="w-full md:w-4/5 m-auto ">
              <h2 className="text-3xl font-bold pt-6 pb-3">
                Preguntas frecuentes
              </h2>
              <p className="
                text-muted-foreground 
                text-xl 
                mb-[3rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <AccordionItem value="item-1">
                <AccordionTrigger className="
                text-pretty 
                text-left
                text-slate-600
                dark:text-slate-300 
                font-bold">¿En cuanto tiempo me entregan mi certificado?</AccordionTrigger>
                <AccordionContent className="
                text-pretty 
                text-muted-foreground 
                py-8">
                  En promedio, 30 días a partir de la evaluación
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-pretty text-left text-slate-600 dark:text-white font-bold">¿Qué es una alineación?</AccordionTrigger>
                <AccordionContent className="
                  text-pretty 
                  text-muted-foreground 
                  py-8">
                  La alineación es
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="
                  text-pretty 
                  text-left
                  text-slate-600 
                  dark:text-slate-300 
                  font-bold">
                    ¿Puedo hacer la evaluación en línea?
                </AccordionTrigger>
                <AccordionContent className="
                  text-pretty 
                  text-muted-foreground 
                  py-8">
                  En algunos casos, dependiendo del estándar de competencia al que estés aplicando. Algunos estándares de competencia lo permiten, mientras que otros no.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="
                  text-pretty 
                  text-left
                  text-slate-600 
                  dark:text-slate-300 
                  font-bold">
                    ¿Cuál es el costo de la evaluación diagnóstica?
                </AccordionTrigger>
                <AccordionContent className="
                  text-pretty 
                  text-muted-foreground 
                  py-8">
                  Ninguno. La evalución diagnóstica la ofrecemos gratis.
                </AccordionContent>
              </AccordionItem>
            </Accordion> */}
          </div>
          <div className="flex justify-center items-center bg-slate-700 dark:bg-slate-900 py-[4rem] h-auto lg:h-[24rem] mb-[5rem]">
            <div className="px-2">
              <p className="text-4xl text-center text-white font-bold mb-3">
                ¿Necesitas más ayuda?
              </p>
              <h1 className="text-xl text-center text-slate-300 mb-10">
                Estamos listos para asesorarte. Un experto te ayudará a resolver todas las dudas.
              </h1>
              <Button
                className="
                    text-xl
                    text-center
                    text-white 
                    bg-teal-500
                    hover:bg-teal-600 
                    px-5 
                    py-1
                    rounded-md 
                    z-10 
                    transition-colors 
                    ease-in-out 
                    duration-300
                    block
                    max-w-min
                    mx-auto">Contactar
              </Button>
            </div>
          </div>
        </section>
        {/* Reclutamiento */}
        <div className="container flex flex-col lg:flex-row justify-center w-11/12lg:w-full h-auto md:h-[26rem] lg:h-[19rem] mb-[7rem] mt-[1rem] px-10 md:px-[4rem] py-8 rounded-xl mx-auto border">
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
            <MainLink href="./" linkText="Contactar ahora" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}