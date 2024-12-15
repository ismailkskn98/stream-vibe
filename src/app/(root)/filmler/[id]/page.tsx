import CategoryMoviesCards from "@/components/movies/cards";
import CategoriesNames from "@/components/movies/names";
import { categoriesFetch } from "@/services/categoriesFetch";
import { detailedMovies } from "@/services/detailedMovies";
import { moviesByIdCategory } from "@/services/moviesByIdCategory";
import type { GenresType, MovieDetailType, MoviesType } from "@/types";
import React from "react";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const movies: { page: number; results: MoviesType[] } = await moviesByIdCategory(id);
  const categories: GenresType[] = await categoriesFetch();
  const moviesDetails: MovieDetailType[] = await detailedMovies(movies.results);
  const selectedCategory = categories.find((category: GenresType) => category.id === Number(id));
  return (
    <section className="w-full h-full space-y-24 my-[50px]">
      <CategoriesNames categoriesName={categories} id={id} />
      <CategoryMoviesCards movies={moviesDetails} title={selectedCategory?.name} />
    </section>
  );
}
