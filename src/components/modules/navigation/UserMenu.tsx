import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@api/AuthContext';
import { UserProfile, Dropdown, AppLink } from '@components/ui';
import {
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
  Divider,
  Link as MUILink,
} from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

export const UserMenu = () => {
  const { user } = useAuth();
  const { t } = useTranslation('navigation');

  return (
    <Dropdown
      id={'user-menu'}
      toggle={<UserProfile user={user} p={1} height={64} />}
    >
      <MenuList>
        <MenuItem>
          <UserProfile avatarSize={64} user={user} pb={1}>
            <AppLink href={`/profile/${user.id}`} underline={'none'}>
              {t('viewProfile')}
            </AppLink>
          </UserProfile>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link href={`/settings`}>
            <ListItemText>{t('settings')}</ListItemText>
          </Link>
          <ListItemIcon>
            <ChevronRight />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <Link href={`/support`}>
            <ListItemText>{t('support')}</ListItemText>
          </Link>
          <ListItemIcon>
            <ChevronRight />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <MUILink
            color={'inherit'}
            underline={'none'}
            href={process.env.NEXT_PUBLIC_LOGOUT}
          >
            <ListItemText>{t('logOut')}</ListItemText>
          </MUILink>
        </MenuItem>
      </MenuList>
    </Dropdown>
  );
};
