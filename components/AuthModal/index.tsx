import { Fragment, useState } from "react";
import { AuthContainer, AuthFooter, AuthForm, AuthHeader, AuthLink, AuthSubtitle, AuthTitle, FormGroup, FormInput, FormInputWrapper, FormLabel, SubmitButton } from "./style";

import { useAuth } from "@/context/AuthContext";

interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('teste');

    if (isLogin) {
      const res = await login(email, password)
      onClose();
    }
  }

  return (
    <AuthContainer>
      <AuthHeader>
        <AuthTitle>{isLogin ? 'Seja bem  vindo' : 'Crie sua conta'}</AuthTitle>
        <AuthSubtitle>{isLogin ? 'Entre para acessar seus favoritos' : 'Registre para acessar seus favoritos'}</AuthSubtitle>
      </AuthHeader>

      <AuthForm onSubmit={handleSubmit}>
        {isLogin && (
          <Fragment>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInputWrapper>
                <FormInput
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormInputWrapper>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <FormInputWrapper>
                <FormInput
                  id="password"
                  type="password"
                  placeholder="*********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormInputWrapper>
            </FormGroup>
          </Fragment>
        )}

        {/* {!isLogin && (

        )} */}

        <SubmitButton type="submit">
          {isLogin ? 'Entrar' : 'Registrar'}
        </SubmitButton>
      </AuthForm>


      <AuthFooter>
        <AuthLink onClick={toggleAuthMode}>
          {isLogin ? 'Não tem uma conta? Crie agora!' : 'Já tem uma conta? Faça login!'}
        </AuthLink>
      </AuthFooter>
    </AuthContainer>
  )
}