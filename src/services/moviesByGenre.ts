import { FetchResultType, GenresType, type moviesByGenresType, type MoviesType } from "./../types/index";
import { fetchApi } from "./fetchApi";
export const fetchMoviesByGenre = async (genres: GenresType[]): Promise<moviesByGenresType[]> => {
  const moviesByGenres = genres.map(async (genre) => {
    const data = await fetchApi<FetchResultType<MoviesType>>("discover/movie", 1, `&with_genres=${genre.id}&sort_by=popularity.desc&vote_count.gte=5000`);
    const moviesByGenre = {
      id: genre.id,
      genre: genre.name,
      movies: data.results.slice(0, 4).map((movie) => ({
        poster_path: movie.poster_path,
        original_title: movie.original_title,
      })),
    };
    return moviesByGenre;
  });
  return Promise.all(moviesByGenres);
};
