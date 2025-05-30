import styled from "styled-components";

export const FavoriteContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme?.colors?.background || "#0d253f"};
`

export const FavoriteContent = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${(props) => props.theme?.spacing?.xl || "2rem"};

  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    padding: ${(props) => props.theme?.spacing?.md || "1rem"};
  }
`

export const FavoritesTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme?.colors?.text || "#ffffff"};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  margin-bottom: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  margin-top: ${(props) => props.theme?.spacing?.xl || "2rem"};

  svg {
    color: ${(props) => props.theme?.colors?.accent || "#ffd700"};
  }

  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    font-size: 1.5rem;
  }
`


