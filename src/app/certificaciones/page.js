import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import resultados from "@/public/img/consulta-resultados.svg";
import estandar from "@/public/img/estandar-de-competencia.svg";
import evaluacion from "@/public/img/presenta-evaluacion.svg";
import diagnostico from "@/public/img/evaluacion-diagnostica.svg";

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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


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
        <section className="container py-5 h-auto">
          <h1 className="text-4xl md:text-5xl font-bold pt-10">Human Interface Guidelines</h1>
          <p className="text-xl md:text-2xl py-5 mb-4">The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.</p>
          <h4 className="text-2xl md:text-4xl font-bold text-left pt-10">Estándares de competencia laboral</h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-cols-max mt-5 mb-10">
            {estandares.map((estandar => {
              return (
                <Card key={estandar.id} className={`lg:mx-2 xl:mx-5 mb-6 ${estandar.borColor}`}>
                  <CardHeader>
                    <CardTitle>{estandar.title}</CardTitle>
                    <CardDescription>{estandar.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl">{estandar.content}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="">
                      <p>Nivel: {estandar.snc}</p>
                      <div>
                        <Drawer>
                          <DrawerTrigger className="text-teal-600 hover:text-teal-700 hover:underline mt-5 transition-all duration-300 ease-in-out">Ver detalles</DrawerTrigger>
                          <DrawerContent>
                            <DrawerHeader className="flex">
                              <div className="content-center">
                                <DrawerTitle className="mb-2">{estandar.title} - {estandar.content}</DrawerTitle>
                                <DrawerDescription>Detalles del estándar de compencia</DrawerDescription>
                                <Separator className="mt-3 w-full" />
                              </div>

                            </DrawerHeader>
                            <div className="w-full lg:w-1/2 mx-auto px-5 py-10">
                              <p className="py-1 mb-3"><b>Propósito: </b>{estandar.proposito}</p>
                              <p className="py-1 mb-3"><b>Ocupaciones asociadas: </b> {estandar.ocupaciones}</p>
                              <p className="py-1 mb-3"><b>Requisitos académicos: </b> {estandar.requisitos}</p>
                              <p className="py-1 mb-3"><b>Comité desarrollador:</b> {estandar.comite}</p>
                            </div>
                            <DrawerFooter>

                              <DrawerClose>
                                <p variant="outline" className="px-5 py-4">Cerrar</p>
                              </DrawerClose>
                            </DrawerFooter>
                          </DrawerContent>
                        </Drawer>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              )
            }
            ))
            }
          </div>
          <div className="">
            <Collapsible>
              <CollapsibleTrigger className="w-full px-6">
                <p className="
                  px-3 
                  py-4 
                  text-xl
                  text-center
                  lg:text-lg 
                  text-gray-700 
                  hover:text-teal-700
                  dark:text-gray-400
                  dark:hover:text-teal-700
                  bg-transparent 
                  transition-all 
                  duration-300 
                  ease-in-out
                  ">Ver más certificaciones</p>
              </CollapsibleTrigger>
              <CollapsibleContent>
                Yes. Free to use for personal and commercial projects. No attribution
                required.
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        <section className="container py-10 my-10 mt-[8rem]">
          <h1 className="text-4xl md:text-5xl font-bold py-4 mt-8 mb-4">Conoce la ruta para la certificación</h1>
          <p className="text-2xl text-muted-foreground pb-8 mb-[5rem]">Las certificaciones permiten demostrar su habilidad para realizar funciones específicas a un alto nivel</p>

          <div className="flex flex-col w-full lg:w-4/5 mx-auto">
            <div className="group w-full flex flex-col md:flex-row items-center md:items-start mb-[6rem]">
              <div className="bg-transparent max-w-32 mr-1 ml-2 md:mr-[5rem]">
                <Image src={estandar} width={180} height={180} alt="icon for" className="w-auto" />
              </div>
              <div className="relative pl-8 md:pl-[6rem]">
                <span className="absolute -left-10 top-10 bg-gray-900 text-white px-4 text-center content-center rounded-full min-w-10 min-h-10 mx-5">1</span>
                <div className="pl-8">
                  <h3 className="text-3xl md:text-left font-bold py-3">
                    Identifica el estándar de competencia
                  </h3>
                  <p className="text-xl mb-4">Cada estándar de competencia tiene un código único, con el formato EC-XXX.</p>
                  <Link href="./" className="text-lg text-teal-600 hover:underline">
                    <span className="py-3 text-xl"> Más información</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group w-full flex flex-col md:flex-row items-center md:items-start mb-[6rem]">
              <div className="bg-transparent max-w-32 mr-1 ml-2 md:mr-[5rem]">
                <Image src={diagnostico} width={180} height={180} alt="icon for" className="w-auto" />
              </div>
              <div className="relative pl-8 md:pl-[6rem]">
                <span className="absolute -left-10 top-9 bg-gray-900 text-white px-4 text-center content-center rounded-full min-w-10 min-h-10 mx-5">2</span>
                <div className="pl-8">
                  <h3 className="text-3xl md:text-left font-bold py-3">
                    Toma una evaluación diagnóstica
                  </h3>
                  <p className="text-xl mb-4">Podrás conocer si cuentas con los conocimientos, habildades y actitudes que exige el Estándar de Competencia.</p>
                  <Link href="./" className="text-lg text-teal-600 hover:underline">
                    <span className="py-3 text-xl"> Más información</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group w-full flex flex-col md:flex-row items-center md:items-start mb-[6rem]">
              <div className="bg-transparent max-w-32 mr-1 ml-2 md:mr-[5rem]">
                <Image src={evaluacion} width={180} height={180} alt="icon for" className="w-auto" />
              </div>
              <div className="relative pl-8 md:pl-[6rem]">
                <span className="absolute -left-10 top-9 bg-gray-900 text-white px-4 text-center content-center rounded-full min-w-10 min-h-10 mx-5">3</span>
                <div className="pl-8">
                  <h3 className="text-3xl md:text-left font-bold py-3">
                    Realiza tu evaluación en un Centro Evaluador
                  </h3>
                  <p className="text-xl mb-4">Si los criterios de evaluación son resueltos, el resultado de evaluación será "COMPETENTE". En caso contrario se emitirá como "TODAVÍA NO COMPETENTE".</p>
                  <Link href="./" className="text-lg text-teal-600 hover:underline">
                    <span className="py-3 text-xl"> Más información</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group w-full flex flex-col md:flex-row items-center md:items-start mb-[6rem]">
              <div className="bg-transparent max-w-32 mr-1 ml-2 md:mr-[5rem]">
                <Image src={resultados} width={180} height={180} alt="icon for" className="w-auto" />
              </div>
              <div className="relative pl-8 md:pl-[6rem]">
                <span className="absolute -left-10 top-9 bg-gray-900 text-white px-4 text-center content-center rounded-full min-w-10 min-h-10 mx-5">4</span>
                <div className="pl-8">
                  <h3 className="text-3xl md:text-left font-bold py-3">
                    Consulta tus resultados
                  </h3>
                  <p className="text-xl mb-4">El CONOCER emitirá un Certificado de Competencia para el candidato y aparecerá en el RENAP como persona certificada.</p>
                  <Link href="./" className="text-lg text-teal-600 hover:underline">
                    <span className="py-3 text-xl"> Más información</span>
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </section>

        <section className="container w-full py-10 mt-[12rem]">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-normal lg:text-5xl py-3 mb-5">Obtenga un certificado en su <span className="text-teal-600">área de expertise</span></h2>
          <p className="text-xl">Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu área</p>
          <ProgramsCard />
        </section>

        <section className="container mx-auto mb-15 py-10 mt-[12rem]">
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