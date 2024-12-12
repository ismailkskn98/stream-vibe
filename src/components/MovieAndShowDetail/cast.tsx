"use client";
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export type CastProps = {
  cast: {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string;
  }[];
};

export default function Cast({ cast }: CastProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);

  return (
    <article className="max-w-[1085px] flex flex-col items-start gap-[30px] p-[50px] bg-black-10 border border-solid border-black-15 rounded-xl">
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
        <Carousel setApi={setApi}>
          <CarouselContent className="w-full gap-5">
            {cast?.map((item, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <CarouselItem key={index} className="max-w-[102px]">
                      <Image
                        alt={item.name}
                        src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                        width={102}
                        height={109}
                        className="max-w-[102px] max-h-[109px] rounded-xl object-cover"
                      />
                    </CarouselItem>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white mt-1" side="bottom">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </article>
  );
}
