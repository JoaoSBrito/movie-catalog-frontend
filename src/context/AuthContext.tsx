import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) => Promise<boolean>;
  loading: boolean;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const defaultProvider = {
  user: null,
  login: async () => false,
  logout: () => null,
  register: async () => false,
  loading: true,
  error: null,
  setError: () => null,
};

export const AuthContext = React.createContext<AuthContextProps>(
  defaultProvider as AuthContextProps,
);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:80/api/login", {
        email,
        password,
      });
      setUser(response.data);
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      setError((error as any).response.data.message);
      return false;
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:80/api/logout");
      setUser(null);
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:80/api/register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      setError((error as any).response.data.message);
      return false;
    }
  };

  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await axios.get("http://localhost:80/api/user");
        setUser(response.data);
      } catch (error) {
        console.error("Erro ao restaurar sessão:", error);
        setUser(null);
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, loading, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
