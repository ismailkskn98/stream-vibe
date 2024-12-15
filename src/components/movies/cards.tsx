import type { MovieDetailType } from "@/types";
import React from "react";
import CategoryMovieCard from "./card";

export default function CategoryMoviesCards({ movies, title }: { movies: MovieDetailType[]; title?: string }) {
  return (
    <section className="relative min-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 justify-items-center border-t border-solid border-black-15 py-[50px]">
      <div className="w-min h-min absolute -top-9 left-0 flex items-center gap-1 px-6 py-[14px] 2xl:py-[18px] bg-red-45 text-white rounded-lg">
        <h2 className="text-sm md:text-lg 2xl:text-lg font-semibold whitespace-nowrap capitalize overflow-hidden">{title ? title : "Filmler"}</h2>
      </div>
      {movies?.map((movie) => (
        <CategoryMovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
