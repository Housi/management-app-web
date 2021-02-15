import { FunctionComponent } from 'react';
import { Logo, AppLink, BrandBackground } from '@components/ui';
import Head from 'next/head';
import { Box, Paper, Container } from '@material-ui/core';
import UnlockIcon from '@assets/unlock.svg';

type Props = {
  title?: string;
};

export const GuestLayout: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maxWidth={'md'}>
        <BrandBackground />
        <Box
          m={8}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Box mb={4}>
            <AppLink>
              <Logo />
            </AppLink>
          </Box>

          <Paper elevation={3}>
            <Box p={3}>
              <Box
                bgcolor={'primary.main'}
                display={'inline-block'}
                p={2}
                mt={-20}
              >
                <UnlockIcon />
              </Box>
              {children}
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};
