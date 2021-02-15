import { FunctionComponent } from "react";
import Head from "next/head";
import { Box, Container } from "@material-ui/core";

type Props = {
  title?: string;
};

export const AppLayout: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Box>{children}</Box>
        </Box>
      </Container>
    </>
  );
};
