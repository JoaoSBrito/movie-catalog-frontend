import { Fragment, useState } from "react";
import {
  AuthContainer,
  AuthFooter,
  AuthForm,
  AuthHeader,
  AuthLink,
  AuthSubtitle,
  AuthTitle,
  ErrorMessage,
  FormGroup,
  FormInput,
  FormLabel,
  SubmitButton,
} from "./style";
import { toast } from "react-toastify";

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

  const { login, register, setError, error } = useAuth();

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let status = true;

      if (isLogin) {
        status = await login(email, password);
      } else {
        status = await register(name, email, password, confirmPassword);
      }
      if (status) {
        toast.success(isLogin ? "Login efetuado!" : "Registro efetuado!");
        onClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContainer>
      <AuthHeader>
        <AuthTitle>{isLogin ? "Seja bem  vindo" : "Crie sua conta"}</AuthTitle>
        <AuthSubtitle>
          {isLogin
            ? "Entre para acessar seus favoritos"
            : "Registre para acessar seus favoritos"}
        </AuthSubtitle>
      </AuthHeader>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <AuthForm onSubmit={handleSubmit}>
        {isLogin && (
          <Fragment>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <FormInput
                id="password"
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
          </Fragment>
        )}

        {!isLogin && (
          <Fragment>
            <FormGroup>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <FormInput
                id="name"
                type="text"
                placeholder="João da silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <FormInput
                id="password"
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="confirmPassword">
                Confirme sua senha
              </FormLabel>
              <FormInput
                id="confirmPassword"
                type="password"
                placeholder="*********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </FormGroup>
          </Fragment>
        )}

        <SubmitButton type="submit">
          {isLogin ? "Entrar" : "Registrar"}
        </SubmitButton>
      </AuthForm>

      <AuthFooter>
        <AuthLink onClick={toggleAuthMode}>
          {isLogin
            ? "Não tem uma conta? Crie agora!"
            : "Já tem uma conta? Faça login!"}
        </AuthLink>
      </AuthFooter>
    </AuthContainer>
  );
}
