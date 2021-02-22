import { Link as MUILink } from '@material-ui/core';
import Link from 'next/link';
import { FunctionComponent } from 'react';

type Props = {
  href?: string;
};

export const AppLink: FunctionComponent<Props> = ({
  href = '/',
  children,
  ...MUIProps
}) => (
  <Link href={href} passHref>
    <MUILink {...MUIProps}>{children}</MUILink>
  </Link>
);
