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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Custom components
import Footer from "@/components/organisms/Footer";
import Testimonios from "@/components/molecules/Testimonios";
import MainButton from "@/components/atoms/MainButton";
import OutlineButton from "@/components/atoms/OutlineButton";
import SecondaryButton from "@/components/atoms/SecondaryButton";

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


// Images
import logoRedConocer from "@/public/img/logotipo-redConocer.png";
import logoICEM from "@/public/img/Logo-ICEM.jpg";
import coaching from "@/public/img/gallery-coaching.jpg";
import session from "@/public/img/gallery-live-session.jpg";
import participants from "@/public/img/gallery-participants.jpg";
import staged from "@/public/img/gallery-staged.jpg";
import diagnostico from "@/public/img/evaluacion-diagnostica.svg";
import presentation from "@/public/img/gallery-presentation.jpg";


export default function Home({ Component, pageProps }) {
  return (
    <>
      <main className="w-full pt-19 scroll-smooth">
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
              tracking-tight 
              py-3 
              md:rounded-md 
              rounded-sm
              px-3
              animate-slideIn">
                Impulsa tu vida profesional al éxito
              </h1>
              <p className="text-xl md:text-3xl text-white font-extrabold animate-fadeIn text-background">Respalda tus conocimientos y experiencia con certificaciones</p>
              <div className="flex flex-col md:flex-row mt-1 md:mt-3 animate-fadeIn">
                <MainButton href="./proceso" linkText="Comienza ahora" />
                <Link className="transition-all duration-300 ease-in-out px-4 py-3 mx-4 mb-6 md:mb-1 hover:underline text-center font-bold md:text-lg rounded-sm text-white shadow-sm mt-6" href="./asesor">
                  Comienza con un asesor
                </Link>
              </div>

            </div>
          </div>
          <div className="animate-fadeIn absolute bottom-[20vw] md:bottom-[10vw] lg:bottom-[5vw] right-2/4">
            <div className="animate-bounce transition-colors ease-in-out bg-gray-700 hover:bg-slate-200 rounded-full border-1 border-slate-300 p-2 text-white hover:text-teal-600">
              <Link href="#benefits"><ArrowDown className="h-8 w-8" /></Link>
            </div>
          </div>
        </section>

        <section className="container h-auto md:h-[46rem]">
          <div className="flex flex-col items-center justify-center h-full scroll-smooth" id="benefits">
            <h2 className="scroll-m-40 text-4xl md:text-5xl font-extrabold tracking-tight py-10 mt-10 text-center">Beneficios de la certificación laboral</h2>
            <div className="flex flex-col sm:flex-col lg:flex-row justify-center items-baseline mt-8 mb-6">
              {benefits.map((benefit => {
                return (
                  <div className="w-full lg:w-1/3 py-8 px-5 mx-2 md:mx-auto" key={benefit.id}>
                    {benefit.icon}
                    <h3 className="text-2xl font-bold text-left mt-8 mb-4">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground text-left">{benefit.description}</p>
                  </div>
                )
              }))}
            </div>
            <OutlineButton href="./certificaciones" linkText="Ver certificaciones" />
          </div>
        </section>

        <section className="lg:container py-10 mb-10 mt-[5rem]">
          <div className="w-full mb-[5rem]">
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-8 mb-2">
              Convención anual.
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-gray-500 before:rounded-md relative inline-block ml-2">
                <span className="relative text-white text-center px-1">Mejores momentos</span>
              </span>
            </h1>
            <p className="text-center text-2xl  font-light text-slate-700 py-4 mb-4">Participan escuelas, universidades y gobiernos en diferentes actividades</p>
            <p className="group text-center text-xl">
              <Link href="./" className="text-teal-600 hover:text-teal-700">
                <span className="py-3"> Próximos eventos
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 origin-left inline transition group-hover:translate-x-1 group-hover:text-teal-700"><path d="m6 17 5-5-5-5" /></svg>
                </span>
              </Link>
            </p>
          </div>
          <Carousel>
            <CarouselContent className="w-full flex lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-2 -ml-1">
              <CarouselItem className="w-full h-[330px] md:h-[390px] lg:h-[670px] lg:col-span-2 lg:row-span-2">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="
                          absolute
                          backface-hidden
                          transform
                          transition 
                          lg:group-hover:rotate-y-180
                          duration-300
                          rounded-lg 
                          shadow 
                          w-full 
                          h-full
                          z-20">
                      <Image
                        src={presentation}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="
                        absolute
                        backface-visible
                        transform
                        transition
                        -rotate-y-180 
                        lg:group-hover:rotate-y-0
                        duration-300
                        w-full 
                        h-full
                        rounded-lg
                        bg-teal-600">
                      <div className="
                        backface-visible
                        font-bold
                        w-full 
                        h-full
                        flex
                        justify-content
                        items-center">
                        <h1 className="text-white text-5xl text-center w-full">Capacitaciones</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full h-320 md:h-[300px] lg:h-[328px] lg:col-span-1 lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="
                          absolute
                          backface-hidden
                          transform
                          transition 
                          lg:group-hover:rotate-y-180
                          duration-300
                          rounded-lg 
                          shadow 
                          w-full 
                          h-full
                          z-20">
                      <Image
                        src={coaching}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="
                        absolute
                        backface-visible
                        transform
                        transition
                        -rotate-y-180 
                        lg:group-hover:rotate-y-0
                        duration-300
                        w-full 
                        h-full
                        rounded-lg
                        bg-purple-400">
                      <div className="
                        backface-visible
                        font-bold
                        w-full 
                        h-full
                        flex
                        justify-content
                        items-center">
                        <h1 className="text-white lg:text-4xl text-center w-full">Coaching</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full h-320 md:h-[300px] lg:h-[328px] lg:col-span-1 lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="
                          absolute
                          backface-hidden
                          transform
                          transition 
                          lg:group-hover:rotate-y-180
                          duration-300
                          rounded-lg 
                          shadow 
                          w-full 
                          h-full
                          z-20">
                      <Image
                        src={session}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="
                        absolute
                        backface-visible
                        transform
                        transition
                        -rotate-y-180 
                        lg:group-hover:rotate-y-0
                        duration-300
                        w-full 
                        h-full
                        rounded-lg
                        bg-blue-500">
                      <div className="
                        backface-visible
                        font-bold
                        w-full 
                        h-full
                        flex
                        justify-content
                        items-center">
                        <h1 className="text-white text-4xl text-center w-full">Conferencias</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full h-320 md:h-[300px] lg:h-[328px] lg:col-span-1 lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="
                          absolute
                          backface-hidden
                          transform
                          transition 
                          lg:group-hover:rotate-y-180
                          duration-300
                          rounded-lg 
                          shadow 
                          w-full 
                          h-full
                          z-20">
                      <Image
                        src={participants}
                        alt="Image showing a group of people"
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="
                        absolute
                        backface-visible
                        transform
                        transition
                        -rotate-y-180 
                        lg:group-hover:rotate-y-0
                        duration-300
                        w-full 
                        h-full
                        rounded-lg
                        bg-orange-400">
                      <div className="
                        backface-visible
                        font-bold
                        w-full 
                        h-full
                        flex
                        justify-content
                        items-center">
                        <h1 className="text-white text-4xl text-center w-full">Talleres</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full h-320 md:h-[300px] lg:h-[328px] lg:col-span-1 lg:row-span-1">
                <div className="group w-full h-full mx-auto">
                  <div className="relative perspective-1000 transform-style-3d w-full h-full">
                    <div className="
                          absolute
                          backface-hidden
                          transform
                          transition 
                          lg:group-hover:rotate-y-180
                          duration-300
                          rounded-lg 
                          shadow 
                          w-full 
                          h-full
                          z-20">
                      <Image
                        src={staged}
                        alt="Image showing a group of people"
                        quality={75}
                        className="static inset-0 w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="
                        absolute
                        backface-visible
                        transform
                        transition
                        -rotate-y-180 
                        lg:group-hover:rotate-y-0
                        duration-300
                        w-full 
                        h-full
                        rounded-lg
                        bg-gray-400">
                      <div className="
                        backface-visible
                        font-bold
                        w-full 
                        h-full
                        flex
                        justify-content
                        items-center">
                        <h1 className="text-white text-4xl text-center w-full">Consultoría</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="lg:invisible" />
            <CarouselNext className="lg:invisible" />
          </Carousel>
        </section>



        <section className="container h-auto md:h-[36rem] flex flex-col-reverse lg:flex-row py-10 mt-[8rem]">

          <div className="justify-center items-center w-full lg:w-1/2 pr-10 ">
            <p className="text-lg font-light text-slate-600 py-1 uppercase">Reconocimiento nacional</p>
            <h1 className="text-3xl md:text-4xl font-bold py-4 mb-1 md:leading-[3rem] px-0">¿Por qué evaluarme con <span className="bg-teal-300 whitespace-nowrap px-3 rounded-md">Proyecta Empresarial</span>?</h1>
            <p className="text-lg text-baseline py-2 mb-10">Instituciones educativas, empresas y entidades gubernamentales en todo México confían en los procesos de evaluación de Proyecta Empresarial.</p>

            <Dialog>
              <DialogTrigger className="text-lg outline text-teal-600 hover:bg-teal-600 hover:text-white transition-colors ease-in-out duration-300 px-3 py-3 rounded-sm ml-1"> <span className="py-2 px-3 text-xl">Acerca de nosotros</span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <ul className="grid grid-cols-2 w-full lg:w-1/2 gap-5 mb-10 mr-10 py-10">
            <li className="text-xl text-center font-bold flex flex-col align-middle"><LockKeyhole size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Objetividad y confiabilidad</span></li>
            <li className="text-xl text-center font-bold flex flex-col align-middle"><Headset size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Asesoría de expertos</span></li>
            <li className="text-xl text-center font-bold flex flex-col align-middle"><ShieldCheck size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Calidad asegurada</span></li>
            <li className="text-xl text-center font-bold flex flex-col align-middle"><Award size={42} strokeWidth={1.50} className="mx-auto text-teal-600" />
              <span className="block mt-8">Respaldo de OC más importante</span></li>
          </ul>
        </section>

        <section className="container w-full bg-gray-50 dark:bg-slate-900 rounded-lg pt-10 pb-[4rem] my-10 px-20 h-auto sm:h-auto md:h-[24rem] mt-[4rem] mb-[4rem] shadow-sm">
          <Image src={diagnostico} width={100} height={100} alt="icon for" className="max-w-auto mb-1" />
          <h1 className="relative text-3xl md:text-4xl font-bold pt-5 pb-4">
            Inicia una evaluación diagnóstica
            <span className="absolute text-center text-sm bg-yellow-300 dark:text-slate-900 px-2 align-middle inline-block ml-3 rounded-sm leading-1 pt-1">Gratis</span>
          </h1>
          <p className="text-xl pt-4 pb-8 mb-5">Resultados confiables respaldados por el Organismo Certificador más importante de America Latina: <em>ICE México</em>.</p>
          <SecondaryButton href="./asesor" linkText="Agenda una evaluación" />
        </section>

        <section className="py-10 mt-2 h-auto bg-gradient-to-t from-slate-100 from-60% to-white dark:from-gray-900 dark:to-slate-950">
          <div className="container">
            <p className="text-center text-muted-foreground text-lg uppercase py-6">Testimoniales</p>
            <h2 className="text-center text-3xl font-extrabold tracking-tight lg:text-5xl mb-5 mt-2">Casos de éxito</h2>
            <Testimonios />
          </div>
          <div className="py-10 h-auto md:h-[36rem] mt-[10rem]">
            <p className="text-lg text-muted-foreground text-center py-6 uppercase">Alianzas para crear valor</p>
            <h5 className="text-5xl font-bold dark:text-slate-100 text-center">Nuestros socios</h5>
            <div className="flex flex-col md:flex-row items-center justify-center mt-10 py-10">
              <Image src={logoRedConocer} alt="logotipo de Red CONOCER" width={190} className="mx-5" />
              <Image src={logoICEM} alt="logotipo de ICE México" width={190} className="mx-5" />
            </div>
          </div>
        </section>
        <section className="">
          <div className="
            flex 
            flex-col 
            justify-center 
            items-center 
            w-full 
            h-auto 
            md:h-[36rem] 
            animated-background 
            bg-gradient-to-r 
            from-indigo-300 
            from-1% 
            via-sky-100 
            via-30% 
            to-emerald-200 
            to-59% 
            border-b-[9px] 
            border-t-[9px] 
            mx-auto">
            <div className="w-full md:w-3/5 px-10 ">
              <h5 className="text-3xl md:text-5xl text-center dark:text-gray-800 font-bold py-3">Su experiencia en otro nivel</h5>
              <p className="text-lg md:text-2xl text-center dark:text-gray-800 py-3 mb-[5rem]">Obtenga la tranquilidad de saber que sus evaluaciones están en manos expertas</p>
            </div>
            <MainButton href="./proceso" linkText="Comienza ahora" />
            <p className="text-lg dark:text-gray-800 py-3">¡Obten 20% de descuento!</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

