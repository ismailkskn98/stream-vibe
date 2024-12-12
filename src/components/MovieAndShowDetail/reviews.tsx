"use client";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import { FaArrowLeft, FaArrowRight, FaRegStar, FaStar } from "react-icons/fa6";
import { Progress } from "../ui/progress";
import Link from "next/link";

export default function Reviews() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [processValue, setProcessValue] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      const totalItems = api.scrollSnapList().length - 1;
      setProcessValue(() => (selectedIndex / totalItems) * 100);
    });
  }, [api]);

  return (
    <article className="w-full flex flex-col items-start gap-10 p-[50px] bg-black-10 border border-solid border-black-15 rounded-xl">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-lg font-medium text-grey-60">Yorumlar</h3>
        <Link href="" className="flex items-center gap-1 bg-black-08 border border-solid border-black-15 rounded-lg px-4 py-[14px] text-white">
          <Plus />
          <span>Yorumunuzu Ekleyin</span>
        </Link>
      </div>
      <div className="w-full flex flex-col items-center gap-10">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="w-full gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem className="max-w-[468px] flex flex-col items-start gap-5 p-10 bg-black-06 border border-solid border-black-15 rounded-xl text-grey-60" key={index}>
                <div className="w-full flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <h5 className="text-white font-medium text-xl">Aniket Roy</h5>
                    <p className="font-medium text-lg">From India</p>
                  </div>
                  <div className="flex items-center gap-1 px-[10px] py-[6px] bg-black-08 border border-solid border-black-15 rounded-[51px]">
                    <div className="flex items-center gap-[2px]">
                      <FaStar className="w-[18px] h-[18px] text-red-45" />
                      <FaStar className="w-[18px] h-[18px] text-red-45" />
                      <FaStar className="w-[18px] h-[18px] text-red-45" />
                      <FaRegStar className="w-[18px] h-[18px]" />
                      <FaRegStar className="w-[18px] h-[18px]" />
                    </div>
                    <p className="font-medium text-xl text-white">4</p>
                  </div>
                </div>
                <p className="text-lg font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem assumenda, ipsum nam tempora nostrum, provident aliquam hic ad eaque natus officia quidem dolore
                  officiis quaerat in placeat? Nulla, aliquam quod.
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center gap-[10px] text-grey-60">
          <button onClick={() => api?.scrollPrev()} className="bg-black-08 border border-solid border-black-15 rounded-full p-[14px] hover:bg-black-06 transition-all">
            <FaArrowLeft />
          </button>
          <Progress className="w-[81px] bg-black-20" value={processValue} />
          <button onClick={() => api?.scrollNext()} className="bg-black-08 border border-solid border-black-15 rounded-full p-[14px] hover:bg-black-06 transition-all">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </article>
  );
}
