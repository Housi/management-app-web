import { ReactNode } from 'react';
import { Box, Popover } from '@material-ui/core';
import { useState, MouseEvent } from 'react';

type Props = {
  id: string;
  toggle: ReactNode;
  children: ReactNode;
};

export const Dropdown = ({ id, toggle, children }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  return (
    <>
      <Box
        aria-controls={id}
        aria-haspopup="true"
        onClick={(event: MouseEvent<HTMLButtonElement>) =>
          setAnchorEl(event.currentTarget)
        }
      >
        {toggle}
      </Box>
      <Popover
        id={id}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {children}
      </Popover>
    </>
  );
};
