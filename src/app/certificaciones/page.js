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

const criterios = [
  {
    id: "00A",
    title: "Conocimientos",
    description: "Saber y entender",
    content: "Posesión de conceptos, teorías y principios que sustentan el desempeño de la función",
    borColor: "border-t-purple-400",
    icon: estandarIcon,
  },
  {
    id: "00B",
    title: "Habilidades",
    description: "Ser capaz físicamente de desempeñar",
    content: "Realización de acciones que permiten observar su competencia",
    borColor: "border-t-blue-400",
    icon: estandarIcon,
  },
  {
    id: "00C",
    title: "Valores",
    description: "Tener disposición y actitud",
    content: "Predisposición o tendencia a actuar con determinado comportamiento ante una situación o persona con las que se relaciona durante el desempeño",
    borColor: "border-t-orange-400",
    icon: estandarIcon,
  },
  {
    id: "00D",
    title: "Productos",
    description: "Objetos tangibles, resultado de la actividad",
    content: "Pueden ser manuales, informes, métricas de resultados",
    borColor: "border-t-stone-400",
    icon: estandarIcon,
  },
]

export default function Certificaciones(params) {
  return (
    <>
      <main className="w-full pt-19">
        <header className="flex flex-col-reverse lg:flex-row h-auto lg:h-[38rem] justify-center items-center rounded-lg bg-transparent dark:bg-slate-900 py-10 px-8 lg:px-[10rem]">
          <div className="flex flex-col justify-normal items-center lg:items-start">
            <h1 className="text-4xl md:text-5xl text-center lg:text-left font-bold md:leading-[3.5rem] pt-10 mb-5 pr-5">Sea parte de los mejores en cada sector</h1>
            <p className="text-xl md:text-2xl text-center lg:text-left py-5 mb-4 pr-5">Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu área</p>
            <Link className="group transition-all duration-300 ease-in-out text-center bg-yellow-300 hover:bg-yellow-400 pl-8  pr-3 py-3 rounded-sm text-gray-900 font-bold md:text-xl shadow-md mt-1 md:mt-6" href="./proceso">
              Comienza ahora
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 origin-left inline text-transparent hover:translate-x-0.3 transition-all group-hover:translate-x-2 group-hover:text-gray-900"><path d="m6 17 5-5-5-5" /></svg>
            </Link>
          </div>
          <div>
            <Image src={heroSection} alt="image with some people" />
          </div>
        </header>

        <section className="static lg:container py-5 h-auto">
          <h4 className="text-3xl md:text-4xl font-bold text-center lg:text-left py-6 mb-6">¿Qué se evalúa?</h4>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 auto-cols-max mt-5 mb-[7rem] px-6 lg:px-2">
            {criterios.map((criterio => {
              return (
                <Card key={criterio.id} className={`lg:mx-2 xl:mx-3 mb-6 ${criterio.borColor}`}>
                  <CardHeader>
                    <CardTitle>{criterio.title}</CardTitle>
                    <CardDescription>{criterio.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl">{criterio.content}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="">

                    </div>
                  </CardFooter>
                </Card>
              )
            }))}
          </div>

          <div className="container py-10">
            <h2 className="text-3xl md:text-4xl text-center font-bold py-4 mt-8 mb-3">Conoce los pasos para la certificación</h2>
            <p className="text-2xl text-muted-foreground text-center pb-8 mb-[5rem]">Las certificaciones permiten demostrar su habilidad para realizar funciones específicas a un alto nivel</p>

            <div className="flex flex-col w-full lg:w-4/5 mx-auto">
              <div className="group w-full flex flex-col md:flex-row items-center md:items-start mb-[6rem]">
                {/* <div className="bg-transparent max-w-32 mr-1 ml-2 md:mr-[5rem]">
                <Image src={estandar} width={180} height={180} alt="icon for" className="w-auto" />
              </div> */}
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
                {/* <div className="bg-transparent max-w-32 mr-1 ml-2 md:mr-[5rem]">
                <Image src={diagnostico} width={180} height={180} alt="icon for" className="w-auto" />
              </div> */}
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
                {/* <div className="bg-transparent max-w-32 mr-1 ml-2 md:mr-[5rem]">
                <Image src={evaluacion} width={180} height={180} alt="icon for" className="w-auto" />
              </div> */}
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
                {/* <div className="bg-transparent max-w-32 mr-1 ml-2 md:mr-[5rem]">
                <Image src={resultados} width={180} height={180} alt="icon for" className="w-auto" />
              </div> */}
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
          </div>
          <div className="">
            <h4 className="text-3xl md:text-4xl font-bold text-center py-6 mb-[4rem]">Certificaciones disponibles con <span className="text-teal-600">Proyecta Empresarial</span></h4>
            <Table className="mt-10 md:w-4/5 w-full mx-auto">
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader className="text-lg font-bold">
                <TableRow className="">
                  <TableHead className="w-1/5">Estándar de competencia</TableHead>
                  <TableHead className="w-3/5">Nombre</TableHead>
                  <TableHead className="w-1/5 text-right"> </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-lg">
                {estandares.map(
                  (estandar => {
                    return (
                      <TableRow key={estandar.id} className="group/item">
                        <TableCell>{estandar.title}</TableCell>
                        <TableCell>{estandar.content}</TableCell>
                        <TableCell className="text-right">
                          <Drawer>
                            <DrawerTrigger className="group/details invisible group-hover/item:visible text-teal-600 group-hover/item:text-teal-700 group-hover/details:bg-slate-500 py-4">Detalles
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 origin-left inline transition group-hover/details:translate-x-1 group-hover/details:text-teal-700"><path d="m6 17 5-5-5-5" /></svg>
                            </DrawerTrigger>
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
                                <DrawerClose className="mx-auto hover:bg-slate-100 hover:text-teal-600 rounded-full p-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                </DrawerClose>
                              </DrawerFooter>
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
        </section>

        <section className="container w-full py-10 mt-[12rem]">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-normal lg:text-5xl py-3 mb-5">Prepárate previo a tu evaluación</h2>
          <p className="text-xl">Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu área</p>
          <ProgramsCard />
        </section>

        <section className="container mx-auto mb-15 py-10 mt-[12rem]">
          <h2 className="text-center text-4xl font-bold py-6 mb-[3rem]">Preguntas frecuentes</h2>
          <Accordion type="single" collapsible className="w-full md:w-4/5 m-auto ">
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