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



export default function IterationIcon() {

  return (
    <Carousel
      opts={{
        align: "end",
        loop: true,
      }}
      autoplay={1900}
      className="relative w-1/6 bg-gray-700 rounded-full"
          >
      <CarouselContent className="py-1">
        <CarouselItem className="rounded-md py-2 px-6 md:px-10 text-gray-50">
          <div className="w-full scroll-m-20">

          </div>
          <div className="relative mx-auto">
            <p className="text-lg">Identifica</p>
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-md py-2 px-6 md:px-10 text-gray-50">
          <div className="w-full scroll-m-20">

          </div>
          <div className="relative mx-auto">
            <p className="text-lg">Haz una prueba</p>
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-md py-2 px-6 md:px-10 text-gray-50">
          <div className="w-full scroll-m-20">

          </div>
          <div className="relative mx-auto">
            <p className="text-lg">Evalúate</p>
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-md py-2 px-6 md:px-10 text-gray-50">
          <div className="w-full scroll-m-20">

          </div>
          <div className="relative mx-auto">
            <p className="text-lg">Consulta resultados</p>
          </div>
        </CarouselItem>
      </CarouselContent>
      
    </Carousel>
  )
}



