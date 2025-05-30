import { useState } from "react";
import { FavoriteContainer, FavoriteLink, HeaderContainer, HeaderContent, Logo, SearchContainer, SearchIcon, SearchInput } from "./style";
import { Film, Heart } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  onSearch: (query: string) => void;
}
export default function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <Logo>
            <Film size={32} />
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
        </FavoriteContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}