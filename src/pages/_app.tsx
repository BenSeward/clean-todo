import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ApplicationContextProvider } from "../application/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApplicationContextProvider>
      <Component {...pageProps} />
    </ApplicationContextProvider>
  );
}

export default MyApp;
