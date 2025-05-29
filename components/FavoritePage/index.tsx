import { Fragment, useCallback, useState } from "react";
import { FavoriteContainer, FavoritesTitle, FavoriteContent } from "./style";
import { MoviesGrid } from "../MovieSection/style";
import { Heart } from "lucide-react";

import Header from "../Header";
import { useAuth } from "@/context/AuthContext";
import AuthModal from "../AuthModal";
import Modal from "../Modal";

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

            {!user && (
              <>
                <div>Você não esta logado</div>
                <button onClick={() => setOpenModal(true)}>Login</button>
              </>
            )}

            {user && (
              <div>teste</div>
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