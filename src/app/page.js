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

// Custom components
import Footer from "@/components/organisms/Footer";
import Testimonios from "@/components/molecules/Testimonios";
import MainButton from "@/components/atoms/MainButton";
import OutlineButton from "@/components/atoms/OutlineButton";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import AnimatedText from "@/components/molecules/AnimatedText";
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

// Content for the benefits section
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
    description: "Reconocimiento de la Secretaría de Educación Pública",
    icon: <FileBadge size={32} strokeWidth={2} className="text-white" />,
    id: "ouc",
  },
]

// Styles for the Image used as background
const styles = {
  heroImage: {
    backgroundImage: 'url(https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

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
    title: "Actitudes y Valores",
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



export default function Home({ Component, pageProps }) {
  return (
    <>
      <main className="w-full pt-19 scroll-smooth">
        <section 
          style={styles.heroImage} 
          className="relative h-screen border-b-[9px] bg-fixed">
          <div className="mx-auto h-full pt-20 md:pt-1 bg-slate-900/50">
            <div className="
              container
              flex 
              flex-col
              justify-center
              md:items-center
              gap-y-7 
              h-full">
              <h1 className="
              w-full
              lg:w-3/4
              scroll-m-20 
              text-white
              text-center
              text-3xl
              md:text-5xl
              font-bold
              tracking-normal
              lg:!leading-[3.6rem]
              py-3
              px-3
              animate-slideIn">
                La <span className="text-teal-100">certificación de competencias laborales</span> impulsarán tu carrera profesional al éxito
              </h1>
              <p className="text-xl md:text-3xl text-white text-center font-light animate-fadeIn text-background">Respalda tus conocimientos y experiencia con certificaciones</p>
              <div className="flex flex-col md:flex-row mt-1 md:mt-3 animate-fadeIn">
                <MainButton href="./proceso" linkText="Comienza ahora" />
                <Link className="transition-all duration-300 ease-in-out px-4 py-3 mx-4 mb-6 md:mb-1 hover:underline text-center font-bold md:text-lg rounded-sm text-white shadow-sm mt-6" href="./asesor">
                  Comienza con un asesor
                </Link>
              </div>

            </div>
          </div>
          <div className="animate-fadeIn absolute bottom-[20vw] md:bottom-[10vw] lg:bottom-[5vw] right-2/4">
            <div className="animate-bounce transition-colors ease-in-out bg-gray-700 hover:bg-slate-200 rounded-full border-1 border-slate-300 p-2 text-white hover:text-teal-600">
              <Link href="#benefits"><ArrowDown className="h-8 w-8" /></Link>
            </div>
          </div>
        </section>

        <section className="container h-auto lg:h-[32rem] mt-[6rem]">
          <div className="flex flex-col items-center justify-center h-full scroll-smooth" id="benefits">
            <h2 className="scroll-m-40 text-4xl md:text-5xl font-extrabold tracking-tight py-10 mt-10 text-center">Beneficios de la certificación laboral</h2>
            <div className="flex flex-col sm:flex-col lg:flex-row justify-center items-baseline mt-8 mb-6">
              {benefits.map((benefit => {
                return (
                  <div className="w-full lg:w-1/3 py-8 px-5 mx-2 md:mx-auto" key={benefit.id}>
                    <div className="bg-teal-500 w-fit h-fit p-4 rounded-full">{benefit.icon}</div>
                    <h3 className="text-2xl font-bold text-left mt-8 mb-4">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground text-left">{benefit.description}</p>
                  </div>
                )
              }))}
            </div>
            <OutlineButton href="./certificaciones" linkText="Ver certificaciones" />
          </div>
        </section>

        <div className="py-10 h-auto md:h-[16rem] mt-[4rem] mb-[6rem]">
          {/* <p className="text-lg text-muted-foreground text-center py-6 uppercase">Alianzas para crear valor</p>
            <h5 className="text-5xl font-bold dark:text-slate-100 text-center">Nuestros socios</h5> */}
          <div className="flex flex-col md:flex-row items-center justify-center mt-10 py-10">
            <Image src={logoRedConocer} alt="logotipo de Red CONOCER" width={190} className="mx-5" />
            <Image src={logoICEM} alt="logotipo de ICE México" width={190} className="mx-5" />
          </div>
        </div>

        <section className="container w-full py-10 mt-[2rem]">
          {/* Pasos para certificarse */}
          <div className="py-5 mb-[3rem] bg-gray-50 dark:bg-gray-900 rounded-xl px-5 lg:px-[4rem]">
            <h2 className="text-2xl md:text-3xl text-center lg:text-left font-bold pt-[2.5rem] mt-2 lg:mt-10 mb-9 pl-0 lg:pl-10">Antes de empezar. Conoce los pasos para la certificación</h2>
            {/* <p className="text-xl text-center lg:text-left pb-8 w-full lg:w-2/3 pl-0 lg:pl-10">Las certificaciones permiten demostrar su habilidad para realizar funciones específicas a un alto nivel</p> */}
            <div className="flex flex-col lg:flex-row w-full py-3 mx-auto px-0 lg:px-10 h-auto lg:h-[34rem]">
              <div className="relative w-full lg:w-1/2 h-full">
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
              <div className="w-full lg:w-1/2 pl-8 pt-10 lg:pt-2 md:pl-[2rem] mb-[2rem]">
                {pasos.map((paso => {
                  return (
                    <div key={paso.id} className="flex flex-col md:flex-row items-center md:items-start mb-[1.5rem] py-2">
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
                              <Link href="./" className="text-lg text-teal-500 hover:text-teal-700 inline-block mt-5 ">
                                <span className="text-xl font-semibold">Ver más
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

        <section className="container h-auto md:h-[36rem] flex flex-col lg:flex-row py-8 mt-[3rem] mb-[3rem]">
          <div className="justify-center items-center w-full lg:w-1/2 pr-10 mb-[3rem]">
            <p className="text-lg text-center lg:text-left text-slate-600 py-1 uppercase tracking-wide">Reconocimiento nacional</p>
            <h1 className="text-3xl md:text-4xl text-center lg:text-left font-bold py-4 mb-1 md:leading-[3rem] px-0">¿Por qué evaluarme con <span className="bg-teal-300 whitespace-nowrap px-3 rounded-md dark:text-slate-900">Proyecta Empresarial</span>?</h1>
            <p className="text-lg text-center lg:text-left py-2 mb-10">Instituciones educativas, empresas y entidades gubernamentales en todo México confían en los procesos de evaluación de Proyecta Empresarial.</p>

            <Dialog>
              <DialogTrigger>
                <SecondaryButton href="./acerca" linkText="Acerca de nosotros" />
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
          <ul className="grid grid-cols-2 w-full lg:w-1/2 gap-5 mb-10 mr-10 py-10">
            <li className="text-xl text-center font-bold flex flex-col align-middle"><LockKeyhole size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Objetividad y confiabilidad</span></li>
            <li className="text-xl text-center font-bold flex flex-col align-middle"><Headset size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Asesoría de expertos</span></li>
            <li className="text-xl text-center font-bold flex flex-col align-middle"><ShieldCheck size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Calidad asegurada</span></li>
            <li className="text-xl text-center font-bold flex flex-col align-middle"><Award size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Respaldo de OC más importante</span></li>
          </ul>
        </section>

        <section className="container py-10 mb-[10rem] mt-[2rem]">
          <div className="w-full mb-[5rem]">
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-8 mb-2">
              Convención anual.
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-gray-500 before:rounded-md relative inline-block ml-2">
                <span className="relative text-white text-center px-1">Mejores momentos</span>
              </span>
            </h1>
            <p className="text-center text-2xl font-light text-slate-700 dark:text-slate-200 py-4 mb-4">Participan escuelas, universidades y gobiernos en diferentes actividades</p>
            <p className="text-center text-xl">
              <Link href="./" className="group text-xl text-teal-600 hover:text-teal-700 hover:bg-gray-100 rounded-full transition-all duration-200 py-3 pl-5 pr-3">
                <span className="py-3"> Próximos eventos
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 origin-left inline transition-all group-hover:translate-x-1 group-hover:text-teal-700"><path d="m6 17 5-5-5-5" /></svg>
                </span>
              </Link>
            </p>
          </div>
          <Carousel>
            <CarouselContent className="w-full flex lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-2 -ml-1">
              <CarouselItem className="w-full h-[330px] md:h-[390px] lg:h-[670px] lg:col-span-2 lg:row-span-2">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="
                          absolute
                          backface-hidden
                          transform
                          transition 
                          lg:group-hover:rotate-y-180
                          duration-300
                          rounded-lg 
                          shadow 
                          w-full 
                          h-full
                          z-20">
                      <Image
                        src={presentation}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="
                        absolute
                        backface-visible
                        transform
                        transition
                        -rotate-y-180 
                        lg:group-hover:rotate-y-0
                        duration-300
                        w-full 
                        h-full
                        rounded-lg
                        bg-teal-600">
                      <div className="
                        backface-visible
                        font-bold
                        w-full 
                        h-full
                        flex
                        justify-content
                        items-center">
                        <h1 className="text-white text-5xl text-center w-full">Capacitaciones</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full h-320 md:h-[390px] lg:h-[328px] lg:col-span-1 lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="
                          absolute
                          backface-hidden
                          transform
                          transition 
                          lg:group-hover:rotate-y-180
                          duration-300
                          rounded-lg 
                          shadow 
                          w-full 
                          h-full
                          z-20">
                      <Image
                        src={coaching}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="
                        absolute
                        backface-visible
                        transform
                        transition
                        -rotate-y-180 
                        lg:group-hover:rotate-y-0
                        duration-300
                        w-full 
                        h-full
                        rounded-lg
                        bg-purple-400">
                      <div className="
                        backface-visible
                        font-bold
                        w-full 
                        h-full
                        flex
                        justify-content
                        items-center">
                        <h1 className="text-white lg:text-4xl text-center w-full">Coaching</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full h-320 md:h-[390px] lg:h-[328px] lg:col-span-1 lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="
                          absolute
                          backface-hidden
                          transform
                          transition 
                          lg:group-hover:rotate-y-180
                          duration-300
                          rounded-lg 
                          shadow 
                          w-full 
                          h-full
                          z-20">
                      <Image
                        src={session}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="
                        absolute
                        backface-visible
                        transform
                        transition
                        -rotate-y-180 
                        lg:group-hover:rotate-y-0
                        duration-300
                        w-full 
                        h-full
                        rounded-lg
                        bg-blue-500">
                      <div className="
                        backface-visible
                        font-bold
                        w-full 
                        h-full
                        flex
                        justify-content
                        items-center">
                        <h1 className="text-white text-4xl text-center w-full">Conferencias</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full h-320 md:h-[390px] lg:h-[328px] lg:col-span-1 lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="
                          absolute
                          backface-hidden
                          transform
                          transition 
                          lg:group-hover:rotate-y-180
                          duration-300
                          rounded-lg 
                          shadow 
                          w-full 
                          h-full
                          z-20">
                      <Image
                        src={participants}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="
                        absolute
                        backface-visible
                        transform
                        transition
                        -rotate-y-180 
                        lg:group-hover:rotate-y-0
                        duration-300
                        w-full 
                        h-full
                        rounded-lg
                        bg-orange-400">
                      <div className="
                        backface-visible
                        font-bold
                        w-full 
                        h-full
                        flex
                        justify-content
                        items-center">
                        <h1 className="text-white text-4xl text-center w-full">Talleres</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full h-320 md:h-[390px] lg:h-[328px] lg:col-span-1 lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="
                          absolute
                          backface-hidden
                          transform
                          transition 
                          lg:group-hover:rotate-y-180
                          duration-300
                          rounded-lg 
                          shadow 
                          w-full 
                          h-full
                          z-20">
                      <Image
                        src={staged}
                        alt="Image showing a group of people"
                        quality={75}
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="
                        absolute
                        backface-visible
                        transform
                        transition
                        -rotate-y-180 
                        lg:group-hover:rotate-y-0
                        duration-300
                        w-full 
                        h-full
                        rounded-lg
                        bg-gray-400">
                      <div className="
                        backface-visible
                        font-bold
                        w-full 
                        h-full
                        flex
                        justify-content
                        items-center">
                        <h1 className="text-white text-4xl text-center w-full">Consultoría</h1>
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

        <section className="container w-full bg-gray-50 dark:bg-slate-900 rounded-lg pt-10 pb-[4rem] my-10 px-20 h-auto sm:h-auto md:h-[25rem] mt-[4rem] mb-[4rem] shadow-sm">
          <Image src={diagnostico} width={100} height={100} alt="icon for" className="max-w-auto mb-1" />
          <h1 className="relative text-3xl md:text-4xl font-bold pt-5 pb-4">
            Inicia una evaluación diagnóstica
            <span className="absolute text-center text-sm bg-yellow-300 dark:text-slate-900 px-2 align-middle inline-block ml-3 rounded-full leading-1 pt-1">Gratis</span>
          </h1>
          <p className="text-xl pt-4 pb-8 mb-5">Resultados confiables respaldados por el Organismo Certificador más importante de America Latina: <em>ICE México</em>.</p>
          <SecondaryButton href="./asesor" linkText="Agenda una evaluación" />
        </section>

        <section className="pb-[10rem] mt-10 h-auto bg-gradient-to-t from-slate-100 from-60% to-white dark:from-gray-900 dark:to-slate-950">
          {/* Criterios de evaluación */}
          <div className="container mt-[12rem] mb-[8rem] py-10">
            <h4 className="text-2xl md:text-3xl font-bold text-left py-6 mb-4 lg:mb-[1.5rem]">
              <span className="leading-[1rem]">Prepárate previo a tu evaluación para reforzar cuatro elementos clave</span>
            </h4>
            <Carousel className="">
              <CarouselContent className="w-full flex lg:grid lg:grid-cols-3 gap-8 auto-cols-max mt-3 px-6 lg:px-0">
                {criterios.map((criterio => {
                  return (
                    <CarouselItem className="pb-7 mb-7 lg:pb-2 lg:mb-2" key={criterio.id}>
                      <Card className={`group relative w-full lg:w-11/12 lg:mx-0 xl:mx-0 mb-7 px-2 h-[20rem] overflow-hidden ${criterio.borColor}`}>
                        <CardHeader>
                          <CardDescription className="mb-1 text-gray-800">{criterio.description}</CardDescription>
                          <div className="absolute bottom-24 right-0 left-0 transform ease-in-out duration-300 group-hover:bottom-32">
                            <span className="text-slate-900 dark:text-slate-200 px-4 py-6">{criterio.icon}</span>
                            <CardTitle className="text-center">{criterio.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="absolute -bottom-6 right-0 w-full h-0 overflow-hidden transform ease-in-out duration-300 group-hover:h-2/6 text-white bg-slate-800">
                          <p className="text-lg absolute top-0 text-left w-11/12 pr-3 pt-3">{criterio.content}</p>
                        </CardContent>
                        <CardFooter>
                          <div className="">
                          </div>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  )
                }))}
                <CarouselItem className="
                group 
                flex 
                flex-col 
                border 
                rounded-md 
                pb-6 
                lg:w-11/12 
                lg:mx-0 
                xl:mx-0 
                mb-7 
                py-10 
                px-6 
                hover:shadow-xl 
                transition-shadow 
                duration-300">
                  <p className="flex-grow text-xl text-center">
                    Realiza una <strong>alineación al estándar de competencia</strong> para asegurarte que estás preparada o preparado.
                  </p>
                  <p className="text-center mb-3">
                    <Link className="
                    text-xl
                    text-white 
                    bg-teal-500
                    hover:bg-teal-600 
                    px-5 
                    py-2
                    rounded-md 
                    z-10 
                    transition-colors 
                    ease-in-out 
                    duration-300" href="./">
                      Más información
                    </Link>
                  </p>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="lg:invisible" />
              <CarouselNext className="lg:invisible" />
            </Carousel>
          </div>
          {/* Seccion de testimonios */}
          <div className="container">
            <p className="text-center text-muted-foreground text-lg uppercase py-6">Testimoniales</p>
            <h2 className="text-center text-3xl font-extrabold tracking-tight lg:text-5xl mb-5 mt-2">Casos de éxito</h2>
            <Testimonios />
          </div>
        </section>

        {/* Call to action section */}
        <section>
          <div className="
            flex 
            flex-col 
            justify-center 
            items-center 
            w-full 
            h-auto 
            md:h-[36rem] 
            animated-background 
            bg-gradient-to-r 
            from-indigo-300 
            from-1% 
            via-sky-100 
            via-30% 
            to-emerald-200 
            to-59% 
            border-b-[9px] 
            border-t-[9px] 
            mx-auto
            py-[5rem]">
            <div className="w-full md:w-3/5 px-10 ">
              <h5 className="text-3xl md:text-5xl text-center dark:text-gray-800 font-bold py-3">Su experiencia en otro nivel</h5>
              <p className="text-xl md:text-2xl text-center font-light dark:text-gray-800 py-3 mb-[5rem]">Obtenga la tranquilidad de saber que sus evaluaciones están en manos expertas</p>
            </div>
            <MainButton href="./proceso" linkText="Comienza ahora" />
            <p className="text-lg dark:text-gray-800 py-3">¡Obten 20% de descuento!</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

