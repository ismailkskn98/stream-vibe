import React from "react";
import styles from "./styles.module.css";
import type { MoviesType } from "@/types";
import Image from "next/image";

export default function CTAImages({ movies }: { movies: MoviesType[] }) {
  return (
    <main className={styles.ctaImagesMain}>
      <div className={styles.ctaImagesBg}></div>
      {movies.slice(0, 40).map((movie, index) => (
        <Image key={index} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className={styles.ctaImage} width={165} height={83.75} />
      ))}
    </main>
  );
}
