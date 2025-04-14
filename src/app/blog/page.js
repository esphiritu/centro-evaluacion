'use client';
import ContactForm from "@/components/organisms/contact-form";

export default function Blog(params) {
  return (
    <main className="container pt-[6rem] mb-10">
      <div className="w-full z-20 flex flex-col lg:flex-row h-auto lg:h-[36rem] justify-center items-start px-2 lg:px-3">
        <div className="relative w-full lg:w-1/2 flex flex-col lg:items-start justify-self-start rounded-lg text-slate-800 dark:text-slate-200 py-2 lg:py-8 lg:px-10 mt-2 lg:mt-10">
          <h1 className="text-3xl text-left text-pretty font-bold md:leading-[2.5rem] pb-4">Solicitud de Certificación de Competencias Laborales
          </h1>
          <p className="text-lg text-muted-foreground mt-8 pr-10">Completa los campos requeridos para iniciar el trámite de certificación laboral. Una vez recibida tu solicitud, uno de nuestros ejecutivos se pondrá en contacto contigo para continuar el proceso.</p>
        </div>
        <div className="w-full lg:w-1/2 border rounded-2xl shadow-lg px-[3rem] py-6">
          <h1 className="text-3xl font-bold mt-10 mb-10">Información del aspirante</h1>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}