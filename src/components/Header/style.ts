import { Search } from 'lucide-react';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: linear-gradient(90deg, ${(props) => props.theme?.colors?.primary || "#01b4e4"} 0%, ${(props) => props.theme?.colors?.secondary || "#90cea1"} 100%);
  padding: ${(props) => props.theme?.spacing?.lg || "1.5rem"} 0;
  box-shadow: ${(props) => props.theme?.shadows?.md || "0 4px 6px rgba(0, 0, 0, 0.1)"};
`

export const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme?.spacing?.xl || "2rem"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme?.spacing?.lg || "1.5rem"};

  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    flex-direction: column;
    gap: ${(props) => props.theme?.spacing?.md || "1rem"};
    padding: 0 ${(props) => props.theme?.spacing?.md || "1rem"};
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    font-size: 1.25rem;
  }
`

export const SearchContainer = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;

  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    max-width: 100%;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: ${(props) => props.theme?.spacing?.md || "1rem"} ${(props) => props.theme?.spacing?.md || "1rem"} ${(props) => props.theme?.spacing?.md || "1rem"} 3rem;
  border: none;
  border-radius: ${(props) => props.theme?.borderRadius?.lg || "12px"};
  background: rgba(255, 255, 255, 0.95);
  color: ${(props) => props.theme?.colors?.background || "#0d253f"};
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: ${(props) => props.theme?.shadows?.sm || "0 1px 3px rgba(0, 0, 0, 0.12)"};

  &:focus {
    background: white;
    box-shadow: ${(props) => props.theme?.shadows?.lg || "0 10px 15px rgba(0, 0, 0, 0.1)"};
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #666;
  }
`

export const SearchIcon = styled(Search)`
  position: absolute;
  left: ${(props) => props.theme?.spacing?.md || "1rem"};
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  width: 20px;
  height: 20px;
`

export const FavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme?.spacing?.md || "1rem"};

  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    width: 100%;
    justify-content: center;
    margin-top: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  }
`
export const FavoriteLink = styled.button`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme?.spacing?.xs || "0.25rem"};
  padding: ${(props) => props.theme?.spacing?.sm || "0.5rem"} ${(props) => props.theme?.spacing?.md || "1rem"};
  border-radius: ${(props) => props.theme?.borderRadius?.md || "8px"};
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  color: white;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`

