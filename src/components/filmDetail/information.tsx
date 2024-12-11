import React from "react";
import { CiCalendar } from "react-icons/ci";
import { HiTranslate } from "react-icons/hi";
import { Badge } from "../ui/badge";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import Image from "next/image";

export default function Information() {
  return (
    <main className="max-w-[519px] flex flex-col items-start gap-[30px] p-[50px] bg-black-10 border border-solid border-black-15 rounded-xl">
      <article className="flex flex-col items-start gap-[14px] text-grey-60">
        <div className="flex items-center gap-1">
          <CiCalendar className="w-[18px] h-[18px]" />
          <h4 className="font-medium text-lg">Yayımlanma Tarihi</h4>
        </div>
        <p className="font-semibold text-xl text-white">2022</p>
      </article>
      <article className="flex flex-col items-start gap-[14px] text-grey-60">
        <div className="flex items-center gap-1">
          <HiTranslate className="w-[18px] h-[18px]" />
          <h4 className="font-medium text-lg">Mevcut Diller</h4>
        </div>
        <div className="flex items-center gap-[10px] row-auto">
          <Badge className="bg-black-08 text-white border border-solid border-black-15 rounded-md py-2 px-[14px]">English</Badge>
          <Badge className="bg-black-08 text-white border border-solid border-black-15 rounded-md py-2 px-[14px]">Hindi</Badge>
          <Badge className="bg-black-08 text-white border border-solid border-black-15 rounded-md py-2 px-[14px]">Tamil</Badge>
          <Badge className="bg-black-08 text-white border border-solid border-black-15 rounded-md py-2 px-[14px]">Telegu</Badge>
        </div>
      </article>
      <article className="flex flex-col items-start gap-[14px] text-grey-60">
        <div className="flex items-center gap-1">
          <FaRegStar className="w-[18px] h-[18px]" />
          <h4 className="font-medium text-lg">Derecelendirmeler</h4>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-start gap-1 bg-black-08 border border-solid border-black-15 rounded-lg p-4">
            <p className="text-white font-semibold text-xl">IMDb</p>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-[2px]">
                <FaStar className="w-6 h-6 text-red-45" />
                <FaStar className="w-6 h-6 text-red-45" />
                <FaStar className="w-6 h-6 text-red-45" />
                <FaStar className="w-6 h-6 text-red-45" />
                <FaRegStar className="w-6 h-6" />
              </div>
              <p className="font-medium text-xl text-white">4.5</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 bg-black-08 border border-solid border-black-15 rounded-lg p-4">
            <p className="text-white font-semibold text-xl">Streamvibe</p>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-[2px]">
                <FaStar className="w-6 h-6 text-red-45" />
                <FaStar className="w-6 h-6 text-red-45" />
                <FaStar className="w-6 h-6 text-red-45" />
                <FaRegStar className="w-6 h-6" />
                <FaRegStar className="w-6 h-6" />
              </div>
              <p className="font-medium text-xl text-white">4</p>
            </div>
          </div>
        </div>
      </article>
      <article className="flex flex-col items-start gap-[14px] text-grey-60">
        <div className="flex items-center gap-1">
          <BiCategory className="w-[18px] h-[18px]" />
          <h4 className="font-medium text-lg">Tercihen</h4>
        </div>
        <div className="flex items-center gap-[10px]">
          <Badge className="bg-black-08 text-white border border-solid border-black-15 rounded-md py-2 px-[14px]">Sci-Fi TV</Badge>
          <Badge className="bg-black-08 text-white border border-solid border-black-15 rounded-md py-2 px-[14px]">Teen TV Shows</Badge>
          <Badge className="bg-black-08 text-white border border-solid border-black-15 rounded-md py-2 px-[14px]">US TV Shows</Badge>
        </div>
      </article>
      <article className="w-full flex flex-col items-start gap-[14px] text-grey-60">
        <div className="flex items-center gap-1">
          <BiCategory className="w-[18px] h-[18px]" />
          <h4 className="font-medium text-lg">Müdür</h4>
        </div>
        <div className="min-w-full flex items-center gap-[10px] p-[14px] bg-black-08 border border-solid border-black-15 rounded-lg">
          <Image alt="" src="https://fakeimg.pl/300/" width={57} height={60} className="rounded-lg" />
          <div className="flex flex-col items-start">
            <h4 className="text-white font-medium text-lg">The Duffer Brothers</h4>
            <p className="text-grey-60 font-medium text-base">From USA</p>
          </div>
        </div>
      </article>
      <article className="w-full flex flex-col items-start gap-[14px] text-grey-60">
        <div className="flex items-center gap-1">
          <BiCategory className="w-[18px] h-[18px]" />
          <h4 className="font-medium text-lg">Müzik</h4>
        </div>
        <div className="min-w-full flex items-center gap-[10px] p-[14px] bg-black-08 border border-solid border-black-15 rounded-lg">
          <Image alt="" src="https://fakeimg.pl/300/" width={57} height={60} className="rounded-lg" />
          <div className="flex flex-col items-start">
            <h4 className="text-white font-medium text-lg">Kyle Dixon</h4>
            <p className="text-grey-60 font-medium text-base">From USA</p>
          </div>
        </div>
      </article>
    </main>
  );
}
