import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import webinarIcon from "@/public/img/webinar-meetings.svg";
import { CalendarDays, Clock } from "lucide-react";


// Shandcn ui
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MessagesSquare } from "lucide-react";
import diagnostico from "@/public/img/evaluacion-diagnostica.svg";

// Custom components
import ProgramsCard from "@/components/molecules/ProgramsCard";

// Data
const estandares = [
  {
    id: "EC0217.01",
    title: "EC0217.01",
    description: "Servicios educativos",
    content: "Impartición de cursos de formación de capital humano de manera presencial grupal",
    snc: "Tres",
    borColor: "border-t-purple-400",
  },
  {
    id: "EC0366",
    title: "EC0366",
    description: "Servicios educativos",
    content: "Desarrollo de cursos de formación en línea",
    snc: "Tres",
    borColor: "border-t-blue-400",
  },
  {
    id: "EC0301",
    title: "EC0301",
    description: "Servicios educativos",
    content: "Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso",
    snc: "Tres",
    borColor: "border-t-orange-400"
  },
]

export default function Certificaciones(params) {
  return (
    <main className="">
      <Carousel opts={{
            align: "center",
            loop: true,
          }}>
            <CarouselContent className="p-0 md:p-5">
              <CarouselItem className="bg-gray-100 dark:bg-slate-900 rounded-md py-10 px-6 md:px-10 text-gray-900 dark:text-gray-50">
                <Image src={webinarIcon} width={96} height={96} alt="icon for webinar" />
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
                <div className="flex flex-col lg:flex-row md:justify-around mt-8 items-center md:items-stretch">
                  {/* Fecha y hora del evento */}
                  <div className="flex items-center mb-4">
                    <Clock className="size-7" />
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
              <CarouselItem>
                <h1 className="text-2xl md:text-3xl">Descarga la guía del candidato</h1>
              </CarouselItem>
              <CarouselItem>
                <h1 className="text-2xl md:text-3xl">Asiste al evento presencial</h1>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      <section className="container py-5">
        <h1 className="text-2xl md:text-4xl font-bold text-left py-10">Estándares de competencia laboral con la que puedes certificarte con Proyecta Empresarial</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-cols-max mt-5">
          {estandares.map((estandar => {
            return (
              <Card key={estandar.id} className={`lg:mx-2 xl:mx-5 ${estandar.borColor}`}>
                <CardHeader>
                  <CardTitle>{estandar.title}</CardTitle>
                  <CardDescription>{estandar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{estandar.content}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-row">
                    <p>Nivel en el SNC: {estandar.snc}</p>
                    <div>
                      <Link href="./" className="text-teal-600 hover:text-teal-700 hover:underline" title="Ver detalles del estándar de competencia">Ver detalles</Link>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            )
          }
          ))
          }
        </div>
      </section>

      <section className="container w-full py-10 my-10">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-normal lg:text-4xl py-3">Obtenga un certificado de competencia laboral en su área</h2>
        <p className="text-lg ">Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu especialidad</p>
        <ProgramsCard />
      </section>

      <section className="container w-full bg-[#ecfdfc] dark:bg-slate-900 rounded-md py-10 my-10 px-20">
        <Image src={diagnostico} width={180} height={180} alt="icon for" className="max-w-auto" />
        <h1 className=" text-3xl md:text-4xl font-bold py-5">Inicia una evaluación diagnóstica</h1>
        <p className="text-lg py-8">Resultados confiables respaldados por el Organismo Certificador más importante de America Latina: <em>ICE México</em>.</p>
        <Link href="./asesor" className="text-lg text-teal-600 hover:underline">
          <span className="py-3 px-3 text-md">Agenda una evaluación</span>
        </Link>
      </section>

      <section className="container mx-auto mb-15 py-10">
        <h2 className="text-center text-4xl font-bold py-6">Preguntas frecuentes</h2>
        <Accordion type="single" collapsible className="w-full md:w-1/2 m-auto ">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">¿En cuanto tiempo me entregan mi certificado?</AccordionTrigger>
            <AccordionContent>
              En promedio, 30 días a partir de la evaluación
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold">¿Puedo hacer la evaluación en línea?</AccordionTrigger>
            <AccordionContent>
              En algunos casos, dependiendo del estándar de competencia al que estés aplicando. Algunos estándares de competencia lo permiten, mientras que otros no.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">¿Cuál es el costo de la evaluación diagnóstica?</AccordionTrigger>
            <AccordionContent>
              Ninguno. La evalución diagnóstica la ofrecemos gratis.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <footer className="my-10 py-10">
        <h3 className="text-4xl font-bold py-4">Centro de evaluación</h3>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="py-5">
            <h4 className="text-2xl font-bold">Proyecta empresarial</h4>
            <ul className="flex flex-col lg:flex-row">
              <li className="pr-4 text-lg">Certificación</li>
              <li className="px-4 text-lg">Capacitación</li>
              <li className="px-4 text-lg">Coaching</li>
              <li className="px-4 text-lg">Consultoría</li>
              <li className="px-4 text-lg">Alineación</li>
              <li className="px-4 text-lg">Evaluación</li>
            </ul>
            <p>Cédula de acreditación: CE009241.2024</p>
          </div>
          <div className="py-5">Buzón de quejas</div>
          <div className="py-5">
            <MessagesSquare size={24} />
            <p className="text-2xl font-bold py-5">Contáctanos</p>
            <p>¿Tienes alguna pregunta sobre algo?<br />
              Comunícate con nosotros <br />
              Nos dará un gusto atenderte<br />
              Teléfono: (951) 980 0101</p>
          </div>
        </div>
      </footer>
    </main>
  );
}