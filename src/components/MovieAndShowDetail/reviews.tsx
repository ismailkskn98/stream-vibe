"use client";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Progress } from "../ui/progress";
import Link from "next/link";
import moment from "moment";
import "moment/locale/tr";

moment.locale("tr");

export type ReviewProps = {
  reviews: {
    author: string;
    author_details: [];
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }[];
};

export default function Reviews({ reviews }: ReviewProps) {
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
    <article className="w-full max-w-[1085px] flex flex-col items-start gap-10 p-6 sm:p-[40px] lg:p-[50px] bg-black-10 border border-solid border-black-15 rounded-xl">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-lg font-medium text-grey-60">Yorumlar</h3>
        <Link href="#" className="hidden lg:flex items-center gap-1 bg-black-08 border border-solid border-black-15 rounded-lg px-4 py-[14px] text-white">
          <Plus />
          <span>Yorumunuzu Ekleyin</span>
        </Link>
      </div>
      <div className="w-full flex flex-col items-center gap-10">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="w-full gap-5">
            {reviews?.map((item, index) => (
              <CarouselItem
                className="max-w-[468px] sm:max-h-[270px] flex flex-col items-start gap-5 p-5 lg:p-10 bg-black-06 border border-solid border-black-15 rounded-xl text-grey-60"
                key={index}
              >
                <div className="w-full flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <Link href={item.url} target="_blank" className="font-medium text-lg text-white">
                      {item.author}
                    </Link>
                    <p className="font-medium text-lg">{moment(item.created_at).format("D MMMM YYYY, HH:mm")}</p>
                  </div>
                </div>
                <p className="text-sm lg:text-lg font-normal">{item.content.length > 150 ? item.content.slice(0, 150) + "..." : item.content}</p>
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
