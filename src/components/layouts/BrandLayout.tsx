import { FunctionComponent } from 'react';
import { Box, Container } from '@material-ui/core';
import { Logo, AppLink, BrandBackground } from '@components/ui';

export const BrandLayout: FunctionComponent = ({ children }) => (
  <Container maxWidth={'md'}>
    <BrandBackground />
    <Box
      m={8}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      max-height="100vh"
    >
      <Box mb={8}>
        <AppLink>
          <Logo />
        </AppLink>
      </Box>

      {children}
    </Box>
  </Container>
);
