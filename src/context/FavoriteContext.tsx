import { Movie } from "@/hooks/useMovies";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const FavoriteContext = React.createContext<any>({} as any);

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true);

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
    return favorites.some((movie) => movie.id === movieId)
  }

  const toggleFavorite = async (movie: Movie) => {
    if (isFavorite(movie.id)) {
      await removeFavorite(movie.id);
    } else {
      await addFavorite(movie);
    }
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true)

      try {
        const response = await axios.get('http://localhost:80/api/favorite');
        setFavorites(response.data.results)
      } catch (err: any) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    }

    fetchFavorites();
  }, [])


  return (
    <FavoriteContext.Provider value={{ favorites, isFavorite, toggleFavorite, loading }}>{children}</FavoriteContext.Provider>
  )
}

export const useFavorite = () => useContext(FavoriteContext);