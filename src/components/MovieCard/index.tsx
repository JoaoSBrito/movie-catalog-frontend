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
import React, { Fragment, useState } from "react"
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";
import MovieDetails from "../MovieDetails";
import Modal from "../Modal";
import { formatDate, formatRating } from "@/utils";
import { toast } from "react-toastify";

export default function MovieCard({ movie }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { toggleFavorite, isFavorite } = useFavorites();
  const { user } = useAuth();

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      toast.error("Você precisa estar logado!");
    }
    toggleFavorite(movie)
  }

  return (
    <Fragment>
      <Card onClick={() => setIsModalOpen(true)}>
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <MovieDetails movie={movie} />
      </Modal>
    </Fragment>
  )
}