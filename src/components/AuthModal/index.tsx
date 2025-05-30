import { Fragment, useState } from "react";
import { AuthContainer, AuthFooter, AuthForm, AuthHeader, AuthLink, AuthSubtitle, AuthTitle, FormGroup, FormInput, FormInputWrapper, FormLabel, SubmitButton } from "./style";
import { useAuth } from "@/hooks/useAuth";


interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const { login, register } = useAuth();

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      await login(email, password)
      onClose();
    } else {
      await register(name, email, password)
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

        {!isLogin && (
          <Fragment>
            <FormGroup>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <FormInputWrapper>
                <FormInput
                  id="name"
                  type="text"
                  placeholder="João da silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormInputWrapper>
            </FormGroup>

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

            <FormGroup>
              <FormLabel htmlFor="confirmPassword">Confirme sua senha</FormLabel>
              <FormInputWrapper>
                <FormInput
                  id="confirmPassword"
                  type="password"
                  placeholder="*********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </FormInputWrapper>
            </FormGroup>
          </Fragment>
        )}

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