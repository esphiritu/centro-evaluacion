// Next.js components
import Image from "next/image";
// Programs Images
import teacherPic from "@/public/img/pexels-divinetechygirl-1181534.jpg";
import RHSpecialist from "@/public/img/pexels-thirdman-5256816.png";
// shadcn UI components

// Custom components
import SecondaryButton from "../atoms/SecondaryButton";

// Icons
import {
  FolderInput,
  Clock4,
} from "lucide-react";


// Featured Courses
const FeaturedCourses = [
  {
    CourseId: "C71F2",
    CourseName: "Introducción a las ventas consultivas",
    Price: "$2,500",
    CourseDescription: "Curso en línea",
    CourseHrefLink: "./",
    CoursePicText: "",
    CoursePic: RHSpecialist,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row-reverse",
    bgColor: "transparent",
    labelType: "nuevo",
    soldOut: "false",
  },
  {
    CourseId: "SG452",
    CourseName: "Manejo de Office 365",
    Price: "$1,900",
    CourseDescription: "curso en línea",
    CourseHrefLink: "./",
    CoursePicText: "Maestra frente al pizarrón en una clase",
    CoursePic: teacherPic,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row",
    bgColor: "transparent",
    labelType: "recomendado",
    soldOut: "true",
  },
];



export default function FeaturedCoursesCard() {
  return (
    FeaturedCourses.map((course => {
      return (
          <div className={`flex ${course.flexColDirection} ${course.flexRowDirection} justify-center mb-[2rem] md:mb-[4rem] py-2 md:pt-2 md:pb-2 w-full drop-shadow-lg`} key={course.index}>
            <div className={`w-full lg:w-1/2 text-left h-[24rem] lg:h-auto px-6 md:px-[3rem] py-6 lg:py-0 bg-white dark:bg-gray-800 ${course.bgColor} ${course.flexRowDirection === "lg:flex-row-reverse" ? "lg:rounded-r-xl lg:rounded-l-none" : "lg:rounded-l-xl lg:rounded-r-none"} ${course.flexColDirection === "flex-col-reverse" ? "rounded-b-xl" : "rounded-t-xl"}`}>
              <div className="flex justify-between">
                <div className={`w-fit mb-5 mt-3 ${course.labelType === "recomendado" ? "bg-amber-300/70 dark:bg-amber-200" : "bg-green-300/70 dark:bg-green-200"} rounded-md`}>
                  <p className={`text-sm font-bold ${course.labelType === "recomendado" ? "text-yellow-600" : "text-green-600"} px-3 pt-1 tracking-wide uppercase leading-loose`}>{course.labelType}</p>
                </div>
                <div className="mt-6">
                  <p className="tracking-wider text-2xl text-teal-500 font-bold py-1">{course.Price}</p>
                </div>
              </div>
              <p className="text-xl font-bold mt-3 mb-1">
                {course.CourseName}
              </p>
              <p className="text-left text-gray-500 dark:text-gray-400 text-xl pb-3 mb-2">
                {course.CourseDescription}
              </p>
              <div className="">
                <ul className="w-full flex justify-between text-lg mb-8 border rounded-sm px-3 lg:px-8 py-3">
                  <li className="py-1">
                    <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-700 w-fit rounded-full px-2 py-2 mb-1">
                      <FolderInput className="text-slate-800 dark:text-slate-100 min-w-6 min-h-6" />
                    </div>
                    <span>6 módulos</span>
                  </li>
                  {/* <li className="py-1">
                    <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-700 w-fit rounded-full px-2 py-2">
                      <Clock4 className="text-slate-800 dark:text-slate-100 min-w-6 min-h-6" />
                    </div>
                    <span>120 horas</span></li> */}
                  {/* <li className="py-1">
                    <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-700 w-fit rounded-full px-2 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-chart-gantt text-slate-800 dark:text-slate-100 min-w-6 min-h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 6h8" /><path d="M12 16h6" /><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M8 11h7" /></svg>
                    </div>
                    <span>Proyecto final</span></li> */}
                </ul>
                <SecondaryButton href={course.CourseHrefLink} linkText="Ver curso" />
              </div>

            </div>
            <div className="w-full lg:w-2/5 overflow-hidden">
              <Image src={course.CoursePic} alt={course.CoursePicText} quality={75} sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw," className={`${course.flexRowDirection === "lg:flex-row-reverse" ? "lg:rounded-l-xl lg:rounded-r-none" : "lg:rounded-r-xl lg:rounded-l-none"} ${course.flexColDirection === "flex-col-reverse" ? "rounded-t-xl" : "rounded-b-xl"}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'scale-down',
                }}
              />
            </div>
          </div>
      )
    }))
  )
}
