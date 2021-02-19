import { GuestLayout } from '@layouts/GuestLayout';
import Head from 'next/head';
import { RouteGuard } from '@components/ui';
import { BrandLayout } from '@layouts/BrandLayout';
import { ResetSuccess } from '@modules/auth/ResetSuccess';

const ResetSuccessView = () => {
  return (
    <RouteGuard exclude={['user']}>
      <Head>
        <title>{'URB-E Check email'}</title>
      </Head>
      <BrandLayout>
        <ResetSuccess />
      </BrandLayout>
    </RouteGuard>
  );
};

export default ResetSuccessView;
