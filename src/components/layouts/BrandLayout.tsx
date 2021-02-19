import { FunctionComponent } from 'react';
import { Box, Container } from '@material-ui/core';
import { AppLink, BrandBackground } from '@components/ui';
import Logo from '@assets/logo.svg';

export const BrandLayout: FunctionComponent = ({ children }) => (
  <Container maxWidth={'md'}>
    <BrandBackground />
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'100vh'}
    >
      <Box mb={10} mt={2}>
        <AppLink>
          <Logo />
        </AppLink>
      </Box>

      {children}
    </Box>
  </Container>
);
