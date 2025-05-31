import { SpinnerContainer, Spinner, LoadingText } from "./style";

export default function Loading() {
  return (
    <SpinnerContainer>
      <Spinner />
      <LoadingText>Carregando filmes...</LoadingText>
    </SpinnerContainer>
  );
}
