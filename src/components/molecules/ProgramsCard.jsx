import Image from "next/image";
import Link from "next/link";
// Image Programs
import teacherPic from "@/public/img/pexels-divinetechygirl-1181534.jpg"

// Programs
const programs = [
  {
    ProgramName: "Programa en educación",
    ProgramDescription: "Ofrecemos certificaciones en el área de la enseñanza, desde opciones iniciales hasta a quienes ya tienen una amplia trayectoria",
    ProgramHrefLink: "./",
    ProgramPicText: "Maestra frente al pizarrón en una clase",
    programPic: teacherPic,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "md:flex-row",
    bgColor:"bg-orange-500",
  },
]



export default function ProgramsCard() {
  return (
        programs.map((program => (
        <div className={`flex ${program.flexColDirection} ${program.flexRowDirection} my-8 rounded w-full`}>
          <div className={`text-center text-white ${program.bgColor} py-10 px-8 w-full md:w-1/2`}>
            <h3 className="uppercase py-4">{program.ProgramName}</h3>
            <p className="text-2xl md:text-3xl font-semibold">{program.ProgramDescription}</p>
            <ul className="text-left p-5 mt-3">
              <li>Evaluación diagnóstica</li>
              <li>Alineación al estándar de competencia</li>
              <li>Evaluación</li>
              <li>Certificado</li>
            </ul>
            <Link href={program.ProgramHrefLink} className="group transition-all duration-300 ease-in-out bg-teal-600 hover:bg-teal-700 px-6 py-3 mx-2 md:mx-4 rounded-sm text-white text-base font-bold md:text-lg mt-6">
              Ingresa al programa
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image 
              src={program.programPic}
              alt={program.ProgramPicText} 
              quality={100}
              sizes="40vw 60vw"
              style={{objectFit: 'none',}}
            />
          </div>
        </div>
    ))
    )
  )
}
