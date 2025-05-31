import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { FavoriteContainer, FavoritesTitle, FavoriteContent, FavoriteEmpty, FavoriteLoginButton, GenreSelect } from "./style";
import { MoviesGrid } from "../MovieSection/style";
import { AlertCircle, Heart } from "lucide-react";

import Header from "../Header";
import AuthModal from "../AuthModal";
import Modal from "../Modal";
import MovieCard from "../MovieCard";
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";
import { Movie } from "@/hooks/useMovies";
import Loading from "../Loading";
import axios from "axios";

interface Genres {
  id: number,
  name: string
}

export default function FavoritePage() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  const [uniqueGenres, setUniqueGenres] = useState<Genres[]>([])

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearch("");
      return;
    }

    setSearch(query);
  }, []);

  const { user, setError } = useAuth();
  const { favorites, loading } = useFavorites();

  const closeModal = () => {
    setError(null)
    setOpenModal(false);
  }

  const fetcheGenres = useCallback(async () => {
    const response  = await axios.get('http://localhost:80/api/movie/genres')
    setUniqueGenres(response.data.genres)
  }, [])

  useEffect(() => {
    fetcheGenres()
  }, [fetcheGenres])

  const genresFiltered = useMemo(() => {
    const favoritesGenresIds = favorites.flatMap((favorite:Movie) => favorite.genres).map((genre:Genres) => genre?.id)
    const favoritesGenresIds2 = favorites.flatMap((favorite:Movie) => favorite.genre_ids)

    return uniqueGenres.filter((genre) => {
      return [...favoritesGenresIds, ...favoritesGenresIds2].includes(genre.id)
    })
    
  }, [uniqueGenres,favorites])

  const filteredFavorites = selectedGenreId
    ? favorites.filter((movie: Movie) =>
      movie.genres?.some((genre) => genre.id === selectedGenreId)
    )
    : favorites;

  return (
    <Fragment>
      <FavoriteContainer>
        <Header onSearch={handleSearch} />

        <FavoriteContent>
          <FavoritesTitle>
            <Heart size={24} />
            Meus Favoritos
          </FavoritesTitle>

          {loading && <Loading />}

          {!loading && genresFiltered.length > 0 && (
            <Fragment>
              {user && (
                <div style={{ margin: "1rem 0" }}>
                  <label htmlFor="genre-select">Filtrar por gênero: </label>
                  <GenreSelect
                    id="genre-select"
                    value={selectedGenreId ?? ""}
                    onChange={(e) =>
                      setSelectedGenreId(
                        e.target.value ? Number(e.target.value) : null
                      )
                    }
                  >
                    <option value="">Todos os gêneros</option>
                    {genresFiltered.map((genre: Genres) => (
                      <option key={genre.id} value={genre.id}>
                        {genre.name}
                      </option>
                    ))}
                  </GenreSelect>
                </div>
              )}

          {!user ? (
            <FavoriteEmpty>
              <AlertCircle size={64} />
              <h1>Não possui favoritos</h1>
              <p>Para visualizar seus favoritos é necessário estar logado!</p>
              <FavoriteLoginButton onClick={() => setOpenModal(true)}>Entrar</FavoriteLoginButton>
            </FavoriteEmpty>
          ) : (
            <Fragment>
              {filteredFavorites.length > 0 ? (
                <MoviesGrid>
                  {filteredFavorites?.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </MoviesGrid>
              ) : (
                <FavoriteEmpty>
                  <AlertCircle size={64} />
                  <h1>Não possui favoritos</h1>
                  <p>Para visualizar é necessário favoritar!</p>
                </FavoriteEmpty>
              )}
            </Fragment>
          )}
            </Fragment>
          )}
        </FavoriteContent>
      </FavoriteContainer>

      <Modal isOpen={openModal} onClose={closeModal}>
        <AuthModal onClose={closeModal} />
      </Modal>
    </Fragment>
  );
}