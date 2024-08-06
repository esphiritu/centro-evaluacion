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

// Custom components
import ProgramsCard from "@/components/molecules/ProgramsCard";
import estandarIcon from "@/public/img/estandar-de-competencia.svg";

// Data
const estandares = [
  {
    id: "EC0217.01",
    title: "EC0217.01",
    description: "Servicios educativos",
    content: "Impartición de cursos de formación de capital humano de manera presencial grupal",
    snc: "Tres",
    borColor: "border-t-purple-400",
    comite: "Asociación Mexicana de Capacitación de Personal y Empresarial, A.C",
    sector: "Servicios educativos",
    ocupaciones: "Capacitador, facilitador, instructor",
    duracion: "1 hora en gabinete y 2 horas en campo, totalizando 3 horas",
    proposito: "El estándar de competencia impartición de cursos de formación del capital humano de manera presencial y grupal contempla las funciones sustantivas de preparar, conducir y evaluar cursos de capacitación. Preparar la sesión mediante la planeación de la sesión y la comprobación de la existencia y el funcionamiento de los recursos requeridos para la sesión. Conducir la sesión realizando el encuadre, desarrollo y cierre, empleando técnicas instruccionales y grupales que faciliten el proceso de aprendizaje. Evaluar el aprendizaje antes, durante y al final del curso, considerando la satisfacción de los participantes/capacitandos",
    requisitos: "Ninguno",
    icon: estandarIcon,
  },
  {
    id: "EC0366",
    title: "EC0366",
    description: "Servicios educativos",
    content: "Desarrollo de cursos de formación en línea",
    snc: "Tres",
    borColor: "border-t-blue-400",
    comite: "Comité de Gestión por Competencias de la Formación para el Trabajo",
    sector: "Servicios educativos",
    ocupaciones: "Instructor y capacitador",
    duracion: "6 horas",
    proposito: "Servir como referente para la evaluación y certificación de las personas que se desempeñan como desarrolladores de cursos para formación en línea.",
    requisitos: "Ninguno",
    icon: estandarIcon,
  },
  {
    id: "EC0301",
    title: "EC0301",
    description: "Servicios educativos",
    content: "Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso",
    snc: "Tres",
    borColor: "border-t-orange-400",
    comite: "Asociación Mexicana de Capacitación de Personal y Empresarial. AMECAP, A.C. ",
    sector: "Servicios educativos",
    ocupaciones: "Capacitador, facilitador, instructor",
    duracion: "2 horas en gabinete y 1 hora en campo, totalizando 3 horas",
    proposito: "Servir como referente para la evaluación y certificación de las personas que diseñan cursos de formación del capital humano de manera presencial grupal, diseñando cursos de capacitación presenciales, diseñando instrumentos para la evaluación de cursos de capacitación presenciales y desarrollando manuales del curso de capacitación presenciales",
    requisitos: "Ninguno",
    icon: estandarIcon,
  },
]

export default function Certificaciones(params) {
  return (
    <>
      <main className="w-full pt-19">
        <Carousel opts={{
          align: "center",
          loop: true,
        }}
          autoplay={2900}
        >
          <CarouselContent className="p-0 md:p-5 h-[38rem]">
            <CarouselItem className="bg-gray-100 dark:bg-slate-900 rounded-md py-10 px-6 md:px-10 text-gray-900 dark:text-gray-50">
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
        <section className="container py-5 h-[38rem]">
          <h1 className="text-2xl md:text-4xl font-bold text-left py-10">Estándares de competencia laboral</h1>
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
                    <div className="flex justify-between">
                      <p>Nivel en el SNC: {estandar.snc}</p>
                      <Drawer>
                        <DrawerTrigger className="text-teal-600 hover:text-teal-700 hover:underline">Ver detalles</DrawerTrigger>
                        <DrawerContent>
                          <DrawerHeader className="flex">
                            <Image src={estandar.icon} width={70} height={70} alt="icon for" />
                            <div className="px-5 content-center">
                              <DrawerTitle>{estandar.content}</DrawerTitle>
                              <DrawerDescription>Detalles del estándar de compencia {estandar.title}</DrawerDescription>
                            </div>
                          </DrawerHeader>
                          <div className="w-full lg:w-1/2 mx-auto px-5 py-10">
                            <p className="py-1"><b>Propósito: </b>{estandar.proposito}</p>
                            <p className="py-1"><b>Ocupaciones asociadas: </b> {estandar.ocupaciones}</p>
                            <p className="py-1"><b>Requisitos académicos: </b> {estandar.requisitos}</p>
                            <p className="py-1"><b>Comité desarrollador:</b> {estandar.comite}</p>
                          </div>
                          <DrawerFooter>

                            <DrawerClose>
                              <Button variant="outline">Cerrar</Button>
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
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
          <p className="text-lg ">Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu área</p>
          <ProgramsCard />
        </section>

        <section className="container w-full bg-gray-50 dark:bg-slate-900 rounded-md py-10 my-10 px-20">
          <Image src={diagnostico} width={100} height={100} alt="icon for" className="max-w-auto" />
          <h1 className=" text-3xl md:text-4xl font-bold pt-5">Inicia una evaluación diagnóstica</h1>
          <p className="text-xl pt-4 pb-8">Resultados confiables respaldados por el Organismo Certificador más importante de America Latina: <em>ICE México</em>.</p>
          <Link href="./asesor" className="text-lg text-teal-600 hover:underline">
            <span className="py-3 px-3 text-xl">Agenda una evaluación</span>
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
    </>
  );
}