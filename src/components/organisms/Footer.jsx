import { Separator } from "@/components/ui/separator";
import { MessageSquareText, Mail } from "lucide-react";
import Link from "next/link";
function Footer() {
  return (
    <>
      <footer className="my-10 py-10 px-8">
        <h3 className="text-3xl font-bold py-4">Centro de evaluación</h3>
        <div className="flex flex-col lg:flex-row md:justify-around justify-center">
          <div className="py-5">
            <h4 className="text-2xl font-bold pt-5">Proyecta empresarial</h4>
            <p className="text-xl pt-3 pb-4">Cédula de acreditación: CE009241.2024</p>
            <ul className="py-3">
              <li className="px-1 py-1 text-lg">Certificación</li>
              <li className="px-1 py-1 text-lg">Capacitación</li>
              <li className="px-1 py-1 text-lg">Coaching</li>
              <li className="px-1 py-1 text-lg">Consultoría</li>
              <li className="px-1 py-1 text-lg">Alineación</li>
              <li className="px-1 py-1 text-lg">Evaluación</li>
            </ul>
          </div>
          <div className="text-xl py-5">

            <Mail strokeWidth={1.5} className="h-8 w-8"/>
            <p className="font-bold py-5">Buzón de quejas</p>
            <p>¿Qué podemos hacer para mejorar Proyecta Empresarial?</p>
            <p>Enviar comentarios</p>
          </div>
          <div className="text-xl py-5">
              <MessageSquareText strokeWidth={1.50} className="h-8 w-8" />
            <p className="font-bold py-5">Contáctanos ahora</p>
            <p className="pb-4">¿Tienes alguna pregunta?<br />
              Comunícate con nosotros <br />
              Nos dará un gusto atenderte<br />
            </p>
            <p>Teléfono: (951) 980 0101</p>
            <p>actitudglobal@gmail.com</p>
          </div>
        </div>
        <Separator className=""/>
        <div className="flex pt-5"><p className="px-3">Términos y condiciones</p><p className="">Aviso de privacidad</p> </div>
        
      </footer>
    </>
  )
}

export default Footer