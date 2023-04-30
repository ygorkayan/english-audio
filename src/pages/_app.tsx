import type { AppProps } from "next/app";

export const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
