import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieHero = styled.div`
  position: relative;
  height: 300px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    ${(props) => props.theme?.colors?.surface || "#1a365d"}
  );
  overflow: hidden;

  @media (max-width: ${(props) =>
      props.theme?.breakpoints?.tablet || "768px"}) {
    height: 200px;
  }
`;

export const BackdropImage = styled.div<{ backdropUrl?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${(props) =>
    props.backdropUrl ? `url(${props.backdropUrl})` : "none"};
  background-size: cover;
  background-position: center;
  opacity: 0.4;
  filter: blur(2px);
`;

export const MovieContent = styled.div`
  display: flex;
  padding: ${(props) => props.theme?.spacing?.xl || "2rem"};
  gap: ${(props) => props.theme?.spacing?.xl || "2rem"};

  @media (max-width: ${(props) =>
      props.theme?.breakpoints?.tablet || "768px"}) {
    flex-direction: column;
    padding: ${(props) => props.theme?.spacing?.md || "1rem"};
    gap: ${(props) => props.theme?.spacing?.lg || "1.5rem"};
  }
`;

export const PosterWrapper = styled.div`
  flex: 0 0 250px;
  position: relative;
  margin-top: -100px;
  z-index: 2;

  @media (max-width: ${(props) =>
      props.theme?.breakpoints?.tablet || "768px"}) {
    flex: 0 0 auto;
    margin-top: -80px;
    width: 150px;
    align-self: center;
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${(props) => props.theme?.borderRadius?.lg || "12px"};
  box-shadow: ${(props) =>
    props.theme?.shadows?.lg || "0 10px 15px rgba(0, 0, 0, 0.1)"};
`;

export const PosterPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 2/3;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme?.colors?.card || "#2d3748"} 0%,
    ${(props) => props.theme?.colors?.background || "#0d253f"} 100%
  );
  border-radius: ${(props) => props.theme?.borderRadius?.lg || "12px"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme?.colors?.textSecondary || "#a0aec0"};
  font-size: 0.9rem;
  text-align: center;
  padding: ${(props) => props.theme?.spacing?.md || "1rem"};
  box-shadow: ${(props) =>
    props.theme?.shadows?.lg || "0 10px 15px rgba(0, 0, 0, 0.1)"};
`;

export const MovieInfo = styled.div`
  flex: 1;
`;

export const MovieTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme?.colors?.text || "#ffffff"};
  margin-bottom: ${(props) => props.theme?.spacing?.sm || "0.5rem"};

  @media (max-width: ${(props) =>
      props.theme?.breakpoints?.tablet || "768px"}) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const MovieMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme?.spacing?.md || "1rem"};
  margin-bottom: ${(props) => props.theme?.spacing?.lg || "1.5rem"};
  flex-wrap: wrap;

  @media (max-width: ${(props) =>
      props.theme?.breakpoints?.tablet || "768px"}) {
    justify-content: center;
    gap: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  }
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme?.spacing?.xs || "0.25rem"};
  color: ${(props) => props.theme?.colors?.textSecondary || "#a0aec0"};
  font-size: 0.9rem;
`;

export const Rating = styled(MetaItem)`
  color: ${(props) => props.theme?.colors?.accent || "#ffd700"};
  font-weight: 600;
`;

export const Overview = styled.div`
  color: ${(props) => props.theme?.colors?.text || "#ffffff"};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme?.spacing?.xl || "2rem"};

  @media (max-width: ${(props) =>
      props.theme?.breakpoints?.tablet || "768px"}) {
    font-size: 0.9rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: ${(props) => props.theme?.spacing?.md || "1rem"};

  @media (max-width: ${(props) =>
      props.theme?.breakpoints?.tablet || "768px"}) {
    justify-content: center;
  }
`;

export const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  padding: ${(props) => props.theme?.spacing?.md || "1rem"}
    ${(props) => props.theme?.spacing?.lg || "1.5rem"};
  background: ${(props) =>
    props.isFavorite
      ? props.theme?.colors?.accent || "#ffd700"
      : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) =>
    props.isFavorite ? "#000" : props.theme?.colors?.text || "#ffffff"};
  border: none;
  border-radius: ${(props) => props.theme?.borderRadius?.md || "8px"};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.isFavorite ? "#e6c200" : "rgba(255, 255, 255, 0.2)"};
    transform: translateY(-2px);
  }
`;
