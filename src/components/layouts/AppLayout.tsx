import { FunctionComponent } from 'react';
import { Box, Container } from '@material-ui/core';
import { Navbar, UserMenu, NotificationMenu } from '@modules/navigation';

export const AppLayout: FunctionComponent = ({ children }) => (
  <>
    <Navbar>
      <NotificationMenu />
      <UserMenu />
    </Navbar>

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
