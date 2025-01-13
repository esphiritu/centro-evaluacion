// Next.js components
import Link from "next/link";
import Image from "next/image";
// Shadcn UI components
import {
  Key,
  LockKeyhole,
  ShieldCheck,
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
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

// Custom components
import Footer from "@/components/organisms/Footer";
import Testimonios from "@/components/molecules/Testimonios";
import CtaButton from "@/components/atoms/CtaButton";
import MainLink from "@/components/atoms/MainLink";
import OutlineButton from "@/components/atoms/OutlineButton";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import AnimatedText from "@/components/molecules/AnimatedText";


// Data for components
const benefits = [
  {
    title: "Encuentra mejores oportunidades",
    description: "Las certificaciones aumentan la competitividad del trabajador dentro del mercado laboral",
    icon: <Key size={32} strokeWidth={2} className="text-white" />,
    id: "emo",
  },
  {
    title: "Accede a mejores salarios",
    description: "En promedio, las personas certificadas ganan el doble que los trabajadores no certificados ",
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

// Styles for the Image used as background
// const styles = {
//   heroImage: {
//     backgroundImage: 'url(https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//   },
// };


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
import ButtonAlike from "@/components/atoms/ButtonAlike";



export default function Home({ Component, pageProps }) {
  return (
    <>
      <main className="w-full pt-19 scroll-smooth">
        <section className="relative h-[42rem]">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center container h-full bg-gradient-to-b lg:bg-gradient-to-r from-teal-500 from-60% md:from-40% to-transparent to-17% rounded-none lg:rounded-2xl mt-0 lg:mt-10 px-[4rem]">
            <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start">
              <h1 className="text-white text-2xl text-center lg:text-left md:text-4xl font-bold tracking-normal lg:!leading-[3rem] py-3 animate-slideIn text-pretty">
                La <span className="">certificación de competencias laborales</span> mejorarán tus habilidades e impulsarán tu carrera profesional
              </h1>
              <p className="text-xl md:text-2xl text-center lg:text-left text-white font-thin animate-fadeIn text-background drop-shadow-md py-6 md:py-1">
                Respalda tus conocimientos y experiencia con certificaciones
              </p>
              <div className="flex flex-col md:flex-row mt-1 md:mt-3 animate-fadeIn ">
                <CtaButton href="./proceso" linkText="Comienza ahora" className="text-center" />
                <Link className="transition-all duration-300 ease-in-out hover:bg-white/15 text-center font-bold md:text-lg rounded-sm text-white px-4 py-3 mx-0 lg:mx-4 md:mb-1 mt-6 max-w-fit" href="./asesor">
                  <span className="whitespace-nowrap">Comienza con un asesor <CircleChevronRight strokeWidth={1.50} size={20} className="text-white inline" /></span>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              Fotografía
            </div>
          </div>
          <div className="animate-fadeIn absolute -bottom-[5vw] md:bottom-[2vw] right-2/4">
            <div className="animate-bounce transition-colors ease-in-out bg-gray-700 hover:bg-slate-200 rounded-full border-1 border-slate-300 p-2 text-white hover:text-teal-600">
              <Link href="#benefits">
                <ArrowDown className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </section>
        {/* Feature Section */}
        {/* Highlight the key benefits of getting certified through the company's educational programs. */}
        <section className="container h-auto lg:h-[32rem] mt-[6rem]">
          <div
            className="flex flex-col items-center justify-center h-full scroll-smooth"
            id="benefits">
            <h2 className="scroll-m-40 text-3xl md:text-4xl text-center font-extrabold tracking-tight py-10 mt-10">Beneficios de la certificación laboral</h2>
            <ul
              className="flex flex-col sm:flex-col lg:flex-row justify-center items-baseline mt-8 mb-[4.7rem]">
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
                    <p className="text-lg text-muted-foreground text-left">
                      {benefit.description}
                    </p>
                  </li>
                )
              }))}
            </ul>
            <OutlineButton href="./certificaciones" linkText="Ver certificaciones" className="" />
          </div>
        </section>
        {/* Partners Section */}
        <div className="container py-5 h-auto">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between mt-10 py-10">
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
          <div className="flex flex-col-reverse lg:flex-row mt-[4.5rem]">
            <div className="w-full lg:w-1/2">
              <h2 className="w-full lg:w-4/5 text-2xl md:text-3xl text-pretty font-bold tracking-tight pt-[2.5rem] mt-2 lg:mt-10 mb-4 pl-0 lg:pl-10">
                La certificación es una oportunidad para alcanzar tus metas profesionales
              </h2>
              <p className="w-full lg:w-4/5 text-lg md:text-xl text-muted-foreground text-pretty mb-8 pl-0 lg:pl-10">Estamos listos para ayudarte en el proceso de certificación laboral</p>
              <ul className="text-lg pl-0 lg:pl-10 py-3">
                <li className="flex p-1 items-center"><Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white bg-teal-400 min-w-5 min-h-5 rounded-full p-[0.15rem]" /> <span className="text-slate-700 dark:text-slate-400 pl-3">Certificados con validez oficial de <strong className="whitespace-nowrap">SEP-CONOCER</strong></span></li>
                <li className="flex p-1 items-center"><Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white bg-teal-400 min-w-5 min-h-5 rounded-full p-[0.15rem]" /> <span className="text-slate-700 dark:text-slate-400 pl-3">Procesos ágiles de certificación</span></li>
                <li className="flex p-1 items-center"><Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white bg-teal-400 min-w-5 min-h-5 rounded-full p-[0.15rem]" /> <span className="text-slate-700 dark:text-slate-400 pl-3">Sin requisitos académicos</span></li>
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
              <span className="text-teal-500">Antes de empezar.</span> Conoce los pasos para la certificación
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

        {/* Criterios de evaluación */}
        <div className="container mt-[6rem] mb-[8rem] py-10">
          <div id="textSlider" className="relative w-full lg:w-1/2 mx-auto pl-0 md:pl-[4rem]">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 float-left text-2xl md:text-3xl m-0 pr-2 leading-[4.8rem] md:leading-[4.6rem] font-bold">
              <p>Refuerza los elementos clave.</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 text-left text-2xl md:text-3xl font-bold m-0 min-w-fit">
              <div className="h-[5.6rem] overflow-hidden">
                <div className="animate-scroller">
                  <p className="leading-[4.9rem] md:leading-[4.8rem]">Saber</p>
                  <p className="leading-[4.5rem] md:leading-[4.5rem]">Saber hacer</p>
                  <p className="leading-[4.7rem] md:leading-[4.6rem]">Saber ser</p>
                  <p className="text-teal-500 leading-[4.5rem] md:leading-[4.5rem]">Prepárate.</p>
                </div>
              </div>
            </div>
          </div>
          <p className="w-full lg:w-3/4 text-2xl text-center text-pretty text-muted-foreground 
              dark:text-slate-200 font-thin mb-1 pb-8 mx-auto">
            Nuestros programas están diseñados para equiparlo con los elementos clave para sobresalir en su campo. Únase a nosotros para mejorar sus conocimientos y mejorar sus perspectivas profesionales.
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
          <p className="text-xl text-muted-foreground pt-1 pb-8 mb-5">
            Resultados confiables respaldados por el Organismo Certificador más importante de America Latina: <em>ICE México</em>.
          </p>
          <SecondaryButton href="./asesor" linkText="Agenda una evaluación" />
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
            <MainLink href="./" linkText="Próximos eventos" className="text-center" />
          </div>
          <Carousel>
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
                    <div className="absolute backface-visible lg:transform transition lg:-rotate-y-180 lg:group-hover:rotate-y-0 duration-300 w-full h-full rounded-lg bg-transparent lg:bg-teal-500">
                      <div className="backface-visible font-bold w-full h-full flex justify-content items-center">
                        <h1 className="text-white text-lg lg:text-2xl text-center w-full">
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
                    <div className="absolute backface-visible lg:transform transition lg:-rotate-y-180 lg:group-hover:rotate-y-0 duration-300 w-full h-full rounded-lg bg-transparent lg:bg-orange-400">
                      <div className="backface-visible font-bold w-full  h-full flex justify-content items-center">
                        <h1 className="text-white text-lg lg:text-xl text-center w-full">
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
                    <div className="absolute backface-visible lg:transform transition lg:-rotate-y-180 lg:group-hover:rotate-y-0 duration-300 w-full h-full rounded-lg bg-transparent lg:bg-blue-500">
                      <div className="backface-visible font-bold w-full h-full flex justify-content items-center">
                        <h1 className="text-white text-lg lg:text-xl text-center w-full">
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
                    <div className="absolute backface-visible lg:transform transition lg:-rotate-y-180  lg:group-hover:rotate-y-0 duration-300 w-full h-full rounded-lg bg-transparent lg:bg-purple-400">
                      <div className="backface-visible font-bold w-full  h-full flex justify-content items-center">
                        <h1 className="text-white text-lg lg:text-xl text-center w-full">
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
                    <div className="absolute backface-visible lg:transform transition lg:-rotate-y-180  lg:group-hover:rotate-y-0 duration-300 w-full  h-full rounded-lg bg-transparent lg:bg-cyan-600">
                      <div className="backface-visible font-bold w-full  h-full flex justify-content items-center">
                        <h1 className="text-white text-lg lg:text-xl text-center w-full">
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
        </section>
        <section className="container h-auto md:h-[36rem] flex flex-col lg:flex-row py-8 mt-[3rem] mb-[3rem]">
          <div className="w-full lg:w-1/2 pr-10 mb-[3rem]">
            <p className="text-lg text-center lg:text-left text-muted-foreground py-1 uppercase tracking-[0.2rem]">
              Reconocimiento nacional
            </p>
            <h1 className="text-3xl md:text-4xl text-center lg:text-left font-bold pt-2 mb-4 md:leading-[3rem] px-0">
              ¿Por qué evaluarme con <span className="bg-teal-200 whitespace-nowrap px-3 rounded-md text-gray-900 font-bold">Proyecta Empresarial</span>?
            </h1>
            <p className="text-lg text-center lg:text-left text-muted-foreground py-2 mb-10 w-full md:w-3/4">
              Instituciones educativas, empresas y entidades gubernamentales en todo México confían en los procesos de evaluación de Proyecta Empresarial.
            </p>
            <Dialog>
              <DialogTrigger>
                <ButtonAlike ButtonText="Acerca de nosotros" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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
        <section className="pb-[10rem] mt-10 h-auto">
          {/* Seccion de testimonios */}
          <div className="container">
            <p className="text-center text-muted-foreground text-lg uppercase tracking-[0.2rem] py-4">
              Testimonios
            </p>
            <h2 className="text-center text-3xl font-extrabold tracking-tight lg:text-5xl mb-4 mt-2">
              Casos de éxito
            </h2>
            <span className="w-[11.5rem] h-[3px] bg-teal-400 block mb-6 mx-auto"></span>
            <Testimonios />
          </div>
        </section>

        {/* Call to action section */}
        <section className="w-full h-auto md:h-[38rem] animated-background bg-gradient-to-br from-indigo-300 from-1% via-emeral-300 via-30% to-emerald-200 to-59% border-b-[9px] border-t-[9px] mx-auto py-[6rem] px-4 lg:px-8">
          <div className="flex flex-col justify-center container items-center bg-white/40 dark:bg-slate-900/40 rounded-lg border-spacing-2 border-2 border-white dark:border-gray-400 py-8 text-center">
            <div className="w-full md:w-4/5 px-2 lg:px-2 pt-8 text-center">
              <p className="text-center text-base bg-blue-400 text-white px-4 py-[0.3rem] rounded-full leading-relaxed w-fit mx-auto mb-4">INVERSIÓN INTELIGENTE</p>
              <h5 className="text-3xl md:text-4xl text-center dark:text-white font-bold pt-3 mb-4 text-pretty w-full lg:w-3/4 mx-auto">
                Libere su potencial con nuestros programas
              </h5>
              <p className="text-xl md:text-2xl text-center text-pretty font-light dark:text-white mb-[1.5rem]">
                Explore nuestra amplia gama de alineaciones, talleres y cursos diseñados para mejorar sus habilidades y su carrera.
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

