"use client";

import axios from "axios";
import React, { useContext, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (name: string, email: string, password: string) => void;
  loading: boolean;
}

const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:80/api/login', { email, password });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    }
    catch (error) {
      console.error("Login failed:", error);
    }
    finally {
      setLoading(false);
    }
  }

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:80/api/logout');
      setUser(null);
      localStorage.removeItem('token');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:80/api/register', { name, email, password });
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);