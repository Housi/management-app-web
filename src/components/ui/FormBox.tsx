import { FunctionComponent } from 'react';
import { Box, Paper } from '@material-ui/core';
import UnlockIcon from '@assets/unlock.svg';

export const FormBox: FunctionComponent = ({ children }) => (
  <Paper elevation={3}>
    <Box pt={6} px={3} pb={4} position={'relative'} width={400}>
      <Box
        bgcolor={'primary.main'}
        borderRadius={3}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        position={'absolute'}
        top={-32}
        width={64}
        height={64}
      >
        <UnlockIcon />
      </Box>
      {children}
    </Box>
  </Paper>
);
