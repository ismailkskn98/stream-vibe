import CategoryMoviesCards from "@/components/movies/cards";
import CategoriesNames from "@/components/movies/names";
import { categoriesFetch } from "@/services/categoriesFetch";
import { moviesByIdCategory } from "@/services/moviesByIdCategory";
import type { MoviesType } from "@/types";
import React from "react";

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const paramsResult = await params;
  const movies: { page: number; results: MoviesType[] } = await moviesByIdCategory(paramsResult.slug);
  const categories = await categoriesFetch();
  return (
    <section>
      <CategoriesNames categoriesName={categories} slug={paramsResult.slug} />
      <CategoryMoviesCards movies={movies.results} />
    </section>
  );
}
