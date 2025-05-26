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
import directoraGeneral from "@/public/img/pexels-anna-nekrashevich-7550826.jpg";
import { Separator } from "@/components/ui/separator";

export default function Soluciones() {
  return (
    <>
      <main className="w-full pt-19 pt-[8rem]">
        <section>

        </section>
        <section className="container">
          <div className=" mb-[10rem] mt-10">
            <h2 className="text-4xl text-center font-bold py-4 mb-6">Servicios</h2>
            <p className="w-full lg:w-2/3 text-2xl text-muted-foreground text-pretty font-light text-center mb-[5rem] mx-auto">Ofrecemos soluciones estratégicas diseñadas para impulsar el crecimiento, optimizar operaciones y maximizar el potencial de tu negocio.</p>
            <ul className="flex flex-col sm:flex-col lg:flex-row justify-center items-baseline mt-8 mb-6">
              <li className="w-full lg:w-1/3 py-8 px-5 mx-2 lg:mx-auto">
                <div className="bg-teal-500 w-fit h-fit p-4 rounded-full">
                  <Presentation size={32} strokeWidth={2} className="text-white" />
                </div>
                <h3 className="text-2xl text-left mt-8 mb-4">
                  Capacitaciones
                </h3>
                <p className="text-lg text-muted-foreground text-left">
                  Impulsa tu negocio con nuestras soluciones de capacitación personalizadas, diseñadas para potenciar el rendimiento de su equipo.
                </p>
              </li>
              <li className="w-full lg:w-1/3 py-8 px-5 mx-2 lg:mx-auto">
                <div className="bg-teal-500 w-fit h-fit p-4 rounded-full">
                  <Rocket size={32} strokeWidth={2} className="text-white" />
                </div>
                <h3 className="text-2xl text-left mt-8 mb-4">
                  Consultoría
                </h3>
                <p className="text-lg text-muted-foreground text-left">
                  Nuestro equipo trabajará contigo para identificar oportunidades, superar desafíos y alcanzar tus objetivos de manera eficiente.
                </p>
              </li>
              <li className="w-full lg:w-1/3 py-8 px-5 mx-2 lg:mx-auto">
                <div className="bg-teal-500 w-fit h-fit p-4 rounded-full">
                  <Dumbbell size={32} strokeWidth={2} className="text-white" />
                </div>
                <h3 className="text-2xl text-left mt-8 mb-4">
                  Coaching
                </h3>
                <p className="text-lg text-muted-foreground text-left">
                  Construya liderazgo, mejore la toma de decisiones y maximize el impacto de los altos directivos en su organización.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-[10rem]">
            <h3 className="text-3xl text-center font-bold py-10">Portafolio</h3>
          </div>

          <div className="border rounded-xl px-10 py-10">
            <h3 className="w-full text-3xl text-center font-bold py-1 mb-6">Resultados medibles</h3>
            <p className="w-5/6 text-2xl text-center text-pretty text-muted-foreground font-light mb-[2.5rem] mx-auto">
              Nuestros servicios han ayudado a innumerables empresas a alcanzar un éxito medible. Ahorro de tiempo, reducción de costos, mayor productividad y mejor retorno de la inversión.
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
      <section className="container py-10 mt-[9rem]" id="acerca">
        <div className="flex flex-col lg:flex-row justify-start">
          <div className="w-full lg:w-1/2">
            <h4 className="text-3xl font-bold mb-4">Nuestro equipo</h4>
            <p className="text-xl w-4/5 leading-8">Nuestra misión es <strong>empoderar a nuestros clientes con soluciones educativas</strong> que impulsan el éxito empresarial. Estamos dedicados a brindar un servicio excepcional, fomentar asociaciones a largo plazo y superar continuamente las expectativas.</p>
          </div>
          <div className="w-full lg:w-1/2">
            <div>
              <div className="flex flex-col lg:flex-row justify-start items-start pl-0 lg:pl-10 pt-10 lg:pt-0 pb-[3rem]">
                <div className="w-full lg:w-2/6">
                  <Image src={directoraGeneral} width={100} height={100} className="w-full rounded-xl cover-full" alt="Picture of ..."></Image>
                </div>
                <div className="w-full lg:w-4/6 py-[2rem] px-0 lg:px-[3.5rem] h-[14rem]">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white pt-4">
                    Leslie Alexander
                  </h3>
                  <p className="text-gray-500 dark:text-white py-2">
                    Directora
                  </p>
                  <p className="text-lg pt-6">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
                </div>
              </div>
              <Separator className="w-full" decorative={true} />
            </div>
          </div>
        </div>
        <h4 className="text-3xl font-bold pt-[7rem] mb-4">Podemos alcanzar grandes metas. Contigo</h4>
      </section>
      <section className="py-[6rem] bg-slate-100 dark:bg-gray-900 mt-[12rem]">
        <h4 className="container text-3xl font-bold py-4 mb-[5rem]"> Acumulando <span className="bg-slate-500 whitespace-nowrap px-3 rounded-md text-white font-bold">horas de experiencia</span></h4>
        <div className="relative container px-10 flex flex-col space-y-8">
          {/* First milestone */}
          <div className="relative z-10">
            <Image src={inception} alt="image of the inception of the company" className="timeline-img" />
            <div className="timeline-container">
              <div aria-hidden="true" className="timeline-pointer"></div>
              <div className="text-lg bg-white dark:bg-gray-700 rounded-md shadow-md p-6">
                <span className="text-teal-500">Agosto 2023</span>
                <h5 className="font-bold pt-3">Constitución legal</h5>
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
                <span className="text-teal-500">Diciembre 2024</span>
                <h5 className="font-bold pt-3">Inicio de operaciones</h5>
                <p>Consectetur adipiscing elit. sed do eiusmod tempor incididunt ut.</p>
              </div>
            </div>
          </div>
          <div className="absolute w-2 h-full bg-gray-300 border-white shadow-md left-17 inset-0 lg:mx-auto lg:right-0 lg:left-0"></div>
        </div>
      </section>
      <div className="container mt-[8rem]">
        <h4 className="text-3xl font-bold pt-[6rem] mb-4">Más acerca de nosotros</h4>
        <p className="text-2xl mb-[5rem] text-pretty text-muted-foreground font-light">Tenemos grandes planes</p>
        <h5 className="text-3xl font-bold py-4">Contacto empresarial</h5>
        <p className="w-full lg:w-2/3 text-xl mb-[5rem]">Confía en nosotros para ser tu socio estratégico. Juntos, construiremos un futuro sólido y próspero para tu negocio.</p>
        <ul className="list-disc pl-5 text-xl text-gray-800 dark:text-gray-400">
          <li>Dirección</li>
          <li>Teléfono</li>
          <li>Correo electrónico</li>
        </ul>
      </div>
      <Footer />
    </>);
}