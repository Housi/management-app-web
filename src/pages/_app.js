import Head from 'next/head';
import { useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { GlobalStyle } from '@styles/globalStyle';
import { SWRConfig } from 'swr';
import { fetcher } from '@api/client';
import { AuthProvider } from '@api/AuthContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '@i18n/i18n';

function App({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

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
      <MUIThemeProvider theme={theme} injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <SWRConfig value={{ focusThrottleInterval: 15000, fetcher }}>
            <AuthProvider>
              <I18nextProvider i18n={i18n}>
                <Component {...pageProps} />
              </I18nextProvider>
            </AuthProvider>
          </SWRConfig>
        </ThemeProvider>
      </MUIThemeProvider>
    </>
  );
}
export default App;
// const ExtendedApp = withSSR()(App);
// export default <ExtendedApp initialLanguage={'en'} />;
