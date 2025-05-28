import { Film } from "lucide-react";
import { HeaderContainer, HeaderContent, Logo, SearchContainer, SearchIcon, SearchInput } from "./style";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Film size={32} />
          Catálogo de filmes
        </Logo>

        <SearchContainer>
          <form>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search for movies..."
            />
          </form>
        </SearchContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}