import { useCallback, useState } from "react";
import { Container, Content } from "./style";

import Header from "../Header";
import MovieSection from "../MovieSection";

export default function Catalog() {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearch("");
      return;
    }

    setSearch(query);
  }, []);

  return (
    <Container>
      <Header onSearch={handleSearch} />
      <Content>

        {search ? (
          <MovieSection
            title={`Resultados da pesquisa por "${search}"`}
            search={search}
          />
        ) : (
          <>
            <MovieSection title="🔥 Populares" category="popular" />
            <MovieSection title="🎬 Lançamentos" category="upcoming" />
            <MovieSection title="⭐ Melhores Avaliados" category="top_rated" />
          </>
        )}

      </Content>
    </Container>
  )
}