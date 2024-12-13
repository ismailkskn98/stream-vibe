import type { MoviesType } from "@/types";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import styles from "./styles.module.css";

type TrailerTextProps = {
  trailerItems: MoviesType[];
  selectedIndex: number;
};

export default function TrailerText({ trailerItems, selectedIndex }: TrailerTextProps) {
  return (
    <article className={styles.trailerText}>
      {trailerItems.map((movie: MoviesType, index: number) => {
        return (
          <div key={index} className="absolute top-0 left-0 w-full h-full flex-col-center">
            <div
              className={`flex-col-center gap-[30px] transition-all duration-500 ease-in-out ${
                selectedIndex === index + 1 ? "z-20 opacity-100 translate-y-0" : "-z-20 opacity-0 translate-y-4"
              }`}
            >
              <div className="flex-col-center gap-1">
                <h2 className={styles.trailerTextH2}>{movie.title}</h2>
                <div className="hidden md:block backdrop-blur-[1px] px-2 py-1 rounded-lg">
                  <p className={styles.trailerTextP}>{movie.overview}</p>
                </div>
              </div>
              <Link href={`film/${movie.id}`} className={styles.trailerTextLink}>
                <FaPlay className="w-6 h-6 2xl:w-7 2xl:h-7" />
                <span className={styles.trailerTextLinkSpan}>Şimdi İzle</span>
              </Link>
            </div>
          </div>
        );
      })}
    </article>
  );
}
