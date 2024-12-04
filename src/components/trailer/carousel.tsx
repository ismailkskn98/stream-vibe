"use client";
import React, { useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import type { MoviesType } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useAppDispatch } from "@/lib/reduxHooks";
import { setScrollSnapList, setSelectedScrollSnap } from "@/lib/features/trailer/trailerSlice";

export default function TrailerCarousel({
  api,
  setApi,
  trailerItems,
}: {
  api: CarouselApi | null;
  setApi: React.Dispatch<React.SetStateAction<CarouselApi | null>>;
  trailerItems: MoviesType[];
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!api) {
      return;
    }
    dispatch(setScrollSnapList(api.scrollSnapList().length));
    dispatch(setSelectedScrollSnap(api.selectedScrollSnap() + 1));

    api.on("select", () => {
      dispatch(setSelectedScrollSnap(api.selectedScrollSnap() + 1));
    });
  }, [api, dispatch]);
  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          // stopOnMouseEnter: true,
          // stopOnInteraction: false,
        }),
      ]}
      className="w-full h-full"
    >
      <CarouselContent className="w-full h-full">
        {trailerItems.map((movie: MoviesType, index) => {
          return (
            <CarouselItem key={index}>
              <article className="w-full h-full">
                <div className="w-full h-full">
                  <div className="relative w-full h-full flex-center">
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt={movie.title}
                      width={1700}
                      height={776}
                      quality={100}
                      className="object-cover bg-center"
                    />
                  </div>
                </div>
              </article>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
