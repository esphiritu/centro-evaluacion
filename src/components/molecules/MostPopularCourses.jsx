
// Next.js components
import Image from "next/image";
// Custom components
import SecondaryLink from "../atoms/SecondaryLink";
// Shadcn UI components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Most Popular Courses
const PopularCourses = [
  {
    CourseId: "00989",
    CourseName: "Manejo de máquinas de trascabo",
    Price: "$2,500",
    CourseDescription: "Curso en línea",
    CourseHrefLink: "./",
    CoursePicText: "",
    CoursePic: "",
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row-reverse",
    bgColor: "transparent",
    labelType: "nuevo",
    soldOut: "false",
  },
  {
    CourseId: "00919",
    CourseName: "Preparación de alimentos y bebidas en hoteles de 5 estrellas",
    Price: "$1,900",
    CourseDescription: "curso en línea",
    CourseHrefLink: "./",
    CoursePicText: "Maestra frente al pizarrón en una clase",
    CoursePic: "",
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row",
    bgColor: "transparent",
    labelType: "recomendado",
    soldOut: "true",
  },
  {
    CourseId: "0AE11",
    CourseName: "Instalación de paneles solares",
    Price: "$1,900",
    CourseDescription: "curso en línea",
    CourseHrefLink: "./",
    CoursePicText: "Maestra frente al pizarrón en una clase",
    CoursePic: "",
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row",
    bgColor: "transparent",
    labelType: "recomendado",
    soldOut: "true",
  },
];


export default function MostPopularCourses() {
  return (
    <Carousel>
      <CarouselContent className="w-full flex lg:grid lg:grid-cols-2 lg:grid-rows-3 gap-2 -ml-1">
        <CarouselItem className="w-full h-[360px] md:h-[390px] lg:h-[530px] lg:col-span-1 lg:row-span-3">
          <div className="flex flex-col w-full h-full mx-auto border rounded-md">
            <div className="w-full h-4/6 lg:h-full bg-slate-300">

            </div>
            <div className="text-left px-10 py-3 lg:py-10">
              <h3 className="text-xl lg:text-2xl font-bold">Creación de papalotes y globos de cantón</h3>
              <p className="text-lg text-muted-foreground mb-5">Algún texto que describe brevemente el curso en cuestión.</p>
              <SecondaryLink href="./" linkText="Ver curso" />
            </div>
          </div>
        </CarouselItem>
        {PopularCourses.map((course => {
          return (
            <CarouselItem
              key={course.CourseId}
              className="w-full h-[360px] md:h-[130px] lg:h-[166px] lg:col-span-1 lg:row-span-1">
              <div className="flex flex-col lg:flex-row w-full h-full mx-auto">
                <div className="w-full lg:w-2/6 h-4/6 lg:h-full bg-slate-300">

                </div>
                <div className="lg:w-4/6 text-left px-4 py-6 border rounded-md">
                  <h3 className="text-xl font-bold">{course.CourseName}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{course.CourseDescription}</p>
                  <SecondaryLink href="./" linkText="Ver curso" />
                </div>
              </div>
            </CarouselItem>
          )
        }))}
      </CarouselContent>
      <CarouselPrevious className="lg:invisible" />
      <CarouselNext className="lg:invisible" />
    </Carousel>
  )
}
