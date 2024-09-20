import { MessageSquareText, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function Footer() {
  return (
    <>
      <footer className="container my-2 py-10">
        <div className="flex flex-col lg:flex-row md:justify-between justify-center">
          <div className="py-5">
            <h4 className="text-2xl font-bold pt-5">Proyecta empresarial</h4>
            <h5 className="text-xl font-bold py-4">Centro de evaluación</h5>
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
            <Mail strokeWidth={1.5} className="h-14 w-14 text-white bg-gray-800 rounded-full p-3" />
            <p className="font-bold py-5">Buzón de quejas</p>
            <p>¿Qué podemos hacer para mejorar Proyecta Empresarial?</p>
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>
              <span className="px-4 py-6"> Enviar comentarios</span>
            </Button>
          </div>
          <div className="text-xl py-5">
            <MessageSquareText strokeWidth={1.50} className="h-14 w-14 text-white bg-gray-800 rounded-full p-3" />
            <p className="font-bold py-5">Contáctanos ahora</p>
            <p className="pb-4">¿Tienes alguna pregunta?<br />
              Comunícate con nosotros <br />
              Nos dará un gusto atenderte<br />
            </p>
            <p>Teléfono: (951) 980 0101</p>
            <p>actitudglobal@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly pt-5">
          <div>
            <p>&copy; 2025 Proyecta empresarial</p>
          </div>
          <div className="flex">
            <p className="px-4">Términos y condiciones</p>
            <p className="px-4">Aviso de privacidad</p>
          </div>
          <div>
            <p>Redes sociales</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer