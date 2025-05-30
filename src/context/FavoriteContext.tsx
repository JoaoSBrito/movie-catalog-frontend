import { Movie } from "@/hooks/useMovies";
import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";

const defaultProvider = {
  favorites: [],
  isFavorite: () => null,
  toggleFavorite: () => null
}


export const FavoriteContext = React.createContext<any>(defaultProvider as any);

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true);

  const addFavorite = async (movie: Movie) => {
    try {
      await axios.post('http://localhost:80/api/favorite', {
        tmdb_id: movie.id,
      });

      setFavorites((prev) => {
        if (prev?.length && prev?.some((m) => m.id === movie.id)) {
          return prev
        }
        return [...(prev ?? []), movie]
      })
    } catch (error) {
      console.log(error);
    }
  }

  const removeFavorite = async (movieId: number) => {
    try {
      await axios.delete(`http://localhost:80/api/favorite/${movieId}`);
      setFavorites((prev) => prev?.filter((movie) => movie.id !== movieId))
    } catch (error) {
      console.log(error);
    }
  }

  const isFavorite = (movieId: number) => {
    if (!favorites) return false

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
    // setLoading(true)
    // setError(null);


    try {
      const token = localStorage.getItem('token');
      console.log('fetch', token, favorites.length);

      if (token && !favorites.length) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await axios.get('http://localhost:80/api/favorite');
        setFavorites(response.data.favorites)
      }
    } catch (err: any) {
      // setError(err.message || 'Erro ao buscar os filmes');
    } finally {
      // setLoading(false)
    }
  }, [favorites])

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites])

  return (
    <FavoriteContext.Provider value={{ favorites, isFavorite, toggleFavorite, loading }}>{children}</FavoriteContext.Provider>
  )
}