import { FunctionComponent } from 'react';
import { Box, Container } from '@material-ui/core';

export const AppLayout: FunctionComponent = ({ children }) => (
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
);
