import Link from "next/link";
import Image from "next/image";
// Shadcn UI components
import {
  CircleDollarSign,
  HandshakeIcon,
  Key,
  LockKeyhole,
  ShieldCheck,
  Headset,
  Award,
  ArrowDown,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Images
import testimonial from "@/public/img/pexels-pisey-tuon-8567103-6112353.jpg"
import logoRedConocer from "@/public/img/logotipo-redConocer.png";
import logoICEM from "@/public/img/Logo-ICEM.jpg";
import group from "@/public/img/gallery-group.jpg";
import karen from "@/public/img/gallery-karen.jpg";
import session from "@/public/img/gallery-live-session.jpg";
import participants from "@/public/img/gallery-participants.jpg";
import staged from "@/public/img/gallery-staged.jpg";
import diagnostico from "@/public/img/evaluacion-diagnostica.svg";


export default function Home({ Component, pageProps }) {
  return (
    <>
      <main className="w-full pt-19">
        <section style={styles.container} className="relative h-screen border-b-[9px] px-10">
          <div className="container mx-auto h-full pt-20 md:pt-1">
            <div className="
              flex 
              flex-col
              justify-center
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
              px-3
              animate-slideIn">
                Impulsa tu vida profesional al éxito
              </h1>
              <p className="text-xl md:text-3xl text-white animate-fadeIn text-background">Respalda tus conocimientos y experiencia con certificaciones</p>
              <div className="flex flex-col md:flex-row mt-1 md:mt-3 animate-fadeIn">
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
          <div className="animate-fadeIn absolute bottom-[20vw] md:bottom-[10vw] lg:bottom-[5vw] right-2/4">
            <p className="animate-bounce bg-slate-900 rounded-full p-2"><Link href="#benefits" className="text-white"><ArrowDown className="h-8 w-8" /></Link></p>
          </div>
        </section>

        <section className="container h-auto md:h-[46rem]">
          <div className="flex flex-col items-center justify-center h-full" id="benefits">
            <h2 className="scroll-m-40 text-4xl md:text-5xl font-extrabold tracking-tight py-10 mt-10 text-center"> Beneficios de la certificación</h2>
            <div className="flex flex-col sm:flex-col lg:flex-row justify-center items-baseline mt-8">
              {benefits.map((benefit => {
                return (
                  <div className="w-full lg:w-1/3 py-8 px-5 mx-2 md:mx-auto" key={benefit.id}>
                    {benefit.icon}
                    <h3 className="text-2xl font-bold text-left mt-8 mb-4">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground text-left">{benefit.description}</p>
                  </div>
                )
              }
              ))
              }
            </div>
          </div>
        </section>

        <section className="lg:container py-10 my-10">
          <div className="w-full">
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-8 mb-4">
              Convención anual. <span className="text-gray-500">Mejores momentos</span>
            </h1>
            <p className="text-center text-2xl  font-light text-slate-700 py-4 mb-[5rem]">Participan escuelas, universidades y gobiernos</p>
          </div>
          <Carousel>
            <CarouselContent className="relative w-full flex lg:grid grid-cols-4 gap-4 -ml-1">
              <CarouselItem className="h-auto lg:col-span-2 lg:row-span-2">
                <Image
                  src={group}
                  alt="Image showing a group of people"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                  className="static inset-0 w-full object-cover rounded-md"
                />
              </CarouselItem>
              <CarouselItem className="relative pl-4">
                <Image
                  src={karen}
                  alt="Image showing Karen Campos"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
                  className="lg:absolute inset-0 w-full h-full object-cover rounded-md"
                />
              </CarouselItem>
              <CarouselItem className="relative pl-4">
                <Image
                  src={session}
                  alt="Image showing a group of people"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
                  className="static lg:absolute inset-0 w-full h-full object-cover rounded-md"
                />
              </CarouselItem>
              <CarouselItem className="relative pl-4">
                <Image
                  src={participants}
                  alt="Image showing a group of people"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
                  className="static lg:absolute inset-0 w-full h-full object-cover rounded-md"
                />
              </CarouselItem>
              <CarouselItem className="relative pl-4">
                <Image
                  src={staged}
                  alt="Image showing a group of people"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
                  className="static lg:absolute inset-0 w-full h-full object-cover rounded-md"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="lg:hidden" />
            <CarouselNext className="lg:hidden" />
          </Carousel>
        </section>

        
        <section className="container w-full bg-gray-50 dark:bg-slate-900 rounded-md py-10 my-10 px-20 h-auto sm:h-[30rem] md:h-[25rem] mt-[12rem]">
          <Image src={diagnostico} width={100} height={100} alt="icon for" className="max-w-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold pt-5">Inicia una <span className="text-zinc-600">evaluación diagnóstica</span></h1>
          <p className="text-xl pt-4 pb-8 mb-5">Resultados confiables respaldados por el Organismo Certificador más importante de America Latina: <em>ICE México</em>.</p>
          <Link href="./asesor" className="text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 px-6 p-5 my-5 rounded-sm">
            <span className="py-3 px-3 text-xl">Agenda una evaluación</span>
          </Link>
        </section>
        <section className="container py-10 mt-[12rem] h-auto md:h-[42rem]">
          <p className="text-center text-slate-700 text-lg uppercase py-6">Testimoniales</p>
          <h2 className="text-center text-3xl font-extrabold tracking-tight lg:text-5xl mb-5 mt-2">Casos de éxito</h2>
          <Carousel opts={{
            align: "center",
            loop: true,
          }}
            autoplay={2900}
          >
            <CarouselContent className="p-0 md:p-5 h-auto md:h-[32rem]">
              <CarouselItem className="rounded-md py-10 px-6 md:px-10 text-gray-900 dark:text-gray-50">
                <div className="w-full scroll-m-20 ">
                  <Image src={testimonial} width={160} className="mx-auto rounded-full" alt="Picture of ..."></Image>
                </div>

                <div className="w-4/5 md:w-2/3 mx-auto">
                  <p className="text-xl md:text-2xl py-10"> There is something so natural about collaborating in Freehand. It feels like you are holding a marker, and making ideas happen. I can not imagine doing that in another tool. It captures that human essence of being in person and talking to someone that is right next to you and getting work done together. Especially in todays world when everything is remote. It makes for really organic communication.</p>
                  <p className="text-lg text-muted-foreground">Sea parte de nuestros clientes satisfechos que confían en nuestras evaluaciones</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <h1 className="text-2xl md:text-3xl">Otro caso de éxito</h1>
              </CarouselItem>
              <CarouselItem>
                <h1 className="text-2xl md:text-3xl">Otro caso de éxito</h1>
              </CarouselItem>
            </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
          </Carousel>
        </section>
        <section className="container h-auto md:h-[36rem] flex flex-col-reverse lg:flex-row py-10 mt-[8rem]">
          <div className="justify-center items-center w-full lg:w-1/2 pr-5">
            <h1 className="text-3xl md:text-4xl font-bold py-6 mb-1 md:leading-[3rem] px-0 lg:px-5">¿Por qué evaluarme con <span className="text-teal-600">Proyecta Empresarial</span>?</h1>
            <p className="text-2xl  font-light text-slate-600 py-2">Reconocimiento nacional</p>
            <p className="text-lg text-baseline py-2 mb-10">Instituciones educativas, empresas y entidades gubernamentales en todo México confían en los procesos de evaluación de Proyecta Empresarial.</p>
            <Link href="./nosotros" className="text-lg font-bold outline text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-4 rounded-sm">
              <span className="py-3 px-3 text-xl">Acerca de nosotros</span>
            </Link>
          </div>
          <ul className="grid grid-cols-2 w-full lg:w-1/2 gap-4 mb-10 py-10">
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><LockKeyhole size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Objetividad y confiabilidad</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><Headset size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Asesoría de expertos</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><ShieldCheck size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Calidad asegurada</span></li>
            <li className="text-2xl text-center font-baseline flex flex-col align-middle"><Award size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Respaldo de OC más importante</span></li>
          </ul>
        </section>
        <div className="bg-stone-100 py-10 h-auto md:h-[36rem] mt-[8rem]">
          <p className="text-lg text-slate-700 text-center py-6 uppercase">Alianzas para crear valor</p>
          <h5 className="text-5xl font-bold dark:text-slate-800 text-center">Nuestros socios</h5>
          <div className="flex flex-col md:flex-row items-center justify-center mt-10 py-10">
            <Image src={logoRedConocer} alt="logotipo de Red CONOCER" width={190} className="mx-5" />
            <Image src={logoICEM} alt="logotipo de ICE México" width={190} className="mx-5" />
          </div>
        </div>
        <section className="mb-10">
          <div className="flex flex-col justify-center items-center w-full h-auto md:h-[36rem] bg-gradient-to-r from-teal-500 to-teal-700 border-b-[9px] border-t-[9px] mx-auto">
            <div className="w-full md:w-3/5 px-10 ">
              <h5 className="text-3xl md:text-5xl text-center text-teal-100 font-bold py-3">Su experiencia en otro nivel</h5>
              <p className="text-lg md:text-2xl text-center text-white py-3 mb-[5rem]">Obtenga la tranquilidad de saber que sus evaluaciones están en manos expertas</p>
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
    icon: <Key size={80} strokeWidth={1.25} className="text-white bg-teal-500 rounded-full p-4" />,
    id: "emo",
  },
  {
    title: "Accede a mejores salarios",
    description: "En promedio, las personas certificadas ante el CONOCER ganan el doble que los trabajadores no certificados ",
    icon: <CircleDollarSign size={80} strokeWidth={1.25} className="text-white bg-teal-500 rounded-full p-4" />,
    id: "ams",
  },
  {
    title: "Mejora tus condiciones laborales",
    description: "Los trabajadores certificados tienen jornadas laborales ligeramente más cortas que el resto de la fuerza laboral",
    icon: <HandshakeIcon size={80} strokeWidth={1.25} className="text-white bg-teal-500 rounded-full p-4" />,
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
