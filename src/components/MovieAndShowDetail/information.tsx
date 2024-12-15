import React from "react";
import { CiCalendar } from "react-icons/ci";
import { HiTranslate } from "react-icons/hi";
import { Badge } from "../ui/badge";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import Image from "next/image";
import moment from "moment";
import "moment/locale/tr";

export type InformationProps = {
  director: {
    adult: boolean;
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
  };
  sounds: {
    adult: boolean;
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
  }[];
  genres: { id: number; name: string }[];
  release_date?: string;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  vote_average: number;
};

export default function Information({ director, sounds, genres, release_date = "2024", spoken_languages, vote_average }: InformationProps) {
  const fullStars = Math.floor(vote_average / 2); // Tam yıldızlar
  const emptyStars = 5 - fullStars; // Boş yıldızlar
  return (
    <main className="w-full lg:max-w-min max-h-min flex flex-row flex-wrap lg:flex-col items-start gap-[30px] p-6 sm:p-[40px] lg:p-[50px] bg-black-10 border border-solid border-black-15 rounded-xl order-2">
      <article className="flex flex-col items-start gap-[14px] text-grey-60">
        <div className="flex items-center gap-1">
          <CiCalendar className="w-[18px] h-[18px]" />
          <h4 className="font-medium text-lg">Yayımlanma Tarihi</h4>
        </div>
        <p className="font-semibold text-xl text-white">{moment(release_date).format("LL")}</p>
      </article>
      <article className="flex flex-col items-start gap-[14px] text-grey-60">
        <div className="flex items-center gap-1">
          <HiTranslate className="w-[18px] h-[18px]" />
          <h4 className="font-medium text-lg">Mevcut Diller</h4>
        </div>
        <div className="flex items-center gap-[10px] row-auto">
          {spoken_languages?.map((item, index) => (
            <Badge key={index} className="bg-black-08 text-white border border-solid border-black-15 rounded-md py-2 px-[14px]">
              {item.english_name}
            </Badge>
          ))}
        </div>
      </article>
      <article className="flex flex-col items-start gap-[14px] text-grey-60">
        <div className="flex items-center gap-1">
          <FaRegStar className="w-[18px] h-[18px]" />
          <h4 className="font-medium text-lg">Derecelendirmeler</h4>
        </div>
        <div className="flex items-center justify-between gap-5 flex-wrap md:flex-nowrap">
          <div className="flex flex-col items-start gap-1 bg-black-08 border border-solid border-black-15 rounded-lg p-4">
            <p className="text-white font-semibold text-xl">IMDb</p>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-[2px]">
                {Array(fullStars)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} className="w-6 h-6 text-red-45" />
                  ))}
                {Array(emptyStars)
                  .fill(0)
                  .map((_, index) => (
                    <FaRegStar key={index} className="w-6 h-6" />
                  ))}
              </div>
              <p className="font-medium text-xl text-white">{(vote_average / 2).toFixed(0)}</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 bg-black-08 border border-solid border-black-15 rounded-lg p-4">
            <p className="text-white font-semibold text-xl">Streamvibe</p>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-[2px]">
                {Array(fullStars)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} className="w-6 h-6 text-red-45" />
                  ))}
                {Array(emptyStars)
                  .fill(0)
                  .map((_, index) => (
                    <FaRegStar key={index} className="w-6 h-6" />
                  ))}
              </div>
              <p className="font-medium text-xl text-white">{(vote_average / 2).toFixed(1)}</p>
            </div>
          </div>
        </div>
      </article>
      <article className="flex flex-col items-start gap-[14px] text-grey-60">
        <div className="flex items-center gap-1">
          <BiCategory className="w-[18px] h-[18px]" />
          <h4 className="font-medium text-lg">Kategoriler</h4>
        </div>
        <div className="flex items-center gap-[10px] flex-wrap">
          {genres.map((genre) => (
            <Badge key={genre.id} className="bg-black-08 text-white border border-solid border-black-15 rounded-md py-2 px-[14px]">
              {genre.name}
            </Badge>
          ))}
        </div>
      </article>
      <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-[30px]">
        <article className="w-full flex flex-col items-start gap-[14px] text-grey-60">
          <div className="flex items-center gap-1">
            <h4 className="font-medium text-lg">Yönetmen</h4>
          </div>
          <div className="max-w-[393px] w-full flex items-center gap-[10px] p-[14px] bg-black-08 border border-solid border-black-15 rounded-lg">
            <Image
              alt={director.name}
              src={`https://image.tmdb.org/t/p/w300${director.profile_path}`}
              width={57}
              height={60}
              className="rounded-lg max-h-[60px] max-w-[57px] object-fill"
            />
            <div className="flex flex-col items-start">
              <h4 className="text-white font-medium text-lg">{director.name}</h4>
              <p className="text-grey-60 font-medium text-base">{director.job}</p>
            </div>
          </div>
        </article>
        <article className="w-full flex flex-col items-start gap-[14px] text-grey-60">
          <div className="flex items-center gap-1">
            <h4 className="font-medium text-lg">Müzik</h4>
          </div>
          {sounds.slice(0, 1).map((sound) => (
            <div key={sound.id} className="max-w-[393px] w-full flex items-center gap-[10px] p-[14px] bg-black-08 border border-solid border-black-15 rounded-lg">
              <Image
                alt={sound.name}
                src={`https://image.tmdb.org/t/p/w300${sound.profile_path}`}
                width={57}
                height={60}
                className="rounded-lg max-h-[60px] max-w-[57px] object-fill"
              />
              <div className="flex flex-col items-start">
                <h4 className="text-white font-medium text-lg">{sound.name}</h4>
                <p className="text-grey-60 font-medium text-base">{sound.job}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </main>
  );
}
