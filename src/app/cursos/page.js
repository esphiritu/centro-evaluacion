// Next.js components
// import Image from "next/image";
// Shadcn UI components
import {
  Headset,
  Tablet,
  LibraryBig,
  Mouse,
} from "lucide-react";

// Custom components
import FeaturedCoursesCard from "@/components/molecules/FeaturedCoursesCard";
import MostPopularCourses from "@/components/molecules/MostPopularCourses";

// Components Data
const soportes = [
  {
    id: "soporte1",
    title: "Soporte 24/7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Headset size={20} className="text-slate-800 dark:text-slate-100" absoluteStrokeWidth={true} strokeWidth={1.25} />,
  },
  {
    id: "soporte2",
    title: "Contenido digital",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Tablet size={20} className="text-slate-800 dark:text-slate-100" absoluteStrokeWidth={true} strokeWidth={1.25} />,
  },
  {
    id: "soporte3",
    title: "Amplio catálogo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <LibraryBig size={20} className="text-slate-800 dark:text-slate-100" absoluteStrokeWidth={true} strokeWidth={1.25} />,
  },
  {
    id: "soporte4",
    title: "Fácil acceso",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Mouse size={20} className="text-slate-800 dark:text-slate-100" absoluteStrokeWidth={true} strokeWidth={1.25} />,
  }
];

export default function Cursos(params) {
  return (
    <main className="w-full pt-19">
      <section className="bg-slate-700 py-10 h-auto lg:h-[24rem]">
        <p className="text-lg text-center text-slate-300 py-4 uppercase tracking-wider">
          Oferta educativa
        </p>
        <h1 className="text-4xl text-center text-white font-bold pb-6">
          Catálogo de cursos con reconocimiento oficial
        </h1>
        <p className="text-xl text-center text-white  font-bold pb-8 mb-[3rem] w-full lg:w-2/3 mx-auto">
          Cursos de auto gestión completos
        </p>
      </section>

      <section className="container">
        <div className="flex flex-col lg:flex-row justify-between py-6 mb-10">
          {soportes.map(soporte => {
            return (
              <div className="flex justify-start items-center py-6" key={soporte.id}>
                <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-700 w-fit rounded-lg px-5 py-5 mb-1">
                  {soporte.icon}
                </div>
                <div>
                  <h5 className="text-slate-900 dark:text-white text-xl font-bold px-6">{soporte.title}</h5>
                  <p className="text-muted-foreground dark:text-white text-sm px-6">
                    {soporte.description}
                  </p>
                </div>
              </div>
            )
          }
          )}

        </div>
        <h2 className="scroll-m-20 text-2xl lg:text-3xl text-left font-bold tracking-normal pb-4 mb-3 lg:mb-9">
          Cursos más populares
        </h2>
        <MostPopularCourses />
        <div className="py-10 mt-10">
            <p className="text-center text-muted-foreground text-lg uppercase tracking-wide py-6">
              Categorías
            </p>
            <h2 className="scroll-m-20 text-2xl lg:text-3xl text-center font-bold tracking-normal pb-4">
              Explora los cursos por categoría
            </h2>
            <p className="text-xl text-center text-gray-500 pb-8 mb-[5rem] w-full lg:w-2/3 mx-auto">
              Encuentra los mejores cursos de tu sector e industria para maximizar tus habilidades y experiencia
            </p>
          </div>
      </section>
      <section className="container py-[6rem] mt-[2rem] mb-[10rem] bg-gray-50 dark:bg-gray-900">
        <div className="w-full pb-10 mt-10">
          <h2 className="scroll-m-20 text-2xl lg:text-3xl text-center font-bold tracking-normal pb-4">
            Cursos destacados en la comunidad
          </h2>
          <p className="text-xl text-center text-gray-500 pb-8 mb-[2.5rem] w-full lg:w-2/3 mx-auto">
            Obten los beneficios que te ayudarán a certificarte en múltiples estándares de competencia
          </p>
          <FeaturedCoursesCard />
        </div>
      </section>
      <section className="bg-slate-700 py-10 h-auto lg:h-[24rem]">

      </section>

    </main>
  );
}

