import CategoriesCarousel from "@/components/categoriesCarousel";
import CallToAction from "@/components/common/callToAction";
import CTAImages from "@/components/common/callToAction/images";
import Trailer from "@/components/trailer";
import TrailerSection from "@/components/trailer/section";
import { detailedMovies } from "@/services/detailedMovies";
import { fetchApi } from "@/services/fetchApi";
import { fetchMoviesByGenre } from "@/services/moviesByGenre";
import type { FetchGenresType, FetchResultType, MovieDetailType, MoviesType } from "@/types";
import React from "react";

export default async function page() {
  const [genres, movies, trendMoviesPage1, trendMoviesPage2] = await Promise.all([
    fetchApi<FetchGenresType>("genre/movie/list"),
    fetchApi<FetchResultType<MoviesType>>("discover/movie", 1, `&sort_by=vote_average.desc&vote_count.gte=1000`),
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 1),
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 2),
  ]);
  const moviesByGenre = await fetchMoviesByGenre(genres.genres);
  const allMovies: MoviesType[] = [...trendMoviesPage1.results, ...trendMoviesPage2.results]; // ortalama 40 film geliyor page başı 20 tane
  const moviesDetails: MovieDetailType[] = await detailedMovies(movies.results);
  return (
    <section className="my-[50px] space-y-36">
      <Trailer movies={movies.results} />
      <TrailerSection title="Filmler">
        <CategoriesCarousel moviesByGenre={moviesByGenre.slice(0, 8)} id={Math.ceil(Math.random() * 10000)} title="Türlerimiz" />
        <CategoriesCarousel moviesDetailsItems={moviesDetails.slice(0, 8)} id={Math.ceil(Math.random() * 10000)} title="Şu Anda Trend Olanlar" />
      </TrailerSection>
      {/* <MoviesAndShow title="Diziler">
        <CategoriesCarousel moviesByGenre={moviesByGenre.slice(0, 8)} id={Math.ceil(Math.random() * 10000)} title="Türlerimiz" />
        <CategoriesCarousel moviesItems={moviesDetails.slice(0, 8)} id={Math.ceil(Math.random() * 10000)} title="Şu Anda Trend Olanlar" />
      </MoviesAndShow> */}
      <CallToAction>
        <CTAImages movies={allMovies} />
      </CallToAction>
    </section>
  );
}
