import { useState } from "react";
import { HeaderContainer, HeaderContent, Logo, SearchContainer, SearchIcon, SearchInput } from "./style";
import { Film } from "lucide-react";

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
        <Logo>
          <Film size={32} />
          Catálogo de filmes
        </Logo>

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
      </HeaderContent>
    </HeaderContainer>
  );
}