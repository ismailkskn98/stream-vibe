"use client";
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Cast() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  return (
    <article className="w-full flex flex-col items-start gap-[30px] p-[50px] bg-black-10 border border-solid border-black-15 rounded-xl">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-lg font-medium text-grey-60">Oyuncular</h3>
        <div className="flex items-center gap-[10px] text-grey-60">
          <button onClick={() => api?.scrollPrev()} className="bg-black-08 border border-solid border-black-15 rounded-full p-[14px] hover:bg-black-06 transition-all">
            <FaArrowLeft />
          </button>
          <button onClick={() => api?.scrollNext()} className="bg-black-08 border border-solid border-black-15 rounded-full p-[14px] hover:bg-black-06 transition-all">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="w-full">
            {Array.from({ length: 9 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                <Image alt="" src={"https://fakeimg.pl/300/"} width={102} height={109} className="rounded-xl object-cover" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </article>
  );
}
