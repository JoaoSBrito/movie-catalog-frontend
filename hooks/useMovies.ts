import { useEffect, useState } from 'react';
import axios from 'axios';

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
};

type UseMoviesResult = {
  data: Movie[] | null;
  loading: boolean;
  error: string | null;
};

export type MovieCategory = 'popular' | 'upcoming' | 'top_rated';

const useMovies = (category: MovieCategory): UseMoviesResult => {
  const [data, setData] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:80/api/movie/${category}`);
        setData(response.data.results);
      } catch (err: any) {
        setError(err.message || 'Erro ao buscar os filmes.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

  return { data, loading, error };
};

export default useMovies;
