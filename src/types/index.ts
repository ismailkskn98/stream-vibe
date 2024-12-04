export type FetchResultType<T> = {
  page: number;
  results: Array<T>;
};
export type FetchGenresType = {
  genres: {
    id: number;
    name: string;
  }[];
};

export type MoviesType = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type GenresType = {
  id: number;
  name: string;
};

export type moviesByGenresType = {
  id: number;
  genre: string;
  movies: Array<{ poster_path: string; original_title: string }>;
};

export type DeviceType = {
  title: string;
  description: string;
  Icon: React.ElementType;
};

export type AccordionItemType = {
  id: string | number;
  title: string;
  description: string;
};

export type PricingPlanType = {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  url: string;
};

export type FooterSectionItemType = {
  title: string;
  links: string[];
};

export type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type CategoryNamesType = {
  id: number;
  name: string;
};
