import type { Metadata } from "next";
import { Providers } from "../components/Providers";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Catálogo de filmes",
  description: "Um catálogo de filmes feito com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthProvider>
          <Providers>
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
