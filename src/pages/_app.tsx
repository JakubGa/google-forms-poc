import FormContextProvider from "@/form-context/FormContextProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormContextProvider>
      <Component {...pageProps} />
    </FormContextProvider>
  );
}
