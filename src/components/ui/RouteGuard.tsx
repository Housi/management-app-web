import { useAuth } from '@api/AuthContext';
import { useRouter } from 'next/router';
import { homePath, UserRole } from '@configs/homePath';
import { FunctionComponent } from 'react';

type Props = {
  role?: UserRole;
};

export const RouteGuard: FunctionComponent<Props> = ({
  role = 'user',
  children,
}) => {
  const { user } = useAuth();
  const router = useRouter();
  if (user.role === role)
    router.push(homePath[role], undefined, { shallow: true });

  return <>{user.role !== role && children}</>;
};
