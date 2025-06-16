import { MessageSquareText, SendHorizontal, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import ContactForm from "@/components/organisms/ContactForm";
import FormItemsBuzon from "./FormItemsBuzon";
function Footer() {
  return (
    <>
      <footer className="bg-slate-50 dark:bg-slate-900">
        <div className="container py-[5rem]">
          <h4 className="text-xl font-bold pt-5">Proyecta empresarial</h4>
          <span className="w-[7.5rem] h-[3px] bg-teal-300 inline-block"></span>
          <div className="flex flex-col lg:flex-row md:justify-between justify-center">
            <div className="py-5">
              <h5 className="text-lg font-bold pt-4">Centro de evaluación autorizado</h5>
              <p className="text-base pt-1 pb-4">Cédula de acreditación: CE009241.2024</p>
              <div className="py-2">
                <p className="text-lg font-bold pt-4">Servicios</p>
                <ul className="py-3">
                  <li className="px-1 py-1 text-lg">Certificación</li>
                  <li className="px-1 py-1 text-lg">Capacitación</li>
                  <li className="px-1 py-1 text-lg">Coaching</li>
                  <li className="px-1 py-1 text-lg">Consultoría</li>
                  <li className="px-1 py-1 text-lg">Alineación</li>
                  <li className="px-1 py-1 text-lg">Evaluación</li>
                </ul>
              </div>
            </div>
            <div className="text-lg py-5">
              <div className="bg-teal-400 rounded-full p-3 w-fit h-fit">
                <Mail size={20} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white" />
              </div>
              <p className="font-bold pt-5 pb-1">Buzón de quejas</p>
              <p className="mb-4">¿Qué podemos hacer para mejorar <span className="font-bold">Proyecta Empresarial</span>?</p>


              <Dialog>
                <DialogTrigger aria-describedby="buzon" className="flex items-center py-3 pl-3 pr-5 text-lg text-white hover:text-gray-800 dark:text-gray-200 bg-gray-800 hover:bg-gray-300 text-center dark:hover:bg-gray-500 mt-5 mb-6 rounded-md">
                  <span className="px-2"> Enviar comentarios</span>
                  <SendHorizontal size={20} strokeWidth={1.5} absoluteStrokeWidth={true} />
                </DialogTrigger>
                <DialogContent className="py-10 px-[2.5rem] lg:px-[4rem]" id="buzon">
                  <DialogHeader className="mb-[2rem]">
                    <div className="flex flex-row items-baseline space-x-5">
                      <DialogTitle className="text-3xl mb-4">Ayudanos a mejorar</DialogTitle>
                    </div>
                    <DialogDescription className="text-base">
                      Tu opinión es invaluable para nosotros. En Proyecta Empresarial, valoramos profundamente tus comentarios y sugerencias. Cada aporte nos ayuda a mejorar continuamente nuestros servicios y ofrecerte mejor atención
                    </DialogDescription>
                  </DialogHeader>
                  <div className="">
                    <ContactForm>
                      <FormItemsBuzon />
                    </ContactForm>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="text-lg py-5">
              <div className="bg-teal-400 rounded-full p-3 w-fit h-fit">
                <MessageSquareText size={20} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white" />
              </div>
              <p className="font-bold pt-5 pb-1">Contáctanos ahora</p>
              <p className="pb-4">¿Tienes alguna pregunta?<br />
                Comunícate con nosotros <br />
                Nos dará un gusto atenderte<br />
              </p>
              <p className="font-bold py-3"><span className="font-normal">Teléfono:</span> (951) 980 0101</p>
              <p className="font-bold py-3"><span className="font-normal">Email:</span> actitudglobal@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-5">
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
        </div>
      </footer>
    </>
  )
}

export default Footer