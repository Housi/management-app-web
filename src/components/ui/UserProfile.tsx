import { Box, BoxProps } from '@material-ui/core';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Avatar = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100%;
`;

type Props = {
  user: {
    fullName: string;
    photo_url?: string;
  };
  avatarSize?: number;
  className?: string;
} & BoxProps;

export const UserProfile: FunctionComponent<Props> = ({
  user,
  children,
  avatarSize = 40,
  ...boxProps
}) => (
  <Box display={'flex'} alignItems={'center'} {...boxProps}>
    <Box width={avatarSize} height={avatarSize}>
      <Avatar alt={user.fullName} src={user.photo_url} size={avatarSize} />
    </Box>

    <Box ml={1} display={'inline-block'} height={'min-content'}>
      {user.fullName}
      {children && <Box>{children}</Box>}
    </Box>
  </Box>
);
