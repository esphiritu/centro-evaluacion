import Image from "next/image";
import CoursesCard from "@/components/molecules/CoursesCard";

export default function Cursos() {
    return (
    <main className="w-full pt-19">
      <section className="bg-slate-700 py-10 h-auto lg:h-[19rem]">
      <p className="text-lg text-center text-slate-300 py-4 uppercase tracking-wider">Oferta educativa</p>
        <h1 className="text-4xl text-center text-white font-bold">Catálogo de cursos con reconocimiento oficial</h1>
      </section>
      <section className="flex-grow-0 bg-gray-50 dark:bg-gray-900">
          <div className="bg-transparent max-w-28 mx-auto pt-[5rem]">
            {/* <Image src={courses} width={140} height={140} alt="icon for" className="w-auto" /> */}
          </div>
          <div className="container w-full pb-10 mt-6">
            <h2 className="scroll-m-20 text-2xl lg:text-3xl text-center font-bold tracking-normal pb-6">Explora los cursos más populares</h2>
            <p className="text-xl text-center text-gray-500 font-light pb-8 mb-[5rem] w-full lg:w-2/3 mx-auto">Obten los beneficios que te ayudarán a certificarte en múltiples estándares de competencia</p>
            <CoursesCard />
          </div>
        </section>
    </main>
    );
  }

  