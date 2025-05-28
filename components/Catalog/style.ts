import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme?.colors?.background || "#0d253f"}
`

export const Content = styled.div`
  max-width: 1400px;
  margin: 2rem auto 0 auto;
  padding: 0 ${(props) => props.theme?.spacing?.xl || "2rem"};
`