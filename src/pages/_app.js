import Head from 'next/head';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '@styles/theme';
import { GlobalStyle } from '@styles/globalStyle';
import { SWRConfig } from 'swr';
import { fetcher } from '@api/client';
import { AuthProvider } from '@api/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>URB-E</title>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <SWRConfig value={{ focusThrottleInterval: 15000, fetcher }}>
            <AuthProvider>
              <Component {...pageProps} />
              <CssBaseline />
            </AuthProvider>
          </SWRConfig>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}

export default MyApp;
