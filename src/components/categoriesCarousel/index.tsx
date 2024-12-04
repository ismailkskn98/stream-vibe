"use client";
import React, { useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import Buttons from "./carousel/buttons";
import Title from "./carousel/title";
import CarouselMain from "./carousel";
import type { MovieDetailType, moviesByGenresType } from "@/types";
import styles from "./styles.module.css";

export type CategoriesCarouselProps = {
  id: number;
  title: string;
  description?: string;
  home?: boolean;
  moviesByGenre?: Array<moviesByGenresType>;
  moviesDetailsItems?: MovieDetailType[];
};

export default function CategoriesCarousel(props: CategoriesCarouselProps) {
  const { id, title, description, home = false, moviesByGenre, moviesDetailsItems } = props;
  const [api, setApi] = useState<CarouselApi | null>(null);

  return (
    <section className={styles.categoryCarouselSection}>
      <main className="w-full flex-between gap-20">
        <Title title={title} description={description} />
        <Buttons api={api} id={id} />
      </main>
      <CarouselMain id={id} api={api} setApi={setApi} home={home} moviesByGenre={moviesByGenre} moviesDetailsItems={moviesDetailsItems} />
    </section>
  );
}
