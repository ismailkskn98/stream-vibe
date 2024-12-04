import type { MovieDetailType, MoviesType } from "@/types";
import { fetchApi } from "./fetchApi";

export const detailedMovies = async (movies: MoviesType[]) => {
  return Promise.all(
    movies.map(async (movie) => {
      const movieDetails = await fetchApi<MovieDetailType>(`movie/${movie.id}`, 1, "");
      return movieDetails;
    })
  );
};
