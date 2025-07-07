'use client';
import AsesorForm from "@/components/organisms/asesor-form";


export default function Asesor({params}) {
  return (
    <main className="container-none lg:container mb-10 pt-32">
      <div className="w-full flex flex-col lg:flex-row h-auto lg:h-144 justify-center items-start px-2 lg:px-3">
        <div className="w-full lg:w-1/2 border-none lg:border-solid border-slate-200 rounded shadow-xs py-4 bg-slate-50 dark:bg-slate-900">
          <AsesorForm />
        </div>
      </div>
    </main>
  );
}