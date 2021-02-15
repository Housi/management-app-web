import { FunctionComponent } from 'react';
import { Box, Paper } from '@material-ui/core';

export const FormBox: FunctionComponent = ({ children }) => (
  <Paper elevation={3}>
    <Box pt={6} px={3} pb={4} position={'relative'} width={480}>
      <Box
        bgcolor={'primary.main'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        position={'absolute'}
        top={-32}
        width={64}
        height={64}
      >
        <img src={'/unlock.svg'} />
      </Box>
      {children}
    </Box>
  </Paper>
);
