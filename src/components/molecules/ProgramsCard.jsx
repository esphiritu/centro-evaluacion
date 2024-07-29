import Image from "next/image";
import Link from "next/link";
// Programs Images
import teacherPic from "@/public/img/pexels-divinetechygirl-1181534.jpg";
import RHSpecialist from "@/public/img/pexels-thirdman-5256816.jpg";

// Programs
const programs = [
  {
    ProgramName: "Programa en educación",
    ProgramDescription: "Certificaciones en el área de la enseñanza, para quien tienen una amplia trayectoria",
    ProgramHrefLink: "./",
    ProgramPicText: "Maestra frente al pizarrón en una clase",
    programPic: teacherPic,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row",
    bgColor:"bg-gray-700",
  },
  {
    ProgramName: "Programa capital humano",
    ProgramDescription: "Certificaciones para profesionales en la gestión de capital humano",
    ProgramHrefLink: "./",
    ProgramPicText: "",
    programPic: RHSpecialist,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row-reverse",
    bgColor:"bg-violet-600",
  },
];



export default function ProgramsCard() {
  return (
        programs.map((program => (
        <div className={`flex ${program.flexColDirection} ${program.flexRowDirection} my-6 md:my-8 rounded w-full`}>
          <div className={`relative text-center text-white ${program.bgColor} py-6 px-8 w-full lg:w-1/2`}>
            <h3 className="uppercase py-2 md:py-4">{program.ProgramName}</h3>
            <p className="text-3xl lg:text-3xl font-semibold">{program.ProgramDescription}</p>
            <ul className="text-left p-3 mt-3">
              <li>Evaluación diagnóstica</li>
              <li>Alineación al estándar de competencia</li>
              <li>Evaluación</li>
              <li>Certificado</li>
            </ul>
            <Link 
              href={program.ProgramHrefLink} className="static lg:absolute bottom-8 left-1/3 transition-all duration-300 ease-in-out bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-sm text-gray-800 text-base font-bold md:text-lg text-center">
              Ingresa al programa
            </Link>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <Image 
              src={program.programPic}
              alt={program.ProgramPicText}
              quality={75}
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
              style={{
                width: '100%',
                height: 'auto',
                objectFit:'scale-down',
              }}
            />
          </div>
        </div>
       )
      )
    )
  )
}
