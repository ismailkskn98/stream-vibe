import CategoryMoviesCards from "@/components/movies/cards";
import CategoriesNames from "@/components/movies/names";
import { categoriesFetch } from "@/services/categoriesFetch";
import { detailedMovies } from "@/services/detailedMovies";
import { fetchApi } from "@/services/fetchApi";
import type { FetchResultType, MovieDetailType, MoviesType } from "@/types";
import React from "react";

export default async function page() {
  const [categories, movies] = await Promise.all([categoriesFetch(), fetchApi<FetchResultType<MoviesType>>("movie/popular", 1)]);
  const moviesDetails: MovieDetailType[] = await detailedMovies(movies.results);
  return (
    <section className="w-full h-full space-y-36 my-[50px]">
      <CategoriesNames categoriesName={categories} />
      <CategoryMoviesCards movies={moviesDetails} />
    </section>
  );
}
