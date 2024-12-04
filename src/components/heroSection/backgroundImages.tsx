import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import type { MoviesType } from "@/types";

export default function BackgroundImages({ movies }: { movies: MoviesType[] }) {
  return (
    <section className={`${styles.heroBackgroundImagesSection} fluid`}>
      <div className={`${styles.hero}`}></div>
      {movies.slice(0, 40).map((movie, index) => (
        <Image
          key={index}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={`${movie.title}`}
          className={`object-cover ${styles.imageAnimation} ${styles[`imageAnimation-${(index % 5) + 1}`]} w-[193px] h-[196px] rounded-xl`}
          width={200}
          height={220}
        />
      ))}
    </section>
  );
}
