export const moviesByIdCategory = async (id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${id}&language=tr-TR&sort_by=popularity.desc&vote_count.gte=100&page=1`
  );
  const data = await response.json();
  return data;
};
