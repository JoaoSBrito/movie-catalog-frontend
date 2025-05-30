import { Fragment, useCallback, useState } from "react";
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

export default function FavoritePage() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);

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

    const uniqueGenres = Array.from(
    new Map(
      favorites
        .flatMap((movie: Movie) => movie.genres || [])
        .map((genre: Movie) => [genre.id, genre])
    ).values()
  );

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

          {!loading && (
            <Fragment>
              {user && uniqueGenres.length > 0 && (
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
                    {uniqueGenres.map((genre: any) => (
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
                <MoviesGrid>
                  {filteredFavorites.length > 0 && (
                    <Fragment>
                      {filteredFavorites?.map((movie: Movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                      ))}
                    </Fragment>
                  )}
                </MoviesGrid>
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