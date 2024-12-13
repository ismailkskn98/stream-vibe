import CallToAction from "@/components/common/callToAction";
import CTAImages from "@/components/common/callToAction/images";
import Cast from "@/components/MovieAndShowDetail/cast";
import Description from "@/components/MovieAndShowDetail/description";
import Information from "@/components/MovieAndShowDetail/information";
import Reviews from "@/components/MovieAndShowDetail/reviews";
import ScreenControl from "@/components/MovieAndShowDetail/screenControl";
import MovieDetail from "@/components/movieDetail";
import { fetchApi } from "@/services/fetchApi";
import type { CastType, FetchResultType, movieDetailType, MoviesType, ReviewsType } from "@/types";
import React from "react";

const getMovieDetails = async (id: string) => {
  const apiKey = process.env.API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=tr-TR`);
  if (!res.ok) return null;
  return await res.json();
};
const getCast = async (id: string) => {
  const apiKey = process.env.API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=tr-TR`);
  if (!res.ok) return null;
  return await res.json();
};
const getReviews = async (id: string) => {
  const apiKey = process.env.API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=us-US`);
  if (!res.ok) return null;
  return await res.json();
};

export default async function page({ params }: { params: Promise<{ id: string; slug: string }> }) {
  const [trendMoviesPage1, trendMoviesPage2] = await Promise.all([
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 1),
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 2),
  ]);
  const allMovies: MoviesType[] = [...trendMoviesPage1.results, ...trendMoviesPage2.results];
  const id = (await params).id;
  const movie: movieDetailType = await getMovieDetails(id);
  const cast: CastType = await getCast(id);
  const reviews: ReviewsType = await getReviews(id);

  return (
    <section className="w-full my-[50px] space-y-36">
      <ScreenControl title={movie.title} image={movie.backdrop_path} description={movie.overview} />
      <MovieDetail>
        <main className="basis-4/5 w-full flex flex-col item-start gap-[30px] rounded-xl">
          <Description description={movie.overview} />
          <Cast cast={cast.cast} />
          {reviews.results.length > 0 && <Reviews reviews={reviews.results} />}
        </main>
        <Information />
      </MovieDetail>
      <CallToAction>
        <CTAImages movies={allMovies} />
      </CallToAction>
    </section>
  );
}
