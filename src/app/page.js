import Link from "next/link";
import Users from "../lib/jsonplaceholder/Users";
import { Button, buttonVariants } from "@/components/ui/button";
import { CircleDollarSign, HandshakeIcon, Key, LockKeyhole, ShieldCheck, Headset, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const benefits = [
  // {
  //   title: "Obtén un certificado de competencia",
  //   description: "Reconocimiento de la Secretaría de Educación Pública",
  //   icon: "pending",
  //   id: "ouc",
  // },
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
  {
    title: "Encuentra mejores oportunidades",
    description: "Las certificaciones aumenta la competitividad del trabajador dentro del mercado laboral",
    icon: <Key size={42} className="m-auto" />,
    id: "emo",
  },
]

export default function Home({ Component, pageProps }) {
  return (
    <>
      <main className="w-full lg:w-5/6 m-auto">
        <section className="py-10 px-5 flex flex-col gap-8 items-center h-3/4">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl py-1">Lleva tu vida profesional al éxito</h1>
          <p className="text-2xl text-slate-600">Impulsa tu carrera y respalda tu experiencia con certificaciones oficiales</p>
          <div>
            <Link href="./proyecto" className={buttonVariants({ variant: "outline" })}>Comienza ahora</Link>
            <Link href="./sesion" className={buttonVariants({ variant: "primary" })}>Comienza con un asesor</Link>
          </div>
        </section>
        <section className="py-10">
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl py-3 text-center">Beneficios de la certificación</h2>
          <p className="text-2xl text-muted-foreground text-center py-5">Las certificaciones permiten demostrar su habilidad para realizar tareas y funciones específicas a un alto nivel de rendimiento</p>
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
        <section className="py-10">
          <h2 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl py-3">Casos de éxito</h2>
        </section>
        <section className="py-15">
        <h1 className="text-4xl text-center font-bold py-2">¿Por qué evaluarme con Proyecta Empresarial?</h1>
        <p className="text-2xl text-center font-light text-slate-600">Reconocimiento nacional</p>
        <p className="text-lg text-baseline text-center">Instituciones educativas, empresas y entidades gubernamentales en todo México confían en los procesos de evaluación de Proyecta Empresarial.</p>
        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-10 my-5">
          <li className="text-2xl text-center font-baseline flex flex-col align-middle"><LockKeyhole size={42} className="m-auto"/><span className="block my-8">Objetividad y confiabilidad</span></li>
          <li className="text-2xl text-center font-baseline flex flex-col align-middle"><Headset size={42} className="m-auto"/><span className="block my-8">Asesoría de expertos</span></li>
          <li className="text-2xl text-center font-baseline flex flex-col align-middle"><ShieldCheck size={42} className="m-auto"/><span className="block my-8">Calidad comprobada</span></li>
          <li className="text-2xl text-center font-baseline flex flex-col align-middle"><Award size={42} className="m-auto"/><span className="block my-8">Respaldo del organismo certificador más importante</span></li>
        </ul>
      </section>
        <section className="py-10 w-3/4">
          <h1 className="text-4xl font-bold py-4">Inicia una evaluación diagnóstica</h1>
          <Button className={"my-2"}>¡Empieza ahora!</Button>
        </section>
        <section className="py-10 w-3/4">
          <h3 className="scroll-m-20 text-2xl font-bold tracking-normal lg:text-2xl my-6">¿Qué hay de nuevo hoy?</h3>
          <Carousel opts={{
            align: "center",
            loop: true,
          }}>
            <CarouselContent>
              <CarouselItem><h1 className="text-4xl">Regístrate al seminario gratuito</h1></CarouselItem>
              <CarouselItem><h1 className="text-4xl">Descarga la guía del candidato</h1></CarouselItem>
              <CarouselItem><h1 className="text-4xl">Asiste al evento presencial</h1></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
    </>
  );
}
