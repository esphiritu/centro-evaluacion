'use client';
import AtencionUsuarios from "@/components/organisms/atencion-usuarios";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";


export default function Proceso({params}) {
  return (
    <main className="container-none lg:container mb-10 pt-32">
      <div className="w-full flex flex-col lg:flex-row h-auto lg:h-144 justify-center items-start px-2 lg:px-3">
        <div className="w-full lg:w-1/2 flex flex-col lg:items-start justify-self-start rounded-lg text-slate-800 dark:text-slate-200 py-2 lg:py-8 lg:px-10 mt-2 lg:mt-10">
          <h1 className="text-3xl text-left text-pretty font-bold md:leading-10 pb-4">Certificación de Competencias Laborales
          </h1>
          <Separator />
          <h3 className="text-xl font-bold py-4 mt-6">Resumen de solicitud</h3>
          <p className="text-lg">Proceso solicitado: (evaluación, prueba diagnóstica, o alineación)</p>
          <p className="text-lg mb-10">Estándar de competencia: EC000</p>
          <Alert className="mt-10">
            <Info className="w-4 h-4 text-slate-400"/>
            {/* <AlertTitle>No te quedes fuera</AlertTitle> */}
            <AlertDescription className="text-lg text-muted-foreground mb-4">
              Completa los campos requeridos para iniciar el trámite de certificación laboral. Una vez recibida tu solicitud, uno de nuestros asesores
             se pondrá en contacto contigo para continuar el proceso.
            </AlertDescription>
          </Alert>
        </div>
        <div className="w-full lg:w-1/2 border-none lg:border-solid border-slate-200 rounded shadow-xs py-4 bg-slate-50 dark:bg-slate-900">
          <AtencionUsuarios />
          {/* <MultiStepContactForm /> */}
        </div>
      </div>
    </main>
  );
}