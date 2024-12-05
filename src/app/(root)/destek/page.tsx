import Support from "@/components/support";
import { fetchApi } from "@/services/fetchApi";
import type { FetchResultType, MoviesType } from "@/types";
import React from "react";

export default async function page() {
  const [trendMoviesPage1, trendMoviesPage2] = await Promise.all([
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 1),
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 2),
  ]);
  const allMovies: MoviesType[] = [...trendMoviesPage1.results, ...trendMoviesPage2.results];
  return (
    <section className="my-[115px]">
      <Support movies={allMovies} />
    </section>
  );
}
