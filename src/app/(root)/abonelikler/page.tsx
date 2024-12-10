import CallToAction from "@/components/common/callToAction";
import CTAImages from "@/components/common/callToAction/images";
import FeaturesComparison from "@/components/featuresComparison";
import Pricing from "@/components/pricing";
import { fetchApi } from "@/services/fetchApi";
import type { FetchResultType, MoviesType } from "@/types";
import React from "react";

export default async function page() {
  const [trendMoviesPage1, trendMoviesPage2] = await Promise.all([
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 1),
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 2),
  ]);
  const allMovies: MoviesType[] = [...trendMoviesPage1.results, ...trendMoviesPage2.results];
  return (
    <section className="w-full mt-36 space-y-36">
      <Pricing />
      <FeaturesComparison />
      <CallToAction>
        <CTAImages movies={allMovies} />
      </CallToAction>
    </section>
  );
}
