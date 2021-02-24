import { Dropdown } from '@components/ui';
import {
  MenuItem,
  MenuList,
  ListSubheader,
  IconButton,
  Badge,
  Typography,
  ListItemText,
  Box,
} from '@material-ui/core';
import BellIcon from '@assets/bell.svg';
import CircleIcon from '@assets/circle.svg';

const notifications = [
  {
    message: 'Notification message here',
    time: '22 hours ago',
    read: false,
  },
  {
    message: 'Notification message here',
    time: '22 hours ago',
    read: false,
  },
  {
    message: 'Notification message here',
    time: '22 hours ago',
    read: false,
  },
];

export const NotificationMenu = () => {
  return (
    <Dropdown
      id={'notification-menu'}
      toggle={
        <Box display={'flex'} alignItems={'center'} height={64} mr={2}>
          <IconButton
            aria-label={`show ${notifications.length} new notifications`}
            color="inherit"
          >
            <Badge
              badgeContent={notifications.length}
              variant={'dot'}
              color={'secondary'}
            >
              <BellIcon />
            </Badge>
          </IconButton>
        </Box>
      }
    >
      <MenuList>
        <ListSubheader disableSticky>{'New'}</ListSubheader>
        {notifications
          .filter(({ read }) => !read)
          .map(({ message, time }) => (
            <MenuItem>
              <ListItemText
                primary={message}
                secondary={
                  <Typography variant={'overline'} color={'primary'}>
                    {time}
                  </Typography>
                }
              />
              <CircleIcon />
            </MenuItem>
          ))}
      </MenuList>
    </Dropdown>
  );
};
