import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { CircleDollarSign, HandshakeIcon, Key, LockKeyhole, ShieldCheck, Headset, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// 
// export async function getStaticProps() {
//   return {
//     props: {
//       pageId: "home_page",
//       }
//     }
//   }


export default function Home({ Component, pageProps }) {
  return (
    <>
      <main className="w-full m-auto">
        <section style={styles.container} className="px-10 h-screen">
          <div className="container mx-auto h-full">
            <div className="flex flex-col items-center justify-center md:items-start gap-y-7 h-full">
              <h1 className="bg-black/50 scroll-m-20 text-white text-3xl font-extrabold tracking-tight lg:text-6xl py-3 md:rounded-md rounded-sm transition-all duration-300 ease-in-out">&nbsp;Impulsa tu vida profesional al éxito&nbsp;</h1>
              <p className="text-2xl md:text-3xl text-white">Respalda tus conocimientos y experiencia con certificaciones oficiales</p>
              <div className="flex flex-col md:flex-row mt-5">
                <Link className="group transition-all duration-300 ease-in-out bg-teal-600 hover:bg-teal-700 px-6 py-3 mx-2 md:mx-4 rounded-sm text-white text-base md:text-lg shadow-md mt-6" href="./proceso">
                  Comienza ahora 
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline lucide lucide-chevrons-right ml-2 origin-left hover:translate-x-0.5 transition group-hover:translate-x-2"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </Link>
                <Link className="transition-all duration-300 ease-in-out px-4 py-2 mx-4 hover:underline text-base md:text-lg rounded-sm text-white shadow-sm mt-6" href="./asesor">
                  Comienza con un asesor
                </Link>
            </div>
            </div>
          </div>
        </section>
        <section className="container py-10">
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl py-3 mt-10 text-center">Beneficios de la certificación</h2>
          <p className="text-2xl text-muted-foreground text-center py-8 mb-8">Las certificaciones permiten demostrar su habilidad para realizar tareas y funciones específicas a un alto nivel de rendimiento</p>
          <div className="flex flex-col sm:flex-col lg:flex-row justify-center items-baseline">
            {benefits.map((benefit => {
              return (
                <div className="py-8 px-5 w-full lg:w-1/4" key={benefit.id}>
                  {benefit.icon}
                  <h3 className="text-2xl font-light text-center mt-8">{benefit.title}</h3>
                  <p className="text-lg text-muted-foreground text-center">{benefit.description}</p>
                </div>
              )
            }
            ))
            }
          </div>
        </section>
        <section className="container flex flex-col lg:flex-row rounded-md bg-gray-100 py-10 my-10">
          
            <h2 className="w-1/3 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl py-10 my-5">Casos de éxito</h2>
            
          <div className="w-2/3">
            <p className="text-2xl py-10"> There is something so natural about collaborating in Freehand. It feels like you’re holding a marker, and making ideas happen. I can’t imagine doing that in another tool. It captures that human essence of being in person and talking to someone that is right next to you and getting work done together. Especially in today’s world when everything is remote. It makes for really organic communication.</p>
            <p className="">Sea parte de nuestros clientes satisfechos que confían en nuestras evaluaciones</p>
          </div>
        </section>
        <section className="container py-10 w-3/4 mb-10">
          <Carousel opts={{
            align: "center",
            loop: true,
          }}>
            <CarouselContent>
              <CarouselItem><h1 className="text-2xl md:text-3xl">Regístrate al seminario gratuito</h1></CarouselItem>
              <CarouselItem><h1 className="text-2xl md:text-3xl">Descarga la guía del candidato</h1></CarouselItem>
              <CarouselItem><h1 className="text-2xl md:text-3xl">Asiste al evento presencial</h1></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className="container py-10 my-10">
          <h1 className="text-4xl text-center font-bold py-8 mb-8">¿Por qué evaluarme con Proyecta Empresarial?</h1>
          <p className="text-2xl text-center font-light text-slate-600">Reconocimiento nacional</p>
          <p className="text-lg text-baseline text-center">Instituciones educativas, empresas y entidades gubernamentales en todo México confían en los procesos de evaluación de Proyecta Empresarial.</p>
          <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-10 my-5">
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><LockKeyhole size={42} className="m-auto" /><span className="block my-8">Objetividad y confiabilidad</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><Headset size={42} className="m-auto" /><span className="block my-8">Asesoría de expertos</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><ShieldCheck size={42} className="m-auto" /><span className="block my-8">Calidad asegurada</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><Award size={42} className="m-auto" /><span className="block my-8">Respaldo de ICE México</span></li>
          </ul>
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
    icon: <Key size={42} className="m-auto" />,
    id: "emo",
  },
  {
    title: "Accede a mejores salarios",
    description: "En promedio, las personas certificadas ante el CONOCER ganan el doble que los trabajadores no certificados ",
    icon: <CircleDollarSign size={42} className="m-auto" />,
    id: "ams",
  },
  {
    title: "Mejora tus condiciones laborales",
    description: "Los trabajadores certificados tienen jornadas laborales ligeramente más cortas que el resto de la fuerza laboral",
    icon: <HandshakeIcon size={42} className="m-auto" />,
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
