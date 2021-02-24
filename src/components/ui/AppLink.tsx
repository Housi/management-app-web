import { Link as MUILink, LinkProps } from '@material-ui/core';
import Link from 'next/link';
import { FunctionComponent } from 'react';

type Props = {
  href?: string;
} & LinkProps;

export const AppLink: FunctionComponent<Props> = ({
  href = '/',
  children,
  ...MUIProps
}) => (
  <Link href={href} passHref>
    <MUILink {...MUIProps}>{children}</MUILink>
  </Link>
);
