import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import resultados from "@/public/img/consulta-resultados.svg";
import estandar from "@/public/img/estandar-de-competencia.svg";
import evaluacion from "@/public/img/presenta-evaluacion.svg";
import diagnostico from "@/public/img/evaluacion-diagnostica.svg";
import heroSection from "@/public/img/hero-section.png";

// Shandcn UI components
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
import { Lightbulb, BookOpenCheck, Hammer, Medal, Info } from "lucide-react";
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
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



// Custom components
import ProgramsCard from "@/components/molecules/ProgramsCard";
import estandarIcon from "@/public/img/estandar-de-competencia.svg";
import Footer from "@/components/organisms/Footer";

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

const criterios = [
  {
    id: "00A",
    title: "Conocimientos",
    description: "Saber y entender",
    content: "Posesión de conceptos, teorías y principios que sustentan el desempeño de la función",
    borColor: "border-t-purple-400",
    icon: <Lightbulb strokeWidth={1.25} size={40} className="mx-auto" />,
  },
  {
    id: "00B",
    title: "Habilidades",
    description: "Ser capaz físicamente de desempeñar",
    content: "Realización de acciones que permiten observar su competencia",
    borColor: "border-t-blue-400",
    icon: <Hammer strokeWidth={1.25} size={40} className="mx-auto" />,
  },
  {
    id: "00C",
    title: "Valores",
    description: "Tener disposición y actitud",
    content: "Predisposición a actuar con determinado comportamiento durante el desempeño",
    borColor: "border-t-orange-400",
    icon: <Medal strokeWidth={1.25} size={40} className="mx-auto" />,
  },
  {
    id: "00D",
    title: "Productos",
    description: "Tangibles resultado de la actividad",
    content: "Pueden ser manuales, informes, métricas de resultados",
    borColor: "border-t-stone-400",
    icon: <BookOpenCheck strokeWidth={1.25} size={40} className="mx-auto" />,
  },
]

const pasos = [
  {
    id: "10A",
    title: "Identifica el estándar de competencia",
    description: "Cada estándar de competencia tiene un código único, con el formato ECXXXX.",
    stepNumber: "1",
  },
  {
    id: "20B",
    title: "Toma una evaluación diagnóstica",
    description: "Podrás conocer si cuentas con los conocimientos, habildades y actitudes que exige el Estándar de Competencia.",
    stepNumber: "2",
  },
  {
    id: "30C",
    title: "Realiza tu evaluación en un Centro Evaluador",
    description: "En la evaluación se recopilan los conocimientos, experiencia, habilidades y actitudes que la persona posee y que son necesarios para desempeñarse en la función.",
    stepNumber: "3",
  },
  {
    id: "40D",
    title: "Consulta tus resultados",
    description: "Si los criterios de evaluación son resueltos, el resultado de evaluación será \"COMPETENTE\". En caso contrario se emitirá como \"TODAVÍA NO COMPETENTE\".",
    stepNumber: "4",
  },
]

export default function Certificaciones(params) {
  return (
    <>
      <header className="flex flex-col-reverse lg:flex-row h-auto lg:h-[40rem] justify-center items-center rounded-lg bg-stone-50 dark:bg-slate-900 py-10 px-8 lg:px-[10rem] mb-6">
        <div className="flex flex-col justify-normal items-center lg:items-start">
          <h1 className="text-4xl md:text-5xl text-center lg:text-left font-bold md:leading-[3.5rem] pt-10 mb-3 pr-5">Sea parte de los mejores en cada sector</h1>
          <p className="text-xl md:text-2xl text-center lg:text-left py-3 mb-2 pr-5">Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu área</p>
          <Link className="group transition-all ease-in-out duration-300 text-center bg-yellow-300 hover:bg-yellow-400 pl-9 pr-4 py-4 rounded-sm text-gray-900 font-bold md:text-xl shadow-md mt-1 md:mt-6" href="./proceso">
            <span className="">Comienza ahora</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 origin-left inline text-transparent hover:translate-x-0.3 transition-all group-hover:translate-x-2 group-hover:text-gray-900"><path d="m6 17 5-5-5-5" /></svg>
          </Link>
        </div>
        <div>
          <Image src={heroSection} alt="image with some people" />
        </div>
      </header>
      <main className="w-full pt-19">
        <section className="static lg:container py-5 h-auto">
          {/* Estándares disponibles */}
          <div className="py-10 mb-[6rem]">
            <div className="mb-8">
              <h4 className="text-2xl md:text-3xl font-bold text-center py-6">Certificaciones disponibles con <span className="bg-teal-400 dark:text-black whitespace-nowrap px-3 rounded-md">Proyecta Empresarial</span></h4>
            </div>
            <Table className="mt-10 md:w-4/5 w-full mx-auto">
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader className="text-lg font-bold">
                <TableRow className="">
                  <TableHead className="w-1/6 md:1/6 lg:w-1/5">Nombre</TableHead>
                  <TableHead className="w-3/6 md:4/6 lg:w-3/5">Estándar de competencia</TableHead>
                  <TableHead className="w-2/6 md:1/6 lg:w-1/5"> </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-lg">
                {estandares.map(
                  (estandar => {
                    return (
                      <TableRow key={estandar.id} className="group/item">
                        <TableCell>{estandar.title}</TableCell>
                        <TableCell className="pl-2 pr-0 md:px-3 lg:px-2">
                          <HoverCard>
                            <HoverCardTrigger>{estandar.content}</HoverCardTrigger>
                            <HoverCardContent className="flex justify-between items-center">
                              <Info strokeWidth={1.5} className="h-8 w-8 mr-3" />
                              <div className="text-sm">
                                <p className="pb-1"><span className="font-bold">Ocupaciones:</span> {estandar.ocupaciones}</p>
                                <p><span className="font-bold">Nivel:</span> {estandar.snc}</p>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        </TableCell>
                        <TableCell className="text-right px-0 lg:px-2">
                          <Drawer>
                            <DrawerTrigger className="group/details invisible group-hover/item:visible text-teal-600 group-hover/item:text-teal-700 hover/item:bg-slate-200 pl-2 pr-0 lg:pl-4 lg:pr-2 lg:py-1 mr-2 rounded-full z-10 transition-colors ease-in-out duration-300">Detalles
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 origin-left inline transition group-hover/details:translate-x-1 group-hover/details:text-teal-700"><path d="m6 17 5-5-5-5" /></svg>
                            </DrawerTrigger>
                            <DrawerContent>
                              <ScrollArea>
                                <DrawerHeader className="flex w-full">
                                  <div className="content-center w-full">
                                    <DrawerTitle className="text-2xl mb-2 bg-gray-200 dark:bg-gray-500 rounded-sm py-4 px-4">{estandar.content}</DrawerTitle>
                                    <DrawerDescription className="text-lg">Detalles del estándar de compencia</DrawerDescription>
                                    <Separator className="mt-3 w-full" />
                                  </div>
                                </DrawerHeader>
                                <div className="w-full text-xl lg:w-1/2 mx-auto px-5 py-2">
                                  <div className="text-2xl mb-5">{estandar.title}</div>
                                  <p className="py-1 mb-3"><b>Propósito: </b>{estandar.proposito}</p>
                                  <p className="py-1 mb-3"><b>Ocupaciones asociadas: </b> {estandar.ocupaciones}</p>
                                  <p className="py-1 mb-3"><b>Requisitos académicos: </b> {estandar.requisitos}</p>
                                  <p className="py-1 mb-3"><b>Comité desarrollador:</b> {estandar.comite}</p>
                                  <div className="py-3">
                                    <Link className="group transition-all duration-300 ease-in-out text-center bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-sm text-white font-bold md:text-xl mt-1 md:mt-6" href="./proceso">
                                      <span className="">Obtener</span>
                                    </Link>
                                    <Button className="py-5 px-4 text-xl bg-gray-800 dark:text-white text-center dark:hover:bg-gray-600 ml-6">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                      <span className="px-2 py-5"> Descargar</span>
                                    </Button>
                                  </div>
                                </div>
                                <DrawerFooter>
                                  <Separator className="mt-3 w-full" />
                                  <DrawerClose className="mx-auto hover:bg-slate-100 hover:text-teal-600 dark:hover:bg-slate-800 rounded-full transition-colors ease-in-out duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle"><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                  </DrawerClose>
                                </DrawerFooter>
                              </ScrollArea>
                            </DrawerContent>
                          </Drawer>
                        </TableCell>
                      </TableRow>
                    )
                  })
                )}
              </TableBody>
            </Table>
          </div>

          {/* Cards Criterios de evaluación */}
          <h4 className="text-3xl md:text-4xl font-bold text-center lg:text-left pl-4 py-6 mb-6">¿Qué se evalúa?</h4>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 auto-cols-max mt-5 mb-[7rem] px-6 lg:px-0">
            {criterios.map((criterio => {
              return (
                <Card key={criterio.id} className={`lg:mx-1 xl:mx-2 mb-3 ${criterio.borColor}`}>
                  <CardHeader>
                    <CardDescription className="mb-1">{criterio.description}</CardDescription>
                    <span className="text-gray-600 p-4">{criterio.icon}</span>
                    <CardTitle className="text-center">{criterio.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">{criterio.content}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="">
                    </div>
                  </CardFooter>
                </Card>
              )
            }))}
          </div>

          {/* Pasos para certificarse */}
          <div className="container  py-10 mb-[2rem]">
            <div className="bg-transparent max-w-28 mx-auto">
              <Image src={resultados} width={140} height={140} alt="icon for" className="w-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl text-center font-bold py-4 mt-8 mb-2">Conoce los pasos para la certificación</h2>
            <p className="text-2xl text-muted-foreground text-center pb-8 mb-8">Las certificaciones permiten demostrar su habilidad para realizar funciones específicas a un alto nivel</p>
            <div className="flex flex-col w-full py-3 lg:w-4/5 mx-auto">

              {pasos.map((paso => {
                return (
                  <div key={paso.id} className="group w-full flex flex-col md:flex-row items-center md:items-start mb-[1rem] py-3">
                    <div className="relative pl-8 md:pl-[6rem]">
                      <span className="absolute -left-5 md:-left-1 lg:left-3 top-10 dark:bg-gray-700 bg-gray-900 text-white px-4 text-center content-center rounded-full min-w-10 min-h-10 mx-3">
                        {paso.stepNumber}
                      </span>
                      <div className="pl-8">
                        <h3 className="text-xl md:text-left font-bold py-3">
                          {paso.title}
                        </h3>
                        <p className="text-xl mb-2">{paso.description}</p>
                        <Link href="./" className="text-lg text-teal-600 hover:underline">
                          <span className="py-3 text-xl"> Más información
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 inline"><path d="m6 17 5-5-5-5" /></svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }))}

            </div>
          </div>
        </section>

        <section className="container w-full py-10 mt-[4rem]">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-normal lg:text-4xl py-3 mb-5">Prepárate previo a tu evaluación</h2>
          <p className="text-xl">Realiza una alineación al estándar de competencia que te interesa para asegurarte que estás preparada o preparado</p>
          <ProgramsCard />
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
                  mb-8">Ver más certificaciones</p>
            </CollapsibleTrigger>
            <CollapsibleContent>
              Hie there Some content here!
            </CollapsibleContent>
          </Collapsible>
        </section>

        <section className="container mx-auto mb-15 py-10 mt-[6rem] mb-[10rem]">
          <h2 className="text-center text-3xl font-bold py-6 mb-[3rem]">Preguntas frecuentes</h2>
          <Accordion type="single" collapsible className="w-full md:w-4/5 m-auto ">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold">¿En cuanto tiempo me entregan mi certificado?</AccordionTrigger>
              <AccordionContent className="py-8">
                En promedio, 30 días a partir de la evaluación
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold">¿Qué es una alineación?</AccordionTrigger>
              <AccordionContent className="py-8">
                La alineación es
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold">¿Puedo hacer la evaluación en línea?</AccordionTrigger>
              <AccordionContent className="py-8">
                En algunos casos, dependiendo del estándar de competencia al que estés aplicando. Algunos estándares de competencia lo permiten, mientras que otros no.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-bold">¿Cuál es el costo de la evaluación diagnóstica?</AccordionTrigger>
              <AccordionContent className="py-8">
                Ninguno. La evalución diagnóstica la ofrecemos gratis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <Footer />
    </>
  );
}