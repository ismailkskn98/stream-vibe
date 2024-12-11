import { CarouselItem } from "@/components/ui/carousel";
import type { MovieDetailType } from "@/types";
import Image from "next/image";
import React from "react";
import { GoClockFill } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";
import styles from "./styles.module.css";
import Link from "next/link";

export default function CarouselMovieDetailItem({ movie }: { movie: MovieDetailType }) {
  return (
    <CarouselItem key={movie.id} className={`${styles.movieDetailItem} group`}>
      <div className="w-full h-72 relative">
        <Link href={`/film/${movie.id}`} className="block w-full h-full">
          <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={300} height={300} className={styles.movieDetailItemImg} />
        </Link>
      </div>
      <article className={styles.movieDetailItemArticle}>
        <div className={styles.movieDetailItemSpan}>
          <GoClockFill className="max-w-6 max-h-6 text-grey-60" />
          <span className="text-grey-60 font-medium text-sm">{`${Math.floor(movie.runtime / 60) > 0 ? `${Math.floor(movie.runtime / 60)}sa` : ""} ${movie.runtime % 60}dk`}</span>
        </div>
        <div className={styles.movieDetailItemSpan}>
          <IoEyeSharp className="max-w-6 max-h-6 text-grey-60" />
          <span className="text-grey-60 font-medium text-sm">{movie.popularity}</span>
        </div>
      </article>
    </CarouselItem>
  );
}
