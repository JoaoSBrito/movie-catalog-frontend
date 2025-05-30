import { ThemeProvider } from "styled-components";
import { AuthProvider } from "@/context/AuthContext";
import { theme } from "@/styles/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}
