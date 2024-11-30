// Next.js components
// import Image from "next/image";
// Shadcn UI components

// Custom components
import FeaturedCoursesCard from "@/components/molecules/FeaturedCoursesCard";
import MostPopularCourses from "@/components/molecules/MostPopularCourses";

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
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="bg-transparent max-w-28 mx-auto pt-[5rem]">

        </div>
        <div className="container w-full pb-10 mt-6">
          <h2 className="scroll-m-20 text-2xl lg:text-3xl text-center font-bold tracking-normal pb-4">
            Cursos destacados en la comunidad
          </h2>
          <p className="text-xl text-center text-gray-500 pb-8 mb-[2.5rem] w-full lg:w-2/3 mx-auto">
            Obten los beneficios que te ayudarán a certificarte en múltiples estándares de competencia
          </p>
          <FeaturedCoursesCard />
          <div className="py-10">
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
        </div>
      </section>
      <section className="container py-[6rem] mt-[2rem] mb-[10rem]">
        <h2 className="scroll-m-20 text-2xl lg:text-3xl text-left font-bold tracking-normal pb-4 mb-3 lg:mb-9">
          Cursos más populares
        </h2>
        <MostPopularCourses />
      </section>
      <section className="bg-slate-700 py-10 h-auto lg:h-[24rem]">

      </section>
       
    </main>
  );
}

