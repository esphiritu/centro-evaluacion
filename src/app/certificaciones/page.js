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
    <main className="w-full lg:w-5/6 m-auto">
      <section className="py-5">
        <h1 className="text-4xl text-center font-bold py-4">¿En que me puedo certificar con Proyecta Empresarial?</h1>
        <h2 className="text-2xl text-center font-light text-slate-600">Estándares de Competencia laboral</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-cols-max p-2 lg:p-10">
          {estandares.map((estandar => {
            return (
              <Card key={estandar.id} className="transition transform dark:hover:bg-slate-800 hover:bg-slate-100 lg:mx-10 py-2">
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

      <section className="py-10 w-3/4">
          <h4 className="scroll-m-20 text-4xl font-bold tracking-normal lg:text-2xl py-3">La certificación más importante y flexible para todos los perfiles profesionales</h4>
          <p className="text-lg text-slate-600">Si eres un profesional en educación, un especialista en recursos humanos, o director general de tu organización, la certificación en … te ayudará a ... ¿Quieres saber de la certificación gratuita?</p>
        </section>
      
      <section className="w-full lg:w-1/2 mx-auto mb-15 py-10">
        <h2 className="text-center text-4xl font-bold py-6">Preguntas frecuentes</h2>
        <Accordion type="single" collapsible>
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
            <MessagesSquare size={32}/>
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