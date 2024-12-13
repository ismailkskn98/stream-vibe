import type { movieDetailType } from "@/types";
import React from "react";
import CategoryMovieCard from "./card";

export default function CategoryMoviesCards({ moviesDetails }: { moviesDetails: movieDetailType[] }) {
  return (
    <section className="min-w-full flex items-center justify-center flex-wrap gap-5">
      {moviesDetails?.map((movieDetail) => (
        <CategoryMovieCard key={movieDetail.id} movieDetail={movieDetail} />
      ))}
    </section>
  );
}
