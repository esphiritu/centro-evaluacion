import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import resultados from "@/public/img/consulta-resultados.svg";
import estandar from "@/public/img/estandar-de-competencia.svg";
import evaluacion from "@/public/img/presenta-evaluacion.svg";
import diagnostico from "@/public/img/evaluacion-diagnostica.svg";
import heroSection from "@/public/img/hero-section.png";
import procesoImage from "@/public/img/pexels-pixabay-209151.jpg";

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
import { Lightbulb, BookOpenCheck, Hammer, Medal, User, MessagesSquare, Sprout, Building2, GraduationCap, Store, HeartHandshake } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"




// Custom components
import ProgramsCard from "@/components/molecules/ProgramsCard";
import estandarIcon from "@/public/img/estandar-de-competencia.svg";
import Footer from "@/components/organisms/Footer";
import MainButton from "@/components/atoms/MainButton";
import SecondaryButton from "@/components/atoms/SecondaryButton";

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
    price: "5,000 MXN",
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
    price: "5,500 MXN",
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
    price: "$5,800 MXN",
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
    borColor: "border-t-gray-400",
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
      <header className="w-full bg-stone-50 dark:bg-slate-900 py-10 mb-6">
        <div className="container flex flex-col-reverse lg:flex-row h-auto lg:h-[40rem] justify-center items-center">
          <div className="flex flex-col justify-normal items-center lg:items-start">
            <h1 className="text-4xl md:text-5xl text-center lg:text-left font-bold md:leading-[3.5rem] pt-10 mb-3 pr-5">Sea parte de los mejores en cada sector</h1>
            <p className="text-xl md:text-2xl text-center lg:text-left py-3 mb-2 pr-5">Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu área</p>
            <MainButton href="./proceso" linkText="Comienza ahora" />
          </div>
          <div>
            <Image src={heroSection} alt="image with some people" />
          </div>
        </div>
      </header>
      <main className="w-full pt-19">
        <section className="static w-full py-5 h-auto bg-slate-800 px-6">
          {/* Estándares disponibles */}
          <h4 className="text-3xl md:text-4xl font-bold text-white text-center pb-6 pt-[7rem] mb-8">Certificaciones disponibles con 
            {/* <span className="bg-teal-400 text-black whitespace-nowrap px-3 rounded-md">Proyecta Empresarial</span> */}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-teal-300 before:rounded-md relative inline-block ml-2">
                <span className="relative text-black text-center whitespace-nowrap px-3">Proyecta Empresarial</span>
              </span>
          </h4>
          <div className="lg:container py-10 mb-[8rem] bg-white dark:bg-slate-900 rounded-3xl">
            <Tabs defaultValue="educativo" className="">
              <TabsList>
              <TabsTrigger value="educativo">
                  <GraduationCap strokeWidth={1.25} className="mr-1 lg:mr-3 w-7 h-7 lg:w-6 lg:h-6"/>
                    <span className="hidden lg:inline">Sector educativo</span>
                </TabsTrigger>
                <TabsTrigger value="empresarial">
                  <Store strokeWidth={1.25} className="mr-1 lg:mr-3 w-7 h-7 lg:w-6 lg:h-6"/>
                    <span className="hidden lg:inline">Sector empresarial</span>
                </TabsTrigger>
                <TabsTrigger value="gobierno">
                  <Building2 strokeWidth={1.25} className="mr-1 lg:mr-3 w-7 h-7 lg:w-6 lg:h-6"/>
                    <span className="hidden lg:inline">Sector gobierno</span>
                </TabsTrigger>
                <TabsTrigger value="social">
                  <HeartHandshake strokeWidth={1.25} className="mr-1 lg:mr-3 w-7 h-7 lg:w-6 lg:h-6"/>
                    <span className="hidden lg:inline">Sector social</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="educativo">
                <Table className="mt-10 md:w-4/5 w-full mx-auto">
                  <TableCaption>Lista de estandares de competencia</TableCaption>
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
                                <HoverCardContent className="flex">
                                  <User strokeWidth={2} className="h-7 w-7" />
                                  <div className="text-md pl-4">
                                    <p className="pb-2"><span className="font-bold">Para:</span> {estandar.ocupaciones}</p>
                                  </div>
                                </HoverCardContent>
                              </HoverCard>
                            </TableCell>
                            <TableCell className="text-right px-0 lg:px-2">
                              <Drawer className="relative">
                                <DrawerTrigger className="group/details invisible group-hover/item:visible text-teal-600 group-hover/item:text-teal-700 hover/item:bg-slate-200 pl-2 pr-0 lg:pl-4 lg:pr-2 lg:py-1 mr-2 rounded-full z-10 transition-colors ease-in-out duration-300">Detalles
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 origin-left inline transition group-hover/details:translate-x-1 group-hover/details:text-teal-700"><path d="m6 17 5-5-5-5" /></svg>
                                </DrawerTrigger>
                                <DrawerContent>
                                  <ScrollArea>
                                    <DrawerHeader className="flex w-full">
                                      <div className="content-center w-full mt-10 md:mt-4">
                                        <DrawerTitle className="text-2xl mb-2 bg-gray-200 dark:bg-gray-600 rounded-sm py-4 px-4">{estandar.content}</DrawerTitle>
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
                                      <p><b>Ficha técnica:</b> La información de los elementos y productos para la evaluación está dispoble en un documento PDF elaborado por el CONOCER</p>  
                                        <Button 
                                          className="
                                            py-6 
                                            px-4 
                                            text-xl 
                                            bg-gray-300 
                                            text-gray-800 
                                            hover:text-white 
                                            text-center 
                                            dark:hover:bg-gray-600 
                                            mt-5">
                                          <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="20" 
                                            height="20" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2.25" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                          <span className="px-4 py-6"> Descargar</span>
                                        </Button>
                                      </div>
                                    </div>
                                    <Separator className="mt-1 w-full" />
                                    <DrawerFooter className="container flex flex-row justify-end items-center">
                                      <DrawerClose className="
                                      absolute top-0 left-3
                                      mx-auto 
                                      hover:bg-slate-100 
                                      hover:text-teal-600 
                                      dark:hover:bg-slate-800 
                                      rounded-full 
                                      transition-colors 
                                      ease-in-out 
                                      duration-300
                                      z-20">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="48"
                                          height="48"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.75"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-circle"><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                      </DrawerClose>
                                      <p className="text-2xl font-bold mr-5">{estandar.price}</p>
                                      <SecondaryButton href="./" linkText="Obtener" />
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
              </TabsContent>
              <TabsContent value="empresarial">Certificaciones disponibles para el sector productivo</TabsContent>
              <TabsContent value="gobierno">Certificaciones para el sector del servicio público</TabsContent>
              <TabsContent value="social">Certificaciones para las organizaciones sociales</TabsContent>
            </Tabs>
          </div>
        </section>


        <section className="container w-full py-10 mt-[4rem]">
          {/* Pasos para certificarse */}
          <div className="py-10 mb-[2rem]">
            <div className="bg-transparent max-w-28 mx-auto">
              <Image src={resultados} width={140} height={140} alt="icon for" className="w-auto" />
            </div>
            <h2 className="text-2xl md:text-3xl text-center font-bold py-4 mt-8 mb-2">Conoce los pasos para la certificación</h2>
            <p className="text-2xl text-center pb-8 mb-8 w-full lg:w-2/3 mx-auto">Las certificaciones permiten demostrar su habilidad para realizar funciones específicas a un alto nivel</p>
            <div className="flex flex-col lg:flex-row w-full py-3 mx-auto">
              <div className="w-full lg:w-1/2">
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
              </div>
              <div className="w-full md:w-1/2 pl-8 pt-5 md:pl-[2rem] mb-[6rem]">
                {pasos.map((paso => {
                  return (
                    <div key={paso.id} className="flex flex-col md:flex-row items-center md:items-start mb-[2rem] py-3">
                      <div className="relative pl-8 md:pl-[6rem]">
                        <span className="absolute -left-5 lg:left-9 top-3 bg-gray-700 text-white px-4 text-center content-center rounded-full min-w-10 min-h-10 mx-3">
                          {paso.stepNumber}
                        </span>
                        <div className="group pl-8">
                          <h3 className="text-xl md:text-left font-bold py-3">
                            {paso.title}
                          </h3>
                          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-600">
                            <p className="text-xl mb-2 overflow-hidden">{paso.description} <br />
                              <Link href="./" className="text-lg text-teal-600 hover:underline">
                                <span className="py-3 text-xl">Ver más
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

          {/* Cards Criterios de evaluación */}
          <h4 className="text-2xl md:text-3xl font-bold text-center pl-4 py-6">Antes de empezar. Prepárate previo a tu evaluación</h4>
          <p className="text-2xl text-center pb-8 mb-8 w-full lg:w-2/3 mx-auto">Realiza una alineación al estándar de competencia que te interesa para asegurarte que estás preparada o preparado. En la alineación descubrirás:</p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 auto-cols-max mt-5 mb-[12rem] px-6 lg:px-0">
            {criterios.map((criterio => {
              return (
                <Card key={criterio.id} className={`lg:mx-0 xl:mx-0 mb-3 ${criterio.borColor}`}>
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

          <h2 className="scroll-m-20 text-3xl text-center font-bold tracking-normal lg:text-4xl py-6">Explora los programas que tenemos para tí</h2>
          <p className="text-2xl text-center pb-8 mb-8 w-full lg:w-2/3 mx-auto">Obten los beneficios que te ayudarán a certificarte en múltiples estándares de competencia</p>
          <ProgramsCard />
        </section>

        <section className="mx-auto mb-15 py-10 mt-[3rem] mb-[2rem]">
          {/* Reclutamiento */}
          <div className="container bg-gray-100 dark:bg-gray-700 w-full h-auto md:h-[16rem] mb-[7rem] mt-[1rem] px-10 md:px-[4rem] py-8 rounded-xl mx-auto">
            <Sprout size={70} strokeWidth={1.50} className="bg-gray-800 dark:bg-slate-200 text-white dark:text-gray-800 p-3 rounded-full" />
            <h3 className="text-3xl font-bold mb-2 mt-6">
              ¿Ya estás certificado y te interesa ser evaluador?
            </h3>
            <p className="text-xl">Ponte contacto con un asesor y aumenta tus beneficios realizando evaluaciones</p>
          </div>
          <div className="bg-teal-400 py-[7rem] border-b-[9px] border-t-[9px] px-5 lg:px-0">
            <h2 className="text-center text-3xl font-bold py-6 mb-[3rem]">Preguntas frecuentes</h2>
            <Accordion type="single" collapsible className="w-full md:w-4/5 m-auto ">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">¿En cuanto tiempo me entregan mi certificado?</AccordionTrigger>
                <AccordionContent className="py-8">
                  En promedio, 30 días a partir de la evaluación
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">¿Qué es una alineación?</AccordionTrigger>
                <AccordionContent className="py-8">
                  La alineación es
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">¿Puedo hacer la evaluación en línea?</AccordionTrigger>
                <AccordionContent className="py-8">
                  En algunos casos, dependiendo del estándar de competencia al que estés aplicando. Algunos estándares de competencia lo permiten, mientras que otros no.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">¿Cuál es el costo de la evaluación diagnóstica?</AccordionTrigger>
                <AccordionContent className="py-8">
                  Ninguno. La evalución diagnóstica la ofrecemos gratis.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          </section>
      </main>
      <Footer />
    </>
  );
}