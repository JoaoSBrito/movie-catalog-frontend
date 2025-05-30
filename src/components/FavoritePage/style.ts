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

export const FavoriteEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${(props) => props.theme?.spacing?.xxl || "3rem"} 0;
  max-width: 500px;
  margin: 0 auto;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme?.colors?.text || "#ffffff"};
    margin-bottom: ${(props) => props.theme?.spacing?.md || "1rem"};
  }

  p {
    color: ${(props) => props.theme?.colors?.textSecondary || "#a0aec0"};
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: ${(props) => props.theme?.spacing?.xl || "2rem"};
  }
`

export const FavoriteLoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  padding: ${(props) => props.theme?.spacing?.md || "1rem"} ${(props) => props.theme?.spacing?.xl || "2rem"};
  background: linear-gradient(90deg, ${(props) => props.theme?.colors?.primary || "#01b4e4"} 0%, ${(props) => props.theme?.colors?.secondary || "#90cea1"} 100%);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: ${(props) => props.theme?.borderRadius?.md || "8px"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme?.shadows?.md || "0 4px 6px rgba(0, 0, 0, 0.1)"};
  }

  &:active {
    transform: translateY(0);
  }
`


