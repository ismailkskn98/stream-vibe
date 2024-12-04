"use client";
import React, { useCallback, useMemo } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import Button from "./button";
import ProgressBar from "./progressBar";
import { useAppSelector } from "@/lib/reduxHooks";
import styles from "./styles.module.css";

export default function Buttons({ api, id }: { id: number; api: CarouselApi | null }) {
  const carouselSlice = useAppSelector((state) => state.carousel[id]);

  const progress = useMemo(() => {
    return carouselSlice?.progress || 0;
  }, [carouselSlice]);

  const handleScrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const handleScrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <article className={styles.buttons}>
      <Button
        onClick={handleScrollPrev}
        icon={<RiArrowLeftLine className={`${styles.buttonIcon} group-hover:text-grey-60 transition-all duration-300`} />}
        className={`${styles.button} group`}
      />
      <ProgressBar progress={progress} />
      <Button
        onClick={handleScrollNext}
        icon={<RiArrowRightLine className={`${styles.buttonIcon} group-hover:text-grey-60 transition-all duration-300`} />}
        className={`${styles.button} group`}
      />
    </article>
  );
}
