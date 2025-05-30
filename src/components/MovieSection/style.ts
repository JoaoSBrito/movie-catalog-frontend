import styled from "styled-components"

export const SectionContainer = styled.section`
  margin-bottom: ${(props) => props.theme?.spacing?.xxl || "3rem"};
`

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme?.colors?.text || "#ffffff"};
  margin-bottom: ${(props) => props.theme?.spacing?.xl || "2rem"};
  padding-bottom: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  border-bottom: 3px solid ${(props) => props.theme?.colors?.primary || "#01b4e4"};
  display: inline-block;

  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    font-size: 1.5rem;
    margin-bottom: ${(props) => props.theme?.spacing?.lg || "1.5rem"};
  }
`

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme?.spacing?.xl || "2rem"};
`

export const CarouselWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  margin: 0 ${(props) => props.theme?.spacing?.md || "1rem"};
  
  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    margin: 0 ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  }
`

export const MoviesCarousel = styled.div`
  display: flex;
  gap: ${(props) => props.theme?.spacing?.lg || "1.5rem"};
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: ${(props) => props.theme?.spacing?.sm || "0.5rem"} 0;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Movie card sizing in carousel */
  & > * {
    flex: 0 0 200px;
    
    @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
      flex: 0 0 160px;
    }
    
    @media (max-width: ${(props) => props.theme?.breakpoints?.mobile || "480px"}) {
      flex: 0 0 140px;
    }
  }

  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    gap: ${(props) => props.theme?.spacing?.md || "1rem"};
  }
`

export const CarouselButton = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => props.position}: ${(props) => props.theme?.spacing?.xs || "0.25rem"};
  
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    width: 40px;
    height: 40px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: ${(props) => props.theme?.breakpoints?.mobile || "480px"}) {
    display: none;
  }
`

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${(props) => props.theme?.spacing?.lg || "1.5rem"};
  margin-bottom: ${(props) => props.theme?.spacing?.xl || "2rem"};

  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: ${(props) => props.theme?.spacing?.md || "1rem"};
  }

  @media (max-width: ${(props) => props.theme?.breakpoints?.mobile || "480px"}) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: ${(props) => props.theme?.spacing?.md || "1rem"};
  }
`
