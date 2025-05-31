import { useRef } from "react";
import {
  CarouselButton,
  CarouselContainer,
  CarouselWrapper,
  MoviesCarousel,
  MoviesGrid,
  SectionContainer,
  SectionTitle,
} from "./style";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useMovies, { MovieCategory } from "@/hooks/useMovies";

import MovieCard from "../MovieCard";
import Loading from "../Loading";

interface MovieSectionProps {
  title: string;
  category?: MovieCategory;
  search?: string;
}

export default function MovieSection({
  category,
  title,
  search,
}: MovieSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const { data, loading, error } = useMovies({ category, search });

  if (error) return <p>Erro: {error}</p>;

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>

      {loading && <Loading />}

      {!loading && (
        <>
          {search ? (
            <MoviesGrid>
              {data?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </MoviesGrid>
          ) : (
            <CarouselContainer>
              <CarouselButton onClick={scrollLeft} position="left">
                <ChevronLeft size={24} />
              </CarouselButton>

              <CarouselWrapper>
                <MoviesCarousel ref={carouselRef}>
                  {data?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </MoviesCarousel>
              </CarouselWrapper>

              <CarouselButton onClick={scrollRight} position="right">
                <ChevronRight size={24} />
              </CarouselButton>
            </CarouselContainer>
          )}
        </>
      )}
    </SectionContainer>
  );
}
