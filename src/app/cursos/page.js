// Next.js components
import Image from "next/image";


// Icons from Lucide
import {
  Headset,
  Tablet,
  LibraryBig,
  Mouse,
} from "lucide-react";

// Custom components
import MostPopularCourses from "@/components/cards/MostPopularCourses";
import TypingEffect from "@/components/atoms/TypingEffect";
import Footer from "@/components/organisms/Footer";

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

export default function Cursos(params) {
  return (
    <>
      <main className="w-full pt-[8rem]">
        <section className="bg-slate-700 py-10 h-auto lg:h-[34rem]">
          <p className="w-fit text-base text-center text-slate-900 bg-teal-300 py-2 px-6 tracking-wider mt-[3rem] mb-8 mx-auto rounded-full">
            Oferta educativa
          </p>
          <h1 className="animate-fadeIn text-4xl text-center text-white font-bold pb-6">
            <TypingEffect />
          </h1>
          <p className="text-xl md:text-2xl text-center text-white text-pretty font-thin animate-fadeIn text-background drop-shadow-md py-6 md:py-1 w-full lg:w-2/3 mx-auto">
          Invierte en tu futuro hoy. Permítenos ayudarte a desarrollar las habilidades y la confianza para prosperar en un mundo competitivo. Nuestros talleres,  programas de capacitación están diseñados para equiparlo con las habilidades necesarias para sobresalir en su industria.
          </p>
        </section>
        <section className="">
          {/* Catálogo de cursos */}
          <div className="py-6 mt-6">
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
                Explora el catálogo de cursos con reconocimiento oficial
              </h2>
              <p className="text-xl text-center text-gray-500 pb-8 mb-[5rem] w-full lg:w-2/3 mx-auto">
                Encuentra los mejores cursos de tu sector e industria para maximizar tus habilidades y experiencia
              </p>
              <div className="flex flex-col lg:flex-row justify-center">
                <div className="w-full lg:w-2/6 h-full bg-orange-400">
                  Habilidades digitales
                </div>
                <div className="w-full lg:w-4/6 py-[2rem] px-[3.5rem] h-[14rem] border rounded-r-md">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">
                    Habilidades y cultura digitales para la docencia
                  </h3>
                  <p className="text-gray-500 dark:text-white py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing el, adipiscing elit dark, sed diam nonumy.
                  </p>
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
            Cursos más populares con reconocimiento oficial
          </h2>
          <MostPopularCourses />
        </section>

        <section className="bg-slate-700 py-[5rem] h-auto lg:h-[28rem] mt-[12rem]">
          <div className="container flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 text-white">
              <h2 className="text-4xl font-bold">Inscríbete hoy y <span className="text-teal-300">potencia tus habilidades</span></h2>
              <span className="w-[3.5rem] h-[5px] bg-white inline-block"></span>
              <p className="text-xl mt-8">Invierte en tu futuro hoy. Permítenos ayudarte a desarrollar las habilidades y la confianza para prosperar en un mundo competitivo.</p>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="bg-white h-full rounded-md mx-0 lg:mx-10 mt-10 lg:mt-0">
                <h3 className="text-2xl text-center text-slate-800 tracking-tight uppercase font-bold py-10">
                  Comienza ahora
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

