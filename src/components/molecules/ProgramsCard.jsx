import Image from "next/image";
import Link from "next/link";
// Programs Images
import teacherPic from "@/public/img/pexels-divinetechygirl-1181534.jpg";
import RHSpecialist from "@/public/img/pexels-thirdman-5256816.jpg";
import { Key } from "lucide-react";
// shadcn UI components
import { Separator } from "@/components/ui/separator";

// Programs
const programs = [
  {
    ProgramName: "Programa capital humano",
    ProgramDescription: "Certificaciones para profesionales en la gestión de capital humano",
    ProgramHrefLink: "./",
    ProgramPicText: "",
    programPic: RHSpecialist,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row-reverse",
    bgColor: "transparent",
  },
  {
    ProgramName: "Programa en educación",
    ProgramDescription: "Certificaciones en el área de la enseñanza, para quien tienen una amplia trayectoria",
    ProgramHrefLink: "./",
    ProgramPicText: "Maestra frente al pizarrón en una clase",
    programPic: teacherPic,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row",
    bgColor: "transparent",
  },
];



export default function ProgramsCard() {
  return (
    programs.map((program => (
      <div>
        <div className={`flex ${program.flexColDirection} ${program.flexRowDirection} my-[4rem] md:my-[6rem] pt-5 md:py-8 w-full`} key={program.index}>
          <div className={`relative text-left ${program.bgColor} py-6 px-2 md:px-[5rem] w-full lg:w-1/2 h-[23rem] md:h-auto`}>
            <h3 className="uppercase text-muted-foreground py-2 md:py-3">{program.ProgramName}</h3>
            <p className="text-2xl lg:text-3xl font-semibold">{program.ProgramDescription}</p>
            <ul className="text-left p-3 mt-3 mb-8">
              <li>Evaluación diagnóstica</li>
              <li>Alineación al estándar de competencia</li>
              <li>Evaluación</li>
              <li>Certificado</li>
            </ul>
            <Link
              href={program.ProgramHrefLink} className="static right-2/5 transition-all duration-300 ease-in-out bg-teal-600 hover:bg-teal-700 px-6 py-3 text-white rounded-sm text-base font-bold md:text-lg text-center">
              Ingresa al programa
            </Link>
          </div>
          <div className="w-full lg:w-1/2 overflow-hidden">
            <Image
              src={program.programPic}
              alt={program.ProgramPicText}
              quality={75}
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
              className="rounded-md"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'scale-down',
              }}
            />
          </div>
        </div>
        <Separator className="w-full" />
      </div>
    )
    )
    )
  )
}
