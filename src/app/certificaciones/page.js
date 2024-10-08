import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import resultados from "@/public/img/consulta-resultados.svg";
import estandar from "@/public/img/estandar-de-competencia.svg";
import evaluacion from "@/public/img/presenta-evaluacion.svg";
import diagnostico from "@/public/img/evaluacion-diagnostica.svg";
import heroSection from "@/public/img/hero-section.png";
import procesoImage from "@/public/img/pexels-pixabay-209151.jpg";

// Shandcn UI components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lightbulb, BookOpenCheck, Hammer, Medal, User, Sprout, Building2, GraduationCap, Store, HeartHandshake, File, BookMarked, ShieldCheck } from "lucide-react";
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";




// Custom components
import ProgramsCard from "@/components/molecules/ProgramsCard";
import estandarIcon from "@/public/img/estandar-de-competencia.svg";
import Footer from "@/components/organisms/Footer";
import MainButton from "@/components/atoms/MainButton";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import OutlineButton from "@/components/atoms/OutlineButton";

// Data
const estandares = [
  {
    id: "EC0217.01",
    title: "EC0217.01",
    description: "Servicios educativos",
    content: "Impartición de cursos de formación de capital humano de manera presencial grupal",
    snc: "3 de 5",
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
    snc: "3 de 5",
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
    snc: "3 de 5",
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

const criterios = [
  {
    id: "00A",
    title: "Conocimientos",
    description: "Saber y entender",
    content: "Posesión de conceptos, teorías y principios que sustentan el desempeño de la función",
    borColor: "border-t-indigo-500/50",
    icon: <Lightbulb strokeWidth={1.25} size={40} className="mx-auto" />,
  },
  {
    id: "00B",
    title: "Habilidades",
    description: "Ser capaz físicamente de desempeñar",
    content: "Realización de acciones que permiten observar su competencia",
    borColor: "border-t-blue-400/50",
    icon: <Hammer strokeWidth={1.25} size={40} className="mx-auto" />,
  },
  {
    id: "00C",
    title: "Valores",
    description: "Tener disposición y actitud",
    content: "Predisposición a actuar con determinado comportamiento durante el desempeño",
    borColor: "border-t-orange-400/50",
    icon: <Medal strokeWidth={1.25} size={40} className="mx-auto" />,
  },
  {
    id: "00D",
    title: "Productos",
    description: "Tangibles resultado de la actividad",
    content: "Pueden ser manuales, informes, métricas de resultados",
    borColor: "border-t-gray-400",
    icon: <BookOpenCheck strokeWidth={1.25} size={40} className="mx-auto" />,
  },
]

const pasos = [
  {
    id: "10A",
    title: "Identifica el estándar de competencia",
    description: "Cada estándar de competencia tiene un código único, con el formato ECXXXX.",
    stepNumber: "1",
  },
  {
    id: "20B",
    title: "Toma una evaluación diagnóstica",
    description: "Podrás conocer si cuentas con los conocimientos, habildades y actitudes que exige el Estándar de Competencia.",
    stepNumber: "2",
  },
  {
    id: "30C",
    title: "Realiza tu evaluación en un Centro Evaluador",
    description: "En la evaluación se recopilan los conocimientos, experiencia, habilidades y actitudes que la persona posee y que son necesarios para desempeñarse en la función.",
    stepNumber: "3",
  },
  {
    id: "40D",
    title: "Consulta tus resultados",
    description: "Si los criterios de evaluación son satisfechos, el juicio de competencia será \"COMPETENTE\". En caso contrario, será \"TODAVÍA NO COMPETENTE\".",
    stepNumber: "4",
  },
]

export default function Certificaciones(params) {
  return (
    <>
      <header className="w-full py-2 mb-1">
        <div className="container z-20 flex flex-col-reverse lg:flex-row h-auto lg:h-[32rem] justify-center items-center">
          <div className="relative w-full lg:w-2/5 flex flex-col justify-normal items-center lg:items-start bg-slate-800 rounded-lg text-white px-[4rem] py-2 lg:py-8  mt-10">
            <h1 className="text-3xl md:text-4xl text-center lg:text-left font-bold md:leading-[2.5rem] pt-10 mb-3 pr-5">Certificación de competencias laborales</h1>
            <p className="text-lg md:text-xl text-center lg:text-left font-light py-3 mb-5 pr-5">Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu área</p>
            <p className="absolute inset-x-0 -bottom-16 lg:-bottom-9 text-muted-foreground dark:text-white text-md lg:text-lg px-6">Certificados con validez oficial de SEP-CONOCER</p>
          </div>
          <div className="relative w-full lg:w-3/5 px-0 lg:px-10 mx-auto">
            <Image src={heroSection} width="100%" height="teal" alt="image with some people" />
          </div>
        </div>

      </header>
      <main className="w-full">
        <section className="py-2 h-auto">
          {/* Estándares disponibles */}
          <div className="w-full lg:container">
            <h4 className="text-2xl md:text-3xl font-bold text-center lg:text-left pb-6 pt-[5rem]">
              Certificaciones disponibles con Proyecta Empresarial
            </h4>
            <p className="text-center lg:text-left text-muted-foreground mb-2">Filtra por sector</p>
            <div className="flex flex-col lg:flex-row py-6 mb-[2rem]">
              <Tabs defaultValue="educativo" className="w-full md:w-9/12">
                <TabsList className="">
                  <TabsTrigger value="educativo" className="rounded-full">
                    <GraduationCap strokeWidth={1.25} className="lg:hidden mr-1 lg:mr-3 w-7 h-7 lg:w-6 lg:h-6" />
                    <span className="hidden lg:inline">Sector educativo</span>
                  </TabsTrigger>
                  <TabsTrigger value="empresarial" className="rounded-full">
                    <Store strokeWidth={1.25} className="lg:hidden mr-1 lg:mr-3 w-7 h-7 lg:w-6 lg:h-6" />
                    <span className="hidden lg:inline">Sector empresarial</span>
                  </TabsTrigger>
                  <TabsTrigger value="gobierno" className="rounded-full">
                    <Building2 strokeWidth={1.25} className="lg:hidden mr-1 lg:mr-3 w-7 h-7 lg:w-6 lg:h-6" />
                    <span className="hidden lg:inline">Sector gobierno</span>
                  </TabsTrigger>
                  <TabsTrigger value="social" className="rounded-full">
                    <HeartHandshake strokeWidth={1.25} className="lg:hidden mr-1 lg:mr-3 w-7 h-7 lg:w-6 lg:h-6" />
                    <span className="hidden lg:inline">Sector social</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="educativo" className="lg:pr-[4rem] px-0">
                  <Table className="mt-2">
                    <TableCaption>
                      <p>No es requerido ningún requisito académico para la certificación de competencias laborales.
                      </p>
                    </TableCaption>
                    <TableHeader className="text-xl font-bold">
                      <TableRow className="">
                        <TableHead className="w-2/12 md:1/6 lg:w-1/5">Código EC</TableHead>
                        <TableHead className="w-7/12 md:4/6 lg:w-3/5">Estándar de competencia</TableHead>
                        <TableHead className="w-3/12 md:1/6 lg:w-1/5"> </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="text-xl">
                      {estandares.map(
                        (estandar => {
                          return (
                            <TableRow key={estandar.id} className="group/item">
                              <TableCell>{estandar.title}</TableCell>
                              <TableCell className="pl-2 pr-0 md:px-3 lg:px-2">
                                <HoverCard>
                                  <HoverCardTrigger>{estandar.content}</HoverCardTrigger>
                                  <HoverCardContent className="flex">

                                    <ShieldCheck strokeWidth={2} className="h-6 w-6" />
                                    <div className="text-md pl-4">
                                      <p className=""><span className="font-bold">Nivel SNC: </span>{estandar.snc}</p>
                                    </div>
                                  </HoverCardContent>
                                </HoverCard>
                              </TableCell>
                              <TableCell className="text-right px-0 lg:px-2">
                                <Drawer className="relative">
                                  <DrawerTrigger className="
                                    group/details
                                    invisible 
                                    group-hover/item:visible 
                                    text-teal-600 
                                    group-hover/details:text-teal-700
                                    hover:text-white 
                                    hover/item:bg-teal-500 
                                    pl-2 
                                    pr-0 
                                    lg:pl-4 
                                    lg:pr-2 
                                    py-1
                                    mr-2 
                                    rounded-full 
                                    z-10 
                                    transition-colors 
                                    ease-in-out 
                                    duration-300">Detalles
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
                                      className="
                                        lucide 
                                        lucide-chevron-right 
                                        ml-1 
                                        origin-left 
                                        inline 
                                        transition 
                                        group-hover/details:translate-x-1 
                                        group-hover/details:text-white"><path d="m6 17 5-5-5-5" /></svg>
                                  </DrawerTrigger>
                                  <DrawerContent>
                                    <ScrollArea>
                                      <DrawerHeader className="flex w-full">
                                        <div className="content-center w-full mt-10 md:mt-4">
                                          <DrawerTitle className="text-2xl mb-2 bg-gray-200 dark:bg-gray-600 rounded-sm py-4 px-4">{estandar.content}</DrawerTitle>
                                          <DrawerDescription className="text-lg">Detalles del estándar de compencia</DrawerDescription>
                                          <Separator className="mt-3 w-full" />
                                        </div>
                                      </DrawerHeader>
                                      <div className="w-full text-xl lg:w-1/2 mx-auto px-5 py-2">
                                        <div className="text-2xl mb-5">{estandar.title}</div>
                                        <p className="mb-6"><b>Propósito: </b>{estandar.proposito}</p>
                                        <div className="flex place-items-bottom py-1">
                                          <User className="text-gray-500 mr-2 min-w-6 min-h-6" />
                                          <p className="mb-3 px-4"><b>Ocupaciones asociadas: </b> {estandar.ocupaciones}</p>
                                        </div>
                                        <div className="flex place-items-bottom py-1">
                                          <BookMarked className="text-gray-500 mr-2 min-w-6 min-h-6" />
                                          <p className="mb-3 px-4"><b>Comité desarrollador:</b> {estandar.comite}</p>
                                        </div>
                                        <div className="py-3">
                                          <div className="flex place-items-bottom py-1">
                                            <File className="text-gray-500 mr-2 min-w-6 min-h-6" /><p className="px-4"><b>Formato de Estándar de Competencia.</b> La descripción completa está disponible en un documento PDF</p>
                                          </div>
                                          <Button
                                            variant="outline"
                                            className="
                                              py-6 
                                              pl-3
                                              pr-5 
                                              text-xl 
                                              text-gray-800 
                                              hover:text-white
                                              hover:bg-gray-800
                                              text-center 
                                              dark:hover:bg-gray-600 
                                              mt-5
                                              ml-10">
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
                                      </div>
                                      <Separator className="mt-1 w-full" />
                                      <DrawerFooter className="container flex flex-row justify-end items-center">
                                        <DrawerClose className="
                                        absolute top-0 left-3
                                        mx-auto 
                                        hover:bg-slate-100 
                                        hover:text-teal-600 
                                        dark:hover:bg-slate-800 
                                        rounded-full 
                                        transition-colors 
                                        ease-in-out 
                                        duration-300
                                        z-20">
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
                                        <p className="text-2xl font-bold mr-5">{estandar.price}</p>
                                        <SecondaryButton href="./" linkText="Obtener" />
                                      </DrawerFooter>
                                    </ScrollArea>
                                  </DrawerContent>
                                </Drawer>
                              </TableCell>
                            </TableRow>
                          )
                        })
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="empresarial">Certificaciones disponibles para el sector productivo</TabsContent>
                <TabsContent value="gobierno">Certificaciones para el sector del servicio público</TabsContent>
                <TabsContent value="social">Certificaciones para las organizaciones sociales</TabsContent>
              </Tabs>
              <div className="max-w-fit lg:w-3/12 px-8 lg:px-10 py-6 border rounded-xl mt-10 lg:mt-[8rem] dark:bg-slate-900 max-h-fit mx-4 lg:mx-0">
                <h3 className="text-xl font-bold mb-2">Documentos básicos</h3>
                <p className="text-lg mb-5 leading-6">Derechos y obligaciones de los usuarios del Sistema Nacional de Competencias</p>
                <Button
                  className="
                  text-xl
                text-white 
                  hover:text-white
                  bg-teal-500
                  hover:bg-teal-600 
                  px-5 
                  py-1
                  mr-2 
                  rounded-md 
                  z-10 
                  transition-colors 
                  ease-in-out 
                  duration-300">Descargar
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="container w-full py-10 mt-[2rem]">
          {/* Pasos para certificarse */}
          <div className="py-5 mb-[8rem]">
            <h2 className="text-2xl md:text-3xl text-center font-bold py-4 mt-8 mb-2">Antes de empezar. Conoce los pasos para la certificación</h2>
            <p className="text-xl text-center pb-8 mb-8 w-full lg:w-2/3 mx-auto">Las certificaciones permiten demostrar su habilidad para realizar funciones específicas a un alto nivel</p>
            <div className="flex flex-col lg:flex-row w-full py-3 mx-auto">
              <div className="w-full lg:w-1/2">
                <Image
                  src={procesoImage}
                  alt="Proceso para la certificación"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
                  className="rounded-xl"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'scale-down',
                  }} />
              </div>
              <div className="w-full md:w-1/2 pl-8 pt-5 md:pl-[2rem] mb-[6rem]">
                {pasos.map((paso => {
                  return (
                    <div key={paso.id} className="flex flex-col md:flex-row items-center md:items-start mb-[2rem] py-3">
                      <div className="relative pl-8 md:pl-[6rem]">
                        <span className="absolute -left-5 lg:left-9 top-3 bg-gray-700 text-white px-4 text-center content-center rounded-full min-w-10 min-h-10 mx-3">
                          {paso.stepNumber}
                        </span>
                        <div className="group pl-8">
                          <h3 className="text-xl md:text-left font-bold py-3">
                            {paso.title}
                          </h3>
                          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300">
                            <p className="text-xl mb-2 overflow-hidden">{paso.description} <br />
                              <Link href="./" className="text-lg text-teal-600 hover:underline">
                                <span className="py-3 text-xl">Ver más
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 inline"><path d="m6 17 5-5-5-5" /></svg>
                                </span>
                              </Link>
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  )
                }))}
              </div>
            </div>
          </div>

          {/* Cards Criterios de evaluación */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 auto-cols-max mt-5 mb-[12rem] px-6 lg:px-0">
            <div className="pb-7 mb-7">
              <h4 className="flex justify-center items-center h-full w-full text-2xl md:text-3xl font-bold text-left pl-4 py-6 mb-[3rem] px-3">Prepárate previo a tu evaluación para reforzar cuatro elementos clave</h4>
            </div>
            {criterios.map((criterio => {
              return (
                <Card key={criterio.id} className={`w-full lg:w-11/12 lg:mx-0 xl:mx-0 mb-7 px-2 ${criterio.borColor}`}>
                  <CardHeader>
                    <CardDescription className="mb-1">{criterio.description}</CardDescription>
                    <span className="text-gray-500 px-4 py-6">{criterio.icon}</span>
                    <CardTitle className="text-center">{criterio.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">{criterio.content}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="">
                    </div>
                  </CardFooter>
                </Card>
              )
            }))}
            <div className="group flex flex-col border rounded-md pb-6 lg:w-11/12 lg:mx-0 xl:mx-0 mb-7 py-10 px-6 hover:shadow-xl transition-shadow duration-300 max-h-full">
              <div className="bg-teal-400 w-full h-10">

              </div>
              <p className="flex-grow text-xl">
                Realiza una <strong>alineación al estándar de competencia</strong> para asegurarte que estás preparada o preparado.
              </p>
              <p>
                <Link className="text-xl text-teal-600 group-hover:text-teal-700" href="./">
                  Más información
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="flex-grow-0 bg-gray-100 dark:bg-gray-900">
          <div className="bg-transparent max-w-28 mx-auto pt-[5rem]">
            <Image src={resultados} width={140} height={140} alt="icon for" className="w-auto" />
          </div>
          <div className="container w-full pb-10 mt-6">
            <h2 className="scroll-m-20 text-3xl text-center font-bold tracking-normal lg:text-4xl pb-6">Explora los programas que tenemos para tí</h2>
            <p className="text-2xl text-center pb-8 mb-[5rem] w-full lg:w-2/3 mx-auto">Obten los beneficios que te ayudarán a certificarte en múltiples estándares de competencia</p>
            <ProgramsCard />
          </div>
        </section>
        <section className="mx-auto mb-15 py-10 mt-[3rem] mb-[2rem]">
          <div className="py-[7rem] px-5 lg:px-0 mb-[5rem]">
            <h2 className="text-center text-3xl font-bold py-6 mb-[3rem]">Preguntas frecuentes</h2>
            <Accordion type="single" collapsible className="w-full md:w-4/5 m-auto ">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left dark:text-white font-bold">¿En cuanto tiempo me entregan mi certificado?</AccordionTrigger>
                <AccordionContent className="py-8">
                  En promedio, 30 días a partir de la evaluación
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left dark:text-white font-bold">¿Qué es una alineación?</AccordionTrigger>
                <AccordionContent className="py-8">
                  La alineación es
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left dark:text-white font-bold">¿Puedo hacer la evaluación en línea?</AccordionTrigger>
                <AccordionContent className="py-8">
                  En algunos casos, dependiendo del estándar de competencia al que estés aplicando. Algunos estándares de competencia lo permiten, mientras que otros no.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left dark:text-white font-bold">¿Cuál es el costo de la evaluación diagnóstica?</AccordionTrigger>
                <AccordionContent className="py-8">
                  Ninguno. La evalución diagnóstica la ofrecemos gratis.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Reclutamiento */}
          <div className="container flex flex-col lg:flex-row justify-center w-full h-auto md:h-[19rem] mb-[7rem] mt-[1rem] px-10 md:px-[4rem] py-8 rounded-xl mx-auto border">
            <div className="px-6 pb-8 self-start">
              <Sprout size={70} strokeWidth={1.50} className="bg-teal-500 dark:bg-slate-200 text-white dark:text-gray-800 p-3 rounded-full" />
              <h3 className="text-3xl font-bold mb-2 mt-8">
                ¿Ya estás certificado y te interesa ser evaluador?
              </h3>
            </div>
            <div className="group px-6 py-8 self-end">
              <p className="text-xl py-3 mb-5">
                Ponte contacto con un asesor y aumenta tus ingresos realizando evaluaciones
              </p>
              <Link href="./" >
                <span className="text-xl text-teal-600 group-hover:text-teal-700 group-hover:bg-gray-100 rounded-full py-3 pl-5 pr-3"> Contactar ahora
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22" height="22"
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-chevron-right ml-1 origin-left inline transition group-hover:translate-x-1 group-hover:text-teal-700"><path d="m6 17 5-5-5-5" /></svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}