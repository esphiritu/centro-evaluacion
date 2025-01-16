import Image from "next/image";
import Link from "next/link";
// Programs Images
import teacherPic from "@/public/img/pexels-divinetechygirl-1181534.jpg";
import RHSpecialist from "@/public/img/pexels-hillaryfox-1595391.jpg";
// shadcn UI components
import { Separator } from "@/components/ui/separator";
import SecondaryButton from "../atoms/SecondaryButton";

// Icons
import {
  Clock4,
} from "lucide-react";
import CardStatus from "../atoms/CardStatus";
import MainLink from "../atoms/MainLink";
import SecondaryLink from "../atoms/SecondaryLink";

// Programs
const programs = [
  {
    ProgramId: "Al34",
    ProgramName: "Programa en capital humano",
    Price: "$2,500",
    ProgramDescription: "Programa para profesionales en la gestión de capital humano",
    ProgramHrefLink: "./",
    ProgramPicText: "",
    programPic: RHSpecialist,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row-reverse",
    bgColor: "transparent",
    status: "alerta",
  },
  {
    ProgramId: "M320",
    ProgramName: "Programa en educación",
    Price: "$1,900",
    ProgramDescription: "Programa en el área de la enseñanza, para quien tienen una amplia trayectoria",
    ProgramHrefLink: "./",
    ProgramPicText: "Maestra frente al pizarrón en una clase",
    programPic: teacherPic,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row",
    bgColor: "transparent",
    status: "recomendado",
  },
];



export default function CoursesCard() {
  return (
    programs.map((program => (
      <div key={program.ProgramId} className={`relative flex ${program.flexColDirection} ${program.flexRowDirection} justify-center mb-[2rem] md:mb-[7rem] py-4 md:pt-2 md:pb-10 w-full drop-shadow-lg`}>
        <div className={`w-full lg:w-1/2 text-left h-auto lg:h-[27rem] px-6 md:px-[3.5rem] py-6 lg:py-4 bg-white dark:bg-gray-800 ${program.bgColor} ${program.flexRowDirection === "lg:flex-row-reverse" ? "lg:rounded-r-xl lg:rounded-l-none" : "lg:rounded-l-xl lg:rounded-r-none"} ${program.flexColDirection === "flex-col-reverse" ? "rounded-b-xl" : "rounded-t-xl"}`}>
          <div className="flex justify-end mb-4">
            <div className="mt-6">
              <p className="tracking-wider text-2xl text-teal-500 font-bold py-1">
                {program.Price}
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-1">
            {program.ProgramName}
          </h2>
          <p className="text-left text-gray-500 dark:text-gray-400 text-lg pb-3 mb-6">
            {program.ProgramDescription}
          </p>
          <div className="">
            <ul className="w-full flex justify-between text-lg mb-10 border rounded-sm px-3 lg:px-8 py-3">
              <li className="py-1 flex items-center">
                <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-700 w-fit rounded-full px-2 py-2 mb-1">
                  <Clock4 absoluteStrokeWidth={true} strokeWidth={1.25} className="text-slate-800 dark:text-slate-100 min-w-6 min-h-6" />
                </div>
                <span className="px-3">120 horas</span>
              </li>
            </ul>
            
            <SecondaryLink href={program.ProgramHrefLink} linkText="Conoce el programa" className="" />
          </div>

        </div>
        <div className="relative w-full h-[18rem] lg:h-[27rem] lg:w-2/5 overflow-hidden">
          <Image
            src={program.programPic}
            alt={program.ProgramPicText}
            quality={75}
            fill={true}
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
            className={`${program.flexRowDirection === "lg:flex-row-reverse" ? "lg:rounded-l-xl lg:rounded-r-none" : "lg:rounded-r-xl lg:rounded-l-none"} ${program.flexColDirection === "flex-col-reverse" ? "rounded-t-xl" : "rounded-b-xl"}`}
          />
          {/* status indicator */}
          <div className="absolute top-2 left-10">
            <CardStatus status={program.status} />
          </div>
        </div>
      </div>
    )
    )
    )
  )
};
