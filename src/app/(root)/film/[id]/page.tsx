import CallToAction from "@/components/common/callToAction";
import CTAImages from "@/components/common/callToAction/images";
import Cast from "@/components/MovieAndShowDetail/cast";
import Description from "@/components/MovieAndShowDetail/description";
import Information from "@/components/MovieAndShowDetail/information";
import Reviews from "@/components/MovieAndShowDetail/reviews";
import ScreenControl from "@/components/MovieAndShowDetail/screenControl";
import MovieDetail from "@/components/movieDetail";
import { fetchApi } from "@/services/fetchApi";
import movieDetailFetch from "@/services/movieDetailFetch";
import type { CastType, FetchResultType, MovieDetailType, MoviesType, ReviewsType } from "@/types";
import React from "react";

export default async function page({ params }: { params: Promise<{ id: string; slug: string }> }) {
  const id = (await params).id;
  const [trendMoviesPage1, trendMoviesPage2, movie, cast, reviews] = await Promise.all([
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 1),
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 2),
    movieDetailFetch<MovieDetailType>(id, undefined, "language=tr-TR"),
    movieDetailFetch<CastType>(id, "credits", "language=tr-TR"),
    movieDetailFetch<ReviewsType>(id, "reviews", "language=us-US"),
  ]);
  const allMovies: MoviesType[] = [...trendMoviesPage1.results, ...trendMoviesPage2.results];
  const director = cast.crew.filter((crew) => crew.job === "Director");
  const sounds = cast.crew.filter((crew) => crew.job === "Original Music Composer");
  return (
    <section className="w-full my-[50px] space-y-36">
      <ScreenControl title={movie.title} image={movie.backdrop_path} description={movie.overview} />
      <MovieDetail>
        <main className="basis-4/5 w-full flex flex-col item-start gap-[30px] rounded-xl">
          <Description description={movie.overview} />
          <Cast cast={cast.cast} />
          {reviews.results.length > 0 && <Reviews reviews={reviews.results} />}
        </main>
        <Information
          director={director[0]}
          sounds={sounds}
          genres={movie.genres}
          release_date={movie.release_date}
          spoken_languages={movie.spoken_languages}
          vote_average={movie.vote_average}
        />
      </MovieDetail>
      <CallToAction>
        <CTAImages movies={allMovies} />
      </CallToAction>
    </section>
  );
}
