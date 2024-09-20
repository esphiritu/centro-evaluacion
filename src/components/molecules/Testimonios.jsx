'use client';
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Quote } from "lucide-react";

import testimonial from "@/public/img/pexels-pisey-tuon-8567103-6112353.jpg";
import testimonialOne from "@/public/img/pexels-italo-melo-881954-2379005.jpg";
import testimonialTwo from "@/public/img/pexels-divinetechygirl-1181742.jpg";

export default function Testimonios() {
  // Stores a reference to the Carousel API
  const [api, setApi] = React.useState(null);
  // Stores the index of the currently selected slide
  const [current, setCurrent] = React.useState(0);
  // Stores the total number of slides in the Carousel
  const [count, setCount] = React.useState(0);
  // Create an array to iterate over it
  const indicators = [];
  // Stores a fixed number of div elements based on Count variable
  for (let i = 0; i < count; i++) {
    indicators.push(<div key={i}></div>);
  }
 
  // Initializes the carousel API and sets up event listeners
  React.useEffect(() => {
    // Checks if api is not null, false or undefined. If it is then return, otherwise go to the next line
    if (!api) {
      return
    }

    // Counts the number of scroll snaps and updates the count state
    setCount(api.scrollSnapList().length)
    // Sets the initial current state based on the selected scroll snap
    setCurrent(api.selectedScrollSnap() + 1)
 
    // listens for the Select event from the carousel and updates the current state accordingly
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api]);

  return (
    <Carousel opts={{
      align: "center",
      loop: true,
    }}
      autoplay={3900}
      setApi={setApi}
      className="relative"
    >
      <CarouselContent className="p-0 md:p-5 h-auto md:h-[32rem]">
        <CarouselItem className="rounded-md py-10 px-6 md:px-10 text-gray-900 dark:text-gray-50">
          <div className="w-full scroll-m-20">
            <Image src={testimonial} width={160} className="mx-auto rounded-full" alt="Picture of ..."></Image>
          </div>
          <div className="relative w-4/5 md:w-2/3 mx-auto">
            <p className="text-xl md:text-2xl py-10"> There is something so natural about collaborating in Freehand. It feels like you are holding a marker, and making ideas happen. I can not imagine doing that in another tool. It captures that human essence of being in person and talking to someone that is right next to you and getting work done together. Especially in todays world when everything is remote. It makes for really organic communication.</p>
            <p className="text-lg text-muted-foreground">Sea parte de nuestros clientes satisfechos que confían en nuestras evaluaciones</p>
            <Quote strokeWidth={1.25} className="absolute right-0 top-3/4 text-teal-700 w-10 h-10" />
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-md py-10 px-6 md:px-10 text-gray-900 dark:text-gray-50">
        <div className="w-full scroll-m-20">
            <Image src={testimonialOne} width={160} className="mx-auto rounded-full" alt="Picture of ..."></Image>
          </div>
          <div className="relative w-4/5 md:w-2/3 mx-auto">
            <p className="text-xl md:text-2xl py-10"> There is something so natural about collaborating in Freehand. It feels like you are holding a marker, and making ideas happen. I can not imagine doing that in another tool. It captures that human essence of being in person and talking to someone that is right next to you and getting work done together. Especially in todays world when everything is remote. It makes for really organic communication.</p>
            <p className="text-lg text-muted-foreground">Sea parte de nuestros clientes satisfechos que confían en nuestras evaluaciones</p>
            <Quote strokeWidth={1.25} className="absolute right-0 top-3/4 text-teal-700 w-10 h-10" />
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-md py-10 px-6 md:px-10 text-gray-900 dark:text-gray-50">
        <div className="w-full scroll-m-20">
            <Image src={testimonialTwo} width={160} className="mx-auto rounded-full" alt="Picture of ..."></Image>
          </div>
          <div className="relative w-4/5 md:w-2/3 mx-auto">
            <p className="text-xl md:text-2xl py-10"> There is something so natural about collaborating in Freehand. It feels like you are holding a marker, and making ideas happen. I can not imagine doing that in another tool. It captures that human essence of being in person and talking to someone that is right next to you and getting work done together. Especially in todays world when everything is remote. It makes for really organic communication.</p>
            <p className="text-lg text-muted-foreground">Sea parte de nuestros clientes satisfechos que confían en nuestras evaluaciones</p>
            <Quote strokeWidth={1.25} className="absolute right-0 top-3/4 text-teal-700 w-10 h-10" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="absolute -bottom-4 md:-bottom-6 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
        {indicators.map((_, indx) => (
            <div
              className={`
              transition-all w-3 h-3 bg-black dark:bg-white rounded-full
              ${current === indx + 1 ? "p-2" : "bg-opacity-50 dark:bg-opacity-30"}
            `}
            />
          ))}
        </div>
      </div>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}



