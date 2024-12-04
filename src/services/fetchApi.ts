const apiKey = process.env.API_KEY;
const baseUrl = "https://api.themoviedb.org/3";
export const fetchApi = async <T>(endpoint: string, page?: number, query?: string): Promise<T> => {
  try {
    const url = `${baseUrl}/${endpoint}?api_key=${apiKey}&language=tr-TR${query}${page && `&page=${page}`}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
