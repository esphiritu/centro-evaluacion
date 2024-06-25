import Link from "next/link";

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
import { buttonVariants } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";

// Custom components
import ProgramsCard from "@/components/molecules/ProgramsCard";

const estandares = [
  {
    id: "EC0217.01",
    title: "EC0217.01",
    description: "Servicios educativos",
    content: "Impartición de cursos de formación de capital humano de manera presencial grupal",
    snc: "Tres",
  },
  {
    id: "EC0366",
    title: "EC0366",
    description: "Servicios educativos",
    content: "Desarrollo de cursos de formación en línea",
    snc: "Tres",
  },
  {
    id: "EC0301",
    title: "EC0301",
    description: "Servicios educativos",
    content: "Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso",
    snc: "Tres",
  },
]




export default function Certificaciones(params) {
  return (
    <main className="">
      <div className="flex flex-col justify-center items-center md:flex-row w-full min-h-96 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto">
          <div className="w-full md:w-3/5 px-10 ">
              <h5 className="text-4xl md:text-5xl text-center text-teal-100 md:text-left font-bold py-3">Obtenga la tranquilidad de saber que sus evaluaciones están en manos expertas</h5>
              <p className="text-lg md:text-2xl text-center text-slate-800 md:text-left py-3">Nuestro equipo de expertos posee un profundo conocimiento en la industria</p>
          </div>
          <div className="w-full md:w-1/5">Some content here</div>
      </div>
      <section className="container py-5">
        <h1 className="text-2xl md:text-3xl font-bold text-center py-10">Estándares de competencia laboral con la que puedes certificarte con Proyecta Empresarial</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-cols-max mt-5">
          {estandares.map((estandar => {
            return (
              <Card key={estandar.id} className="dark:hover:bg-slate-800 hover:bg-slate-100 lg:mx-10 py-2">
                <CardHeader>
                  <CardTitle>{estandar.title}</CardTitle>
                  <CardDescription>{estandar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{estandar.content}</p>
                </CardContent>
                <CardFooter>
                  <p>Nivel en el SNC: {estandar.snc}</p>
                </CardFooter>
              </Card>
            )
          }
          ))
          }
        </div>
      </section>
      <section className="container py-10 w-full bg-slate-100 rounded-md mt-8">
          <h1 className=" text-3xl md:text-4xl font-bold py-5">Inicia una evaluación diagnóstica</h1>
          <p className="text-lg py-8">Resultados confiables respaldados por el Organismo Certificador más importante de America Latina: <em>ICE México</em>.</p>
          <Link href="./asesor" className={buttonVariants({ variant: "outline" })}>
              <span className="py-3 px-3 text-md">Agenda una evaluación</span> 
          </Link>
        </section>
      <section className="container py-10 w-full">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-normal lg:text-4xl py-3">La certificación laboral es para todos los perfiles profesionales</h2>
          <p className="text-lg ">Si eres un profesional en educación, un especialista en recursos humanos, o director general de una organización, la certificación te ayudará a mantenerte a la vanguardia en tu especialidad</p>
          <ProgramsCard />
      </section>
      
      <section className="container mx-auto mb-15 py-10">
        <h2 className="text-center text-4xl font-bold py-6">Preguntas frecuentes</h2>
        <Accordion type="single" collapsible className="w-full md:w-1/2 m-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold">¿En cuanto tiempo me entregan mi certificado?</AccordionTrigger>
            <AccordionContent>
              En promedio, 30 días a partir de la evaluación
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-bold">¿Puedo hacer la evaluación en línea?</AccordionTrigger>
            <AccordionContent>
              En algunos casos, dependiendo del estándar de competencia al que estés aplicando. Algunos estándares de competencia lo permiten, mientras que otros no.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-bold">¿Cuál es el costo de la evaluación diagnóstica?</AccordionTrigger>
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
          <div className="py-5">
            <MessagesSquare size={24}/>
            <p className="text-2xl font-bold py-3">Contáctanos</p>
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