import Cast from "@/components/MovieAndShowDetail/cast";
import Description from "@/components/MovieAndShowDetail/description";
import Information from "@/components/MovieAndShowDetail/information";
import MovieDetail from "@/components/movieDetail";
import React from "react";

const getMovieDetails = async (id: string) => {
  const apiKey = process.env.API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
  if (!res.ok) return null;
  return await res.json();
};

export default async function page({ params }: { params: Promise<{ id: string; slug: string }> }) {
  const id = (await params).id;
  const movie = await getMovieDetails(id);
  return (
    <section className="w-full my-[115px]">
      <MovieDetail>
        <main className="basis-4/5 w-full flex flex-col item-start gap-[30px] rounded-xl">
          <Description />
          <Cast />
        </main>
        <Information />
      </MovieDetail>
    </section>
  );
}

/*

  adult: false;
  backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg";
  belongs_to_collection: {
    id: 230;
    name: "The Godfather Collection";
    poster_path: "/esb8Ng3xt4bLaiaIEJ0NAVt5rls.jpg";
    backdrop_path: "/mDMCET9Ens5ANvZAWRpluBsMAtS.jpg";
  };
  budget: 6000000;
  genres: [{ id: 18; name: "Drama" }, { id: 80; name: "Crime" }];
  homepage: "http://www.thegodfather.com/";
  id: 238;
  imdb_id: "tt0068646";
  origin_country: ["US"];
  original_language: "en";
  original_title: "The Godfather";
  overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.";
  popularity: 190.434;
  poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg";
  production_companies: [
    {
      id: 4;
      logo_path: "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png";
      name: "Paramount Pictures";
      origin_country: "US";
    },
    {
      id: 10211;
      logo_path: null;
      name: "Alfran Productions";
      origin_country: "US";
    }
  ];
  production_countries: [{ iso_3166_1: "US"; name: "United States of America" }];
  release_date: "1972-03-14";
  revenue: 245066411;
  runtime: 175;
  spoken_languages: [
    { english_name: "English"; iso_639_1: "en"; name: "English" },
    { english_name: "Italian"; iso_639_1: "it"; name: "Italiano" },
    { english_name: "Latin"; iso_639_1: "la"; name: "Latin" }
  ];
  status: "Released";
  tagline: "An offer you can't refuse.";
  title: "The Godfather";
  video: false;
  vote_average: 8.689;
  vote_count: 20701;

 */
