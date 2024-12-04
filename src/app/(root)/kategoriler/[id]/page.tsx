import CategoryMoviesCards from "@/components/categories/cards";
import CategoriesNames from "@/components/categories/names";
import { categoriesFetch } from "@/services/categoriesFetch";
import { moviesByIdCategory } from "@/services/moviesByIdCategory";
import type { MoviesType } from "@/types";
import React from "react";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const paramsResult = await params;
  const movies: { page: number; results: MoviesType[] } = await moviesByIdCategory(paramsResult.id);
  const categories = await categoriesFetch();
  return (
    <section>
      <CategoriesNames categoriesName={categories} id={Number(paramsResult.id)} />
      <CategoryMoviesCards movies={movies.results} />
    </section>
  );
}
