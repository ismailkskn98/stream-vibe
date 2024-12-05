import CategoriesNames from "@/components/categories/names";
import { categoriesFetch } from "@/services/categoriesFetch";
import React from "react";

export default async function page() {
  const categories = await categoriesFetch();
  return (
    <section className="mt-10">
      <CategoriesNames categoriesName={categories} />
    </section>
  );
}
