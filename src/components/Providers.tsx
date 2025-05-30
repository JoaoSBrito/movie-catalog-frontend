import { ThemeProvider } from "styled-components";
import { AuthProvider } from "@/context/AuthContext";
import { theme } from "@/styles/theme";
import { FavoriteProvider } from "@/context/FavoriteContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <FavoriteProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </FavoriteProvider>
    </AuthProvider>
  );
}
