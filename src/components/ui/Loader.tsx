import {
  Box,
  LinearProgress,
} from '@material-ui/core';

export const Loader = () => {
  return (
    <Box width={400}>
      <LinearProgress />
    </Box>
  );
}

