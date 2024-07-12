import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { CircleDollarSign, HandshakeIcon, Key, LockKeyhole, ShieldCheck, Headset, Award, CalendarDays,Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import webinarIcon from "@/public/img/webinar-meetings.svg";


export default function Home({ Component, pageProps }) {
  return (
    <>
      <main className="w-full m-auto">
        <section style={styles.container} className="px-10 h-screen border-b-[9px]">
          <div className="container mx-auto h-full">
            <div className="
              flex 
              flex-col 
              items-center 
              justify-center 
              md:items-start 
              gap-y-7 
              h-full">
              <h1 className="
              scroll-m-20 
              text-white 
              text-3xl 
              md:text-5xl 
              lg:text-6xl 
              font-extrabold 
              bg-black/50 
              tracking-tight 
              py-3 
              md:rounded-md 
              rounded-sm 
              transition-all 
              duration-300 
              ease-in-out 
              px-3"> 
                Impulsa tu vida profesional al éxito 
              </h1>
              <p className="text-2xl md:text-3xl text-white">Respalda tus conocimientos y experiencia con certificaciones oficiales</p>
              <div className="flex flex-col md:flex-row mt-5">
                <Link className="group transition-all duration-300 ease-in-out bg-yellow-300 hover:bg-yellow-400 px-6 py-3 mx-2 md:mx-4 rounded-sm text-teal-800 font-bold md:text-lg shadow-md mt-6" href="./proceso">
                  COMIENZA AHORA 
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline lucide lucide-chevrons-right ml-1 origin-left hover:translate-x-0.5 transition group-hover:translate-x-2"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </Link>
                <Link className="transition-all duration-300 ease-in-out px-4 py-2 mx-4 hover:underline text-base md:text-lg rounded-sm text-white shadow-sm mt-6" href="./asesor">
                  Comienza con un asesor
                </Link>
            </div>
            </div>
          </div>
        </section>
        <section className="container py-10">
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl pt-3 pb-2 mt-10 text-center">Beneficios de la certificación</h2>
          <p className="text-2xl text-muted-foreground text-center pb-2 mb-6">Las certificaciones permiten demostrar su habilidad para realizar tareas y funciones específicas a un alto nivel de rendimiento</p>
          <div className="flex flex-col sm:flex-col lg:flex-row justify-center items-baseline">
            {benefits.map((benefit => {
              return (
                <div className="py-8 px-5 w-full lg:w-1/4" key={benefit.id}>
                  {benefit.icon}
                  <h3 className="text-2xl font-bold text-center mt-8">{benefit.title}</h3>
                  <p className="text-lg text-muted-foreground text-center">{benefit.description}</p>
                </div>
              )
            }
            ))
            }
          </div>
        </section>
        <section className="container py-10 my-10">
          <h1 className="text-4xl text-center font-bold py-8 mb-8">Conoce la ruta para la certificación</h1>

        </section>
        <section className="container flex flex-col lg:flex-row rounded-md bg-gray-100 dark:bg-slate-900 py-10 my-10">
          
            <h2 className="w-1/3 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl py-10 my-5">Casos de éxito</h2>
            
          <div className="w-2/3">
            <p className="text-2xl py-10"> There is something so natural about collaborating in Freehand. It feels like you’re holding a marker, and making ideas happen. I can't imagine doing that in another tool. It captures that human essence of being in person and talking to someone that is right next to you and getting work done together. Especially in today’s world when everything is remote. It makes for really organic communication.</p>
            <p className="">Sea parte de nuestros clientes satisfechos que confían en nuestras evaluaciones</p>
          </div>
        </section>
        <section className="container py-10 my-10">
          <h1 className="text-4xl text-center font-bold py-6 mb-2">¿Por qué evaluarme con Proyecta Empresarial?</h1>
          <p className="text-2xl text-center font-light text-slate-600">Reconocimiento nacional</p>
          <p className="text-lg text-baseline text-center">Instituciones educativas, empresas y entidades gubernamentales en todo México confían en los procesos de evaluación de Proyecta Empresarial.</p>
          <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-10 my-5">
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><LockKeyhole size={42} className="m-auto text-teal-600" /><span className="block my-8">Objetividad y confiabilidad</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><Headset size={42} className="m-auto text-teal-600" /><span className="block my-8">Asesoría de expertos</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><ShieldCheck size={42} className="m-auto text-teal-600" /><span className="block my-8">Calidad asegurada</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><Award size={42} className="m-auto text-teal-600" /><span className="block my-8">Respaldo de ICE México</span></li>
          </ul>
        </section>
        <section className="container py-10 w-96 md:w-3/4 mb-10">
          <Carousel opts={{
            align: "center",
            loop: true,
          }}>
            <CarouselContent className="p-0 md:p-5">
              <CarouselItem className="bg-gray-100 dark:bg-slate-900 rounded-md py-10 px-6 md:px-10 text-gray-900 dark:text-gray-50">
                <Image src={webinarIcon} width={96} height={96} alt="icon for webinar"/>
                <p className="text-xl md:text-2xl text-left">Estás invitad@ al <span className="font-bold">webinar gratuito</span></p>
                <h1 className="font-bold text-3xl md:text-5xl text-[#7369E2] text-center mt-10">Estrategias para aumentar productividad</h1>
                <p className="mb-10 text-lg">Impartido por: Elisa M. A.</p>
              
                {/* Temario del evento */}
                <div className="text-xl">
                  <p className="">Aprenderás:</p>
                  <ol className="">
                    <li>Buen manejo del estrés</li>
                    <li>Mejorar la comunicación</li>
                  </ol>
                  
                </div>
               <div className="flex flex-col lg:flex-row md:justify-around mt-8 items-baseline">
                 {/* Fecha y hora del evento */}
                 <div className="flex items-center mb-4">
                   <Clock className="size-7"/>
                   <time className="uppercase text-left text-2xl font-light px-5" dateTime="20:00">8:00 PM</time>
                 </div>
                 <div className="flex mb-4 items-center">
                   <CalendarDays className="size-7" />
                   <time dateTime="2024-09-28" className="uppercase text-left text-2xl font-light px-5">28 SEP 2024</time>
                 </div>
                 {/* Team leader */}
                 <div className="">
                   <p>Cupo limitado</p>
                 </div>
                 <Button className="bg-teal-600 hover:bg-teal-700 px-4 text-lg text-white font-extrabold mt-5">Regístrate ahora</Button>
               </div>
              </CarouselItem>
              <CarouselItem><h1 className="text-2xl md:text-3xl">Descarga la guía del candidato</h1></CarouselItem>
              <CarouselItem><h1 className="text-2xl md:text-3xl">Asiste al evento presencial</h1></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
    </>
  );
}

// Content for the benefits section
const benefits = [
  {
    title: "Encuentra mejores oportunidades",
    description: "Las certificaciones aumenta la competitividad del trabajador dentro del mercado laboral",
    icon: <Key size={84} className="m-auto text-teal-600 bg-gray-50 rounded-full p-5 shadow-lg" />,
    id: "emo",
  },
  {
    title: "Accede a mejores salarios",
    description: "En promedio, las personas certificadas ante el CONOCER ganan el doble que los trabajadores no certificados ",
    icon: <CircleDollarSign size={84} className="m-auto text-teal-600 bg-gray-50 rounded-full p-5 shadow-lg" />,
    id: "ams",
  },
  {
    title: "Mejora tus condiciones laborales",
    description: "Los trabajadores certificados tienen jornadas laborales ligeramente más cortas que el resto de la fuerza laboral",
    icon: <HandshakeIcon size={84} className="m-auto text-teal-600 bg-gray-50 rounded-full p-5 shadow-lg" />,
    id: "mcl",
  },
  // {
  //   title: "Obtén un certificado de competencia",
  //   description: "Reconocimiento de la Secretaría de Educación Pública",
  //   icon: "pending",
  //   id: "ouc",
  // },
]

// Styles for the Image used as background
const styles = {
  container: {
    backgroundImage: 'url(https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};
