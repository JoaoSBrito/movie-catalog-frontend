import useMovies, { MovieCategory } from "@/hooks/useMovies";
import { CarouselButton, CarouselContainer, CarouselWrapper, MoviesCarousel, SectionContainer, SectionTitle } from "./style";
import MovieCard from "../MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface MovieSectionProps {
  title: string;
  category: MovieCategory;
}

export default function MovieSection({ category, title }: MovieSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const { data, loading, error } = useMovies(category);

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro: {error}</p>
  if (!data) return null;

  console.log(`category: ${category}`, data);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }


  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>

      <>
        <CarouselContainer>
          <CarouselButton onClick={scrollLeft} position="left">
            <ChevronLeft size={24} />
          </CarouselButton>

          <CarouselWrapper>
            <MoviesCarousel ref={carouselRef}>
              {data.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MoviesCarousel>
          </CarouselWrapper>

          <CarouselButton onClick={scrollRight} position="right">
            <ChevronRight size={24} />
          </CarouselButton>
        </CarouselContainer>
      </>
    </SectionContainer>
  );
}