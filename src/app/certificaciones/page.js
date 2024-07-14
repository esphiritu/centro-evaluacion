import Link from "next/link";
import Image from "next/image";

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
      <div className="flex flex-col justify-center items-center w-full min-h-[32rem] bg-gradient-to-r from-teal-500 to-teal-700 border-b-[9px] mx-auto">
        <div className="w-full md:w-3/5 px-10 ">
          <h5 className="text-3xl md:text-4xl text-center text-teal-100 font-bold py-3">Obtenga la tranquilidad de saber que sus evaluaciones están en manos expertas</h5>
          <p className="text-lg md:text-2xl text-center text-white py-3">Nuestro equipo de evaluadores posee un profundo conocimiento y experiencia</p>
        </div>
        <Link href="./proceso" className="text-xl font-bold transition-all duration-300 ease-in-out rounded-sm bg-yellow-300 hover:bg-yellow-400 px-8 py-3 mt-6">Comienza ahora</Link>
        <p className="text-lg text-white py-3">¡Obten 20% de descuento!</p>
      </div>
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