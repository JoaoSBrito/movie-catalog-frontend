/* eslint-disable */

import { Calendar, Heart, Star } from "lucide-react"
import {
  Card,
  PosterContainer,
  Content,
  Title,
  MetaInfo,
  Rating,
  ReleaseDate,
  Poster,
  PosterPlaceholder,
  Overview,
  FavoriteButton,
} from "./style"
import React from "react"
import { useFavorites } from "@/hooks/useFavorites";

export default function MovieCard({ movie }: any) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const formatDate = (dateString: string) => {
    if (!dateString) return "TBA"
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR")
  }

  const formatRating = (rating: number) => {
    return rating ? rating.toFixed(1) : "N/A"
  }

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(movie)
  }

  return (
    <Card>
      <PosterContainer>
        {movie.poster_path ?
          <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          : null
        }

        <PosterPlaceholder style={{ display: movie.poster_path ? "none" : "flex" }}>
          No Image Available
        </PosterPlaceholder>

        <FavoriteButton onClick={handleFavorite} isFavorite={isFavorite(movie.id)}>
          <Heart size={16} />
        </FavoriteButton>
      </PosterContainer>

      <Content>
        <Title>{movie.title}</Title>

        <MetaInfo>
          <Rating>
            <Star size={14} fill="currentColor" />
            {formatRating(movie.vote_average)}
          </Rating>
          <ReleaseDate>
            <Calendar size={12} />
            {formatDate(movie.release_date)}
          </ReleaseDate>
        </MetaInfo>

        {movie.overview ? <Overview>{movie.overview}</Overview> : <Overview>Sem descrição</Overview>}
      </Content>
    </Card>
  )
}