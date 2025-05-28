"use client";

import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme?.colors?.background || "#0d253f"}
`