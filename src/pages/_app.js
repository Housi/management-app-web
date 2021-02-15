import { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "@styles/theme";
import { SWRConfig } from "swr";
import { fetcher } from "@api/client";
import { AuthProvider } from "@api/useAuth";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>URB-E</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ focusThrottleInterval: 15000, fetcher }}>
          <AuthProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </AuthProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
