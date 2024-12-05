import type { CategoryNamesType } from "@/types";
import React from "react";
import { Button } from "../ui/button";

type categoriesNameProps = {
  categoriesName: CategoryNamesType[];
  slug?: string;
};

export default function CategoriesNames({ categoriesName, slug }: categoriesNameProps) {
  return (
    <main className="w-full flex flex-col gap-8 ">
      <article className="mx-auto flex items-center gap-3 flex-wrap">
        {categoriesName.slice(0, 10).map((category: CategoryNamesType, index: number) => (
          <Button
            key={category.id || index}
            className={`text-grey-60 text-sm font-medium hover:bg-neutral-800 active:bg-neutral-800 ${
              slug && slug.toLocaleLowerCase() === category.name.toLocaleLowerCase() ? "bg-neutral-800" : ""
            }`}
          >
            {category.name}
          </Button>
        ))}
      </article>
      <article className="mx-auto flex items-center gap-3 flex-wrap">
        {categoriesName.slice(10).map((category: CategoryNamesType, index: number) => (
          <Button
            key={category.id || index}
            className={`text-grey-60 text-sm font-medium hover:bg-neutral-800 active:bg-neutral-800 ${
              slug && slug.toLocaleLowerCase() === category.name.toLocaleLowerCase() ? "bg-neutral-800" : ""
            }`}
          >
            {category.name}
          </Button>
        ))}
      </article>
    </main>
  );
}
