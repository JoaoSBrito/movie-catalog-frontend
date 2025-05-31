import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme?.spacing?.xxl || "3rem"};
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${(props) => props.theme?.colors?.surface || "#1a365d"};
  border-top: 4px solid ${(props) => props.theme?.colors?.primary || "#01b4e4"};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.p`
  color: ${(props) => props.theme?.colors?.textSecondary || "#a0aec0"};
  margin-left: ${(props) => props.theme?.spacing?.md || "1rem"};
  font-size: 1.1rem;
`;
