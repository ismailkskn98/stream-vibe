"use client";
import type { MoviesType } from "@/types";
import React from "react";
import type { CarouselApi } from "../ui/carousel";
import { useAppSelector } from "@/lib/reduxHooks";
import TrailerText from "./text";
import TrailerButtons from "./buttons";
import TrailerCarousel from "./carousel";
import styles from "./styles.module.css";

export default function Trailer({ movies }: { movies: MoviesType[] }) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const { selectedIndex, progress } = useAppSelector((state) => state.trailer);
  return (
    <section onMouseEnter={() => api?.plugins().autoplay?.stop()} onMouseLeave={() => api?.plugins().autoplay?.play()} className={styles.trailer}>
      <div className={styles.trailerLinear}></div>
      <main className={styles.trailerMain}>
        <TrailerText trailerItems={movies} selectedIndex={selectedIndex} />
        <TrailerButtons progress={progress} api={api} />
      </main>
      <TrailerCarousel api={api} setApi={setApi} trailerItems={movies} />
    </section>
  );
}
