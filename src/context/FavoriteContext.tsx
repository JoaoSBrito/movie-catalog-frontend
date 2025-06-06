import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { Movie } from "@/hooks/useMovies";
import { useAuth } from "@/hooks/useAuth";

interface FavoriteContextType {
  favorites: Movie[];
  isFavorite: (movieId: number) => boolean;
  toggleFavorite: (movie: Movie) => Promise<void>;
  loading: boolean;
}

const defaultProvider = {
  favorites: [],
  isFavorite: () => false,
  toggleFavorite: async () => {},
  loading: true,
};

export const FavoriteContext = React.createContext<FavoriteContextType>(
  defaultProvider as FavoriteContextType,
);

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetched, setFetched] = useState<boolean>(false);

  const { user } = useAuth();

  const addFavorite = async (movie: Movie) => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      await axios.post("http://localhost:80/api/favorite", {
        tmdb_id: movie.id,
      });

      setFavorites((prev) => {
        if (prev?.length && prev?.some((m) => m.id === movie.id)) {
          return prev;
        }
        return [...(prev ?? []), movie];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async (movieId: number) => {
    try {
      await axios.delete(`http://localhost:80/api/favorite/${movieId}`);
      setFavorites((prev) => prev?.filter((movie) => movie.id !== movieId));
    } catch (error) {
      console.log(error);
    }
  };

  const isFavorite = (movieId: number) => {
    if (!favorites) return false;

    return favorites.some((movie) => movie.id === movieId);
  };

  const toggleFavorite = async (movie: Movie) => {
    if (isFavorite(movie.id)) {
      await removeFavorite(movie.id);
    } else {
      await addFavorite(movie);
    }
  };

  const fetchFavorites = useCallback(async () => {
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      if (user && token && !favorites.length && !fetched) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await axios.get("http://localhost:80/api/favorite");
        setFavorites(response.data.favorites);
        setFetched(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [favorites, fetched, user]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      setFetched(false);
    }
  }, [user]);

  return (
    <FavoriteContext.Provider
      value={{ favorites, isFavorite, toggleFavorite, loading }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
