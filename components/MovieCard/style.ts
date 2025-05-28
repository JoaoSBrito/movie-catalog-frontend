import styled from "styled-components"

export const Card = styled.div`
  background: ${(props) => props.theme?.colors?.card || "#2d3748"};
  border-radius: ${(props) => props.theme?.borderRadius?.lg || "12px"};
  overflow: hidden;
  box-shadow: ${(props) => props.theme?.shadows?.md || "0 4px 6px rgba(0, 0, 0, 0.1)"};
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  
  /* Fixed heights for consistency */
  height: 420px;

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: ${(props) => props.theme?.shadows?.xl || "0 20px 25px rgba(0, 0, 0, 0.1)"};
    z-index: 1;
  }

  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    height: 380px;
    
    &:hover {
      transform: translateY(-4px) scale(1.02);
    }
  }

  @media (max-width: ${(props) => props.theme?.breakpoints?.mobile || "480px"}) {
    height: 340px;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`

export const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  /* Reduced aspect ratio to give more space for content */
  aspect-ratio: 2/2.5;
  overflow: hidden;
`

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`

export const PosterPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${(props) => props.theme?.colors?.surface || "#1a365d"} 0%, ${(props) => props.theme?.colors?.card || "#2d3748"} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme?.colors?.textSecondary || "#a0aec0"};
  font-size: 0.9rem;
  text-align: center;
  padding: ${(props) => props.theme?.spacing?.md || "1rem"};
`

export const Content = styled.div`
  padding: ${(props) => props.theme?.spacing?.md || "1rem"};
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;

  @media (max-width: ${(props) => props.theme?.breakpoints?.mobile || "480px"}) {
    padding: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  }
`

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme?.colors?.text || "#ffffff"};
  margin-bottom: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme?.breakpoints?.mobile || "480px"}) {
    font-size: 0.9rem;
  }
`

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  gap: ${(props) => props.theme?.spacing?.sm || "0.5rem"};

  @media (max-width: ${(props) => props.theme?.breakpoints?.mobile || "480px"}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${(props) => props.theme?.spacing?.xs || "0.25rem"};
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme?.spacing?.xs || "0.25rem"};
  color: ${(props) => props.theme?.colors?.accent || "#ffd700"};
  font-weight: 600;
  font-size: 0.9rem;

  @media (max-width: ${(props) => props.theme?.breakpoints?.mobile || "480px"}) {
    font-size: 0.8rem;
  }
`

export const ReleaseDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme?.spacing?.xs || "0.25rem"};
  color: ${(props) => props.theme?.colors?.textSecondary || "#a0aec0"};
  font-size: 0.8rem;

  @media (max-width: ${(props) => props.theme?.breakpoints?.mobile || "480px"}) {
    font-size: 0.75rem;
  }
`

export const Overview = styled.div`
  color: ${(props) => props.theme?.colors?.textSecondary || "#a0aec0"};
  font-size: 0.85rem;
  line-height: 1.4;
  margin-top: auto;
  
  /* Simple and reliable ellipsis */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
  @media (max-width: ${(props) => props.theme?.breakpoints?.tablet || "768px"}) {
    font-size: 0.8rem;
    -webkit-line-clamp: 2;
  }

  @media (max-width: ${(props) => props.theme?.breakpoints?.mobile || "480px"}) {
    font-size: 0.75rem;
    -webkit-line-clamp: 2;
  }
`
