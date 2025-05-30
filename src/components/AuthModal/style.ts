import styled from "styled-components"

export const AuthContainer = styled.div`
  padding: ${(props) => props.theme?.spacing?.xl || "2rem"};
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`

export const AuthHeader = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme?.spacing?.xl || "2rem"};
`

export const AuthTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.theme?.colors?.text || "#ffffff"};
  margin-bottom: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
`

export const AuthSubtitle = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme?.colors?.textSecondary || "#a0aec0"};
`

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme?.spacing?.lg || "1.5rem"};
`

export const FormGroup = styled.div`
  width:100%; 
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme?.spacing?.xs || "0.25rem"};
`

export const FormLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => props.theme?.colors?.text || "#ffffff"};
`

export const FormInput = styled.input`
  padding: ${(props) => props.theme?.spacing?.md || "1rem"} ${(props) => props.theme?.spacing?.md || "1rem"} ${(props) => props.theme?.spacing?.md || "1rem"} 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${(props) => props.theme?.borderRadius?.md || "8px"};
  background-color: rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme?.colors?.text || "#ffffff"};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme?.colors?.primary || "#01b4e4"};
    box-shadow: 0 0 0 2px rgba(1, 180, 228, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme?.spacing?.sm || "0.5rem"};
  padding: ${(props) => props.theme?.spacing?.md || "1rem"};
  background: linear-gradient(90deg, ${(props) => props.theme?.colors?.primary || "#01b4e4"} 0%, ${(props) => props.theme?.colors?.secondary || "#90cea1"} 100%);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: ${(props) => props.theme?.borderRadius?.md || "8px"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme?.shadows?.md || "0 4px 6px rgba(0, 0, 0, 0.1)"};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const AuthFooter = styled.div`
  text-align: center;
  margin-top: ${(props) => props.theme?.spacing?.xl || "2rem"};
  padding-top: ${(props) => props.theme?.spacing?.lg || "1.5rem"};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export const AuthLink = styled.button`
  color: ${(props) => props.theme?.colors?.primary || "#01b4e4"};
  font-size: 0.9rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme?.colors?.secondary || "#90cea1"};
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.div`
  background-color: rgba(229, 62, 62, 0.1);
  border-left: 3px solid ${(props) => props.theme?.colors?.error || "#e53e3e"};
  color: ${(props) => props.theme?.colors?.error || "#e53e3e"};
  padding: ${(props) => props.theme?.spacing?.md || "1rem"};
  border-radius: ${(props) => props.theme?.borderRadius?.sm || "4px"};
  font-size: 0.9rem;
  margin-bottom: ${(props) => props.theme?.spacing?.md || "1rem"};
`
