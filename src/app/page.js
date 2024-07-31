import Link from "next/link";
import Image from "next/image";
import { CircleDollarSign, HandshakeIcon, Key, LockKeyhole, ShieldCheck, Headset, Award, CalendarDays, Clock } from "lucide-react";
import resultados from "@/public/img/consulta-resultados.svg";
import estandar from "@/public/img/estandar-de-competencia.svg";
import evaluacion from "@/public/img/presenta-evaluacion.svg";
import diagnostico from "@/public/img/evaluacion-diagnostica.svg";


export default function Home({ Component, pageProps }) {
  return (
    <>
      <main className="w-full pt-19">
        <section style={styles.container} className="h-screen border-b-[9px] px-10">
          <div className="container mx-auto h-full">
            <div className="
              flex 
              flex-col
              justify-end
              md:justify-center
              md:items-center 
              gap-y-7 
              h-full">
              <h1 className="
              scroll-m-20 
              text-white 
              text-3xl 
              md:text-5xl 
              lg:text-6xl 
              font-extrabold 
              bg-black/50 
              tracking-tight 
              py-3 
              md:rounded-md 
              rounded-sm 
              transition-all 
              duration-300 
              ease-in-out 
              px-3">
                Impulsa tu vida profesional al éxito
              </h1>
              <p className="text-xl md:text-3xl text-white">Respalda tus conocimientos y experiencia con certificaciones oficiales</p>
              <div className="flex flex-col md:flex-row mt-1 md:mt-5">
                <Link className="group transition-all duration-300 ease-in-out text-center bg-yellow-300 hover:bg-yellow-400 px-6 py-3 mx-4 rounded-sm text-gray-900 font-bold md:text-xl shadow-md mt-1 md:mt-6" href="./proceso">
                  Comienza ahora
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline lucide lucide-chevrons-right ml-1 origin-left hover:translate-x-0.5 transition group-hover:translate-x-2"><path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" /></svg>
                </Link>
                <Link className="transition-all duration-300 ease-in-out px-4 py-3 mx-4 mb-6 md:mb-1 hover:underline text-center font-bold md:text-lg rounded-sm text-white shadow-sm mt-6" href="./asesor">
                  Comienza con un asesor
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="container h-[46rem]">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="scroll-m-40 text-4xl md:text-5xl font-extrabold tracking-tight py-10 mt-10 text-center">Beneficios de la certificación</h2>
            <div className="flex flex-col sm:flex-col lg:flex-row justify-center items-baseline">
              {benefits.map((benefit => {
                return (
                  <div className="w-full lg:w-1/3 py-8 px-5 mx-2 md:mx-auto" key={benefit.id}>
                    {benefit.icon}
                    <h3 className="text-2xl font-bold text-left mt-8">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground text-left">{benefit.description}</p>
                  </div>
                )
              }
              ))
              }
            </div>
          </div>
        </section>
        <section className="container py-10 my-10">
          <h1 className="text-4xl md:text-5xl text-center font-bold py-4 mb-2">Conoce la ruta para la certificación</h1>
          <p className="text-2xl text-muted-foreground text-center pb-8 mb-8">Las certificaciones permiten demostrar su habilidad para realizar funciones específicas a un alto nivel</p>
          <div className="flex flex-col w-full md:w-2/3 mx-auto">
            <div className="w-full flex flex-col md:flex-row items-center mb-10">
              <div className="bg-yellow-500 rounded-2xl max-w-[220px]">
                <Image src={estandar} width={180} height={180} alt="icon for" className="w-auto px-10" />
              </div>
              <h3 className="text-3xl px-10 text-center md:text-left py-3">1. Identifica el estándar de competencia</h3></div>
            <div className="w-full flex flex-col md:flex-row items-center mb-10">
              <span className="bg-red-500 rounded-2xl max-w-[220px]">
                <Image src={diagnostico} width={180} height={180} alt="icon for" className="w-auto px-10" />
              </span>
              <h3 className="text-3xl px-10 text-center md:text-left py-3">2. Toma una evaluación diagnóstica</h3></div>
            <div className="w-full flex flex-col md:flex-row items-center mb-10">
              <span className="bg-green-600 rounded-2xl max-w-[220px]">
                <Image src={evaluacion} width={180} height={180} alt="icon for" className="w-auto px-10" />
              </span>
              <h3 className="text-3xl px-10 text-center md:text-left py-3">3. Realiza tu evaluación en un Centro Evaluador</h3></div>
            <div className="w-full flex flex-col md:flex-row items-center mb-10">
              <span className="bg-gray-600 rounded-2xl max-w-[220px]">
                <Image src={resultados} width={180} height={180} alt="icon for" className="w-auto px-10" />
              </span>
              <h3 className="text-3xl px-10 text-center md:text-left py-3">4. Consulta tus resultados</h3></div>
          </div>
        </section>
        <section className="container flex flex-col lg:flex-row rounded-md bg-gray-100 dark:bg-slate-900 py-10 my-10">

          <h2 className="w-1/3 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl py-10 my-5">Casos de éxito</h2>

          <div className="w-2/3">
            <p className="text-2xl py-10"> There is something so natural about collaborating in Freehand. It feels like you are holding a marker, and making ideas happen. I can not imagine doing that in another tool. It captures that human essence of being in person and talking to someone that is right next to you and getting work done together. Especially in todays world when everything is remote. It makes for really organic communication.</p>
            <p className="">Sea parte de nuestros clientes satisfechos que confían en nuestras evaluaciones</p>
          </div>
        </section>
        <section className="container h-[46rem] flex flex-col lg:flex-row py-10 my-10">
          <div className="justify-center items-center  content-center w-full lg:w-1/2 pr-5">
            <h1 className="text-4xl md:text-5xl font-bold py-6 mb-6">¿Por qué evaluarme con <span className="text-teal-600">Proyecta Empresarial</span>?</h1>
            <p className="text-2xl  font-light text-slate-600 py-4">Reconocimiento nacional</p>
            <p className="text-lg text-baseline ">Instituciones educativas, empresas y entidades gubernamentales en todo México confían en los procesos de evaluación de Proyecta Empresarial.</p>
          </div>
          <ul className="grid grid-cols-2 w-full lg:w-1/2 gap-4 py-10 my-5">
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><LockKeyhole size={42} strokeWidth={1.50} className="m-auto text-teal-600" /><span className="block my-8">Objetividad y confiabilidad</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><Headset size={42} strokeWidth={1.50} className="m-auto text-teal-600" /><span className="block my-8">Asesoría de expertos</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><ShieldCheck size={42} strokeWidth={1.50} className="m-auto text-teal-600" /><span className="block my-8">Calidad asegurada</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><Award size={42} strokeWidth={1.50} className="m-auto text-teal-600" /><span className="block my-8">Respaldo de ICE México</span></li>
          </ul>
        </section>
        <section className="py-10 mb-10">
          
          <div className="flex flex-col justify-center items-center w-full min-h-[32rem] bg-gradient-to-r from-teal-500 to-teal-700 border-b-[9px] border-t-[9px] mx-auto">
            <div className="w-full md:w-3/5 px-10 ">
              <h5 className="text-3xl md:text-5xl text-center text-teal-100 font-bold py-3">Su experiencia en otro nivel</h5>
              <p className="text-lg md:text-2xl text-center text-white py-3">Obtenga la tranquilidad de saber que sus evaluaciones están en manos expertas</p>
            </div>
            <Link href="./proceso" className="text-xl dark:text-gray-900 font-bold transition-all duration-300 ease-in-out rounded-sm bg-yellow-300 hover:bg-yellow-400 px-8 py-3 mt-6">Comienza ahora</Link>
            <p className="text-lg text-white py-3">¡Obten 20% de descuento!</p>
          </div>
        </section>
      </main>
    </>
  );
}

// Content for the benefits section
const benefits = [
  {
    title: "Encuentra mejores oportunidades",
    description: "Las certificaciones aumenta la competitividad del trabajador dentro del mercado laboral",
    icon: <Key size={84} strokeWidth={1.25} className="text-teal-600 rounded-full p-4" />,
    id: "emo",
  },
  {
    title: "Accede a mejores salarios",
    description: "En promedio, las personas certificadas ante el CONOCER ganan el doble que los trabajadores no certificados ",
    icon: <CircleDollarSign size={84} strokeWidth={1.25} className="text-teal-600 rounded-full p-4" />,
    id: "ams",
  },
  {
    title: "Mejora tus condiciones laborales",
    description: "Los trabajadores certificados tienen jornadas laborales ligeramente más cortas que el resto de la fuerza laboral",
    icon: <HandshakeIcon size={84} strokeWidth={1.25} className="text-teal-600 rounded-full p-4" />,
    id: "mcl",
  },
  // {
  //   title: "Obtén un certificado de competencia",
  //   description: "Reconocimiento de la Secretaría de Educación Pública",
  //   icon: "pending",
  //   id: "ouc",
  // },
]

// Styles for the Image used as background
const styles = {
  container: {
    backgroundImage: 'url(https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};
