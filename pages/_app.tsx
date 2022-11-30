import "../styles/globals.css";
import type { AppProps } from "next/app";

import { SEO } from "../components";
import GlobalState from "../shared/context/GlobalState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalState>
        <SEO
          description="Software Engineer :)"
          title="Eric Zhang"
          siteTitle="Eric Zhang | Software Engineer @ 2023"
        />
        <Component {...pageProps} />
      </GlobalState>
    </>
  );
}
