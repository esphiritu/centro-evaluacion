// Next.js components
import Link from "next/link";
import Image from "next/image";
// Shadcn UI components
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Separator } from "@/components/ui/separator";

// Custom components
import Footer from "@/components/organisms/Footer";
import Testimonios from "@/components/molecules/Testimonios";
import CtaButton from "@/components/atoms/CtaButton";
import MainLink from "@/components/atoms/MainLink";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import AnimatedText from "@/components/molecules/AnimatedText";
// Lucide icons
import {
  User,
  BookMarked,
  ShieldCheck,
  Brain,
  Key,
  LockKeyhole,
  Headset,
  Award,
  ArrowDown,
  TrendingUp,
  FileBadge,
  Lightbulb,
  BookOpenCheck,
  Hammer,
  Medal,
  CircleChevronRight,
  Check
} from "lucide-react";

// Custom icons
import estandarIcon from "@/public/img/estandar-de-competencia.svg";


// Data for components
const benefits = [
  {
    title: "Encuentra mejores oportunidades",
    description: "Las certificaciones aumentan el valor del trabajador dentro del mercado laboral",
    icon: <Key size={32} strokeWidth={2} className="text-white" />,
    id: "emo",
  },
  {
    title: "Accede a mejores salarios",
    description: "Los profesionales certificados ganan el doble que los trabajadores no certificados ",
    icon: <TrendingUp size={32} strokeWidth={2} className="text-white" />,
    id: "ams",
  },
  {
    title: "Obtén un certificado de competencia",
    description: "Certificados con validez oficial de Secretería de Educación Pública-CONOCER",
    icon: <FileBadge size={32} strokeWidth={2} className="text-white" />,
    id: "ouc",
  },
]

const pasos = [
  {
    id: "10A",
    title: "Identifica el estándar de competencia",
    description: "Cada estándar de competencia tiene un código único, con el formato EC0000.",
    stepNumber: "1",
  },
  {
    id: "20B",
    title: "Toma una prueba diagnóstica",
    description: "Podrás conocer si cuentas con los conocimientos, habildades y actitudes que exige el Estándar de Competencia.",
    stepNumber: "2",
  },
  {
    id: "30C",
    title: "Realiza tu evaluación en un Centro Evaluador",
    description: "La evaluación verifica los conocimientos, habilidades y actitudes que posees para desempeñarte en la función.",
    stepNumber: "3",
  },
  {
    id: "40D",
    title: "Consulta tus resultados",
    description: "Si los criterios de evaluación son satisfechos, el juicio de competencia será \"COMPETENTE\". En caso contrario, será \"TODAVÍA NO COMPETENTE\".",
    stepNumber: "4",
  },
];

const criterios = [
  {
    id: "00A",
    title: "Conocimientos",
    description: "Saber y entender",
    content: "Posesión de conceptos, teorías y principios que sustentan el desempeño de la función",
    borColor: "border-t-indigo-500/50",
    icon: <Lightbulb strokeWidth={1.25} size={40} absoluteStrokeWidth={true} className="mx-auto" />,
  },
  {
    id: "00B",
    title: "Habilidades",
    description: "Ser capaz físicamente de desempeñar",
    content: "Realización de acciones que permiten observar su competencia",
    borColor: "border-t-blue-400/50",
    icon: <Hammer strokeWidth={1.25} size={40} absoluteStrokeWidth={true} className="mx-auto" />,
  },
  {
    id: "00C",
    title: "Actitudes y Valores",
    description: "Tener disposición y actitud",
    content: "Predisposición a actuar con determinado comportamiento durante el desempeño",
    borColor: "border-t-orange-400/50",
    icon: <Medal strokeWidth={1.25} size={40} absoluteStrokeWidth={true} className="mx-auto" />,
  },
  {
    id: "00D",
    title: "Productos",
    description: "Tangibles resultado de la actividad",
    content: "Pueden ser manuales, informes, métricas de resultados",
    borColor: "border-t-gray-400",
    icon: <BookOpenCheck strokeWidth={1.25} size={40} absoluteStrokeWidth={true} className="mx-auto" />,
  },
];

// Información de los estándares de competencia que se ofrecen
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
    proposito: "El estándar contempla las funciones sustantivas de preparar, conducir y evaluar cursos de capacitación. Preparar la sesión mediante la planeación de la sesión y la comprobación de la existencia y el funcionamiento de los recursos requeridos para la sesión. Conducir la sesión realizando el encuadre, desarrollo y cierre, empleando técnicas instruccionales y grupales que faciliten el proceso de aprendizaje. Evaluar el aprendizaje antes, durante y al final del curso, considerando la satisfacción de los participantes/capacitandos",
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

// Images
import logoRedConocer from "@/public/img/logotipo-redConocer.png";
import logoICEM from "@/public/img/Logo-ICEM.jpg";
import coaching from "@/public/img/gallery-coaching.jpg";
import session from "@/public/img/gallery-live-session.jpg";
import participants from "@/public/img/gallery-participants.jpg";
import staged from "@/public/img/gallery-staged.jpg";
import diagnostico from "@/public/img/evaluacion-diagnostica.svg";
import presentation from "@/public/img/gallery-presentation.jpg";
import procesoImage from "@/public/img/pexels-pixabay-209151.jpg";
import checkPointsImage from "@/public/img/pexels-fauxels-3184328.jpg";



export default function Home({ Component, pageProps }) {
  return (
    <>
      <main className="w-full pt-19 scroll-smooth">
        <section className="relative h-[42rem]">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center container h-full bg-gradient-to-b lg:bg-gradient-to-r from-teal-500 from-60% md:from-40% to-transparent dark:to-teal-600 to-17% rounded-none lg:rounded-2xl mt-0 lg:mt-10 px-[4rem]">
            <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start">
              <h1 className="text-white text-2xl text-center lg:text-left md:text-4xl font-bold tracking-normal lg:!leading-[3rem] py-3 animate-slideIn text-pretty">
                La <span className="">certificación de competencias laborales</span> mejorarán tus habilidades e impulsarán tu carrera profesional
              </h1>
              <p className="text-xl md:text-2xl text-center lg:text-left text-white font-thin animate-fadeIn text-background drop-shadow-md py-6 md:py-1">
                Respalda tus conocimientos y experiencia con las certificaciones más valoradas en tu industria
              </p>
              <div className="flex flex-col md:flex-row mt-1 md:mt-3 animate-fadeIn ">
                <CtaButton href="./proceso" linkText="Comenzar ahora" className="text-center" />
                <Link className="transition-all duration-300 ease-in-out hover:bg-white/15 text-center font-bold md:text-xl rounded-sm text-white px-4 py-3 mx-0 lg:mx-4 md:mb-1 mt-6 max-w-fit" href="./asesor">
                  <span className="whitespace-nowrap">Comenzar con un asesor <CircleChevronRight strokeWidth={1.50} size={20} className="text-white inline" /></span>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              Fotografía
            </div>
          </div>
          <div className="animate-fadeIn absolute -bottom-[5vw] md:bottom-[2vw] right-2/4">
            <div className="animate-bounce transition-colors ease-in-out bg-gray-700 hover:bg-slate-500 rounded-full border-1 border-slate-300 p-2 text-white">
              <Link href="#benefits">
                <ArrowDown className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </section>
        {/* Feature Section */}
        {/* Highlight the key benefits of getting certified through the company's educational programs. */}
        <section className="container h-auto lg:h-[32rem] mt-[6rem] pb-[2.7rem]">
          <div
            className="flex flex-col items-center justify-center h-full scroll-smooth"
            id="benefits">
            <h2 className="scroll-m-40 text-3xl md:text-4xl text-center font-extrabold tracking-tight py-10 mt-10">Beneficios de la certificación laboral</h2>
            <ul
              className="flex flex-col sm:flex-col lg:flex-row justify-center items-baseline mt-8 mb-[2.7rem]">
              {benefits.map((benefit => {
                return (
                  <li
                    className="w-full lg:w-1/3 py-8 px-5 mx-2 md:mx-auto"
                    key={benefit.id}>
                    <div className="bg-teal-500 w-fit h-fit p-4 rounded-full">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-left mt-8 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-xl text-muted-foreground text-left">
                      {benefit.description}
                    </p>
                  </li>
                )
              }))}
            </ul>
          </div>
          <MainLink href="#certificaciones" linkText="Ver certificaciones" />
        </section>
        {/* Partners Section */}
        <div className="container py-5 h-auto">
          <div className="flex flex-col-reverse lg:flex-row mt-[4.5rem]">
            <div className="w-full lg:w-1/2">
              <h2 className="w-full lg:w-4/5 text-2xl md:text-3xl text-pretty font-bold tracking-tight pt-[2.5rem] mt-2 lg:mt-10 mb-4 pl-0 lg:pl-10">
                La oportunidad para alcanzar tus metas profesionales
              </h2>
              <p className="w-full lg:w-4/5 text-lg md:text-xl text-muted-foreground text-pretty mb-8 pl-0 lg:pl-10">Procesos confiables respaldados por el Organismo Certificador más importante de America Latina: ICE México.</p>
              <ul className="text-lg pl-0 lg:pl-10 py-3">
                <li className="flex py-2 items-center"><Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white bg-teal-400 min-w-5 min-h-5 rounded-full p-[0.15rem]" /> <span className="text-slate-700 dark:text-slate-400 pl-3">Certificados con validez oficial de <strong className="whitespace-nowrap">SEP-CONOCER</strong></span></li>
                <li className="flex py-2 items-center"><Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white bg-teal-400 min-w-5 min-h-5 rounded-full p-[0.15rem]" /> <span className="text-slate-700 dark:text-slate-400 pl-3">Procesos ágiles de certificación</span></li>
                <li className="flex py-2 items-center"><Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white bg-teal-400 min-w-5 min-h-5 rounded-full p-[0.15rem]" /> <span className="text-slate-700 dark:text-slate-400 pl-3">Sin requisitos académicos</span></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 p-0 lg:p-10">
              <Image src={checkPointsImage} alt="This is what you get" className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
        {/* Certification process section */}
        <section className="container w-full py-10 mt-[3rem]">
          {/* Pasos para certificarse */}
          <h2 className="text-2xl md:text-3xl text-center font-bold tracking-tight pt-[2.5rem] mt-2 lg:mt-10 mb-[4rem] pl-0 lg:pl-10">
            Antes de empezar. Conoce los pasos para la certificación
          </h2>
          <div className="py-5 mb-[4rem] bg-blue-50/85 dark:bg-gray-900 rounded-xl px-5 lg:px-[2rem]">
            <div className="flex flex-col lg:flex-row w-full py-3 mx-auto px-0 lg:px-10 h-auto lg:h-[34rem]">
              <div className="relative w-full lg:w-1/2 h-full mt-[2.5rem]">
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
                <AnimatedText />
              </div>
              <div className="w-full lg:w-1/2 pl-8 pt-10 lg:pt-2 md:pl-[2rem] mb-[2rem] mt-2 lg:mt-6">
                {pasos.map((paso => {
                  return (
                    <div
                      key={paso.id}
                      className="flex flex-col md:flex-row items-center md:items-start mb-1 lg:mb-[1.5rem] py-2">
                      <div className="relative pl-4 md:pl-[6rem]">
                        <span className="absolute -left-8 lg:left-9 top-2 lg:top-3 bg-gray-400 text-white px-4 text-center content-center rounded-full min-w-10 min-h-10 mx-3">
                          {paso.stepNumber}
                        </span>
                        <div className="group pl-8">
                          <h3 className="text-xl md:text-left font-bold py-3">
                            {paso.title}
                          </h3>
                          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-150">
                            <p className="text-muted-foreground text-xl mb-0 lg:mb-3 overflow-hidden">
                              {paso.description} <br />
                              <Link
                                href="./"
                                className="text-lg text-teal-600 hover:text-teal-700 dark:hover:text-teal-400 inline-block mt-5">
                                <span className="text-xl">Ver más
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
        </section>

        {/* Estándares disponibles */}
        <div className="w-full lg:container mb-10" id="certificaciones">
          <h4 className="text-2xl md:text-3xl font-bold text-center pb-6 pt-[1.8rem] mb-[2.4rem]">
            Certificaciones disponibles con Proyecta Empresarial
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
                  {/* <TableCaption>
                      <p className="w-full">Certificaciones</p>
                    </TableCaption> */}
                  <TableHeader className="text-xl bg-slate-200 dark:bg-slate-700">
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
                                      <h2 className="text-2xl mb-5 text-teal-600">{estandar.title}</h2>
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
        </div>
        <div className="container flex flex-col md:flex-row-reverse items-center justify-between mt-10 py-10">
          <h5 className="align-bottom text-3xl text-center lg:text-left font-light dark:text-slate-100 tracking-tight w-full md:w-1/3 mr-8">
            <span className="text-2xl font-normal">
            </span>Sistema Nacional de Competencias Laborales
          </h5>
          <Image
            src={logoRedConocer}
            alt="logotipo de Red CONOCER"
            width={170}
            className="mx-5" />
          <Image
            src={logoICEM}
            alt="logotipo de ICE México"
            width={170}
            className="mx-5" />
        </div>

        {/* Criterios de evaluación */}
        <div className="container mt-[6rem] mb-[8rem] py-10">
          <div id="textSlider" className="relative w-full lg:w-1/2 mx-auto pl-0 md:pl-[4rem]">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 float-left text-2xl md:text-3xl m-0 pr-2 leading-[4.8rem] md:leading-[4.6rem] font-bold">
              <p>Refuerza cuatro aspectos clave.</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 text-left text-2xl md:text-3xl font-bold m-0 min-w-fit">
              <div className="h-[5.6rem] overflow-hidden">
                <div className="animate-scroller">
                  <p className="text-slate-400 leading-[4.9rem] md:leading-[4.8rem]">Saber</p>
                  <p className="text-slate-400 leading-[4.5rem] md:leading-[4.5rem]">Saber hacer</p>
                  <p className="text-slate-400 leading-[4.7rem] md:leading-[4.6rem]">Saber ser</p>
                  <p className="text-teal-500 leading-[4.5rem] md:leading-[4.5rem]">Prepárate.</p>
                </div>
              </div>
            </div>
          </div>
          <p className="w-full lg:w-3/4 text-2xl text-center text-pretty text-muted-foreground 
              dark:text-slate-200 font-thin mb-1 pb-8 mx-auto">
            Únase a nosotros para desarrollar las habilidades, la confianza así como los conocimientos para prosperar en un mundo competitivo y mejorar sus perspectivas profesionales.
          </p>
          <div className="px-0 lg:px-10 lg:border lg:rounded-xl lg:shadow-md mt-[2rem] mb-10 bg-white dark:bg-slate-700 text-right">
            <Carousel className="mb-6">
              <CarouselContent className="w-full flex lg:grid lg:grid-cols-4 gap-3 auto-cols-max mt-3 px-6 lg:px-0">
                {criterios.map((criterio => {
                  return (
                    <CarouselItem
                      className="group pb-7 mb-7 lg:pb-2 lg:mb-1"
                      key={criterio.id}>
                      <Card className="relative w-full lg:w-12/12 lg:mx-0 xl:mx-0 mb-7 px-2 h-[20rem] overflow-hidden">
                        <CardHeader>
                          <div className="absolute bottom-32 lg:bottom-16 right-0 left-0 lg:transform ease-in-out duration-300 lg:group-hover:bottom-32">
                            <span className="text-[#55ccc9] px-4 py-6">
                              {criterio.icon}
                            </span>
                            <CardTitle className="text-center mb-3">
                              {criterio.title}
                            </CardTitle>
                            <CardDescription className="mb-1 text-muted-foreground">
                              {criterio.description}
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent className="absolute -bottom-2 lg:-bottom-6 right-0 w-full h-28 lg:h-0 lg:overflow-hidden lg:group-hover:overflow-visible lg:transform ease-in-out duration-300 lg:group-hover:h-2/5 text-white bg-gray-800 group-hover:bg-slate-800 border-0 lg:border-b-0 rounded-sm">
                          <p className="text-lg absolute top-0 text-left w-11/12 pr-3 pt-3">
                            {criterio.content}
                          </p>
                        </CardContent>
                        {/* <CardFooter>
                            <div className="">
                              Hola!
                            </div>
                          </CardFooter> */}
                      </Card>
                      <p className="visible lg:invisible lg:group-hover:visible transition-all ease-in-out duration-200">
                        <Link href="./"
                          className="
                              w-full
                              inline-block
                              font-bold 
                              text-white 
                              bg-teal-500 
                              hover:bg-teal-600 
                              px-4 py-3 
                              rounded-sm 
                              transition-colors 
                              ease-in-out 
                              duration-300">
                          <span className="px-3 text-xl">Ver más</span>
                        </Link>
                      </p>
                    </CarouselItem>
                  )
                }))}
              </CarouselContent>
              <CarouselPrevious className="lg:invisible" />
              <CarouselNext className="lg:invisible" />
            </Carousel>

          </div>
          <div className="w-fit float-right"><MainLink href="./" linkText="Explorar programas" /></div>
        </div>


        <section className="container w-full bg-gray-50 dark:bg-slate-900 rounded-lg pt-10 pb-[4rem] my-10 px-10 lg:px-20 h-auto sm:h-auto md:h-[25rem] mt-[4rem] mb-[4rem] shadow-sm">
          <Image
            src={diagnostico}
            width={100}
            height={100}
            alt="icon for"
            className="max-w-auto mb-1" />
          <h1 className="relative text-3xl md:text-4xl font-bold pt-5 pb-1">
            Inicia una evaluación diagnóstica
            <span className="absolute text-center text-sm bg-red-400 text-white px-2 inline-block ml-1 rounded-full leading-relaxed">
              Gratis
            </span>
          </h1>
          <p className="text-xl text-muted-foreground pt-1 pb-3 mb-5">
            Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu área
          </p>
          <SecondaryButton href="./asesor" linkText="Solicitar información" />
        </section>
        {/* Features List Section */}
        {/* Overview of Workshops, Courses, and Training programs. */}
        <section className="container py-10 mb-[10rem] mt-[2rem]">
          <div className="w-full mb-[5rem] text-center">
            <h1 className="text-3xl md:text-4xl font-bold mt-8">
              Convención anual 2024.
              Mejores momentos
            </h1>
            <p className="
              text-2xl 
              font-light 
              text-muted-foreground 
              dark:text-slate-200 
              py-3 
              mb-4">
              Participan escuelas, universidades y gobiernos en diferentes actividades
            </p>
          </div>
          <Carousel className="mb-10">
            <CarouselContent className="w-full flex lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-2">
              <CarouselItem className="w-full h-[330px] md:h-[390px] lg:h-[670px] lg:col-span-2 lg:row-span-2">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="absolute backface-hidden transform transition lg:group-hover:rotate-y-180 duration-300 rounded-lg shadow w-full h-full z-1 lg:z-20">
                      <Image
                        src={coaching}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="absolute backface-visible lg:transform transition lg:-rotate-y-180 lg:group-hover:rotate-y-0 duration-300 w-full h-full rounded-lg bg-transparent lg:bg-teal-200">
                      <div className="backface-visible font-bold w-full h-full flex justify-content items-center">
                        <h1 className="text-lg lg:text-2xl text-center w-full">
                          <Link href="./" className="transition-all duration-100 ease-in-out hover:bg-gray-900/75 hover:lg:bg-white/25 rounded-full px-9 py-3 mx-4 md:mb-1 mt-6">
                            Capacitaciones
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full h-320 md:h-[390px] lg:h-[328px] lg:col-span-1 lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="absolute backface-hidden transform transition lg:group-hover:rotate-y-180 duration-300 rounded-lg shadow w-full h-full z-1 lg:z-20">
                      <Image
                        src={presentation}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="absolute backface-visible lg:transform transition lg:-rotate-y-180 lg:group-hover:rotate-y-0 duration-300 w-full h-full rounded-lg bg-transparent lg:bg-[#ffccaa]">
                      <div className="backface-visible font-bold w-full  h-full flex justify-content items-center">
                        <h1 className="text-lg lg:text-xl text-center w-full">
                          <Link href="./" className="transition-all duration-100 ease-in-out hover:bg-gray-900/75 hover:lg:bg-white/25 rounded-full px-9 py-3 mx-4 md:mb-1 mt-6">
                            Coaching
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full  h-320 md:h-[390px] lg:h-[328px] lg:col-span-1 lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="absolute backface-hidden transform transition lg:group-hover:rotate-y-180 duration-300 rounded-lg shadow w-full h-full z-1 lg:z-20">
                      <Image
                        src={session}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="absolute backface-visible lg:transform transition lg:-rotate-y-180 lg:group-hover:rotate-y-0 duration-300 w-full h-full rounded-lg bg-transparent lg:bg-[#aaccff]">
                      <div className="backface-visible font-bold w-full h-full flex justify-content items-center">
                        <h1 className="text-lg lg:text-xl text-center w-full">
                          <Link href="./" className="transition-all duration-100 ease-in-out hover:bg-gray-900/75 hover:lg:bg-white/25 rounded-full px-9 py-3 mx-4 md:mb-1 mt-6">
                            Conferencias
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full h-320 md:h-[390px] lg:h-[328px] lg:col-span-1 lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="absolute backface-hidden transform transition lg:group-hover:rotate-y-180 duration-300 rounded-lg shadow w-full h-full z-1 lg:z-20">
                      <Image
                        src={participants}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="absolute backface-visible lg:transform transition lg:-rotate-y-180  lg:group-hover:rotate-y-0 duration-300 w-full h-full rounded-lg bg-transparent lg:bg-[#C5CAFF]">
                      <div className="backface-visible font-bold w-full  h-full flex justify-content items-center">
                        <h1 className="text-lg lg:text-xl text-center w-full">
                          <Link href="./" className="transition-all duration-100 ease-in-out hover:bg-gray-900/75 hover:lg:bg-white/25 rounded-full px-9 py-3 mx-4 md:mb-1 mt-6">
                            Talleres
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full  h-320  md:h-[390px]  lg:h-[328px]  lg:col-span-1  lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="absolute backface-hidden transform transition lg:group-hover:rotate-y-180 duration-300 rounded-lg shadow w-full h-full z-1 lg:z-20">
                      <Image
                        src={staged}
                        alt="Image showing a group of people"
                        quality={75}
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="absolute backface-visible lg:transform transition lg:-rotate-y-180  lg:group-hover:rotate-y-0 duration-300 w-full  h-full rounded-lg bg-transparent lg:bg-[#faccd4]">
                      <div className="backface-visible font-bold w-full  h-full flex justify-content items-center">
                        <h1 className="text-lg lg:text-xl text-center w-full">
                          <Link href="./" className="transition-all duration-100 ease-in-out hover:bg-gray-900/75 hover:lg:bg-white/25 rounded-full px-9 py-3 mx-4 md:mb-1 mt-6">
                            Consultoría
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="lg:invisible" />
            <CarouselNext className="lg:invisible" />
          </Carousel>
          <MainLink href="./" linkText="Próximos eventos" />
        </section>
        <section className="container h-auto md:h-[36rem] flex flex-col lg:flex-row py-8 mt-[3rem] mb-[3rem]">
          <div className="w-full lg:w-1/2 pr-10 mb-[3rem]">
            <p className="text-lg text-center lg:text-left text-muted-foreground py-1 uppercase tracking-[0.2rem]">
              Reconocimiento nacional
            </p>
            <h1 className="text-3xl md:text-4xl text-center lg:text-left font-bold pt-2 mb-4 md:leading-[3rem] px-0">
              ¿Por qué evaluarme con <span className="bg-teal-200 whitespace-nowrap px-3 rounded-md text-gray-900 font-bold">Proyecta Empresarial</span>?
            </h1>
            <p className="text-lg text-center lg:text-left text-muted-foreground py-2 mb-3 w-full md:w-3/4">
              Instituciones educativas, empresas y entidades gubernamentales en todo México confían en los procesos de evaluación de Proyecta Empresarial.
            </p>
            <SecondaryButton href="./soluciones#acerca" linkText="Acerca de nosotros" />
          </div>
          <ul className="grid grid-cols-2 w-full lg:w-1/2 gap-9 lg:gap-5 mb-10 mr-10 py-10">
            <li className="text-md lg:text-xl text-center font-bold flex flex-col align-middle">
              <LockKeyhole
                absoluteStrokeWidth={true}
                size={42}
                strokeWidth={1.50}
                className="mx-auto text-teal-600" />
              <span className="block mt-8">
                Objetividad y confiabilidad
              </span>
            </li>
            <li className="text-md lg:text-xl text-center font-bold flex flex-col align-middle">
              <Headset
                absoluteStrokeWidth={true}
                size={42}
                strokeWidth={1.50}
                className="mx-auto text-teal-600" />
              <span className="block mt-8">
                Asesoría de expertos
              </span>
            </li>
            <li className="text-md lg:text-xl text-center font-bold flex flex-col align-middle">
              <ShieldCheck
                absoluteStrokeWidth={true}
                size={42}
                strokeWidth={1.50}
                className="mx-auto text-teal-600" />
              <span className="block mt-8">
                Calidad asegurada
              </span>
            </li>
            <li className="text-md lg:text-xl text-center font-bold flex flex-col align-middle">
              <Award
                absoluteStrokeWidth={true}
                size={42}
                strokeWidth={1.50}
                className="mx-auto text-teal-600" />
              <span className="block mt-8">
                Respaldo de OC más importante
              </span>
            </li>
          </ul>
        </section>
        <section className="pb-[12rem] mt-10 h-auto dark:bg-slate-900 ">
          {/* Seccion de testimonios */}
          <div className="container py-[6rem]">
            <h2 className="text-center text-3xl font-bold tracking-tight lg:text-4xl mb-4 mt-6">
              Casos de éxito
            </h2>
            <span className="w-[7rem] h-[3px] bg-teal-400 block mb-6 mx-auto"></span>

            <Testimonios />
          </div>
        </section>

        {/* Call to action section */}
        <section className="w-full h-auto md:h-[38rem] animated-background bg-gradient-to-tr from-indigo-300 from-1% via-emeral-300 via-30% to-emerald-200 to-59% border-b-[9px] border-t-[9px] mx-auto py-[6rem] px-4 lg:px-8">
          <div className="flex flex-col justify-center container items-center bg-white/40 dark:bg-slate-900/40 rounded-lg border-spacing-2 border-2 border-white dark:border-gray-400 py-8 text-center">
            <div className="w-full md:w-4/5 px-2 lg:px-2 pt-8 text-center">
              <p className="text-center text-base bg-blue-400 text-white px-4 py-[0.3rem] rounded-full leading-relaxed w-fit mx-auto mb-4">INVERSIÓN INTELIGENTE</p>
              <h5 className="text-3xl md:text-4xl text-center dark:text-white font-bold pt-3 mb-4 text-pretty w-full lg:w-3/4 mx-auto">
                Libere su potencial con nuestros programas
              </h5>
              <p className="text-xl md:text-2xl text-center text-pretty font-light dark:text-white mb-[1.5rem]">
                Explore nuestra amplia gama de alineaciones, talleres y cursos diseñados para mejorar sus habilidades y conocimientos.
              </p>
            </div>
            <CtaButton href="./proceso" linkText="Comienza ahora" />
            <p className="text-lg dark:text-white pb-6 mt-4">¡Obten 20% de descuento!</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

