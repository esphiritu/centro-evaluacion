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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


// Custom components
import Footer from "@/components/organisms/Footer";
import Testimonios from "@/components/molecules/Testimonios";
import CtaButton from "@/components/atoms/CtaButton";
import MainLink from "@/components/atoms/MainLink";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import AnimatedText from "@/components/molecules/AnimatedText";
import FormItemsEc from "@/components/molecules/FormItemsEc";
import ContactForm from "@/components/organisms/ContactForm";

// Lucide icons
import {
  ShieldCheck,
  Key,
  ArrowRight,
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
  Check, 
  Lock
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
    icon: <Lightbulb strokeWidth={1.75} size={50} absoluteStrokeWidth={true} className="mx-auto  mb-6" />,
  },
  {
    id: "00B",
    title: "Habilidades",
    description: "Ser capaz físicamente de desempeñar",
    content: "Realización de acciones que permiten observar su competencia",
    borColor: "border-t-blue-400/50",
    icon: <Hammer strokeWidth={1.75} size={50} absoluteStrokeWidth={true} className="mx-auto  mb-6" />,
  },
  {
    id: "00C",
    title: "Actitudes y Valores",
    description: "Tener disposición y actitud",
    content: "Predisposición a actuar con determinado comportamiento durante el desempeño",
    borColor: "border-t-orange-400/50",
    icon: <Medal strokeWidth={1.75} size={50} absoluteStrokeWidth={true} className="mx-auto  mb-6" />,
  },
  {
    id: "00D",
    title: "Productos",
    description: "Tangibles resultado de la actividad",
    content: "Pueden ser manuales, informes, métricas de resultados",
    borColor: "border-t-gray-400",
    icon: <BookOpenCheck strokeWidth={1.75} size={50} absoluteStrokeWidth={true} className="mx-auto mb-6" />,
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

// images
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
      <main className="w-full pt-19 scroll-smooth pt-[8rem]">
        <section className="relative h-[42rem]">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center container h-full bg-gradient-to-b lg:bg-gradient-to-r from-teal-500 from-60% md:from-40% to-transparent dark:to-teal-600 to-17% rounded-none lg:rounded-2xl mt-0 lg:mt-10 px-[4rem]">
            <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start">
              <h1 className="text-white text-3xl text-center lg:text-left md:text-5xl font-bold lg:!leading-[3rem] py-3 text-pretty">
                Impulsa tu crecimiento profesional
              </h1>
              <p className="text-xl md:text-2xl text-center lg:text-left text-white text-background py-6 md:py-1">
                Respalda tus conocimientos y experiencia con <strong>certificaciones oficiales</strong>
              </p>
              <div className="flex flex-col md:flex-row mt-1 md:mt-3 animate-fadeIn ">

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <CtaButton href="./proceso" linkText="Comenzar ahora" className="text-center" />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex justify-between items-start mt-4 p-3 bg-slate-50 dark:bg-slate-800">
                    <Award size={24} className="w-1/5 mt-1" />
                    <div className="w-4/5 pr-2">
                      <h4 className="font-semibold mb-1">Ingresa tu solucitud</h4>
                      <p className="text-muted-foreground text-sm">El proceso de certificación es más fácil ahora</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <Link className="scroll-smooth transition-all duration-300 ease-in-out hover:bg-white/15 text-center md:text-xl rounded-sm text-white px-4 py-3 mx-0 lg:mx-4 md:mb-1 mt-6 max-w-fit" href="#asesor">
                  <span className="whitespace-nowrap">Comenzar con un asesor <CircleChevronRight strokeWidth={1.50} size={20} className="text-white inline" /></span>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              Fotografía
            </div>
          </div>
          <div className="animate-fadeIn absolute -bottom-[5vw] md:bottom-[2vw] right-2/4">
            <div className="animate-bounce transition-colors ease-in-out bg-gray-700 hover:bg-slate-500 rounded-full border-1 p-2 text-white">
              <Link href="#benefits">
                <ArrowDown className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </section>
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
        {/* Feature Section */}
        {/* Highlight the key benefits of getting certified through the company's educational programs. */}
        <section className="container h-auto lg:h-[32rem] mt-[6rem] pb-[2.7rem]">
          <div
            className="flex flex-col items-center justify-center h-full scroll-smooth"
            id="benefits">
            <h2 className="scroll-m-40 text-3xl md:text-4xl text-center tracking-tight py-10 mt-10">Beneficios de la certificación laboral</h2>
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
                    <h3 className="text-2xl font-normal text-left mt-8 mb-4">
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
                  placeholder="empty"
                  priority={true}
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
                          <h3 className="text-xl md:text-left font-normal py-3">
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

        {/* Partners Section */}
        <div className="container py-5 h-auto">
          <div className="flex flex-col-reverse lg:flex-row mt-[2.5rem]">
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

        {/* Criterios de evaluación */}
        <div className="container mt-[6rem] mb-[8rem] py-10">
          <h3 className="text-center text-3xl font-bold py-6">Refuerza cuatro elementos clave. Prepárate</h3>
          <p className="w-full lg:w-3/4 text-2xl text-center text-pretty text-muted-foreground 
              dark:text-slate-200 mb-1 pb-8 mx-auto">
            Únase a nosotros para desarrollar las habilidades, la confianza así como los conocimientos para prosperar en un mundo competitivo y mejorar sus perspectivas profesionales.
          </p>
          <div className="px-0 lg:px-10 lg:border lg:border-slate-400 lg:rounded-xl lg:shadow-md mt-[2rem] mb-10 bg-white dark:bg-slate-700 text-right">
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
                            <span className="text-[#55ccc9]">
                              {criterio.icon}
                            </span>
                            <CardTitle className="text-center mb-3 font-normal">
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
          <h1 className="relative text-2xl md:text-3xl font-bold pt-5 pb-1">
            Inicia una prueba diagnóstica
            <span className="absolute text-center text-sm bg-red-400 text-white px-2 inline-block ml-1 rounded-full leading-relaxed">
              Gratis
            </span>
          </h1>
          <p className="text-xl text-muted-foreground pt-1 pb-3 mb-5">
            Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu área
          </p>
          <Dialog>
            <DialogTrigger aria-describedby="prueba" className="py-3 px-4 text-lg text-center text-white dark:text-gray-200 bg-teal-500 hover:bg-teal-600 dark:hover:bg-gray-500 mt-5 mb-6 rounded-md">
              Solicitar información
            </DialogTrigger>
            <DialogContent className="py-10 px-[2.5rem] lg:px-[3.5rem]" id="prueba">
              <DialogHeader className="mb-[0.5rem]">
                <DialogTitle className="text-3xl mb-4">Agenda una prueba diagnóstica</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  Completa el formulario para agendar tu prueba.
                </DialogDescription>
              </DialogHeader>
              <div className="">

              </div>
            </DialogContent>
          </Dialog>
        </section>
        {/* Features List Section */}
        {/* Overview of Workshops, Courses, and Training programs. */}
        <section className="container py-10 mb-[10rem] mt-[2rem]">
          <div className="w-full mb-[5rem] text-center">
            <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-5">
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
                        <h1 className="text-lg lg:text-2xl text-center w-full dark:text-slate-900">
                          <Link href="./" className="transition-all duration-100 ease-in-out bg-white/75 hover:lg:bg-white/45 rounded-full px-9 py-3 mx-4 md:mb-1 mt-6">
                            Capacitaciones
                            <ArrowRight className="inline-block ml-2" />
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
                        <h1 className="text-lg lg:text-xl text-center dark:text-slate-900 w-full">
                          <Link href="./" className="transition-all duration-100 ease-in-out bg-white/75 hover:lg:bg-white/45 rounded-full px-9 py-3 mx-4 md:mb-1 mt-6">
                            Coaching
                            <ArrowRight className="inline-block ml-2" />
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
                        <h1 className="text-lg lg:text-xl text-center dark:text-slate-900 w-full">
                          <Link href="./" className="transition-all duration-100 ease-in-out bg-white/75 hover:lg:bg-white/45 rounded-full px-9 py-3 mx-4 md:mb-1 mt-6">
                            Conferencias
                            <ArrowRight className="inline-block ml-2" />
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
                        <h1 className="text-lg lg:text-xl text-center dark:text-slate-900 w-full">
                          <Link href="./" className="transition-all duration-100 ease-in-out bg-white/75 hover:lg:bg-white/45 rounded-full px-9 py-3 mx-4 md:mb-1 mt-6">
                            Talleres
                            <ArrowRight className="inline-block ml-2" />
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
                        <h1 className="text-base lg:text-xl text-center dark:text-slate-900 w-full">
                          <Link href="./" className="transition-all duration-200 ease-in-out bg-white/75 hover:lg:bg-white/45 rounded-full px-9 py-3 mx-4 md:mb-1 mt-6">
                            Consultoría
                            <ArrowRight className="inline-block ml-2" />
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
          <MainLink href="./eventos" linkText="Próximos eventos" />
        </section>
        <section className="container h-auto md:h-[36rem] flex flex-col-reverse lg:flex-row py-8 mt-[3rem] mb-[2rem]">
          <div className="w-full lg:w-1/2 pr-10 mb-[2rem]">
            <p className="text-lg text-center text-muted-foreground py-1 uppercase tracking-[0.2rem]">
              Reconocimiento nacional
            </p>
            <h1 className="text-3xl md:text-4xl text-center font-bold pt-2 mb-4 md:leading-[3rem] px-0">
              ¿Por qué evaluarme con <span className="bg-teal-200 whitespace-nowrap px-3 rounded-md text-gray-900 font-bold">Proyecta Empresarial</span>?
            </h1>
            <p className="text-lg text-center text-muted-foreground py-2 mb-3 w-full lg:w-3/4 lg:mx-auto">
              Instituciones educativas, empresas y entidades gubernamentales en todo México confían en los procesos de evaluación de Proyecta Empresarial.
            </p>
            <SecondaryButton href="./acerca#acerca" linkText="Acerca de nosotros" alignment="center" />
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

        <section className="pb-[12rem] mt-5 h-auto dark:bg-slate-900 ">
          {/* Seccion de testimonios */}
          <div className="container py-[6rem]">
            <h2 className="text-center text-3xl font-bold tracking-tight lg:text-4xl mb-4 mt-6">
              Casos de éxito
            </h2>
            <span className="w-[4rem] h-[3px] bg-teal-400 block mb-6 mx-auto"></span>

            <Testimonios />
          </div>
        </section>
        <section className="bg-slate-600 py-[6rem] h-auto scroll-mt-28" id="asesor">
          <div className="container flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-2/5 text-white">
              <h2 className="text-4xl font-bold leading-[2.6rem]">Asesoría personalizada durante el  <span className="text-teal-300">proceso de certificación</span></h2>
              <p className="text-xl mt-8">¡Hola! Soy <span className="font-bold">Patricia Martínez</span> asesor de Proyecta Empresarial, estoy para ayudarte a desarrollar las habilidades y la confianza para prosperar en un mundo competitivo.</p>
            </div>
            <div className="w-full lg:w-3/5">
              <div className="bg-white h-full rounded-md mx-0 lg:mx-10 mt-10 lg:mt-0 px-5 lg:px-[3.2rem] py-6">
                <h3 className="text-2xl font-bold py-6">Datos de contacto</h3>
                <ContactForm />
              </div>
              <div className="flex justify-center items-center leading-0 pt-5">
                <Lock className="text-gray-100" strokeWidth={2.0} size={14} />
                <p className="text-gray-100 text-sm pl-2 pt-1">Tus datos están protegidos por nuestra política de privacidad</p>
              </div>
            </div>
          </div>
        </section>

      </main >
      <Footer />
    </>
  );
}

