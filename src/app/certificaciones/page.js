// Next.js components
import Link from "next/link";
import Image from "next/image";

// images
import cursos from "@/public/img/cursos.svg";
import heroSection from "@/public/img/hero-section.png";
import ISOimage from "@/public/img/depositphotos_356301122-stock-illustration-iso-9001-icon-standard-quality.jpg";
import logoRedConocer from "@/public/img/logotipo-redConocer.png";
import logoICEM from "@/public/img/Logo-ICEM.jpg";

// Lucide icons
import { 
  Sprout, 
  User, 
  Brain, 
  BookMarked, 
  FileInput, 
  FileText, 
  FlaskConical, 
  TextSearch, 
  SquareArrowOutUpRight,
  ArrowDownToLine, 
} from "lucide-react";

// Shandcn UI components

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
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



// Custom components
import estandarIcon from "@/public/img/estandar-de-competencia.svg";
import Footer from "@/components/organisms/Footer";
import MainLink from "@/components/atoms/MainLink";
import ButtonAlike from "@/components/atoms/ButtonAlike";
import SecondaryButton from "@/components/atoms/SecondaryButton";

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
      <main className="w-full mt-6 pt-[8rem]">
        <section>
          {/* Estándares disponibles */}
          <div className="w-full lg:container mb-10" id="certificaciones">
            <h4 className="text-2xl md:text-3xl font-bold text-center pb-6 pt-[1.8rem] mb-[2.4rem]">
              Estándares de competencia disponibles con Proyecta Empresarial
            </h4>
            <div className="flex flex-col lg:flex-row py-6 mb-[2rem]">
              <Tabs defaultValue="educativo" className="w-full md:w-11/12">
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
                      <p className="w-full">Consulta una lista completa de los estándares de competencia en CONOCER</p>
                    </TableCaption>
                    <TableHeader className="text-xl bg-transparent">
                      <TableRow className="">
                        <TableHead
                          className="w-2/12 md:1/6 lg:w-1/5 py-4">
                          Código EC</TableHead>
                        <TableHead
                          className="w-7/12 md:4/6 lg:w-3/5 py-4">
                          Estándar de competencia</TableHead>
                        <TableHead
                          className="w-3/12 md:1/6 lg:w-1/5 py-4">
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
                              <TableCell className="text-teal-600 text-left text-base lg:text-xl"><span className="bg-teal-100 px-3 py-2 rounded-sm">{estandar.title}</span></TableCell>
                              <TableCell className="pl-2 pr-0 md:px-3 lg:px-2">
                                <Drawer className="relative">
                                  <DrawerTrigger className="text-left text-base lg:text-xl">
                                    {estandar.content}
                                  </DrawerTrigger>
                                  <DrawerContent>
                                    <ScrollArea>
                                      <DrawerHeader className="flex w-full">
                                        <div className="content-center w-full mt-10 md:mt-4">
                                          <DrawerTitle className="text-2xl mb-6 border border-collapse border-slate-200 shadow-md text-slate-800 rounded-sm py-4 px-6">
                                            <div className="flex flex-row items-center justify-start space-x-7">
                                              <h2 className="text-2xl text-teal-600">{estandar.title}</h2>
                                              <p className="text-slate-900 dark:text-slate-300">{estandar.content}</p>
                                            </div>
                                          </DrawerTitle>
                                          <DrawerDescription
                                            className="text-lg">
                                            Detalles del estándar de compencia
                                          </DrawerDescription>
                                          <Separator className="mt-3 w-full" />
                                        </div>
                                      </DrawerHeader>

                                      <div className="w-full text-xl text-gray-700 dark:text-gray-400 lg:w-1/2 mx-auto px-5 py-2">
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
                                              <span className="text-slate-800 dark:text-gray-200 font-bold">Nivel de Competencia: </span>
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
                                        <div>
                                          <Button
                                            variant="link"
                                            className="py-6 pl-3 pr-5 mt-2 text-xl">
                                            <ArrowDownToLine className="inline-block max-w-5"/>
                                            <span className="pl-3 pr-3 py-6">PDF</span>
                                          </Button>
                                          <p className="text-sm text-muted-foreground py-2">Descarga la información completa del estándar de competencia</p>
                                        </div>
                                        <div>
                                          <MainLink href="./" linkText="Agendar prueba diagnóstica" />
                                        </div>
                                      </div>
                                      <Separator className="mt-1 w-full" />
                                      <DrawerFooter className="w-full lg:w-1/2 mx-auto">
                                        <div className="flex flex-row place-content-end items-center">
                                          <p className="text-2xl text-red-500 dark:text-red-400 font-bold mr-8 md:mr-10">
                                            <span className="text-sm text-muted-foreground font-thin line-through">{estandar.price}</span> {estandar.price}
                                          </p>
                                          <SecondaryButton href="./" linkText="Obtener" />
                                        </div>
                                        <div className="group">
                                          <DrawerClose className="absolute top-0 right-5 mx-auto hover:bg-slate-100 text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 rounded-full transition-colors ease-in-out duration-300 z-20">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="48"
                                              height="48"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="1.25"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="lucide lucide-circle"><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                            <div className="absolute right-1 lg:right-2 translate-x-0 lg:translate-x-1/2 translate-y-2 mt-3 flex-col items-center hidden group-hover:flex z-50">
                                              <span className="relative mr-[2rem] rounded-md z-60 p-2 text-sm leading-none text-white dark:text-black text-nowrap bg-black dark:bg-slate-400 shadow-lg">
                                                <p className="pt-1 pb-1">Cerrar</p>
                                              </span>
                                            </div>
                                          </DrawerClose>

                                        </div>

                                      </DrawerFooter>
                                    </ScrollArea>
                                  </DrawerContent>
                                </Drawer>
                              </TableCell>
                              <TableCell className="text-right px-0 lg:px-2">
                                <Link href="./" className="group/details visible lg:invisible lg:group-hover/item:visible text-base lg:text-xl text-teal-600 dark:text-teal-400 group-hover/details:text-teal-700 hover:text-white dark:hover:text-white hover/item:bg-teal-500 pl-3 pr-1 lg:pl-4 lg:pr-2 py-2 mr-2 rounded-md z-10 transition-colors ease-in-out duration-300">Obtener
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
            </div>
          </div >
        </section>
        <section className="container py-10 mt-[9rem]">
          <h4 className="text-3xl font-bold pt-[6rem] mb-4">Guía completa para tu certificación</h4>
          <p className="w-full lg:w-5/6 text-xl text-muted-foreground">Una explicación detallada y clara del proceso completo, desde la solicitud inicial hasta la emisión del certificado.</p>
        </section>
        <section className="py-2 h-auto">
          <Separator className="my-[5rem]" />
          <div className="container mb-10">
            <h3 className="text-3xl font-bold mb-10">Herramientas para tu avance</h3>
            <div className="flex flex-col lg:flex-row space-x-10">
              <Link href="./proceso" className="w-full lg:w-1/3">
                <div className="border rounded-xl shadow-none hover:shadow-xl px-8 py-[3rem]">
                  <FileInput size={42} className="mx-auto mb-6 text-teal-500" />
                  <h2 className="text-2xl text-center font-bold mb-8">
                    Envía tu solicitud de evaluación
                  </h2>
                  <p className="text-xl text-center font-thin">
                    Inicia aquí tu proceso de certificación
                  </p>
                </div>
                </Link>
              <div className="border rounded-md shadow-none hover:shadow-xl w-full lg:w-1/3 px-8 py-10">
                <FlaskConical size={42} className="mx-auto mb-6 text-teal-500" />
                <h2 className="text-2xl text-center font-bold mb-8">
                  Agenda tu prueba diagnóstica
                </h2>
                <p className="text-xl text-center font-thin">
                  Asegúrate de estar preparad@
                </p>
              </div>
              <div className="border rounded-md shadow-none hover:shadow-xl w-full lg:w-1/3 px-8 py-10">
                <TextSearch size={42} className="mx-auto mb-6 text-teal-500" />
                <h2 className="text-2xl text-center font-bold mb-8">
                  Consulta el estatus de tu certificación
                </h2>
                <p className="text-xl text-center font-thin">
                  Consulta si tu certificación fue aprobada
                </p>
              </div>
            </div>
          </div>
          <div className="container my-[9rem]">
            <h3 className="text-2xl font-semibold py-6">Documentos y requisitos del aspirante</h3>
            <div className="flex flex-col lg:flex-row gap-x-4">
              <div className="flex flex-row w-full lg:w-1/3 px-6 lg:px-8 py-6 dark:bg-slate-900">
                <FileText className="min-w-10"/>
                <p className="text-lg mb-5 leading-6 px-2">
                  Derechos y obligaciones de los usuarios del Sistema Nacional de Competencias
                </p>
              </div>
              <div className="flex flex-row w-full lg:w-1/3 px-6 lg:px-8 py-6 dark:bg-slate-900">
                <FileText className="min-w-10"/>
                <p className="text-lg mb-5 leading-6 px-2">
                  Guía del candidato
                </p>
              </div>
            </div>
          </div>
        </section>
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
                  <ButtonAlike ButtonText="Contactar a un asesor" iconButton={Headset} className="" />
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
          <div className="container flex flex-col lg:flex-row my-10 py-[3rem] space-y-8">
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-bold leading-[4rem]">Preguntas frecuentes</h3>
              <p className="texl-xl">¿Tienes más preguntas? <span className="underline">Contáctanos</span></p>
            </div>
            <Accordion type="single" collapsible className="w-full lg:w-1/2">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿La evaluación es presencial?</AccordionTrigger>
                <AccordionContent>
                  You can change your donation percentage, pause your donation, or opt out of donating at any time from the Payments & payouts section of your account.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Qué se me entrega una vez aprobada la evaluación?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Cuánto tardan en entregarme mi certificado?</AccordionTrigger>
                <AccordionContent>
                  You can change your donation percentage, pause your donation, or opt out of donating at any time from the Payments & payouts section of your account.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>¿Cuánto tiempio está vigente la certififcación?</AccordionTrigger>
                <AccordionContent>
                  You can change your donation percentage, pause your donation, or opt out of donating at any time from the Payments & payouts section of your account.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Reclutamiento y recursos*/}
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
        <div className="container flex flex-row mb-[4rem]">
          <div className="max-w-fit h-fit lg:w-3/9 mt-5">
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
              <div className="w-3/12 px-8 lg:px-[3.9rem] py-6 dark:bg-slate-900 mt-5">
                <Link href="https://www.conocer.gob.mx/estandares-de-competencia/" target="_blank" className="text-lg text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-500 underline mb-4">
                  CONOCER<SquareArrowOutUpRight className="inline-block p-1" />
                </Link><br /> 
                <Link href="https://www.icem.org.mx/" target="_blank" className="text-lg text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-500 underline mb-4">
                  ICEM<SquareArrowOutUpRight className="inline-block p-1" />
                </Link>
              </div>
        </div>
      </main>
      <Footer />
    </>
  );
}