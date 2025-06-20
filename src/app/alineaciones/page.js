// Next.js components
import Image from "next/image";

// Custom components
import CtaButton from "@/components/atoms/CtaButton";

// Icons from Lucide
import {
  Headset,
  Tablet,
  LibraryBig,
  Mouse,
  Award,
  Clock,
  Check,
  Flame,
} from "lucide-react";

// Custom components
import MostPopularCourses from "@/components/cards/MostPopularCourses";
import TypingEffect from "@/components/atoms/TypingEffect";
import Footer from "@/components/organisms/Footer";
import ProgramsCard from "@/components/cards/ProgramsCard";

// Components Data
const soportes = [
  {
    id: "soporte1",
    title: "Soporte 24/7",
    description: "Consectetur adipiscing elit.",
    icon: <Headset size={23} className="text-emerald-600 dark:text-slate-100" absoluteStrokeWidth={true} strokeWidth={1.25} />,
  },
  {
    id: "soporte2",
    title: "Contenido digital",
    description: "Ipsum ve dolor amet, consectetur.",
    icon: <Tablet size={23} className="text-emerald-600 dark:text-slate-100" absoluteStrokeWidth={true} strokeWidth={1.25} />,
  },
  {
    id: "soporte3",
    title: "Material de apoyo",
    description: "Elit Rybi, solo heorum",
    icon: <LibraryBig size={23} className="text-emerald-600 dark:text-slate-100" absoluteStrokeWidth={true} strokeWidth={1.25} />,
  },
  {
    id: "soporte4",
    title: "Fácil acceso",
    description: "Lorem adipiscing olita.",
    icon: <Mouse size={23} className="text-emerald-600 dark:text-slate-100" absoluteStrokeWidth={true} strokeWidth={1.25} />,
  }
];

// Images 
import resultados from "@/public/img/consulta-resultados.svg";
import HeroImageEducation from "@/public/img/hero-image-education-3.png";

export default function Alineaciones(params) {
  return (
    <>
      <main className="w-full pt-[8rem]">
        <section className="bg-slate-700 py-10 h-auto lg:h-[34rem]">
          <h1 className="animate-fadeIn text-4xl text-center text-white font-bold pb-6">
            <TypingEffect />
          </h1>
          <p className="text-xl md:text-2xl text-center text-white text-pretty font-thin animate-fadeIn text-background drop-shadow-md py-6 md:py-1 w-full lg:w-2/3 mx-auto">
            Invierte en tu futuro hoy. Permítenos ayudarte a desarrollar las habilidades y la confianza para prosperar en un mundo competitivo. Nuestros talleres,  programas de capacitación están diseñados para equiparlo con las habilidades necesarias para sobresalir en su industria.
          </p>
        </section>
        <div className="container w-full pb-10 pt-[3.6rem] mt-6">
            <h2 className="scroll-m-20 text-2xl lg:text-3xl text-center font-bold tracking-normal pb-4 pt-[5rem] mb-5">
              Explora los programas que tenemos para tí
            </h2>
            <p className="text-muted-foreground text-2xl font-light text-center pb-8 mb-[3rem] w-full lg:w-2/3 mx-auto text-pretty">
              Domina las habilidades más demandadas actualmente con capacitación personalizada en áreas como liderazgo, comunicación, marketing digital y más. Creamos las mejores soluciones de preparación y fortalecimiento previo a evaluaciones.
            </p>
            <ProgramsCard />
          </div>
        <section className="">
          {/* Catálogo de cursos */}
          <div className="py-6 mt-6">
            <h2 className="text-4xl font-bold">Inscríbete hoy y <span className="text-teal-500">potencia tus habilidades</span></h2>
            <div className="container w-full flex flex-col lg:flex-row justify-center">
              <div className="w-1/2 flex flex-col justify-center items-end mb-[4rem] gap-4">
                {soportes.map(soporte => {
                  return (
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center py-6 w-[20rem]" key={soporte.id}>
                      <div className="w-2/3 pr-2">
                        <h5 className="dark:text-slate-500 text-right text-xl font-bold px-6">{soporte.title}</h5>
                        <p className=" dark:text-slate-500 text-right text-sm px-6">
                          {soporte.description}
                        </p>
                      </div>
                      <div className="flex justify-center items-center bg-teal-100 dark:bg-slate-700 w-fit rounded-full px-5 py-5 mb-4 lg:mb-1">
                        {soporte.icon}
                      </div>
                    </div>
                  )
                }
                )}
              </div>
              <div className="w-full lg:w-1/2">
                <Image className="w-2/3" src={HeroImageEducation} alt="Caracteerísticas de los cursos en línea" />
              </div>
            </div>

            <div className="container w-full lg:w-4/5 py-[3rem] mt-10">
              <h2 className="scroll-m-20 text-2xl lg:text-3xl text-center font-bold tracking-normal pb-4">
                Explora el catálogo de cursos con <span className="text-teal-500">reconocimiento oficial</span>
              </h2>
              <p className="text-xl text-center text-gray-500 pb-8 mb-[5rem] w-full lg:w-2/3 mx-auto">
                Encuentra los mejores cursos de tu sector e industria para maximizar tus conocimientos y habilidades
              </p>
              <div className="flex flex-col lg:flex-row justify-center">
                <div className="w-full lg:w-2/6 h-full bg-orange-400">
                  Habilidades digitales
                </div>
                <div className="w-full lg:w-4/6 py-[2rem] px-[3.5rem] h-auto border rounded-r-md">
                  <h3 className="relative text-2xl font-bold text-gray-800 dark:text-white pt-2">
                    Liderazgo para emprendedoras en la era de la IA
                    <span className="absolute -top-4 text-center text-sm font-normal leading-loose bg-red-400 text-white pl-2 pr-3 inline-block ml-1 rounded-full">
                      <Flame size={12} strokeWidth={1.5} absoluteStrokeWidth={true} className="inline-block" />  Nuevo
                    </span>
                  </h3>

                  <p className="text-gray-500 dark:text-white py-2 mb-2">
                    Mejora tu productividad y fortalece tu empresa
                  </p>
                  <p className="mb-3">Aprenderás:</p>
                  <ol className="mb-10">
                    <li className="flex justify-start items-center text-muted-foreground"><Check size={20} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-teal-600 min-w-7" /> Buen manejo del estrés</li>
                    <li className="flex justify-start items-center text-muted-foreground"><Check size={20} strokeWidth={1.5} absoluteStrokeWidth={true} className="text-teal-600 min-w-7" /> Mejorar la comunicación</li>
                  </ol>
                  <div className="flex flex-col lg:flex-row space-x-4">
                    <div className="w-1/3 flex flex-row text-lg">
                      <Award size={20} strokeWidth={1.5} absoluteStrokeWidth={true} className="inline-block" />
                      <p className="pl-2 leading-snug"><strong>Constacia de capacitación</strong></p>
                    </div>
                    <div className="w-1/3 flex flex-row text-lg">
                      <Clock size={20} strokeWidth={1.5} absoluteStrokeWidth={true} className="inline-block" />
                      <p className="pl-2 leading-snug">20 horas de duración</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[2rem] mb-[6rem] bg-orange-50 dark:bg-gray-900">
            <div className="bg-transparent max-w-28 mx-auto pt-[5rem]">
              <Image
                src={resultados}
                width={140}
                height={140}
                alt="icon for"
                className="w-auto" />
            </div>
            <div className="container w-full pb-10 mt-10">
              <h2 className="scroll-m-20 text-2xl lg:text-3xl text-center font-bold tracking-normal pb-4">
                Cursos destacados en la comunidad
              </h2>
              <p className="text-xl text-center text-gray-500 pb-8 mb-[2.5rem] w-full lg:w-2/3 mx-auto">
                Obten los beneficios que te ayudarán a certificarte en múltiples estándares de competencia
              </p>
              {/* <FeaturedCoursesCard /> */}
            </div>
          </div>
        </section>

        <section className="container">
          <h2 className="scroll-m-20 text-2xl lg:text-3xl text-left font-bold tracking-normal pb-4 mb-3 lg:mb-9 mt-[8rem]">
            Cursos más populares
          </h2>
          <MostPopularCourses />
        </section>

        {/* Call to action section */}
        <section className="w-full h-auto md:h-[38rem] animated-background bg-gradient-to-tr from-indigo-300 from-1% via-emeral-300 via-30% to-emerald-200 to-59% border-b-[9px] border-t-[9px] mx-auto py-[6rem] px-4 lg:px-8 mt-[12rem]">
          <div className="flex flex-col justify-center container items-center bg-white/40 dark:bg-slate-900/40 rounded-lg border-spacing-2 border-2 border-white dark:border-gray-400 py-8 text-center">
            <div className="w-full md:w-4/5 px-2 lg:px-2 pt-8 text-center">
              <p className="text-center text-base bg-blue-400 text-white px-4 py-[0.3rem] rounded-full leading-relaxed w-fit mx-auto mb-4">INVERSIÓN INTELIGENTE</p>
              <h5 className="text-3xl md:text-4xl text-center dark:text-white font-bold pt-3 mb-4 text-pretty w-full lg:w-3/4 mx-auto">
                Libere su potencial con nuestros programas
              </h5>
              <p className="text-xl md:text-2xl text-center text-pretty font-light dark:text-white mb-[1.5rem]">
                Explore nuestra amplia gama de alineaciones, talleres y cursos diseñados para mejorar sus habilidades y conocimientos.
              </p>
            </div>
            <CtaButton href="./proceso" linkText="Comienza ahora" />
            <p className="text-lg dark:text-white pb-6 mt-4">¡Obten <span className="font-bold">40% de descuento</span> en tu primer capacitación!</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

