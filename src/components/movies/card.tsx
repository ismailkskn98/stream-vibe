import type { MovieDetailType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoClockFill } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";

export default function CategoryMovieCard({ movie }: { movie: MovieDetailType }) {
  return (
    <article
      className={`w-full max-w-[340px] bg-black-10 flex flex-col items-center gap-3 p-3 md:p-4 xl:p-5 rounded-xl cursor-pointer relative group border border-solid border-black-15`}
    >
      <div className="w-full h-full relative overflow-hidden rounded-[10px]">
        <Link href={`/film/${movie.id}`} className="block">
          <Image
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
            width={400}
            height={400}
            className="w-full max-h-[370px] object-cover rounded-[10px] group-hover:scale-110 transition-all"
          />
        </Link>
        <div className="absolute -bottom-1 sm:group-hover:bottom-0 sm:-bottom-16 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black-15/40 w-full h-16 flex items-center justify-center transition-all z-10">
          <p className="w-full text-white text-center font-medium text-sm">{movie.title.length > 20 ? movie.title.slice(0, 20) + "..." : movie.title}</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
        <div className="flex items-center justify-between gap-1 bg-black-08 text-grey-60 border border-solid border-black-15 px-2 py-1 rounded-[51px]">
          <GoClockFill className="max-w-3 xl:max-w-6 max-h-3 xl:max-h-6 text-grey-60" />
          <span className="text-grey-60 font-medium text-xs xl:text-sm tracking-wide whitespace-nowrap">{`${
            movie.runtime && Math.floor(movie.runtime / 60) > 0 ? `${Math.floor(movie.runtime / 60)}sa` : ""
          } ${movie.runtime && movie.runtime % 60}dk`}</span>
        </div>
        <div className="flex items-center justify-between gap-1 bg-black-08 text-grey-60 border border-solid border-black-15 px-2 py-1 rounded-[51px]">
          <IoEyeSharp className="max-w-3 xl:max-w-6 max-h-3 xl:max-h-6 text-grey-60" />
          <span className="text-grey-60 font-medium text-xs xl:text-sm tracking-wide whitespace-nowrap">{movie.popularity}</span>
        </div>
      </div>
    </article>
  );
}
