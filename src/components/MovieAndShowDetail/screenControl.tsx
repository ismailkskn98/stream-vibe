import Image from "next/image";
import React from "react";
import Button from "../common/button";
import { FaPlay } from "react-icons/fa6";
import { Plus } from "lucide-react";
import { AiOutlineLike } from "react-icons/ai";
import { IoVolumeMediumSharp } from "react-icons/io5";
import styles from "./styles.module.css";
import filmBg from "@/../public/film.png";

export default function ScreenControl({ image, title, description, link }: { image: string; title: string; description: string; link?: string }) {
  return (
    <article className="w-full relative">
      <Image
        alt={title}
        src={image ? `https://image.tmdb.org/t/p/original${image}` : filmBg}
        width={1600}
        height={850}
        quality={100}
        className="hidden lg:block max-h-[835px] border-r border-l border-t border-solid border-black-15 rounded-xl object-cover"
      />
      <Image
        alt={title}
        src={image ? `https://image.tmdb.org/t/p/original${image}` : filmBg}
        width={1024}
        height={850}
        quality={100}
        className="block lg:hidden w-full h-[470px] border-r border-l border-t border-solid border-black-15 rounded-xl object-cover"
      />
      <div className={styles.gradient}></div>
      <div className="w-4/5 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[30px]">
        <div className="w-full max-w-[1085px] flex flex-col items-center gap-1">
          <h1 className="text-white font-bold text-[38px]">{title}</h1>
          <p className="font-normal text-sm sm:text-base lg:text-lg text-grey-60">{description.length > 200 ? description.slice(0, 200) + "..." : description}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <Button title="Şimdi Oynat" url={link ? link : "#"} target="_blank" Icon={FaPlay} />
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
    </article>
  );
}
