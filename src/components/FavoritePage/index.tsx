/* eslint-disable */
import { Fragment, useCallback, useState } from "react";
import { FavoriteContainer, FavoritesTitle, FavoriteContent, FavoriteEmpty, FavoriteLoginButton } from "./style";
import { MoviesGrid } from "../MovieSection/style";
import { AlertCircle, Heart } from "lucide-react";

import Header from "../Header";
import AuthModal from "../AuthModal";
import Modal from "../Modal";
import MovieCard from "../MovieCard";
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";
import { Movie } from "@/hooks/useMovies";

export default function FavoritePage() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearch("");
      return;
    }

    setSearch(query);
  }, []);

  const { user } = useAuth();
  const { favorites } = useFavorites();

  return (
    <Fragment>
      <FavoriteContainer>
        <Header onSearch={handleSearch} />

        <FavoriteContent>
          <FavoritesTitle>
            <Heart size={24} />
            Meus Favoritos
          </FavoritesTitle>

          {!user ? (
            <FavoriteEmpty>
              <AlertCircle size={64} />
              <h1>Não possui favoritos</h1>
              <p>Para visualizar seus favoritos é necessário estar logado!</p>
              <FavoriteLoginButton onClick={() => setOpenModal(true)}>Entrar</FavoriteLoginButton>
            </FavoriteEmpty>
          ) : (
            <MoviesGrid>
              {favorites.length > 0 && (
                <Fragment>
                  {favorites?.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </Fragment>
              )}
            </MoviesGrid>
          )}
        </FavoriteContent>
      </FavoriteContainer>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <AuthModal onClose={() => setOpenModal(false)} />
      </Modal>
    </Fragment>
  );
}