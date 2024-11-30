import Image from "next/image";
import Link from "next/link";
// Programs Images
import teacherPic from "@/public/img/pexels-divinetechygirl-1181534.jpg";
import RHSpecialist from "@/public/img/pexels-thirdman-5256816.png";
// shadcn UI components
import { Separator } from "@/components/ui/separator";
import SecondaryButton from "../atoms/SecondaryButton";

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
  },
];



export default function CoursesCard() {
  return (
    programs.map((program => (
        <div key={program.ProgramId} className={`flex ${program.flexColDirection} ${program.flexRowDirection} justify-center mb-[2rem] md:mb-[7rem] py-4 md:pt-2 md:pb-10 w-full drop-shadow-lg`}>
          <div className={`w-full lg:w-1/2 text-left h-[23rem] md:h-auto px-6 md:px-[3rem] py-6 lg:py-0 bg-white dark:bg-gray-800 ${program.bgColor} ${program.flexRowDirection === "lg:flex-row-reverse" ? "lg:rounded-r-xl lg:rounded-l-none" : "lg:rounded-l-xl lg:rounded-r-none"} ${program.flexColDirection === "flex-col-reverse" ? "rounded-b-xl" : "rounded-t-xl"}`}>
            {/* Pulse red indicator */}
            <div className="flex justify-between">
              <div className="relative w-fit mb-5 ml-6 mt-6 border rounded-full">
                <span className="absolute -left-5 top-[0.6rem] w-1 h-1 bg-red-500 rounded-full px-1 py-1">
                </span>
                <span className="absolute -left-5 top-[0.6rem] w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full animate-ping duration-800 ease-in">
                </span>
                <p className="leading-snug text-slate-600 dark:text-slate-400 px-3 py-1">Quedan pocos lugares</p>
              </div>
              <div className="mt-6">
                <p className="tracking-wider text-2xl font-bold py-1">
                  {program.Price}
                </p>
              </div>
            </div>
            <p className="text-xl font-bold mt-8 mb-10 lg:mb-[1rem]">
              {program.ProgramDescription}
            </p>
            <p className="text-left text-gray-500 text-xl pb-5 mb-2 lg:mb-[4rem]">
              {program.ProgramName}
            </p>
            <SecondaryButton href={program.ProgramHrefLink} linkText="Conoce el programa" />

          </div>
          <div className="w-full lg:w-2/5 overflow-hidden">
            <Image src={program.programPic} alt={program.ProgramPicText} quality={75} sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw," className={`${program.flexRowDirection === "lg:flex-row-reverse" ? "lg:rounded-l-xl lg:rounded-r-none" : "lg:rounded-r-xl lg:rounded-l-none"} ${program.flexColDirection === "flex-col-reverse" ? "rounded-t-xl" : "rounded-b-xl"}`}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'scale-down',
              }}
            />
          </div>
        </div>
      
    )
    )
    )
  )
};
