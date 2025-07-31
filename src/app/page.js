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
import AsesorForm from "@/components/organisms/asesor-form";
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
  Lock,
  ChevronRight
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
    icon: <Lightbulb strokeWidth={1.75} size={50} absoluteStrokeWidth={true} className="mx-auto mb-6" />,
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
    price: "$5,800 MXN",
  },
]

const EventsInfo = [{
  title: "Coaching",
  description: "Sesiones de coaching personalizadas para el desarrollo profesional.",
  image: coaching,
  alt: "Coaching",
  link: "./coaching",
},
{
  title: "Talleres",
  description: "Participa en sesiones en vivo con expertos de la industria.",
  image: session,
  alt: "Sesiones en vivo",
  link: "./coaching",
},
{
  title: "Conferencias",
  description: "Conoce a otros profesionales y expande tu red de contactos.",
  image: staged,
  alt: "Participantes",
  link: "./coaching",
},
{
  title: "Capacitaciones",
  description: "Nos enfocamos en el desarrollo de habilidades, conocimientos y actitudes basadas en estándares de competencia.",
  image: participants,
  alt: "Staged",
  link: "./coaching",
},
{
  title: "Consultoría",
  description: "Nos enfocamos en el desarrollo de habilidades, conocimientos y actitudes basadas en estándares de competencia.",
  image: presentation,
  alt: "Staged",
  link: "./coaching",
},
];


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
      <main className="w-full pt-19 scroll-smooth pt-32">
        <section className="relative h-168">
          {/* bg-linear-to-b lg:bg-linear-to-r from-teal-500 from-60% md:from-40% to-transparent dark:to-teal-600 to-17%  */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center container h-full bg-teal-500 rounded-none lg:rounded-2xl mt-0 lg:mt-10 px-16">
            <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start">
              <h1 className="text-white text-3xl text-center lg:text-left md:text-5xl font-bold lg:leading-12! py-3 text-pretty">
                Impulsa tu crecimiento profesional
              </h1>
              <p className="text-xl md:text-2xl text-center lg:text-left text-white text-background py-6 md:py-1">
                Respalda tus conocimientos y experiencia con <strong>certificaciones oficiales</strong>
              </p>
              <div className="flex flex-col md:flex-row mt-1 md:mt-3 animate-fade-in ">

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <CtaButton href="./proceso" linkText="Comenzar ahora" className="text-center" />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex justify-between items-start mt-4 p-3 bg-slate-100 dark:bg-slate-800">
                    <Award size={24} className="w-fit text-white ml-1 mt-1 p-1 bg-blue-500 rounded-full" />
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
          <div className="animate-fade-in absolute -bottom-[5vw] md:bottom-[2vw] right-2/4">
            <div className="animate-bounce transition-colors ease-in-out bg-gray-700 hover:bg-slate-500 rounded-full border p-2 text-white">
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
        <section className="container h-auto lg:h-128 mt-24 pb-[2.7rem]">
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
          <MainLink href="./certificaciones" linkText="Ver certificaciones" />
        </section>

        {/* Certification process section */}
        <section className="container w-full py-10 mt-12">
          {/* Pasos para certificarse */}
          <h2 className="text-2xl md:text-3xl text-center font-bold tracking-tight pt-10 mt-2 lg:mt-10 mb-16 pl-0 lg:pl-10">
            Antes de empezar. Conoce los pasos para la certificación
          </h2>
          <div className="py-5 mb-16 bg-blue-50/85 dark:bg-gray-900 rounded-xl px-5 lg:px-8">
            <div className="flex flex-col lg:flex-row w-full py-3 mx-auto px-0 lg:px-10 h-auto lg:h-136">
              <div className="relative w-full lg:w-1/2 h-full mt-10">
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
              <div className="w-full lg:w-1/2 pl-8 pt-10 lg:pt-2 md:pl-8 mb-8 mt-2 lg:mt-6">
                {pasos.map((paso => {
                  return (
                    <div
                      key={paso.id}
                      className="flex flex-col md:flex-row items-center md:items-start mb-1 lg:mb-6 py-2">
                      <div className="relative pl-4 md:pl-24">
                        <span className="absolute -left-8 lg:left-9 top-2 lg:top-3 bg-gray-500 text-white px-4 text-center content-center rounded-full min-w-10 min-h-10 mx-3">
                          {paso.stepNumber}
                        </span>
                        <div className="group pl-8">
                          <h3 className="text-xl md:text-left font-normal py-3">
                            {paso.title}
                          </h3>
                          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-250">
                            <p className="text-muted-foreground text-lg mb-0 lg:mb-2 overflow-hidden">
                              {paso.description} <br />
                              <Link
                                href="./"
                                className="text-lg text-teal-600 hover:text-teal-700 dark:hover:text-teal-400 inline-block mt-3">
                                <span className="text-lg">Ver más
                                  <ChevronRight className="inline-block ml-2 h-4 w-4" />
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
          <div className="flex flex-col-reverse lg:flex-row mt-10">
            <div className="w-full lg:w-1/2">
              <h2 className="w-full lg:w-4/5 text-2xl md:text-3xl text-pretty font-bold tracking-tight pt-10 mt-2 lg:mt-10 mb-4 pl-0 lg:pl-10">
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
        <div className="container mt-24 mb-32 py-10">
          <h3 className="text-center text-3xl font-bold py-6">Refuerza cuatro elementos clave. Prepárate</h3>
          <p className="w-full lg:w-3/4 text-xl text-center text-pretty text-muted-foreground 
              dark:text-slate-200 mb-1 pb-2 mx-auto">
            Únase a nosotros para desarrollar las habilidades, la confianza así como los conocimientos para prosperar en un mundo competitivo y mejorar sus perspectivas profesionales.
          </p>
          <div className="px-0 lg:px-10 mt-2 mb-3 text-right">
            <Carousel className="mb-6">
              <CarouselContent className="w-full flex lg:grid lg:grid-cols-4 gap-3 auto-cols-max mt-3 px-6 lg:px-0">
                {criterios.map((criterio => {
                  return (
                    <CarouselItem
                      className="group pb-7 mb-7 lg:pb-2 lg:mb-1"
                      key={criterio.id}>
                      <Card className="bg-gray-100/50 dark:bg-slate-800 rounded-md relative w-full lg:w-12/12 lg:mx-0 mb-7 px-2 h-70 overflow-hidden">
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
                        <CardContent className="absolute -bottom-2 lg:-bottom-6 right-0 w-full h-28 lg:h-0 lg:overflow-hidden lg:group-hover:overflow-visible lg:transform ease-in-out duration-300 lg:group-hover:h-2/5 text-white bg-gray-800 dark:bg-gray-600 group-hover:bg-slate-800 border-0 lg:border-b-0 rounded-b-md">
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

        
        <section className="container w-full bg-gray-50 dark:bg-slate-900 rounded-lg pt-10 pb-16 my-10 px-10 lg:px-20 h-auto sm:h-auto md:h-100 mt-16 mb-16 shadow-xs">
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
          <SecondaryButton
            href="./prueba"
            linkText="Agendar prueba"
            className="text-center w-full md:w-fit" />
        </section>
        
        {/* Events Section */}
        {/* Overview of Workshops, Courses, and Training programs. */}
        <section className="container py-10 mb-40 mt-8">
          <div className="w-full mb-20 text-center">
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

          <div className="w-full flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-x-8 gap-y-8">

            <div className="w-full mb-20">
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
            
            {EventsInfo.map((event, index) => (
              <div key={index} className="w-full h-full rounded-b-md">
              <Link href={event.link}>
                <div className="group hover:shadow-xl transition-all duration-200 ease-in-out rounded-b-md">
                  <div className="h-64">
                    <Image
                      src={event.image}
                      alt={event.alt}
                      quality={75}
                      sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (min-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                      className="static inset-0 w-full h-full object-cover rounded-t-md"
                    />
                  </div>
                  <div className="text-lg text-left w-full dark:text-slate-200 pt-3 pb-5 px-6 border-b border-r border-l rounded-b-md">
                    <h3 className="text-xl font-bold pt-3">{event.title}</h3>
                    <p className="text-lg py-2">{event.description}</p>
                    <span className="text-proyecta-600 group-hover:text-proyecta-700 transition-all duration-200 ease-in-out py-3 md:mb-1 mt-6 font-bold">
                      Leer más
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            ))
              }
            

          </div>


          <MainLink href="./eventos" linkText="Próximos eventos" />
        </section>
        <section className="container h-auto md:h-144 flex flex-col-reverse lg:flex-row py-8 mt-12 mb-8">
          <div className="w-full lg:w-1/2 pr-10 mb-8">
            <p className="text-lg text-center text-muted-foreground py-1 uppercase tracking-[0.2rem]">
              Reconocimiento nacional
            </p>
            <h1 className="text-3xl md:text-4xl text-center font-bold pt-2 mb-4 md:leading-12 px-0">
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

        <section className="pb-48 mt-5 h-auto dark:bg-slate-900 ">
          {/* Seccion de testimonios */}
          <div className="container py-24">
            <h2 className="text-center text-3xl font-bold tracking-tight lg:text-4xl mb-4 mt-6">
              Casos de éxito
            </h2>
            <span className="w-16 h-[3px] bg-teal-400 block mb-6 mx-auto"></span>

            <Testimonios />
          </div>
        </section>
        <section className="bg-slate-600 py-5 lg:py-24 h-auto scroll-mt-20" id="asesor">
          <div className="container-none lg:container flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 text-white px-8 py-10">
              <h2 className="text-4xl font-bold leading-[2.6rem]">Asesoría personalizada durante el  <span className="text-teal-300">proceso de certificación</span></h2>
              <p className="text-xl mt-8">¡Hola! Soy <span className="font-bold">Patricia Martínez</span> asesor de Proyecta Empresarial, estoy para ayudarte a desarrollar las habilidades y la confianza para prosperar en un mundo competitivo.</p>
            </div>
            <div className="w-full lg:w-3/5">
              <div className="bg-white dark:bg-gray-900 h-full rounded-none lg:rounded-2xl mx-0 lg:mx-10 mt-10 lg:mt-0 pt-6">
                <AsesorForm />
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

