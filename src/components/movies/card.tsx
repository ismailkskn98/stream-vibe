import type { movieDetailType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoClockFill } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";

export default function CategoryMovieCard({ movieDetail }: { movieDetail: movieDetailType }) {
  return (
    <article className={`basis-1/5 bg-black-10 flex flex-col items-center gap-5 p-5 rounded-xl cursor-pointer group`}>
      <div className="w-full h-72 relative">
        <Link href={`/film/${movieDetail.id}`} className="block w-full h-full">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.title}
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-[10px]"
          />
        </Link>
      </div>
      <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
        <div className="flex items-center justify-between gap-1 bg-black-08 text-grey-60 border border-solid border-black-15 px-2 py-[6px] rounded-[51px]">
          <GoClockFill className="max-w-6 max-h-6 text-grey-60" />
          <span className="text-grey-60 font-medium text-sm">{`${
            movieDetail.runtime && Math.floor(movieDetail.runtime / 60) > 0 ? `${Math.floor(movieDetail.runtime / 60)}sa` : ""
          } ${movieDetail.runtime && movieDetail.runtime % 60}dk`}</span>
        </div>
        <div className="flex items-center justify-between gap-1 bg-black-08 text-grey-60 border border-solid border-black-15 px-2 py-[6px] rounded-[51px]">
          <IoEyeSharp className="max-w-6 max-h-6 text-grey-60" />
          <span className="text-grey-60 font-medium text-sm">{movieDetail.popularity}</span>
        </div>
      </div>
    </article>
  );
}
