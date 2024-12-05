import type { MoviesType } from "@/types";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

export default function WelcomeImages({ movies }: { movies: MoviesType[] }) {
  return (
    <div className={styles.welcomeImg}>
      <div className={styles.welcomeImgDiv}>
        {movies.slice(0, 25).map((movie, index) => (
          <Image
            alt={movie.title}
            key={index}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            width={135}
            height={168}
            className={`${styles.supportImg} ${styles[`supportImg_${Math.ceil(Math.random() * 5)}`]}`}
          />
        ))}
      </div>
    </div>
  );
}
