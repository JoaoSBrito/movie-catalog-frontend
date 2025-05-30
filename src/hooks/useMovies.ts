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

interface UseMoviesProps {
  category?: MovieCategory;
  search?: string;
}

const useMovies = ({ category, search }: UseMoviesProps): UseMoviesResult => {
  const [data, setData] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        if (search) {
          const response = await axios.get(`http://localhost:80/api/movie/search?query=${encodeURIComponent(search)}`);
          setData(response.data.results);
          return;
        } else {
          const response = await axios.get(`http://localhost:80/api/movie/${category}`);
          setData(response.data.results);
        }
      } catch (err: any) {
        setError(err.message || 'Erro ao buscar os filmes.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category, search]);

  return { data, loading, error };
};

export default useMovies;
