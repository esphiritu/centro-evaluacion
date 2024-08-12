'use client';
import React from 'react';
import Image from 'next/image';
import { delay, motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import group from "@/public/img/gallery-group.jpg";
import karen from "@/public/img/gallery-karen.jpg";
import session from "@/public/img/gallery-live-session.jpg";
import participants from "@/public/img/gallery-participants.jpg";
import staged from "@/public/img/gallery-staged.jpg";

function PhotoEvents() {
  return (
    <>
      <Carousel>
        <CarouselContent className="relative w-full flex lg:grid grid-cols-4 gap-4 -ml-4">
          <motion.CarouselItem
            className="h-auto lg:col-span-2 lg:row-span-2"
            initial={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}>
            <Image
              src={group}
              alt="Image showing a group of people"
              quality={75}
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, (max-height: 1024px) 100vw, (max-height: 1200px) 50vw"
              className="static inset-0 w-full object-cover"
            />
          </motion.CarouselItem>
          <motion.CarouselItem
            className="relative"
            initial={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.2, delay: 0.50 }}>
            <Image
              src={karen}
              alt="Image showing Karen Campos"
              quality={75}
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
              className="lg:absolute inset-0 w-full h-full object-cover" />
          </motion.CarouselItem>
          <motion.CarouselItem
            className="relative"
            initial={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.2, delay: 0.58 }}>
            <Image
              src={session}
              alt="Image showing a group of people"
              quality={75}
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
              className="static lg:absolute inset-0 w-full h-full object-cover"
            />
          </motion.CarouselItem>
          <motion.CarouselItem
            className="relative"
            initial={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.2, delay: 0.66 }}>
            <Image
              src={participants}
              alt="Image showing a group of people"
              quality={75}
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
              className="static lg:absolute inset-0 w-full h-full object-cover"
            />
          </motion.CarouselItem>
          <motion.CarouselItem
            className="relative"
            initial={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.2, delay: 0.7 }}>
            <Image
              src={staged}
              alt="Image showing a group of people"
              quality={75}
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw,"
              className="static lg:absolute inset-0 w-full h-full object-cover"
            />
          </motion.CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="lg:hidden" />
        <CarouselNext className="lg:hidden" />
      </Carousel>
    </>
  )
}

export default PhotoEvents;