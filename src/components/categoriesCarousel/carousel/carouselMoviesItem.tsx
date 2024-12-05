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
    <CarouselItem key={id} className={`${styles.carouselItem} group`}>
      <Link href={`/filmler/${genre.toLowerCase()}`}>
        <div className="grid grid-cols-2 gap-1 relative">
          {movies.map((movie, index) => (
            <Image key={index} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} width={115} height={123} className={styles.categoryImage} />
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
