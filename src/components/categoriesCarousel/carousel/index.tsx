"use client";
import { Carousel, CarouselContent, type CarouselApi } from "@/components/ui/carousel";
import type { MovieDetailType, moviesByGenresType } from "@/types";
import React, { useEffect, useMemo, useState, type Dispatch, type SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { setCurrentScrollSnap, setScrollSnapList } from "@/lib/features/carousel/carouselSlice";
import MobileProgressBar from "./mobileProgressBar";
import CarouselMoviesItem from "./carouselMoviesItem";
import styles from "./styles.module.css";
import Autoplay from "embla-carousel-autoplay";
import CarouselMovieDetailItem from "./carouselMovieDetailItem";
import ShowSeeAll from "./showSeeAll";

export type CarouselProps = {
  id: number;
  api: CarouselApi | null;
  setApi: Dispatch<SetStateAction<CarouselApi | null>>;
  home: boolean;
  link?: string;
  moviesByGenre?: Array<moviesByGenresType>;
  moviesDetailsItems?: MovieDetailType[];
};

export default function CarouselMain(props: CarouselProps) {
  const { id, api, setApi, home, moviesByGenre, moviesDetailsItems, link } = props;
  const [showSeeAll, setShowSeeAll] = useState<boolean>(false);
  const carouselSlice = useAppSelector((state) => state.carousel[id]);
  const dispatch = useAppDispatch();

  const progress = useMemo(() => {
    return carouselSlice?.progress || 0;
  }, [carouselSlice]);

  useEffect(() => {
    if (!api) return;

    // api.selectedScrollSnap() -> Seçilen kaydırma noktasının indexini döndürür 0, 14
    // api.scrollSnapList() -> Tüm kaydırma noktalarını döndürür [0, 123, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const selectedScrollSnap = api.selectedScrollSnap();
    const totalSnapList = api.scrollSnapList().length - 1;
    dispatch(setScrollSnapList({ id, totalSnapList }));
    dispatch(setCurrentScrollSnap({ id, currentScrollSnap: selectedScrollSnap }));

    api.on("select", () => {
      const currentScrollSnap = api.selectedScrollSnap();
      const totalSnapList = api.scrollSnapList().length - 1;
      dispatch(setCurrentScrollSnap({ id, currentScrollSnap }));

      if (currentScrollSnap === totalSnapList) {
        setShowSeeAll(true);
      } else {
        setShowSeeAll(false);
      }
    });
  }, [api, dispatch, id, setShowSeeAll]);

  return (
    <Carousel plugins={home ? [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })] : []} setApi={setApi}>
      {home && <div className={`${styles.homeCategories}`}></div>}
      <CarouselContent className="w-full gap-[30px]">
        {moviesByGenre &&
          moviesByGenre.map((item: moviesByGenresType) => {
            if (item.movies.length >= 4) {
              return <CarouselMoviesItem key={item.id} moviesByGenre={item} />;
            }
          })}
        {moviesDetailsItems && moviesDetailsItems.map((movie: MovieDetailType) => <CarouselMovieDetailItem key={movie.id} movie={movie} />)}
      </CarouselContent>
      {showSeeAll && !home && <ShowSeeAll link={link} />}
      <MobileProgressBar progress={progress} />
    </Carousel>
  );
}
