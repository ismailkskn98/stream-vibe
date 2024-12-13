import CategoryMoviesCards from "@/components/movies/cards";
import CategoriesNames from "@/components/movies/names";
import { categoriesFetch } from "@/services/categoriesFetch";
import { detailedMovies } from "@/services/detailedMovies";
import { moviesByIdCategory } from "@/services/moviesByIdCategory";
import type { MovieDetailType, MoviesType } from "@/types";
import React from "react";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const movies: { page: number; results: MoviesType[] } = await moviesByIdCategory(id);
  const categories = await categoriesFetch();
  const moviesDetails: MovieDetailType[] = await detailedMovies(movies.results);
  // console.log(movies);
  return (
    <section className="w-full h-full space-y-36 my-[50px]">
      <CategoriesNames categoriesName={categories} id={id} />
      <CategoryMoviesCards moviesDetails={moviesDetails} />
    </section>
  );
}
