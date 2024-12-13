const apiKey = process.env.API_KEY;
export default async function movieDetailFetch<T>(id: string, path?: string, query?: string): Promise<T> {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}${path && `/${path}`}?api_key=${apiKey}${query && `&${query}`}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: T = await response.json();
  return data;
}
