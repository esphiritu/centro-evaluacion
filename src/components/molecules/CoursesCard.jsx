import Image from "next/image";
import Link from "next/link";
// Programs Images
import teacherPic from "@/public/img/pexels-divinetechygirl-1181534.jpg";
import RHSpecialist from "@/public/img/pexels-thirdman-5256816.png";
// shadcn UI components
import { Separator } from "@/components/ui/separator";
import SecondaryButton from "../atoms/SecondaryButton";

// Custom components
import SecondaryLink from "../atoms/SecondaryLink";

// Icons
import { 
  FolderInput,
  Clock4,
} from "lucide-react";

// Courses
const courses = [
  {
    CourseName: "Ventas consultivas",
    Price: "$2,500",
    CourseDescription: "Curso en línea",
    CourseHrefLink: "./",
    CoursePicText: "",
    CoursePic: RHSpecialist,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row-reverse",
    bgColor: "transparent",
  },
  {
    CourseName: "Manejo de Office",
    Price: "$1,900",
    CourseDescription: "curso en línea",
    CourseHrefLink: "./",
    CoursePicText: "Maestra frente al pizarrón en una clase",
    CoursePic: teacherPic,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row",
    bgColor: "transparent",
  },
];



export default function CoursesCard() {
  return (
    courses.map((course => (
      <div>
        <div className={`
          flex 
          ${course.flexColDirection} 
          ${course.flexRowDirection}
          justify-center 
          mb-[2rem] md:mb-[7rem] 
          py-4 md:pt-2 md:pb-10 
          w-full
          drop-shadow-lg`} key={course.index}>
          <div className={`
              w-full 
              lg:w-1/2 
              text-left 
              h-[23rem] 
              md:h-auto
              px-6 md:px-[3rem] 
              py-6 lg:py-0  
              bg-white
              dark:bg-gray-800
              ${course.bgColor} 
              ${course.flexRowDirection === "lg:flex-row-reverse" ? "lg:rounded-r-xl lg:rounded-l-none" : "lg:rounded-l-xl lg:rounded-r-none"}
              ${course.flexColDirection === "flex-col-reverse" ? "rounded-b-xl" : "rounded-t-xl"}
              `}>
            
            <div className="flex justify-between">
              <div className="w-fit mb-5 mt-6 border bg-amber-500/70 rounded-full">
                <p className="text-md font-bold text-white px-3 py-1 tracking-wide">Destacado</p>
              </div>
              <div className="mt-6">
                <p className="tracking-wider text-2xl font-bold py-1">{course.Price}</p>
              </div>
            </div>
            <p className="
              text-xl
              font-bold 
              mt-3
              mb-1 
              ">{course.CourseName}</p>
            <p className="
              text-left
              text-gray-500
              dark:text-gray-400
              text-xl
              pb-3
              mb-2">
              {course.CourseDescription}</p>
              <div className="flex justify-between items-end">
                <ul className="text-lg mb-8">
                  <li className="flex place-items-bottom py-1"> 
                    <FolderInput className="text-teal-500 mr-3 min-w-6 min-h-6" />
                     6 módulos
                  </li>
                  <li className="flex place-items-bottom py-1">
                    <Clock4 className="text-teal-500 mr-3 min-w-6 min-h-6"/>
                    120 horas</li>
                  <li className="flex place-items-bottom py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-chart-gantt text-teal-500 mr-3 min-w-6 min-h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 6h8"/><path d="M12 16h6"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 11h7"/></svg>
                    Proyecto final</li>
                </ul>
                <SecondaryLink href={course.CourseHrefLink} linkText="Ver curso" />
              </div>

          </div>
          <div className="w-full lg:w-2/5 overflow-hidden">
            <Image
              src={course.CoursePic}
              alt={course.CoursePicText}
              quality={75}
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
              className={`
                ${course.flexRowDirection === "lg:flex-row-reverse" ? 
                  "lg:rounded-l-xl lg:rounded-r-none" : "lg:rounded-r-xl lg:rounded-l-none"} 
                ${course.flexColDirection === "flex-col-reverse" ? 
                  "rounded-t-xl" : "rounded-b-xl"}
              `}
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
