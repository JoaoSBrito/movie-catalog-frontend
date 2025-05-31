import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${(props) => props.theme?.spacing?.md || "1rem"};
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  background: ${(props) => props.theme?.colors?.surface || "#1a365d"};
  border-radius: ${(props) => props.theme?.borderRadius?.lg || "12px"};
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${(props) =>
    props.theme?.shadows?.xl || "0 20px 25px rgba(0, 0, 0, 0.1)"};
  position: relative;

  /* Custom scrollbar */
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme?.colors?.primary || "#01b4e4"}
    ${(props) => props.theme?.colors?.card || "#2d3748"};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme?.colors?.card || "#2d3748"};
    border-radius: 0 ${(props) => props.theme?.borderRadius?.lg || "12px"}
      ${(props) => props.theme?.borderRadius?.lg || "12px"} 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme?.colors?.primary || "#01b4e4"};
    border-radius: 4px;
  }

  @media (max-width: ${(props) =>
      props.theme?.breakpoints?.tablet || "768px"}) {
    max-height: 85vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${(props) => props.theme?.spacing?.md || "1rem"};
  right: ${(props) => props.theme?.spacing?.md || "1rem"};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }
`;
