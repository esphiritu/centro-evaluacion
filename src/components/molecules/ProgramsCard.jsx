import Image from "next/image";
import Link from "next/link";
// Programs Images
import teacherPic from "@/public/img/pexels-divinetechygirl-1181534.jpg";
import RHSpecialist from "@/public/img/pexels-thirdman-5256816.jpg";
import { Key } from "lucide-react";
// shadcn UI components
import { Separator } from "@/components/ui/separator";
import SecondaryButton from "../atoms/SecondaryButton";

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
        <div className={`
          flex 
          ${program.flexColDirection} 
          ${program.flexRowDirection}
          justify-between 
          mb-[2rem] 
          md:mb-[7rem] 
          pt-1 
          md:pt-2 
          md:pb-10 
          w-full`} key={program.index}>
          <div className={`
              relative 
              text-left 
              ${program.bgColor} 
              py-6 lg:py-0 px-2 
              md:px-[5rem] 
              w-full 
              lg:w-1/2 
              h-[23rem] 
              md:h-auto`}>
            <h3 className="
              uppercase 
              text-left
              text-muted-foreground 
              pb-4">
              {program.ProgramName}</h3>
            <p className="
              text-xl 
              lg:text-2xl 
              font-semibold">{program.ProgramDescription}</p>
            <ul className="text-left py-3 mt-3 mb-5">
              <li>Evaluación diagnóstica</li>
              <li>Alineación al estándar de competencia</li>
              <li>Evaluación</li>
              <li>Certificado</li>
            </ul>
            <div className="relative mb-8 ml-6">
              <span className="
                absolute 
                -left-5
                top-1 
                w-1 
                h-1
                bg-red-500 
                rounded-full 
                px-1 
                py-1">
              </span>
              <span className="
                absolute 
                -left-5 
                top-1 
                w-2 
                h-2 
                bg-red-600 
                rounded-full
                animate-ping 
                duration-800 
                ease-in">
              </span>
              <p className="leading-tight">Quedan pocos lugares</p>
            </div>
            <SecondaryButton href={program.ProgramHrefLink} linkText="Conoce el programa" />
          </div>
          <div className="w-full lg:w-2/5 overflow-hidden">
            <Image
              src={program.programPic}
              alt={program.ProgramPicText}
              quality={75}
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
              className="rounded-xl"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'scale-down',
              }}
            />
          </div>
        </div>
      </div>
    )
    )
    )
  )
}
