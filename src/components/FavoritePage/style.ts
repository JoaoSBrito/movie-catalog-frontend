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
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme?.colors?.text || "#ffffff"};
  }

  p {
    color: ${(props) => props.theme?.colors?.textSecondary || "#a0aec0"};
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

export const GenreSelect = styled.select`
  padding: ${(props) => props.theme?.spacing?.sm || "0.75rem"};
  background-color: ${(props) => props.theme?.colors?.background || "#13344f"};
  color: ${(props) => props.theme?.colors?.text || "#ffffff"};
  border: 1px solid ${(props) => props.theme?.colors?.primary || "#01b4e4"};
  border-radius: ${(props) => props.theme?.borderRadius?.md || "8px"};
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem 0;
  width: 100%;
  max-width: 200px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme?.colors?.accent || "#ffd700"};
    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme?.colors?.secondary || "#90cea1"};
    box-shadow: 0 0 0 3px rgba(144, 206, 161, 0.3);
  }

  option {
    background-color: ${(props) => props.theme?.colors?.background || "#0d253f"};
    color: ${(props) => props.theme?.colors?.text || "#ffffff"};
  }
`;

