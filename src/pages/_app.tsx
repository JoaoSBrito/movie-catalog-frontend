import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Providers } from "@/components/Providers";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
      <ToastContainer />
    </Providers>
  );
}
