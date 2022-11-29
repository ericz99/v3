import "../styles/globals.css";
import type { AppProps } from "next/app";

import { SEO } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO
        description="Software Engineer :)"
        title="Eric Zhang"
        siteTitle="Eric Zhang | Software Engineer @ 2023"
      />
      <Component {...pageProps} />
    </>
  );
}
