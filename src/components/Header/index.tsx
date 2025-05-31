import { Fragment, useState } from "react";
import { FavoriteContainer, FavoriteLink, HeaderContainer, HeaderContent, LoginLink, Logo, SearchContainer, SearchIcon, SearchInput } from "./style";
import { Film, Heart, LogOut, User } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import AuthModal from "../AuthModal";
import Modal from "../Modal";
import { toast } from "react-toastify";

interface HeaderProps {
  onSearch: (query: string) => void;
}
export default function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const { user, logout, setError } = useAuth();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      onSearch("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchQuery.trim()) return;
    onSearch(searchQuery.trim());
  }

  const closeModal = () => {
    setError(null);
    setOpenModal(false);
  }

  const Logout = () => {
    logout();
    toast.success('Deslogado com sucesso!')
  }

  return (
    <Fragment>
      <HeaderContainer>
        <HeaderContent>
          <Link href="/" onClick={() => {onSearch(""); setSearchQuery("")}}>
            <Logo>
              <Film size={24} />
              Catálogo de filmes
            </Logo>
          </Link>

          <SearchContainer>
            <form onSubmit={handleSubmit}>
              <SearchIcon />
              <SearchInput
                type="text"
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={handleChange}
              />
            </form>
          </SearchContainer>

          <FavoriteContainer>
            <Link href="/favorite">
              <FavoriteLink>
                <Heart size={18} />
                <span>Favoritos</span>
              </FavoriteLink>
            </Link>

            <LoginLink onClick={user ? Logout : () => setOpenModal(true)}>
              {user ? (
                <Fragment>
                  <LogOut size={18} />
                  Sair
                </Fragment>
              ) : (
                <Fragment>
                  <User size={18} />
                  Entrar
                </Fragment>
              )}
            </LoginLink>
          </FavoriteContainer>
        </HeaderContent>
      </HeaderContainer>

      <Modal isOpen={openModal} onClose={closeModal}>
        <AuthModal onClose={closeModal} />
      </Modal>
    </Fragment>
  );
}