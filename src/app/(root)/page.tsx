import CategoriesCarousel from "@/components/categoriesCarousel";
import CallToAction from "@/components/common/callToAction";
import CTAImages from "@/components/common/callToAction/images";
import Devices from "@/components/devices";
import Faq from "@/components/faq";
import HeroSection from "@/components/heroSection";
import BackgroundImages from "@/components/heroSection/backgroundImages";
import Pricing from "@/components/pricing";
import { fetchApi } from "@/services/fetchApi";
import { fetchMoviesByGenre } from "@/services/moviesByGenre";
import type { FetchGenresType, FetchResultType, GenresType, moviesByGenresType, MoviesType } from "@/types";

export default async function Home() {
  const [trendMoviesPage1, trendMoviesPage2, genresResult] = await Promise.all([
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 1),
    fetchApi<FetchResultType<MoviesType>>("movie/popular", 2),
    fetchApi<FetchGenresType>("genre/movie/list"),
  ]);
  const allMovies: MoviesType[] = [...trendMoviesPage1.results, ...trendMoviesPage2.results]; // ortalama 40 film geliyor page başı 20 tane
  const genresList: GenresType[] = genresResult.genres;
  const moviesByGenre: moviesByGenresType[] = await fetchMoviesByGenre(genresList);
  return (
    <>
      <BackgroundImages movies={allMovies} />
      <section className="space-y-36">
        <HeroSection />
        <CategoriesCarousel
          id={1}
          title="Geniş kategori çeşitlerimizi keşfedin"
          description="Sizi güldürecek bir komedi, düşündürecek bir drama veya yeni bir şeyler öğrenmenizi sağlayacak bir belgesel arıyorsanız"
          home={true}
          moviesByGenre={moviesByGenre}
        />
        <Devices />
        <Faq />
        <Pricing />
        <CallToAction>
          <CTAImages movies={allMovies} />
        </CallToAction>
      </section>
    </>
  );
}
