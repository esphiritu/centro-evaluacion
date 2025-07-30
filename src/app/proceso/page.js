'use client';
import AtencionUsuarios from "@/components/organisms/atencion-usuarios";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, User, MailCheck, FileUp, ListChecks } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SecondaryLink from "@/components/atoms/SecondaryLink";


export default function Proceso({ params }) {
  return (
    <main className="container-none lg:container mb-10 pt-32">
      <div className="w-full flex flex-col lg:flex-row justify-between align-center">
        <h1 className="text-3xl text-center lg:text-left text-pretty font-bold md:leading-10 pb-4">
          Certificación de Competencias Laborales
        </h1>
        <Sheet>
          <SheetTrigger>
            <span className="text-xl text-teal-600 hover:text-teal-700 dark:hover:text-teal-400 transition-all duration-200 py-3 pl-1 pr-3">
              Mostrar resumen de solicitud
            </span>
          </SheetTrigger>
          <SheetContent side="right" className="w-full">
            <SheetHeader>
              <SheetTitle className="text-2xl pt-10 pb-2">
                Proceso de Certificación Laboral
              </SheetTitle>
              <Separator />
            </SheetHeader>
            <div className="flex flex-col text-slate-800 dark:text-slate-200 py-2 lg:py-4 mt-2">
              <p className="text-lg mt-7 mb-8"><span className="font-bold">Proceso solicitado:</span> (evaluación, prueba diagnóstica, o alineación)</p>
              <p className="text-lg mb-8"><span className="font-bold">Estándar de competencia:</span> EC000</p>
              <Separator />
              <div className="pt-10">
                <p className="text-lg ">Completa los siguientes pasos:</p>
                <ul className="pl-6 mt-8 space-y-4">
                  <li className="text-lg flex items-center">
                    <span className="border rounded-full mr-4">
                      <User size={32} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2" />
                    </span>
                    Datos generales
                  </li>
                  <li className="text-lg flex items-center">
                    <span className="border rounded-full mr-4">
                      <MailCheck size={32} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2" />
                    </span>
                    Información de domicilio
                  </li>
                  <li className="text-lg flex items-center">
                    <span className="border rounded-full mr-4">
                      <FileUp size={32} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2" />
                    </span>
                    Documentos de soporte
                  </li>
                  <li className="text-lg flex items-center">
                    <span className="border rounded-full mr-4">
                      <ListChecks size={32} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2" />
                    </span>
                    Encuesta
                  </li>
                </ul>
              </div>
              <Alert className="mt-10 text-muted-foreground pt-6">
                <Info className="w-4 h-4" />
                <AlertDescription className="text-sm text-muted-foreground">
                  Una vez recibida tu solicitud, uno de nuestros asesores
                  se pondrá en contacto contigo para continuar el proceso.
                </AlertDescription>
              </Alert>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Separator />

      <div className="w-full lg:w-1/2 mx-auto border-none lg:border-solid border-slate-200 rounded">
        <AtencionUsuarios />
      </div>

    </main>
  );
}