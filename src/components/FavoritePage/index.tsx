/* eslint-disable */
import { Fragment, useCallback, useState } from "react";
import { FavoriteContainer, FavoritesTitle, FavoriteContent } from "./style";
import { MoviesGrid } from "../MovieSection/style";
import { Heart } from "lucide-react";

import Header from "../Header";
import AuthModal from "../AuthModal";
import Modal from "../Modal";
import MovieCard from "../MovieCard";
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";

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

          <MoviesGrid>
            {/* .map com movieCard e favoritos */}
            {/* {!user && (
              <Fragment>
                <div>Você não esta logado</div>
                <button onClick={() => setOpenModal(true)}>Login</button>
              </Fragment>
            )} */}
            {!user ? (
              <Fragment>
                <div>Você não esta logado</div>
                <button onClick={() => setOpenModal(true)}>Login</button>
              </Fragment>
            ) : (
              <Fragment>
                {favorites?.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </Fragment>
            )}

          </MoviesGrid>
        </FavoriteContent>
      </FavoriteContainer>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <AuthModal onClose={() => setOpenModal(false)} />
      </Modal>
    </Fragment>
  );
}