import { useAuth } from '@api/AuthContext';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { useEffect } from 'react';

export type UserRole = 'user' | 'guest';

export const homePath = {
  guest: '/login',
  user: '/',
};

type Props = {
  exclude?: UserRole[];
};

export const RouteGuard: FunctionComponent<Props> = ({
  exclude = ['guest'],
  children,
}) => {
  const { user } = useAuth();
  const router = useRouter();

  const hasAccess = !exclude.includes(user.role);

  useEffect(() => {
    if (!hasAccess)
      router.replace(homePath[user.role], undefined, { shallow: true });
  }, []);

  return <>{hasAccess && children}</>;
};
