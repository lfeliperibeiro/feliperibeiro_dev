import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'dracula-ui/styles/dracula-ui.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
