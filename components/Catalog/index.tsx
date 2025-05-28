import Header from "../Header";
import MovieSection from "../MovieSection";
import { Container, Content } from "./style";

export default function Catalog() {


  return (
    <Container>
      <Header />
      <Content>

        <MovieSection title="🔥 Populares" category="popular" />
        <MovieSection title="🎬 Lançamentos" category="upcoming" />
        <MovieSection title="⭐ Melhores Avaliados" category="top_rated" />
      </Content>
    </Container>
  )
}