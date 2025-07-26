'use client';
import AtencionUsuarios from "@/components/organisms/atencion-usuarios";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, User, MailCheck, FileUp, ListChecks } from "lucide-react";


export default function Proceso({params}) {
  return (
    <main className="container-none lg:container mb-10 pt-32">
      <div className="w-full flex flex-col lg:flex-row h-auto lg:h-144 justify-center items-start px-2 lg:px-3">
        <div className="w-full lg:w-1/2 flex flex-col lg:items-start justify-self-start rounded-lg text-slate-800 dark:text-slate-200 py-2 lg:py-4 lg:px-10 mt-2 lg:mt-10">
          <h1 className="text-3xl text-left text-pretty font-bold md:leading-10 pb-4">Certificación de Competencias Laborales
          </h1>
          <Separator />
          <p className="text-lg mt-7">Proceso solicitado: (evaluación, prueba diagnóstica, o alineación)</p>
          <p className="text-lg mb-8">Estándar de competencia: EC000</p>
          <div className="py-4">
            <p className="text-lg ">Completa los siguientes pasos:</p>
            <ul className="pl-6 mt-8 space-y-4">
              <li className="text-lg flex items-center">
                <span className="border rounded-full mr-4">
                  <User size={38} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2"/>
                </span> 
                Datos generales
              </li>
              <li className="text-lg flex items-center">
                <span className="border rounded-full mr-4">
                  <MailCheck size={38} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2"/>
                </span>
                Información de domicilio
              </li>
              <li className="text-lg flex items-center">
                <span className="border rounded-full mr-4">
                  <FileUp size={38} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2"/>
                </span> 
                Documentos de soporte
              </li>
              <li className="text-lg flex items-center">
                <span className="border rounded-full mr-4">
                  <ListChecks size={38} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2"/>
                </span>
                Encuesta
              </li>
            </ul>
          </div>
          <Alert className="mt-10 text-muted-foreground">
            <Info className="w-4 h-4"/>
            {/* <AlertTitle>No te quedes fuera</AlertTitle> */}
            <AlertDescription className="text-sm text-muted-foreground mb-4">
              Una vez recibida tu solicitud, uno de nuestros asesores
             se pondrá en contacto contigo para continuar el proceso.
            </AlertDescription>
          </Alert>
        </div>
        <div className="w-full lg:w-1/2 border-none lg:border-solid border-slate-200 rounded shadow-xs py-4 bg-slate-50 dark:bg-slate-900">
          <AtencionUsuarios />
       </div>
      </div>
    </main>
  );
}