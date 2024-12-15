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
    <CarouselItem key={movie.id} className={`${styles.movieDetailItem} group border border-solid border-black-15`}>
      <div className="w-full h-full relative overflow-hidden">
        <Link href={`/film/${movie.id}`} className="block ">
          <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} width={300} height={300} className={styles.movieDetailItemImg} />
        </Link>
        <div className="absolute group-hover:bottom-0 -bottom-16 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black-15/40 w-full h-16 flex items-center justify-center transition-all">
          <p className="w-full text-white text-center font-medium text-sm">{movie.title.length > 20 ? movie.title.slice(0, 20) + "..." : movie.title}</p>
        </div>
      </div>
      <article className={styles.movieDetailItemArticle}>
        <div className={styles.movieDetailItemSpan}>
          <GoClockFill className="max-w-3 xl:max-w-6 max-h-3 xl:max-h-6 text-grey-60" />
          <span className="text-grey-60 font-medium text-xs xl:text-sm tracking-wide whitespace-nowrap">{`${
            Math.floor(movie.runtime / 60) > 0 ? `${Math.floor(movie.runtime / 60)}sa` : ""
          } ${movie.runtime % 60}dk`}</span>
        </div>
        <div className={styles.movieDetailItemSpan}>
          <IoEyeSharp className="max-w-3 xl:max-w-6 max-h-3 xl:max-h-6 text-grey-60" />
          <span className="text-grey-60 font-medium text-xs xl:text-sm ">{movie.popularity.toFixed(1)}K</span>
        </div>
      </article>
    </CarouselItem>
  );
}
