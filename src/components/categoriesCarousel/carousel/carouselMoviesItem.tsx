import { CarouselItem } from "@/components/ui/carousel";
import type { moviesByGenresType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { FiArrowRight } from "react-icons/fi";

export default function CarouselMoviesItem({ moviesByGenre }: { moviesByGenre: moviesByGenresType }) {
  const { genre, id, movies } = moviesByGenre;
  return (
    <CarouselItem
      key={id}
      className={`max-w-[182px] md:max-w-56 lg:max-w-[276px] max-h-[201px] md:max-h-[259px] lg:max-h-[342px] bg-black-10 p-5 md:p-6 xl:p-[30px] rounded-xl cursor-pointer group border border-solid border-black-15`}
    >
      <Link href={`/filmler/${id}`} className="w-min h-min">
        <div className="grid grid-cols-2 grid-rows-2 gap-1 relative overflow-hidden">
          {movies.map((movie, index) => (
            <Image
              key={index}
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.original_title}
              width={115}
              height={123}
              className={`${styles.categoryImage} group-hover:scale-105 transition-all`}
            />
          ))}
          <div className={`${styles.categoriesImages}`}></div>
        </div>
        <div className={styles.categoriesTitle}>
          <span className="font-semibold text-sm lg:text-lg capitalize">{genre}</span>
          <FiArrowRight className="w-5 h-5 lg:w-[30px] lg:h-[30px]" />
        </div>
      </Link>
    </CarouselItem>
  );
}
