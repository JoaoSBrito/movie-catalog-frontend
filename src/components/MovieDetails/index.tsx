import { Movie } from "@/hooks/useMovies";
import { ActionButtons, BackdropImage, FavoriteButton, MetaItem, MovieContent, MovieDetailsContainer, MovieHero, MovieInfo, MovieMeta, MovieTitle, Overview, PosterImage, PosterPlaceholder, PosterWrapper, Rating } from "./style";
import { Calendar, Heart, Star } from "lucide-react";
import { formatDate, formatRating } from "@/utils";
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";

interface MovieDetailsProps {
  movie: Movie
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const { user } = useAuth();

  const { isFavorite, toggleFavorite } = useFavorites();

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      alert("Você precisa estar logado para adicionar um favorito")
    }
    toggleFavorite(movie)
  }


  return (
    <MovieDetailsContainer>
      <MovieHero>
        <BackdropImage backdropUrl={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} />
      </MovieHero>

      <MovieContent>
        <PosterWrapper>
          {movie.poster_path ?
            <PosterImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            : null
          }

          <PosterPlaceholder style={{ display: movie.poster_path ? "none" : "flex" }}>
            No Image Available
          </PosterPlaceholder>
        </PosterWrapper>

        <MovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>

          <MovieMeta>
            <Rating>
              <Star size={18} fill="currentColor" />
              {formatRating(movie.vote_average)}
            </Rating>

            <MetaItem>
              <Calendar size={16} />
              {formatDate(movie.release_date)}
            </MetaItem>
          </MovieMeta>

          <Overview>{movie.overview ?? 'Sem descrição'}</Overview>
          <ActionButtons>
            <FavoriteButton onClick={handleFavorite} isFavorite={isFavorite(movie.id)}>
              <Heart size={18} fill={isFavorite(movie.id) ? "currentColor" : "none"} />
              {isFavorite(movie.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            </FavoriteButton>
          </ActionButtons>
        </MovieInfo>
      </MovieContent>
    </MovieDetailsContainer>
  )
}