import type { MoviesType } from "@/types";
import React from "react";
import CategoryMovieCard from "./card";

export default function CategoryMoviesCards({ movies }: { movies: MoviesType[] }) {
  return (
    <>
      {movies.map((movie) => (
        <CategoryMovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}
