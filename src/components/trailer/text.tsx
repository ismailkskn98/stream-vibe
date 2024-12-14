import type { MoviesType } from "@/types";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import styles from "./styles.module.css";
import { IoVolumeMediumSharp } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { Plus } from "lucide-react";
import Button from "../common/button";

type TrailerTextProps = {
  trailerItems: MoviesType[];
  selectedIndex: number;
};

export default function TrailerText({ trailerItems, selectedIndex }: TrailerTextProps) {
  return (
    <article className={styles.trailerText}>
      {trailerItems.map((movie: MoviesType, index: number) => {
        return (
          <div key={index} className="w-full absolute top-0 left-0 h-full flex-col-center">
            <div
              className={`w-full flex-col-center gap-[30px] transition-all duration-500 ease-in-out ${
                selectedIndex === index + 1 ? "z-20 opacity-100 translate-y-0" : "-z-20 opacity-0 translate-y-4"
              }`}
            >
              <div className="w-full flex-col-center gap-1">
                <h2 className={styles.trailerTextH2}>{movie.title}</h2>
                <div className="w-full backdrop-blur-[1px] px-2 py-1 rounded-lg">
                  <p className={styles.trailerTextP}>{movie.overview}</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <Button title="Şimdi Oynat" url={`film/${movie.id}`} Icon={FaPlay} />
                <button className="hidden md:inline-block p-[14px] bg-black-06 text-white border border-solid border-black-15 rounded-lg hover:bg-black-08 transition-all">
                  <Plus className="w-7 h-7" />
                </button>
                <button className="hidden md:inline-block p-[14px] bg-black-06 text-white border border-solid border-black-15 rounded-lg hover:bg-black-08 transition-all">
                  <AiOutlineLike className="w-7 h-7" />
                </button>
                <button className="hidden md:inline-block p-[14px] bg-black-06 text-white border border-solid border-black-15 rounded-lg hover:bg-black-08 transition-all">
                  <IoVolumeMediumSharp className="w-7 h-7" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
}
