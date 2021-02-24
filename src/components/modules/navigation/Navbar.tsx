import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { AppLink } from '@components/ui';
import Logo from '@assets/logo.svg';

const Toolbar = styled(Box)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  height: 64px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) => theme.palette.common.white};
`;

export const Navbar = ({ children = undefined }) => {
  return (
    <Toolbar px={4}>
      <div>
        <AppLink>
          <Logo width={140} height={21} />
        </AppLink>
      </div>

      <Box display={'flex'} alignItems={'center'} height={64}>
        {children}
      </Box>
    </Toolbar>
  );
};
