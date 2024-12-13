import type { CategoryNamesType } from "@/types";
import React from "react";
import Link from "next/link";

type categoriesNameProps = {
  categoriesName: CategoryNamesType[];
  id?: string;
};

export default function CategoriesNames({ categoriesName, id }: categoriesNameProps) {
  return (
    <main className="w-full flex flex-col gap-8">
      <article className="mx-auto flex items-center gap-3 flex-wrap">
        {categoriesName.slice(0, 10).map((category: CategoryNamesType, index: number) => (
          <Link
            href={`/filmler/${category.id}`}
            key={category.id || index}
            className={`px-3 py-2 rounded-sm text-grey-60 text-sm font-medium hover:bg-neutral-800 active:bg-neutral-800 border border-solid border-black-15 ${
              id && Number(id) === category.id ? "bg-neutral-800" : ""
            }`}
          >
            {category.name}
          </Link>
        ))}
      </article>
      <article className="mx-auto flex items-center gap-3 flex-wrap">
        {categoriesName.slice(10).map((category: CategoryNamesType, index: number) => (
          <Link
            href={`/filmler/${category.id}`}
            key={category.id || index}
            className={`px-3 py-2 rounded-sm text-grey-60 text-sm font-medium hover:bg-neutral-800 active:bg-neutral-800 border border-solid border-black-15 ${
              id && Number(id) === category.id ? "bg-neutral-800" : ""
            }`}
          >
            {category.name}
          </Link>
        ))}
      </article>
    </main>
  );
}
