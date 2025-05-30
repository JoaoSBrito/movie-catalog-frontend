import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from './useMovies';

// type UseFavoritesResult = {
//   data: Movie[] | null;
//   loading: boolean;
//   error: string | null;
//   to
// };

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const addFavorite = async (movie: Movie) => {
    try {
      await axios.post('http://localhost:80/api/favorite', {
        tmdb_id: movie.id,
      });

      setFavorites((prev) => {
        if (prev.some((m) => m.id === movie.id)) {
          return prev
        }
        return [...prev, movie]
      })
    } catch (error) {
      console.log(error);
    }
  }

  const removeFavorite = async (movieId: number) => {
    try {
      await axios.delete(`http://localhost:80/api/favorite/${movieId}`);
      setFavorites((prev) => prev.filter((movie) => movie.id !== movieId))
    } catch (error) {
      console.log(error);
    }
  }

  const isFavorite = (movieId: number) => {
    if (!favorites) return false;
    return favorites.some((movie) => movie.id === movieId)
  }

  const toggleFavorite = async (movie: Movie) => {
    if (isFavorite(movie.id)) {
      await removeFavorite(movie.id);
    } else {
      await addFavorite(movie);
    }
  };

  const fetchFavorites = useCallback(async () => {
    setLoading(true)
    setError(null);

    try {
      const response = await axios.get('http://localhost:80/api/favorite');
      setFavorites(response.data.results)
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar os filmes');
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites])

  return { favorites, loading, error, toggleFavorite, isFavorite };
};

export default useFavorites;
