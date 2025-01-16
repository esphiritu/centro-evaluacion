import Image from "next/image";
import {
  Presentation,
  Rocket,
  Dumbbell,
  Check,
} from "lucide-react";
// Custom components
import Footer from "@/components/organisms/Footer";
import { Card, CardContent } from "@/components/ui/card";
import inception from "@/public/img/457267054_529522399582357_4829443968981261987_n.jpg";
import SecondImage from "@/public/img/gallery-karen.jpg";

export default function Soluciones() {
  return (
    <>
      <main className="w-full pt-19">
        <section>

        </section>
        <section className="container">
          <h2 className="text-4xl text-center font-bold py-4">Servicios</h2>
          <ul className="flex flex-col sm:flex-col lg:flex-row justify-center items-baseline mt-8 mb-6">
            <li className="w-full lg:w-1/3 py-8 px-5 mx-2 lg:mx-auto">
              <div className="bg-teal-500 w-fit h-fit p-4 rounded-full">
                <Presentation size={32} strokeWidth={2} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-left mt-8 mb-4">
                Capacitaciones
              </h3>
              <p className="text-lg text-muted-foreground text-left">
                Texto que desccribe el servicio que se presta
              </p>
            </li>
            <li className="w-full lg:w-1/3 py-8 px-5 mx-2 lg:mx-auto">
              <div className="bg-teal-500 w-fit h-fit p-4 rounded-full">
                <Rocket size={32} strokeWidth={2} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-left mt-8 mb-4">
                Consultoría
              </h3>
              <p className="text-lg text-muted-foreground text-left">
                Texto que desccribe el servicio que se presta
              </p>
            </li>
            <li className="w-full lg:w-1/3 py-8 px-5 mx-2 lg:mx-auto">
              <div className="bg-teal-500 w-fit h-fit p-4 rounded-full">
                <Dumbbell size={32} strokeWidth={2} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-left mt-8 mb-4">
                Coaching
              </h3>
              <p className="text-lg text-muted-foreground text-left">
                Texto que desccribe el servicio que se presta
              </p>
            </li>
          </ul>

          <h3 className="text-3xl text-center font-bold py-4 mb-[5rem]">Portafolio</h3>

          <div className="border rounded-xl px-10 py-10">
            <h3 className="w-full text-3xl text-center font-bold py-1 mb-3">Resultados medibles</h3>
            <p className="w-5/6 text-xl text-center md:text-2xl text-pretty font-thin dark:text-white mb-[2.5rem] mx-auto">
              Una consultora de estrategia ha llevado a cabo un análisis comparativo paralelo para evaluar el ahorro de tiempo y el retorno de la inversión frente a los sistemas de gastos tradicionales.
            </p>
            <div className="flex flex-col lg:flex-row justify-around py-10">
              <Card>
                <CardContent>
                  <Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white bg-teal-400 min-w-5 min-h-5 rounded-full p-[0.15rem] mb-4" />
                  <h4 className="text-5xl">32.720</h4>
                  <p className="text-base">Horas ahorradas al año</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white bg-teal-400 min-w-5 min-h-5 rounded-full p-[0.15rem] mb-4" />
                  <h4 className="text-5xl">74%</h4>
                  <p className="text-base">Incrementos en la productividad</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white bg-teal-400 min-w-5 min-h-5 rounded-full p-[0.15rem] mb-4" />
                  <h4 className="text-5xl">5.6x</h4>
                  <p className="text-base">ROI recurrente</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Check size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-white bg-teal-400 min-w-5 min-h-5 rounded-full p-[0.15rem] mb-4" />
                  <h4 className="text-5xl">1.6</h4>
                  <p className="text-base">Meses para recuperar la inversión</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <section className="py-[6rem] bg-blue-100 dark:bg-gray-900 my-10" id="acerca">
        <h4 className="container text-3xl font-bold py-4 mb-[5rem]">Acerca de <span className="bg-teal-200 whitespace-nowrap px-3 rounded-md text-gray-900 font-bold">Proyecta Empresarial</span></h4>
        <div className="relative container px-10 flex flex-col space-y-8">
          {/* First milestone */}
          <div className="relative z-10">
            <Image src={inception} alt="image of the inception of the company" className="timeline-img" />
            <div className="timeline-container">
              <div aria-hidden="true" className="timeline-pointer"></div>
              <div className="text-lg bg-white dark:bg-gray-700 rounded-md shadow-md p-6">
                <span className="uppercase font-bold text-teal-500">20 Agosto 2023</span>
                <p>Lorem ipsum text, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut.</p>
              </div>
            </div>
          </div>
          {/* Second milestone*/}
          <div className="relative z-10">
            <Image src={SecondImage} alt="image of Karen Campos<p></p>" className="timeline-img" />
            <div className="timeline-container timeline-container-left">
              <div aria-hidden="true" className="timeline-pointer timeline-pointer-left"></div>
              <div className="text-lg bg-white dark:bg-gray-700 rounded-md shadow-md p-6">
                <span className="uppercase font-bold text-teal-500">03 diciembre 2024</span>
                <p>Consectetur adipiscing elit. sed do eiusmod tempor incididunt ut.</p>
              </div>
            </div>
          </div>
          <div className="absolute w-2 h-full border-white shadow-md left-17 inset-0 lg:mx-auto lg:right-0 lg:left-0"></div>
        </div>
      </section>
      <section className="container py-10">
        <h4 className="text-3xl font-bold py-4 mb-[5rem]">Nuestro equipo</h4>
      </section>
      <div className="container">
        <h5 className="text-3xl font-bold py-4 mb-[5rem]">Contacto</h5>
        <ul className="list-disc pl-5 text-xl text-gray-800 dark:text-gray-400">
          <li>Dirección</li>
          <li>Teléfono</li>
          <li>Correo electrónico</li>
        </ul>
      </div>
      <Footer />

      {/* <div id="textSlider" className="relative mb-10">
  
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 text-left text-[3rem] font-bold m-0">
              <div className="h-[5.6rem] leading-[4.8rem] overflow-hidden">
                <div className="animate-scroller">
                  <p>Capacitación</p>
                  <p>Consultoría</p>
                  <p>Coaching</p>
                  <p>Auditoría</p>
                </div>
              </div>
            </div>
          </div>
  
          <div id="textSlider" className="relative w-1/2 mx-auto">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 float-left text-2xl md:text-3xl m-0 pr-2 leading-[4.8rem] md:leading-[4.6rem] font-bold">
              <p>Refuerza los elementos clave.</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 text-left text-2xl md:text-3xl font-bold m-0">
              <div className="h-[5.6rem] overflow-hidden w-fit">
                <div className="animate-scroller">
                  <p className="leading-[4.9rem] md:leading-[4.8rem]">Saber</p>
                  <p className="leading-[4.5rem] md:leading-[4.5rem]">Saber hacer</p>
                  <p className="leading-[4.7rem] md:leading-[4.6rem]">Saber ser</p>
                  <p className="text-teal-600 leading-[4.5rem] md:leading-[4.5rem]">Prepárate.</p>
                </div>
              </div>
            </div>
          </div> */}
    </>);
}