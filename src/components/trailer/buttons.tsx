"use client";
import React, { useCallback } from "react";
import Button from "../categoriesCarousel/carousel/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import ProgressBar from "../categoriesCarousel/carousel/progressBar";
import type { CarouselApi } from "../ui/carousel";
import styles from "./styles.module.css";

export default function TrailerButtons({ progress, api }: { progress: number; api: CarouselApi | null }) {
  const handleScrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleScrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  return (
    <article className="w-full flex-between">
      <Button onClick={handleScrollPrev} icon={<ArrowLeftIcon className="w-7 h-7" />} className={styles.trailerButton} />
      <ProgressBar progress={progress} />
      <Button onClick={handleScrollNext} icon={<ArrowRightIcon className="w-7 h-7" />} className={styles.trailerButton} />
    </article>
  );
}
