
// Next.js components
import Image from "next/image";
// Images
import Air from "@/public/img/pexels-shkrabaanthony-5816291.jpg";
import Mobile from "@/public/img/pexels-anna-nekrashevich-6802049.jpg";
import Chef from "@/public/img/pexels-reneterp-2977514.jpg";
import Talk from "@/public/img/pexels-mikael-blomkvist-6476779.jpg";


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
    CourseName: "Preparación de declaraciones fiscales para emprendedores",
    Price: "$2,500",
    CourseDescription: "Curso en línea",
    CourseHrefLink: "./",
    CoursePicText: "",
    CoursePic: Air,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row",
    bgColor: "transparent",
    labelType: "nuevo",
    soldOut: "false",
  },
  {
    CourseId: "00919",
    CourseName: "Preparación de flujos de efectivo para tu empresa",
    Price: "$1,900",
    CourseDescription: "curso en línea",
    CourseHrefLink: "./",
    CoursePicText: "Maestra frente al pizarrón en una clase",
    CoursePic: Mobile,
    flexColDirection: "flex-col-reverse",
    flexRowDirection: "lg:flex-row",
    bgColor: "transparent",
    labelType: "recomendado",
    soldOut: "true",
  },
  {
    CourseId: "0AE11",
    CourseName: "Presentación de proyectos de inversión",
    Price: "$1,900",
    CourseDescription: "curso en línea",
    CourseHrefLink: "./",
    CoursePicText: "Maestra frente al pizarrón en una clase",
    CoursePic: Talk,
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
      <CarouselContent className="flex lg:grid lg:grid-cols-2 lg:grid-rows-3 gap-4 -ml-1 py-4 px-2">
        <CarouselItem className="md:h-[390px] lg:h-[500px] lg:col-span-1 lg:row-span-3 pl-4 rounded-lg">
          <div className="flex flex-col">
            <div className="h-92 lg:h-76 overflow-hidden">
              <Image
                src={Chef}
                alt="Alternative text"
                className="w-full h-full object-cover rounded-t-lg"
                quality={75}
                sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
              />
            </div>
            <div className="text-left px-10 py-3 lg:py-10 border rounded-b-lg shadow-md">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">Preparación de alimentos y bebidas en hoteles de 5 estrellas</h3>
              <p className="text-lg text-muted-foreground mb-5">Algún texto que describe brevemente el curso en cuestión.</p>
              <SecondaryLink href="./" linkText="Ver curso" />
            </div>
          </div>
        </CarouselItem>
        {PopularCourses.map((course => {
          return (
            <CarouselItem
              key={course.CourseId}
              className="w-full md:h-[130px] lg:h-[166px] lg:col-span-1 lg:row-span-1 px-0 rounded-lg">
              <div className="flex flex-col lg:flex-row w-full h-full mx-auto">
                <div className="w-full lg:w-2/6 h-92 lg:max-h-full overflow-hidden">
                  <Image
                    src={course.CoursePic}
                    alt="A desktop image"
                    quality={75}
                    sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
                    className={`object-scale-down
                        ${course.flexRowDirection === "lg:flex-row" ? "rounded-l-md" : "rounded-b-md"} 
                      `}
                  />
                </div>
                <div className={`h-56 lg:h-auto lg:w-4/6 text-left pl-8 py-6 shadow-md
                  ${course.flexRowDirection === "lg:flex-row-reverse" ? "border lg:rounded-l-md lg:rounded-r-none" : "border lg:rounded-r-md lg:rounded-l-none"} 
                  ${course.flexColDirection === "flex-col-reverse" ? "" : ""}
                  `}>
                  <h3 className="text-xl font-bold mb-1">{course.CourseName}</h3>
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
